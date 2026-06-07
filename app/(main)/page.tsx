import SemesterTabs from "@/components/SemesterTabs"
import Link from "next/link"
import { Calculator, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center relative z-10">
      <div className="text-center space-y-6 my-12">
        <div className="inline-flex items-center rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-4 py-1.5 text-sm font-semibold text-[#06b6d4] backdrop-blur-sm mb-2 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
          ✨ Made by Chill House
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Portal <span className="bg-gradient-to-br from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent drop-shadow-sm">Chill Class</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
          Dari CH, Untuk Fasilkom
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto mb-2 px-4 sm:px-0">
        <Link href="/kalkulator-ipk" className="group block w-full bg-gradient-to-r from-primary/10 via-background to-secondary/10 border border-primary/20 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/0 via-[#06b6d4]/5 to-[#6366f1]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-background/80 p-3 rounded-xl border border-border/50 shadow-sm">
                <Calculator className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                  Fitur Baru: Kalkulator IPK <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Hitung proyeksi nilai akhir dan IP Semester kamu dengan mudah!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2.5 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              Coba Sekarang <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </div>

      <SemesterTabs />
    </div>
  )
}

