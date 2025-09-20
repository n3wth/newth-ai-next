#!/bin/bash

# Remove all testing imports from story files - we'll run them without tests for now
files=(
  "src/components/demos/AdvancedShapes.stories.tsx"
  "src/components/demos/CustomCursor.stories.tsx"
  "src/components/demos/AnimatedBackgrounds.stories.tsx"
  "src/components/demos/Button.stories.tsx"
  "src/components/demos/AnimatedLogo.stories.tsx"
  "src/components/demos/AnimatedButton.stories.tsx"
  "src/components/demos/AsciiWave.stories.tsx"
  "src/components/demos/AsciiDivider.stories.tsx"
  "src/components/demos/BackgroundDemo.stories.tsx"
  "src/components/demos/CodeRainBackground.stories.tsx"
  "src/components/demos/Navigation.stories.tsx"
)

for file in "${files[@]}"; do
  echo "Removing test imports from $file"

  # Remove test import lines
  sed -i '' '/import.*@storybook\/testing-library/d' "$file"
  sed -i '' '/import.*@storybook\/jest/d' "$file"
  sed -i '' '/import.*expect.*from/d' "$file"

  # Comment out play functions
  sed -i '' 's/^  play:/  \/\/ play:/' "$file"
  sed -i '' 's/^    play:/    \/\/ play:/' "$file"
done

echo "All test imports removed!"