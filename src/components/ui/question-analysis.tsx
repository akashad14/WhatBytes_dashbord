"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useScoreStore } from "@/lib/store"

export function QuestionAnalysis() {
  const { score } = useScoreStore()
  const percentage = (score / 15) * 100

  // Calculate the segment sizes for the donut chart
  const calculateSegments = () => {
    const total = 15 // Total possible score
    const segment1 = (Math.min(score, 4) / total) * 100
    const segment2 = (Math.min(Math.max(score - 4, 0), 4) / total) * 100
    const segment3 = (Math.min(Math.max(score - 8, 0), 4) / total) * 100
    const segment4 = (Math.min(Math.max(score - 12, 0), 3) / total) * 100

    return [segment1, segment2, segment3, segment4]
  }

  const segments = calculateSegments()
  const radius = 45
  const circumference = 2 * Math.PI * radius

  // Calculate stroke-dasharray and stroke-dashoffset for each segment
  const getSegmentProps = (index: number) => {
    const startPercentage = segments.slice(0, index).reduce((a, b) => a + b, 0)
    const segmentLength = (segments[index] / 100) * circumference
    const dashArray = `${segmentLength} ${circumference - segmentLength}`
    const dashOffset = -((startPercentage / 100) * circumference)
    return { dashArray, dashOffset }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Question Analysis</CardTitle>
        <span className="text-2xl font-bold">{score}/15</span>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          You scored {score} question correct out of 15.
          {score < 12 ? " Needs improvement." : " Good job!"}
        </p>
        <div className="mt-4 flex items-center justify-center">
          <div className="relative h-60 w-60 pt-10">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
              {/* Segment 1 - Lightest blue */}
              <circle
                className="stroke-blue-300"
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                strokeWidth="10"
                strokeDasharray={getSegmentProps(0).dashArray}
                strokeDashoffset="0"
              />
              {/* Segment 2 - Light blue */}
              <circle
                className="stroke-blue-400"
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                strokeWidth="10"
                strokeDasharray={getSegmentProps(1).dashArray}
                strokeDashoffset={getSegmentProps(1).dashOffset}
              />
              {/* Segment 3 - Medium blue */}
              <circle
                className="stroke-blue-500"
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                strokeWidth="10"
                strokeDasharray={getSegmentProps(2).dashArray}
                strokeDashoffset={getSegmentProps(2).dashOffset}
              />
              {/* Segment 4 - Dark blue */}
              <circle
                className="stroke-blue-600"
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                strokeWidth="10"
                strokeDasharray={getSegmentProps(3).dashArray}
                strokeDashoffset={getSegmentProps(3).dashOffset}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold pt-8">{percentage.toFixed(0)}%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

