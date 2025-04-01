"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import { VideoModal } from "./video-modal"

interface VideoCardProps {
  title: string
  image: string
  date: string
  category: string
  videoId: string
}

export function VideoCard({ title, image, date, category, videoId }: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card className="overflow-hidden bg-transparent border-0">
        <button onClick={() => setIsModalOpen(true)} className="w-full text-left">
          <div className="relative h-48 w-full group">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-400">{date}</span>
              <span className="text-sm text-blue-400">{category}</span>
            </div>
            <h3 className="font-bold text-white group-hover:text-gray-300 transition-colors">{title}</h3>
          </CardContent>
        </button>
      </Card>

      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoId={videoId} />
    </>
  )
}

