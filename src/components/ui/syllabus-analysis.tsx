"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import clsx from "clsx"

const syllabusData = [
  {
    topic: "HTML Tools, Forms, History",
    progress: 80,
    color: "bg-blue-500",
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    topic: "Tags & References in HTML",
    progress: 60,
    color: "bg-orange-500",
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
  {
    topic: "Tables & References in HTML",
    progress: 24,
    color: "bg-red-500",
    bg: "bg-red-100",
    text: "text-red-600",
  },
  {
    topic: "Tables & CSS Bascis",
    progress: 96,
    color: "bg-green-500",
    bg: "bg-green-100",
    text: "text-green-600",
  },
]

export function SyllabusAnalysis() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Syllabus Wise Analysis</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {syllabusData.map((item) => (
          <div key={item.topic}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="font-medium py-2">{item.topic}</span>
              <span className={clsx("font-semibold", item.text)}>{item.progress}%</span>
            </div>
            <div className={clsx("h-2.5 w-full rounded-full", item.bg)}>
              <div
                className={clsx("h-2.5 rounded-full", item.color)}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
