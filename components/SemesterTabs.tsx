"use client"

import { useState } from "react"
import CourseCard from "./CourseCard"

import { COURSES_DB } from "@/lib/data"

export default function SemesterTabs() {
  const [activeSemester, setActiveSemester] = useState<number>(4)
  const [searchQuery, setSearchQuery] = useState("")

  const courses = Object.values(COURSES_DB).filter(course => course.semester === activeSemester)
  
  const filteredCourses = courses.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const semesters = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 flex flex-col gap-6">
      <input
        type="text"
        placeholder="Cari mata kuliah berdasarkan nama atau kode..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      />

      <div className="flex bg-muted/30 p-1.5 rounded-xl space-x-2 overflow-x-auto border border-border/20">
        {semesters.map((sem) => (
          <button
            key={sem}
            onClick={() => setActiveSemester(sem)}
            className={`flex-1 min-w-[100px] py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
              activeSemester === sem
                ? "bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white shadow-md scale-[1.02]"
                : "text-muted-foreground hover:bg-background/40"
            }`}
          >
            Semester {sem}
          </button>
        ))}
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground bg-card/30 rounded-xl border border-border/30 border-dashed">
          {courses.length === 0
            ? `Belum ada mata kuliah untuk Semester ${activeSemester}. (Coming Soon)`
            : "Mata kuliah yang dicari tidak ditemukan."}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course as any} />
          ))}
        </div>
      )}
    </div>
  )
}
