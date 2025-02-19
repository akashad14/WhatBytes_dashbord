import { Sidebar } from "@/components/ui/sidebar"
import { SkillTest } from "@/components/ui/skill-test"
import { QuickStats } from "@/components/ui/quick-stats"
import { ComparisonGraph } from "@/components/ui/comparison-graph"
import { SyllabusAnalysis } from "@/components/ui/syllabus-analysis"
import { QuestionAnalysis } from "@/components/ui/question-analysis"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1">
        <div className="flex items-center justify-between border-b px-6 py-4 lg:hidden">
          <span className="text-xl font-semibold">WhatBytes</span>
        </div>
        <main className="container mx-auto p-4 md:p-6 lg:p-8">
          <SkillTest />
          <div className="mt-6 grid gap-6">
            <QuickStats />
            <ComparisonGraph />
            <div className="grid gap-6 lg:grid-cols-2">
              <SyllabusAnalysis />
              <QuestionAnalysis />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

