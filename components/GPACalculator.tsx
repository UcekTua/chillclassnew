"use client"

import React, { useState, useMemo, useEffect } from 'react'
import { Plus, Trash2, Calculator, BookOpen, GraduationCap, CheckCircle2, AlertCircle } from 'lucide-react'

// Tipe data
type Activity = {
  id: string
  name: string
  weight: number // dalam persen, misal 30
  score: number // nilai 0-100
}

type CourseData = {
  id: string
  name: string
  sks: number
  activities: Activity[]
}

const INITIAL_COURSES: CourseData[] = [
  { id: 'kasdad', name: 'KASDAD', sks: 4, activities: [{ id: 'a1', name: 'Worksheet (7 kali)', weight: 14, score: 0 }, { id: 'a2', name: 'Lab 1', weight: 2, score: 0 }, { id: 'a3', name: 'Lab 2', weight: 4, score: 0 }, { id: 'a4', name: 'Tp 1 - 3', weight: 15, score: 0 }, { id: 'a5', name: 'Final Presentation', weight: 10, score: 0 }, { id: 'a6', name: 'UTS', weight: 27.50, score: 0 }, { id: 'a7', name: 'UAS', weight: 27.50, score: 0 }] },
  { id: 'sipa', name: 'SIPA', sks: 4, activities: [{ id: 'a1', name: 'Tugas Individu', weight: 7, score: 0 }, { id: 'a2', name: 'TK: ERP', weight: 10, score: 0 }, { id: 'a3', name: 'TI: Lab Odoo (4x)', weight: 8, score: 0 }, { id: 'a4', name: 'Partisipasi', weight: 7.50, score: 0 }, { id: 'a5', name: 'UTS', weight: 30, score: 0 }, { id: 'a6', name: 'UAS', weight: 30, score: 0 }, { id: 'a7', name: 'PR (4x)', weight: 7.50, score: 0 }] },
  { id: 'manpro', name: 'MANPRO', sks: 3, activities: [{ id: 'a1', name: 'TK Project Plan', weight: 15, score: 0 }, { id: 'a2', name: 'TI 1', weight: 9, score: 0 }, { id: 'a3', name: 'TI 2', weight: 10, score: 0 }, { id: 'a4', name: 'Kuis 1', weight: 5, score: 0 }, { id: 'a5', name: 'Kuis 2', weight: 5, score: 0 }, { id: 'a6', name: 'UTS', weight: 22, score: 0 }, { id: 'a7', name: 'UAS', weight: 20, score: 0 }, { id: 'a8', name: 'Post Test (1-4)', weight: 6, score: 0 }, { id: 'a9', name: 'Partisipasi', weight: 8, score: 0 }] },
  { id: 'msi', name: 'MSI', sks: 3, activities: [{ id: 'a1', name: 'TI 1', weight: 10, score: 0 }, { id: 'a2', name: 'TI 2', weight: 10, score: 0 }, { id: 'a3', name: 'TK', weight: 20, score: 0 }, { id: 'a4', name: 'Kuis 1', weight: 5, score: 0 }, { id: 'a5', name: 'Kuis 2', weight: 5, score: 0 }, { id: 'a6', name: 'Quizizz', weight: 5, score: 0 }, { id: 'a7', name: 'Diskusi Kelas', weight: 10, score: 0 }, { id: 'a8', name: 'UTS', weight: 17.5, score: 0 }, { id: 'a9', name: 'UAS', weight: 17.5, score: 0 }] },
  { id: 'pkpl', name: 'PKPL', sks: 3, activities: [{ id: 'a1', name: 'TK', weight: 36, score: 0 }, { id: 'a2', name: 'Kuis (n-1)', weight: 10, score: 0 }, { id: 'a3', name: 'Partisipasi', weight: 4, score: 0 }, { id: 'a4', name: 'UTS', weight: 25, score: 0 }, { id: 'a5', name: 'UAS', weight: 25, score: 0 }] },
  { id: 'sister', name: 'SISTER', sks: 3, activities: [{ id: 'a1', name: 'LK (11x)', weight: 20, score: 0 }, { id: 'a2', name: 'Proyek Kelompok', weight: 30, score: 0 }, { id: 'a3', name: 'Kontribusi Kelas', weight: 10, score: 0 }, { id: 'a4', name: 'Kehadiran', weight: 5, score: 0 }, { id: 'a5', name: 'Tugas Esai', weight: 5, score: 0 }, { id: 'a6', name: 'UTS', weight: 20, score: 0 }, { id: 'a7', name: 'Kuis', weight: 10, score: 0 }] },
  { id: 'basdat', name: 'BASDAT', sks: 4, activities: [{ id: 'a1', name: 'TI 1', weight: 4, score: 0 }, { id: 'a2', name: 'TI 2', weight: 4, score: 0 }, { id: 'a3', name: 'TI 3', weight: 4, score: 0 }, { id: 'a4', name: 'TI 4', weight: 4, score: 0 }, { id: 'a5', name: 'Lab 1', weight: 2, score: 0 }, { id: 'a6', name: 'Lab 2', weight: 2, score: 0 }, { id: 'a7', name: 'Lab 3', weight: 2, score: 0 }, { id: 'a8', name: 'TK 1', weight: 4, score: 0 }, { id: 'a9', name: 'TK 2', weight: 4, score: 0 }, { id: 'a10', name: 'TK 3', weight: 4, score: 0 }, { id: 'a11', name: 'TK 4', weight: 6, score: 0 }, { id: 'a12', name: 'Kuis 1', weight: 5, score: 0 }, { id: 'a13', name: 'Kuis 2', weight: 5, score: 0 }, { id: 'a14', name: 'UTS', weight: 25, score: 0 }, { id: 'a15', name: 'UAS', weight: 25, score: 0 }] },
  { id: 'tba', name: 'TBA', sks: 4, activities: [{ id: 'a1', name: 'Kuis 1', weight: 4, score: 0 }, { id: 'a2', name: 'Kuis 2', weight: 4, score: 0 }, { id: 'a3', name: 'UTS', weight: 30, score: 0 }, { id: 'a4', name: 'UAS', weight: 30, score: 0 }, { id: 'a5', name: 'PR 1', weight: 4, score: 0 }, { id: 'a6', name: 'PR 2', weight: 4, score: 0 }, { id: 'a7', name: 'PR 3', weight: 4, score: 0 }, { id: 'a8', name: 'PR 4', weight: 4, score: 0 }, { id: 'a9', name: 'PR 5', weight: 4, score: 0 }, { id: 'a10', name: 'PR 6', weight: 4, score: 0 }, { id: 'a11', name: 'PR 7', weight: 4, score: 0 }, { id: 'a12', name: 'PR 8', weight: 4, score: 0 }, { id: 'a13', name: 'Apresiasi', weight: 2, score: 0 }] },
  { id: 'anum', name: 'ANUM', sks: 3, activities: [{ id: 'a1', name: 'UTS', weight: 30, score: 0 }, { id: 'a2', name: 'UAS', weight: 30, score: 0 }, { id: 'a3', name: 'Tugas', weight: 40, score: 0 }] },
  { id: 'adpro', name: 'ADPRO', sks: 3, activities: [{ id: 'a1', name: 'LAB (10)', weight: 20, score: 0 }, { id: 'a2', name: 'Kuis (4x)', weight: 20, score: 0 }, { id: 'a3', name: 'Proyek Akhir (Progress Report)', weight: 15, score: 0 }, { id: 'a4', name: 'Proyek Akhir (Final Report)', weight: 15, score: 0 }, { id: 'a5', name: 'UTS', weight: 30, score: 0 }, { id: 'a6', name: 'Partisipasi', weight: 5, score: 0 }] },
]

