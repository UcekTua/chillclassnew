import type { Metadata } from "next"
import GPACalculator from "@/components/GPACalculator"

export const metadata: Metadata = {
  title: "Kalkulator IPK - Chill Class",
  description: "Hitung proyeksi IP Semester dan IPK kumulatif kamu dengan mudah",
}

export default function KalkulatorIPKPage() {
  return (
    <div className="flex flex-col items-center relative z-10">
      <div className="text-center space-y-4 my-8">
        <div className="inline-flex items-center rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-4 py-1.5 text-sm font-semibold text-[#06b6d4] backdrop-blur-sm mb-2 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
          📊 Kalkulator IPK
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Hitung <span className="bg-gradient-to-br from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent drop-shadow-sm">Proyeksi IPK</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
          Pilih mata kuliah, masukkan bobot & nilai aktivitas, dan lihat proyeksi IP Semester serta IPK kumulatif kamu.
        </p>
      </div>

      <GPACalculator />
    </div>
  )
}
