interface Window {
  gtag?: (
    command: 'event' | 'config' | 'js',
    targetId: string,
    config?: Record<string, unknown>
  ) => void
}
