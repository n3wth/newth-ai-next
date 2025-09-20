/**
 * @deprecated This file is replaced by '@/lib/data'
 * Keeping for backward compatibility only
 */

import { projects as newProjects } from '@/lib/data'
import { toLegacyProjects } from '@/lib/data/adapter'

// Re-export projects in legacy format for components that haven't been updated yet
export const projects = toLegacyProjects(newProjects)
