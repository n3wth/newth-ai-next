#!/bin/bash

# Playwright MCP Session Manager
# Manages isolated Playwright sessions for multiple Claude windows

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Base directory for session data
PLAYWRIGHT_SESSIONS_DIR="$HOME/.playwright-mcp-sessions"
mkdir -p "$PLAYWRIGHT_SESSIONS_DIR"

# Function to generate unique session ID
generate_session_id() {
    echo "session-$(date +%s)-$$"
}

# Function to start a new isolated Playwright session
start_session() {
    local SESSION_ID="${1:-$(generate_session_id)}"
    local USER_DATA_DIR="$PLAYWRIGHT_SESSIONS_DIR/$SESSION_ID"
    local OUTPUT_DIR="$PLAYWRIGHT_SESSIONS_DIR/$SESSION_ID/output"
    local PORT="${2:-0}"  # 0 means random port

    # Create session directories
    mkdir -p "$USER_DATA_DIR"
    mkdir -p "$OUTPUT_DIR"

    echo -e "${GREEN}Starting Playwright MCP session: $SESSION_ID${NC}"

    # Determine port assignment
    if [ "$PORT" -eq 0 ]; then
        # Find random available port
        PORT=$(python3 -c 'import socket; s=socket.socket(); s.bind(("", 0)); print(s.getsockname()[1]); s.close()')
    fi

    # Start isolated Playwright MCP server
    npx @playwright/mcp@latest \
        --isolated \
        --user-data-dir "$USER_DATA_DIR" \
        --output-dir "$OUTPUT_DIR" \
        --port "$PORT" \
        --headless &

    local PID=$!

    # Save session info
    cat > "$USER_DATA_DIR/session.info" <<EOF
SESSION_ID=$SESSION_ID
PORT=$PORT
PID=$PID
STARTED=$(date)
USER_DATA_DIR=$USER_DATA_DIR
OUTPUT_DIR=$OUTPUT_DIR
EOF

    echo -e "${GREEN}Session started:${NC}"
    echo "  Session ID: $SESSION_ID"
    echo "  Port: $PORT"
    echo "  PID: $PID"
    echo "  Data Dir: $USER_DATA_DIR"
    echo ""
    echo -e "${YELLOW}To connect from Claude, use:${NC}"
    echo "  URL: http://localhost:$PORT/mcp"

    return 0
}

# Function to list all sessions
list_sessions() {
    echo -e "${GREEN}Active Playwright MCP Sessions:${NC}"
    echo ""

    for session_dir in "$PLAYWRIGHT_SESSIONS_DIR"/session-*; do
        if [ -d "$session_dir" ] && [ -f "$session_dir/session.info" ]; then
            source "$session_dir/session.info"

            # Check if process is still running
            if ps -p "$PID" > /dev/null 2>&1; then
                echo -e "${GREEN}● $SESSION_ID${NC}"
                echo "  Port: $PORT"
                echo "  PID: $PID"
                echo "  Started: $STARTED"
                echo ""
            else
                echo -e "${RED}○ $SESSION_ID (stopped)${NC}"
                echo "  Port: $PORT"
                echo "  PID: $PID (not running)"
                echo "  Started: $STARTED"
                echo ""
            fi
        fi
    done
}

# Function to stop a session
stop_session() {
    local SESSION_ID="$1"
    local SESSION_DIR="$PLAYWRIGHT_SESSIONS_DIR/$SESSION_ID"

    if [ ! -d "$SESSION_DIR" ]; then
        echo -e "${RED}Session not found: $SESSION_ID${NC}"
        return 1
    fi

    if [ -f "$SESSION_DIR/session.info" ]; then
        source "$SESSION_DIR/session.info"

        if ps -p "$PID" > /dev/null 2>&1; then
            echo -e "${YELLOW}Stopping session: $SESSION_ID (PID: $PID)${NC}"
            kill "$PID"
            sleep 2

            # Force kill if still running
            if ps -p "$PID" > /dev/null 2>&1; then
                kill -9 "$PID"
            fi

            echo -e "${GREEN}Session stopped${NC}"
        else
            echo -e "${YELLOW}Session process not running${NC}"
        fi
    fi
}

# Function to clean up dead sessions
cleanup_sessions() {
    echo -e "${YELLOW}Cleaning up dead sessions...${NC}"

    for session_dir in "$PLAYWRIGHT_SESSIONS_DIR"/session-*; do
        if [ -d "$session_dir" ] && [ -f "$session_dir/session.info" ]; then
            source "$session_dir/session.info"

            # Check if process is still running
            if ! ps -p "$PID" > /dev/null 2>&1; then
                echo "Removing dead session: $SESSION_ID"
                rm -rf "$session_dir"
            fi
        fi
    done

    echo -e "${GREEN}Cleanup complete${NC}"
}

# Function to get session info
info_session() {
    local SESSION_ID="$1"
    local SESSION_DIR="$PLAYWRIGHT_SESSIONS_DIR/$SESSION_ID"

    if [ ! -d "$SESSION_DIR" ]; then
        echo -e "${RED}Session not found: $SESSION_ID${NC}"
        return 1
    fi

    if [ -f "$SESSION_DIR/session.info" ]; then
        source "$SESSION_DIR/session.info"

        echo -e "${GREEN}Session Info: $SESSION_ID${NC}"
        echo "Port: $PORT"
        echo "PID: $PID"
        echo "Started: $STARTED"
        echo "User Data Dir: $USER_DATA_DIR"
        echo "Output Dir: $OUTPUT_DIR"

        if ps -p "$PID" > /dev/null 2>&1; then
            echo -e "Status: ${GREEN}Running${NC}"
        else
            echo -e "Status: ${RED}Stopped${NC}"
        fi

        # Check for output files
        if [ -d "$OUTPUT_DIR" ]; then
            echo ""
            echo "Output files:"
            ls -la "$OUTPUT_DIR" 2>/dev/null | tail -n +2
        fi
    fi
}

# Main command handler
case "$1" in
    start)
        start_session "$2" "$3"
        ;;
    stop)
        if [ -z "$2" ]; then
            echo "Usage: $0 stop <session-id>"
            exit 1
        fi
        stop_session "$2"
        ;;
    list)
        list_sessions
        ;;
    info)
        if [ -z "$2" ]; then
            echo "Usage: $0 info <session-id>"
            exit 1
        fi
        info_session "$2"
        ;;
    cleanup)
        cleanup_sessions
        ;;
    *)
        echo "Playwright MCP Session Manager"
        echo ""
        echo "Usage: $0 {start|stop|list|info|cleanup} [options]"
        echo ""
        echo "Commands:"
        echo "  start [session-id] [port]  Start new isolated session"
        echo "  stop <session-id>          Stop a session"
        echo "  list                       List all sessions"
        echo "  info <session-id>          Show session details"
        echo "  cleanup                    Remove dead sessions"
        echo ""
        echo "Examples:"
        echo "  $0 start                  # Start with auto-generated ID and random port"
        echo "  $0 start my-session 8931  # Start with custom ID and port"
        echo "  $0 list                   # Show all sessions"
        echo "  $0 stop session-123       # Stop specific session"
        exit 1
        ;;
esac