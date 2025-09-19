export default function DemosLayout({ children }: { children: React.ReactNode }) {
  // Demo pages have their own layout without navigation/footer
  return <div className="min-h-screen">{children}</div>
}
