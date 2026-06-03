"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type Course = { id: string, name: string, code: string }

export default function ContributionForm() {
  const [courses, setCourses] = useState<Course[]>([])
  const [courseId, setCourseId] = useState("")
  const [fileUrl, setFileUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses")
      const data = await res.json()
      setCourses(Array.isArray(data) ? data : [])
    }
    fetchCourses()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!courseId || !fileUrl) return

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contributions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, fileUrl })
      })

      if (res.ok) {
        alert("Kontribusi berhasil dikirim dan menunggu validasi admin.")
        setCourseId("")
        setFileUrl("")
        router.push("/")
      } else {
        alert("Gagal mengirim kontribusi.")
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border p-6 rounded-xl shadow-sm max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Upload Kontribusi Baru</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Pilih Mata Kuliah</label>
        <select 
          value={courseId} 
          onChange={(e) => setCourseId(e.target.value)}
          className="w-full p-3 rounded-md border border-input bg-background text-sm focus:ring-primary"
          required
        >
          <option value="" disabled>-- Pilih Mata Kuliah --</option>
          {courses.map(c => (
            <option key={c.id} value={c.id}>{c.code} - {c.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Link File / URL Referensi</label>
        <p className="text-xs text-muted-foreground mb-2">Untuk iterasi ini, tempelkan URL Google Drive, Notion, dll.</p>
        <input 
          type="url"
          value={fileUrl}
          onChange={(e) => setFileUrl(e.target.value)}
          placeholder="https://..."
          className="w-full p-3 rounded-md border border-input bg-background text-sm focus:ring-primary"
          required
        />
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting || !courseId || !fileUrl}
        className="w-full bg-primary text-primary-foreground py-3 rounded-md font-bold disabled:opacity-50 transition-opacity"
      >
        {isSubmitting ? "Mengirim..." : "Submit Kontribusi"}
      </button>
    </form>
  )
}
