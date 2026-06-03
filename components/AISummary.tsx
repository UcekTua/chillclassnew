"use client"

import ReactMarkdown from "react-markdown"

export default function AISummary({ content }: { content: string }) {
  if (!content) {
    return <div className="text-muted-foreground italic">Belum ada rangkuman AI untuk materi ini.</div>
  }

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none w-full">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
