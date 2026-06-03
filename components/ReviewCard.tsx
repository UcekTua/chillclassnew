"use client"

import { useState } from "react"

export default function ReviewCard({ contribution, onReviewed }: { contribution: any, onReviewed: () => void }) {
  const [score, setScore] = useState(10)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleApprove = async () => {
    setIsProcessing(true)
    try {
      const res = await fetch(`/api/contributions/${contribution.id}/approve`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quality_score: score })
      })
      if (res.ok) {
        alert("Kontribusi disetujui dan poin telah diberikan!")
        onReviewed()
      } else {
        alert("Terjadi kesalahan saat memproses.")
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReject = async () => {
    // Alasan penolakan tidak disimpan ke DB berdasarkan PRD Schema Lock, 
    // namun kita konseptualisasikan seolah dikirim ke email user.
    const reason = prompt("Masukkan alasan penolakan (akan dikirim ke email kontributor):")
    if (reason === null) return // Dibatalkan

    setIsProcessing(true)
    try {
      const res = await fetch(`/api/contributions/${contribution.id}/reject`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason })
      })
      if (res.ok) {
        alert("Kontribusi ditolak.")
        onReviewed()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="bg-card border border-border p-5 rounded-xl shadow-sm mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mb-2 inline-block">
            PENDING REVIEW
          </span>
          <h3 className="font-bold text-lg">{contribution.course.name} <span className="text-sm font-normal text-muted-foreground">({contribution.course.code})</span></h3>
          <p className="text-sm text-muted-foreground mt-1">Oleh: <span className="font-medium text-foreground">{contribution.user.name}</span> ({contribution.user.email})</p>
        </div>
        <a 
          href={contribution.file_url} 
          target="_blank" 
          rel="noreferrer"
          className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-secondary/80 flex items-center gap-1"
        >
          Lihat File 
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
        </a>
      </div>

      <div className="bg-muted/30 p-4 rounded-lg mt-4 flex items-center justify-between flex-wrap gap-4 border border-border">
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium">Beri Quality Score (10-50):</label>
          <input 
            type="number" 
            min="10" 
            max="50" 
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className="w-20 p-2 rounded-md border border-input text-sm bg-background"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button 
            onClick={handleReject} 
            disabled={isProcessing}
            className="flex-1 sm:flex-none px-4 py-2 border border-destructive text-destructive rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors text-sm font-semibold disabled:opacity-50"
          >
            Tolak
          </button>
          <button 
            onClick={handleApprove} 
            disabled={isProcessing || score < 10 || score > 50}
            className="flex-1 sm:flex-none px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-semibold disabled:opacity-50"
          >
            Approve & Beri Poin
          </button>
        </div>
      </div>
    </div>
  )
}
