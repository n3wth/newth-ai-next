'use client'

// Interactive TODO dashboard for tracking development tasks
import { useState } from 'react'
import {
  CheckCircle2,
  Circle,
  Clock,
  Code2,
  Zap,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Database,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Todo {
  id: string
  content: string
  status: 'pending' | 'in_progress' | 'completed'
  category:
    | 'performance'
    | 'feature'
    | 'accessibility'
    | 'analytics'
    | 'mobile'
    | 'animation'
    | 'seo'
    | 'data'
  priority: 'high' | 'medium' | 'low'
}

const categoryIcons = {
  performance: Zap,
  feature: Code2,
  accessibility: Shield,
  analytics: Clock,
  mobile: Smartphone,
  animation: Sparkles,
  seo: Search,
  data: Database,
}

const categoryColors = {
  performance: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5',
  feature: 'text-blue-400 border-blue-400/20 bg-blue-400/5',
  accessibility: 'text-green-400 border-green-400/20 bg-green-400/5',
  analytics: 'text-purple-400 border-purple-400/20 bg-purple-400/5',
  mobile: 'text-pink-400 border-pink-400/20 bg-pink-400/5',
  animation: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5',
  seo: 'text-orange-400 border-orange-400/20 bg-orange-400/5',
  data: 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5',
}

const todos: Todo[] = [
  // Performance
  {
    id: '1',
    content: 'Lazy load WarpBackground component',
    status: 'pending',
    category: 'performance',
    priority: 'high',
  },
  {
    id: '2',
    content: 'Add prefers-reduced-motion support',
    status: 'pending',
    category: 'performance',
    priority: 'high',
  },
  {
    id: '3',
    content: 'Split CSS into critical and non-critical',
    status: 'pending',
    category: 'performance',
    priority: 'medium',
  },

  // Features
  {
    id: '4',
    content: 'Add search functionality to navigation',
    status: 'pending',
    category: 'feature',
    priority: 'medium',
  },
  {
    id: '5',
    content: 'Add dark/light mode toggle',
    status: 'pending',
    category: 'feature',
    priority: 'low',
  },
  {
    id: '6',
    content: 'Add blog/writing section',
    status: 'pending',
    category: 'feature',
    priority: 'high',
  },
  {
    id: '7',
    content: 'Add testimonials section',
    status: 'pending',
    category: 'feature',
    priority: 'medium',
  },

  // Data
  {
    id: '8',
    content: 'Move projects to CMS or database',
    status: 'pending',
    category: 'data',
    priority: 'high',
  },
  {
    id: '9',
    content: 'Add GitHub API integration for projects',
    status: 'pending',
    category: 'data',
    priority: 'medium',
  },

  // Accessibility
  {
    id: '10',
    content: 'Add ARIA labels throughout',
    status: 'pending',
    category: 'accessibility',
    priority: 'high',
  },
  {
    id: '11',
    content: 'Improve keyboard navigation',
    status: 'pending',
    category: 'accessibility',
    priority: 'high',
  },

  // Analytics
  {
    id: '12',
    content: 'Track project card clicks',
    status: 'pending',
    category: 'analytics',
    priority: 'medium',
  },

  // Mobile
  {
    id: '13',
    content: 'Optimize font sizes for breakpoints',
    status: 'pending',
    category: 'mobile',
    priority: 'medium',
  },

  // Animation
  {
    id: '14',
    content: 'Add scroll-triggered animations',
    status: 'pending',
    category: 'animation',
    priority: 'low',
  },

  // SEO
  {
    id: '15',
    content: 'Add structured data for projects',
    status: 'pending',
    category: 'seo',
    priority: 'medium',
  },
]

export default function TodosPage() {
  const [todoList, setTodoList] = useState<Todo[]>(todos)
  const [filter, setFilter] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const toggleTodoStatus = (id: string) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          const newStatus =
            todo.status === 'pending'
              ? 'in_progress'
              : todo.status === 'in_progress'
                ? 'completed'
                : 'pending'
          return { ...todo, status: newStatus }
        }
        return todo
      })
    )
  }

  const filteredTodos = todoList.filter((todo) => {
    const statusMatch = filter === 'all' || todo.status === filter
    const categoryMatch = selectedCategory === 'all' || todo.category === selectedCategory
    return statusMatch && categoryMatch
  })

  const stats = {
    total: todoList.length,
    completed: todoList.filter((t) => t.status === 'completed').length,
    inProgress: todoList.filter((t) => t.status === 'in_progress').length,
    pending: todoList.filter((t) => t.status === 'pending').length,
  }

  const progress = (stats.completed / stats.total) * 100

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-6xl font-bold mb-4">Development TODOs</h1>
          <p className="text-white/60 text-lg">Track progress on portfolio improvements</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
        >
          <div className="flex justify-between mb-3">
            <span className="text-sm text-white/60">Overall Progress</span>
            <span className="text-sm font-mono text-white/80">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{stats.total}</div>
              <div className="text-xs text-white/60">Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{stats.completed}</div>
              <div className="text-xs text-white/60">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{stats.inProgress}</div>
              <div className="text-xs text-white/60">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white/60">{stats.pending}</div>
              <div className="text-xs text-white/60">Pending</div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex gap-2">
            {['all', 'pending', 'in_progress', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  filter === status
                    ? 'bg-white/10 border-white/20 text-white'
                    : 'border-white/10 text-white/60 hover:text-white hover:border-white/20'
                }`}
              >
                {status.replace('_', ' ').charAt(0).toUpperCase() +
                  status.slice(1).replace('_', ' ')}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg border transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white/10 border-white/20 text-white'
                  : 'border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              All Categories
            </button>
            {Object.keys(categoryIcons).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  selectedCategory === cat
                    ? 'bg-white/10 border-white/20 text-white'
                    : 'border-white/10 text-white/60 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Todo List */}
        <div className="grid gap-3">
          <AnimatePresence mode="popLayout">
            {filteredTodos.map((todo, index) => {
              const Icon = categoryIcons[todo.category]
              const colorClass = categoryColors[todo.category]

              return (
                <motion.div
                  key={todo.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.02 }}
                  className={`group flex items-center gap-4 p-4 rounded-xl border ${colorClass} hover:scale-[1.01] transition-all cursor-pointer`}
                  onClick={() => toggleTodoStatus(todo.id)}
                >
                  <div className="flex-shrink-0">
                    {todo.status === 'completed' ? (
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    ) : todo.status === 'in_progress' ? (
                      <Clock className="w-6 h-6 text-yellow-400 animate-pulse" />
                    ) : (
                      <Circle className="w-6 h-6 text-white/40" />
                    )}
                  </div>

                  <div className="flex-grow">
                    <div
                      className={`font-medium ${todo.status === 'completed' ? 'line-through text-white/40' : ''}`}
                    >
                      {todo.content}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-white/40">Priority: {todo.priority}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${
                          todo.status === 'completed'
                            ? 'border-green-400/20 text-green-400'
                            : todo.status === 'in_progress'
                              ? 'border-yellow-400/20 text-yellow-400'
                              : 'border-white/20 text-white/40'
                        }`}
                      >
                        {todo.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>

                  <Icon className="w-5 h-5 opacity-60" />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20"
        >
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => {
                const pending = todoList.filter((t) => t.status === 'pending')
                if (pending.length > 0) {
                  toggleTodoStatus(pending[0].id)
                }
              }}
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              Start Next Task
            </button>
            <button
              onClick={() => {
                setTodoList((prev) => prev.map((t) => ({ ...t, status: 'pending' as const })))
              }}
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              Reset All
            </button>
            <button
              onClick={() => {
                const highPriority = todoList.filter(
                  (t) => t.priority === 'high' && t.status === 'pending'
                )
                if (highPriority.length > 0) {
                  toggleTodoStatus(highPriority[0].id)
                }
              }}
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              Start High Priority
            </button>
            <button
              onClick={() => {
                setTodoList((prev) => prev.map((t) => ({ ...t, status: 'completed' as const })))
              }}
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              Mark All Done
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
