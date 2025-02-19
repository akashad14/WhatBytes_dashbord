"use client"

import type React from "react"

import { Trophy, BarChartIcon as ChartBar, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScoreStore } from "@/lib/store"

export function QuickStats() {
  const { rank, percentile, score } = useScoreStore()

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Statistics</h3>
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard icon={Trophy} label="YOUR RANK" value={rank.toString()} className="bg-yellow-50 text-yellow-900" />
        <StatCard icon={ChartBar} label="PERCENTILE" value={`${percentile}%`} className="bg-blue-50 text-blue-900" />
        <StatCard
          icon={CheckCircle}
          label="CORRECT ANSWERS"
          value={`${score}/15`}
          className="bg-green-50 text-green-900"
        />
      </div>
    </div>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
  className,
}: {
  icon: React.ElementType
  label: string
  value: string
  className?: string
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-6">
        <div className={`rounded-full p-2 ${className}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}