// Konversi Nilai ke Huruf Mutu dan Angka Mutu
const getGradeInfo = (score: number) => {
  if (score >= 85) return { letter: 'A', gpa: 4.0, color: 'text-green-500 bg-green-500/10 border-green-500/30' }
  if (score >= 80) return { letter: 'A-', gpa: 3.7, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30' }
  if (score >= 75) return { letter: 'B+', gpa: 3.3, color: 'text-teal-500 bg-teal-500/10 border-teal-500/30' }
  if (score >= 70) return { letter: 'B', gpa: 3.0, color: 'text-blue-500 bg-blue-500/10 border-blue-500/30' }
  if (score >= 65) return { letter: 'B-', gpa: 2.7, color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30' }
  if (score >= 60) return { letter: 'C+', gpa: 2.3, color: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30' }
  if (score >= 55) return { letter: 'C', gpa: 2.0, color: 'text-orange-500 bg-orange-500/10 border-orange-500/30' }
  if (score >= 40) return { letter: 'D', gpa: 1.0, color: 'text-red-400 bg-red-400/10 border-red-400/30' }
  return { letter: 'E', gpa: 0.0, color: 'text-red-600 bg-red-600/10 border-red-600/30' }
}

export default function GPACalculator() {
  const [courses, setCourses] = useState<CourseData[]>(INITIAL_COURSES)
  const [selectedCourseIds, setSelectedCourseIds] = useState<string[]>([])
  const [prevGpa, setPrevGpa] = useState<string>('')
  const [prevSks, setPrevSks] = useState<string>('')

  // Menangani checklist mata kuliah
  const toggleCourse = (id: string) => {
    setSelectedCourseIds(prev =>
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    )
  }

  // Update nilai atau bobot aktivitas
  const updateActivity = (courseId: string, activityId: string, field: keyof Activity, value: number | string) => {
    setCourses(prevCourses =>
      prevCourses.map(course => {
        if (course.id !== courseId) return course
        return {
          ...course,
          activities: course.activities.map(act => {
            if (act.id !== activityId) return act
            return { ...act, [field]: value }
          })
        }
      })
    )
  }

  // Tambah aktivitas baru ke mata kuliah
  const addActivity = (courseId: string) => {
    setCourses(prevCourses =>
      prevCourses.map(course => {
        if (course.id !== courseId) return course
        const newActivity: Activity = {
          id: Math.random().toString(36).substr(2, 9),
          name: `Aktivitas ${course.activities.length + 1}`,
          weight: 0,
          score: 0
        }
        return { ...course, activities: [...course.activities, newActivity] }
      })
    )
  }

  // Hapus aktivitas
  const removeActivity = (courseId: string, activityId: string) => {
    setCourses(prevCourses =>
      prevCourses.map(course => {
        if (course.id !== courseId) return course
        return {
          ...course,
          activities: course.activities.filter(act => act.id !== activityId)
        }
      })
    )
  }

  // Update SKS mata kuliah
  const updateCourseSks = (courseId: string, sks: number) => {
    setCourses(prevCourses =>
      prevCourses.map(course => {
        if (course.id !== courseId) return course
        return { ...course, sks }
      })
    )
  }

  // Tambah mata kuliah custom
  const addCustomCourse = () => {
    const newCourse: CourseData = {
      id: `custom-${Math.random().toString(36).substr(2, 9)}`,
      name: `Matkul Baru`,
      sks: 3,
      activities: [{ id: 'a1', name: 'Aktivitas 1', weight: 100, score: 0 }]
    }
    setCourses([...courses, newCourse])
    setSelectedCourseIds([...selectedCourseIds, newCourse.id])
  }

  // Hapus mata kuliah custom
  const removeCourse = (courseId: string) => {
    setCourses(courses.filter(c => c.id !== courseId))
    setSelectedCourseIds(selectedCourseIds.filter(id => id !== courseId))
  }

  // Kalkulasi
  const calculations = useMemo(() => {
    const selectedCoursesData = courses.filter(c => selectedCourseIds.includes(c.id))

    let totalSksSemester = 0
    let totalBobotSemester = 0

    const coursesResult = selectedCoursesData.map(course => {
      // Hitung total nilai = sum(score * weight / 100)
      const finalScore = course.activities.reduce((acc, curr) => acc + (curr.score * (curr.weight / 100)), 0)
      const grade = getGradeInfo(finalScore)

      // Validasi total bobot tidak boleh kurang dari 100% (boleh lebih)
      const totalWeight = course.activities.reduce((acc, curr) => acc + curr.weight, 0)
      const isValidWeight = totalWeight >= 100

      if (isValidWeight) {
        totalSksSemester += course.sks
        totalBobotSemester += (grade.gpa * course.sks)
      }

      return {
        ...course,
        finalScore,
        grade,
        totalWeight,
        isValidWeight
      }
    })

    const ips = totalSksSemester > 0 ? totalBobotSemester / totalSksSemester : 0

    // Kalkulasi IPK Kumulatif jika ada input
    let ipk = ips
    let totalSksKumulatif = totalSksSemester

    const prevGpaNum = parseFloat(prevGpa)
    const prevSksNum = parseFloat(prevSks)

    if (!isNaN(prevGpaNum) && !isNaN(prevSksNum) && prevSksNum > 0) {
      totalSksKumulatif = prevSksNum + totalSksSemester
      const totalBobotKumulatif = (prevGpaNum * prevSksNum) + totalBobotSemester
      ipk = totalBobotKumulatif / totalSksKumulatif
    }

    return {
      coursesResult,
      ips,
      totalSksSemester,
      ipk,
      totalSksKumulatif
    }
  }, [courses, selectedCourseIds, prevGpa, prevSks])

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">

      {/* SECTION: PILIH MATA KULIAH */}
      <section className="bg-card/40 border border-border/50 rounded-2xl p-6 shadow-sm backdrop-blur-sm">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-primary" />
          Pilih Mata Kuliah
        </h2>
        <div className="flex flex-wrap gap-3">
          {courses.map(course => {
            const isSelected = selectedCourseIds.includes(course.id)
            return (
              <button
                key={course.id}
                onClick={() => toggleCourse(course.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all
                  ${isSelected
                    ? 'border-primary bg-primary/10 text-primary shadow-sm'
                    : 'border-border/60 bg-background/50 text-muted-foreground hover:bg-muted/50'
                  }
                `}
              >
                {isSelected && <CheckCircle2 className="w-4 h-4" />}
                {course.name}
              </button>
            )
          })}
          <button
            onClick={addCustomCourse}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-dashed border-muted-foreground/40 bg-transparent text-muted-foreground hover:bg-muted/30 text-sm font-medium transition-all"
          >
            <Plus className="w-4 h-4" /> Tambah Matkul
          </button>
        </div>
      </section>

      {/* SECTION: TABEL MATA KULIAH */}
      {selectedCourseIds.length > 0 && (
        <section className="space-y-6">
          {calculations.coursesResult.map(course => (
            <div key={course.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="p-5 border-b border-border/50 bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={course.name}
                      onChange={(e) => {
                        setCourses(prev => prev.map(c => c.id === course.id ? { ...c, name: e.target.value } : c))
                      }}
                      className="font-bold text-lg bg-transparent border-none p-0 focus:ring-0 w-auto max-w-[200px]"
                    />
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/60 px-3 py-1 rounded-md border border-border/40">
                      SKS:
                      <input
                        type="number"
                        min="1" max="6"
                        value={course.sks}
                        onChange={(e) => updateCourseSks(course.id, parseInt(e.target.value) || 0)}
                        className="w-12 bg-transparent border-none p-0 text-center focus:ring-0 font-semibold text-foreground"
                      />
                    </div>
                  </div>
                  {course.totalWeight < 100 && (
                    <div className="flex items-center gap-1.5 text-xs text-destructive mt-2">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Total bobot masih kurang dari 100% (Saat ini: {course.totalWeight}%)
                    </div>
                  )}
                  {course.totalWeight > 100 && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      Total bobot: {course.totalWeight}% (Lebih dari 100%)
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Nilai Akhir</p>
                    <p className="text-2xl font-black">{course.finalScore.toFixed(2)}</p>
                  </div>
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl border ${course.grade.color} font-black text-xl shadow-sm`}>
                    {course.grade.letter}
                  </div>
                  {course.id.startsWith('custom-') && (
                    <button
                      onClick={() => removeCourse(course.id)}
                      className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors ml-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/40 border-y border-border/40">
                      <tr>
                        <th className="px-4 py-3 font-semibold w-1/2">Aktivitas</th>
                        <th className="px-4 py-3 font-semibold text-center w-1/4">Bobot (%)</th>
                        <th className="px-4 py-3 font-semibold text-center w-1/4">Nilai (0-100)</th>
                        <th className="px-4 py-3 text-center"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.activities.map((act) => (
                        <tr key={act.id} className="border-b border-border/30 last:border-0 hover:bg-muted/10 transition-colors">
                          <td className="px-4 py-3">
                            <input
                              type="text"
                              value={act.name}
                              onChange={(e) => updateActivity(course.id, act.id, 'name', e.target.value)}
                              className="w-full bg-background border border-border/50 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary/50"
                              placeholder="Nama Aktivitas"
                            />
                          </td>
                          <td className="px-4 py-3">
                            <input
                              type="number"
                              min="0" max="100"
                              value={act.weight || ''}
                              onChange={(e) => updateActivity(course.id, act.id, 'weight', parseFloat(e.target.value) || 0)}
                              className="w-full text-center bg-background border border-border/50 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary/50"
                              placeholder="0"
                            />
                          </td>
                          <td className="px-4 py-3">
                            <input
                              type="number"
                              min="0" max="100"
                              value={act.score || ''}
                              onChange={(e) => updateActivity(course.id, act.id, 'score', parseFloat(e.target.value) || 0)}
                              className="w-full text-center bg-background border border-border/50 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary/50"
                              placeholder="0"
                            />
                          </td>
                          <td className="px-4 py-3 text-center">
                            <button
                              onClick={() => removeActivity(course.id, act.id)}
                              className="text-muted-foreground/50 hover:text-destructive transition-colors p-1"
                              disabled={course.activities.length <= 1}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  onClick={() => addActivity(course.id)}
                  className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <Plus className="w-4 h-4" /> Tambah Aktivitas
                </button>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* SECTION: HASIL & PROYEKSI */}
      {selectedCourseIds.length > 0 && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

          {/* Card Input IPK Terakhir */}
          <div className="bg-card/60 border border-border/60 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-5">
              <Calculator className="w-5 h-5 text-secondary" />
              Data Kumulatif (Opsional)
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">IPK Sebelumnya</label>
                <input
                  type="number"
                  step="0.01" min="0" max="4"
                  value={prevGpa}
                  onChange={(e) => setPrevGpa(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Misal: 3.50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Total SKS Sebelumnya</label>
                <input
                  type="number"
                  min="0" max="160"
                  value={prevSks}
                  onChange={(e) => setPrevSks(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Misal: 60"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              *Masukkan IPK dan SKS kamu dari semester-semester sebelumnya untuk melihat proyeksi IPK Kumulatif di akhir semester ini.
            </p>
          </div>

          {/* Card Hasil */}
          <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-primary/20 rounded-2xl p-6 shadow-sm flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <GraduationCap className="w-48 h-48" />
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">IP Semester (IPS)</p>
                <p className="text-5xl font-black text-foreground tracking-tight">
                  {calculations.ips.toFixed(2)}
                </p>
                <p className="text-xs font-medium text-muted-foreground/80 mt-2">
                  Total {calculations.totalSksSemester} SKS Semester ini
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">IPK Kumulatif</p>
                <p className="text-5xl font-black bg-gradient-to-br from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent tracking-tight drop-shadow-sm">
                  {calculations.ipk.toFixed(2)}
                </p>
                <p className="text-xs font-medium text-muted-foreground/80 mt-2">
                  Total {calculations.totalSksKumulatif} SKS Keseluruhan
                </p>
              </div>
            </div>
          </div>

        </section>
      )}

      {selectedCourseIds.length === 0 && (
        <div className="text-center py-20 px-4 border border-border/40 border-dashed rounded-2xl bg-card/20 text-muted-foreground">
          <GraduationCap className="w-12 h-12 mx-auto mb-4 opacity-40" />
          <p className="text-lg font-medium">Pilih mata kuliah di atas untuk mulai menghitung</p>
          <p className="text-sm opacity-80 mt-1">Kamu bisa mengatur bobot persentase dan nilai setiap aktivitas.</p>
        </div>
      )}

    </div>
  )
}
