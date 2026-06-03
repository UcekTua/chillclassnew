"use client"

import Link from "next/link"

type Material = {
  id: string
  title: string
  category: string
}

export default function MaterialList({ materials, courseId }: { materials: Material[], courseId: string }) {
  return (
    <div className="space-y-6 mt-6">
      {materials.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground bg-card/30 rounded-xl border border-border/30 border-dashed">
          Belum ada materi.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <Link key={material.id} href={`/courses/${courseId}/materials/${material.id}`}>
              <div className="border border-border/50 bg-card/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:border-[#6366f1]/50 transition-all cursor-pointer h-full flex flex-col justify-between group">
                <div>
                  <span className="text-xs font-bold px-3 py-1 bg-[#6366f1]/10 text-[#6366f1] rounded-full mb-4 inline-block border border-[#6366f1]/20">
                    {material.category}
                  </span>
                  <h4 className="font-extrabold text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#06b6d4] transition-all">{material.title}</h4>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-sm font-semibold text-muted-foreground group-hover:text-[#06b6d4] transition-colors flex items-center gap-1">
                    Baca Materi <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
