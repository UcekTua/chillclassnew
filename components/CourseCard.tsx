import Link from "next/link"

type Course = {
  id: string
  name: string
  code: string
  semester: number
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="border border-border/50 bg-card/50 backdrop-blur-sm text-card-foreground rounded-xl p-6 shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:border-[#6366f1]/50 transition-all cursor-pointer h-full flex flex-col justify-between group">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold px-3 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full border border-[#06b6d4]/20 tracking-wider">
              {course.code}
            </span>
            <span className="text-xs font-bold px-3 py-1 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white rounded-full tracking-wider shadow-sm">
              SMT {course.semester}
            </span>
          </div>
          <h3 className="font-extrabold text-2xl leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#06b6d4] transition-all">
            {course.name}
          </h3>
        </div>
        <div className="mt-6 flex justify-end">
          <span className="text-sm font-semibold text-muted-foreground group-hover:text-[#06b6d4] transition-colors flex items-center gap-1">
            Mulai Belajar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
