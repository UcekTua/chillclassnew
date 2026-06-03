import { notFound } from "next/navigation"
import Link from "next/link"
import AISummary from "@/components/AISummary"
import { COURSES_DB } from "@/lib/data"

export default async function MaterialDetailPage({
  params,
}: {
  params: { courseId: string; materialId: string }
}) {
  const course = COURSES_DB[params.courseId as keyof typeof COURSES_DB]
  if (!course) return notFound()

  const materialData = course.materials.find(m => m.id === params.materialId)
  if (!materialData) return notFound()

  const material = {
    ...materialData,
    course_id: params.courseId,
    course: { name: course.name }
  }

  if (material.category === "Interactive Module" && material.file_url) {
    return (
      <div className="absolute top-14 left-0 w-full h-[calc(100vh-3.5rem)] z-0 bg-[#0a0e1a]">
        {/* Floating Back Button (Kiri Atas) */}
        <Link 
          href={`/courses/${material.course_id}`} 
          className="absolute top-6 left-6 z-50 flex items-center justify-center w-12 h-12 bg-[#0a0e1a]/80 backdrop-blur-md border border-[#6366f1]/30 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.25)] text-slate-300 hover:text-[#06b6d4] hover:border-[#06b6d4]/50 hover:scale-110 transition-all"
          title="Kembali ke Daftar Materi"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </Link>
        
        <iframe 
          src={material.file_url} 
          className="w-full h-full border-0" 
          title={material.title}
        />
      </div>
    )
  }

  // Tampilan materi biasa (non-interactive fallback)
  return (
    <div className="max-w-5xl mx-auto w-full pb-16 relative z-10">
      <div className="mb-6">
        <Link href={`/courses/${material.course_id}`} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Kembali ke Daftar Materi
        </Link>
        <h1 className="text-3xl font-bold">{material.title}</h1>
      </div>
      <AISummary content={material.ai_summary} />
    </div>
  )
}
