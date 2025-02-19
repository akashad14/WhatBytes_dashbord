import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const syllabusData = [
  {
    topic: "HTML Tools, Forms, History",
    progress: 80,
    color: "bg-blue-500",
  },
  {
    topic: "Tags & References in HTML",
    progress: 60,
    color: "bg-orange-500",
  },
  {
    topic: "Tables & References in HTML",
    progress: 24,
    color: "bg-red-500",
  },
  {
    topic: "Tables & CSS Bascis",
    progress: 96,
    color: "bg-green-500",
  },
]

export function SyllabusAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Syllabus Wise Analysis</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {syllabusData.map((item) => (
          <div key={item.topic}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span>{item.topic}</span>
              <span className="font-semibold">{item.progress}%</span>
            </div>
            <Progress value={item.progress} className={item.color} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

