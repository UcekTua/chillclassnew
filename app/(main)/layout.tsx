import Link from "next/link"

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col relative z-0">
      <div className="bg-orbs"><span></span><span></span></div>
      
      <nav className="border-b border-border/40 bg-background/60 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight bg-gradient-to-br from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
            Chill Class
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-sm font-medium text-muted-foreground/60 cursor-not-allowed" title="Fitur ini akan segera hadir">
              Leaderboard (Soon)
            </span>
            <span className="hidden sm:inline-block text-sm font-medium text-muted-foreground/60 cursor-not-allowed" title="Fitur ini akan segera hadir">
              Kontribusi (Soon)
            </span>
          </div>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-4 py-8 z-10">
        {children}
      </main>
    </div>
  )
}
