"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useScoreStore } from "@/lib/store"

export function UpdateDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { updateScores } = useScoreStore()
  const [formData, setFormData] = useState({
    rank: "",
    percentile: "",
    score: "",
  })
  const [errors, setErrors] = useState({
    percentile: "",
    score: "",
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = { percentile: "", score: "" }

    // Validate percentile (0 to 100)
    const percentileValue = Number(formData.percentile)
    if (isNaN(percentileValue) || percentileValue < 0 || percentileValue > 100) {
      newErrors.percentile = "Percentile must be between 0 and 100."
      isValid = false
    }

    // Validate score (0 to 15)
    const scoreValue = Number(formData.score)
    if (isNaN(scoreValue) || scoreValue < 0 || scoreValue > 15) {
      newErrors.score = "Score must be between 0 and 15."
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      updateScores(Number(formData.rank), Number(formData.percentile), Number(formData.score))
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">Update scores</DialogTitle>
            <Image src="/images/html.png" alt="HTML5" width={48} height={48} />
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <div className="flex-1">
                <label className="text-base font-semibold">Update your Rank</label>
                <Input
                  type="number"
                  value={formData.rank}
                  onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                  className="mt-2"
                  min="1"
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <div className="flex-1">
                <label className="text-base font-semibold">Update your Percentile</label>
                <Input
                  type="number"
                  value={formData.percentile}
                  onChange={(e) => setFormData({ ...formData, percentile: e.target.value })}
                  className="mt-2"
                  min="0"
                  max="100"
                  required
                />
                {errors.percentile && (
                  <p className="text-sm text-red-500">{errors.percentile}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <div className="flex-1">
                <label className="text-base font-semibold">Update your Current Score (out of 15)</label>
                <Input
                  type="number"
                  value={formData.score}
                  onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                  className="mt-2"
                  min="0"
                  max="15"
                  required
                />
                {errors.score && (
                  <p className="text-sm text-red-500">{errors.score}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}