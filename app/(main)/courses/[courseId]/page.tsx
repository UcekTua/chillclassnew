import { notFound } from "next/navigation"
import MaterialList from "@/components/MaterialList"
import { COURSES_DB } from "@/lib/data"

export default async function CourseDetailPage({
  params,
}: {
  params: { courseId: string }
}) {
  const course = COURSES_DB[params.courseId as keyof typeof COURSES_DB]
  
  if (!course) {
    return notFound()
  }

  return (
    <div className="max-w-5xl mx-auto w-full relative z-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              SMT {course.semester}
            </span>
            <span className="px-4 py-1.5 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full text-xs font-bold uppercase tracking-wider border border-[#8b5cf6]/30">
              {course.code}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-foreground drop-shadow-md">{course.name}</h1>
          <p className="text-muted-foreground md:text-lg">Koleksi materi interaktif, rangkuman, kuis, dan latihan soal secara terpadu.</p>
        </div>
        
        <div title="Fitur ini akan segera hadir" className="flex items-center justify-center gap-2 px-5 py-2.5 border border-border/40 bg-background/50 backdrop-blur-sm rounded-xl text-sm font-semibold text-muted-foreground/60 cursor-not-allowed">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Favorit (Soon)
        </div>
      </div>

      <MaterialList materials={course.materials as any} courseId={course.id} />
    </div>
  )
}
