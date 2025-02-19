"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
  Dot,
} from "recharts"
import { useScoreStore } from "@/lib/store"

// Generate bell curve-like data
const generateData = () => {
  const data = []
  for (let i = 0; i <= 100; i += 5) {
    let y
    if (i < 25) {
      y = 10 + (i / 25) * 20
    } else if (i < 50) {
      y = 30 + ((i - 25) / 25) * 40
    } else if (i < 75) {
      y = 70 - ((i - 50) / 25) * 50
    } else {
      y = 20 - ((i - 75) / 25) * 10
    }
    data.push({
      x: i,
      y: Math.max(5, y + Math.random() * 5),
    })
  }
  return data
}

const data = generateData()

export function ComparisonGraph() {
  const { percentile } = useScoreStore()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Comparison Graph</span>
          <div className="h-8 w-8 rounded-full bg-muted p-1">
            <TrendingIcon />
          </div>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          You scored {percentile}% percentile which is {percentile > 72 ? "higher" : "lower"} than the average
          percentile 72% of all the engineers who took this assessment
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#818CF8" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#818CF8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="x" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <YAxis hide />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <p className="text-sm font-medium">Percentile: {payload[0].payload.x}</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <ReferenceLine
                x={percentile}
                stroke="#4F46E5"
                strokeWidth={2}
                strokeDasharray="3 3"
                label={{
                  value: "your percentile",
                  position: "top",
                  fill: "#6B7280",
                  fontSize: 12,
                }}
              />
              <Area
                type="monotone"
                dataKey="y"
                stroke="#818CF8"
                strokeWidth={2}
                fill="url(#colorGradient)"
                dot={<CustomDot />}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function CustomDot(props: any) {
  const { cx, cy } = props
  if (!cx || !cy) return null

  return <Dot {...props} r={3} fill="#818CF8" stroke="#fff" strokeWidth={2} />
}

function TrendingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
    >
      <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
      <path d="M16 7H22V13" />
    </svg>
  )
}

