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
            <Link href="/kalkulator-ipk" className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 border border-border/40 bg-background/60 backdrop-blur-sm shadow-sm">
              <span className="bg-gradient-to-br from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent font-semibold mr-1.5">
                Kalkulator IPK
              </span>
            </Link>
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
