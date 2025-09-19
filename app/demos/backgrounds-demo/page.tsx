import BackgroundsDemoClient from './BackgroundsDemoClient'
import { generateSEO } from '@/lib/metadata'

export const metadata = generateSEO({
  title: 'Warp Background Playground',
  description:
    'Experiment with neural warp backgrounds and WebGL variants used across newth.ai hero sections, complete with keyboard shortcuts.',
  path: '/demos/backgrounds-demo',
})

export default function BackgroundsDemoPage() {
  return <BackgroundsDemoClient />
}
