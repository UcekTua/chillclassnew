import SemesterTabs from "@/components/SemesterTabs"

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

      <SemesterTabs />
    </div>
  )
}
