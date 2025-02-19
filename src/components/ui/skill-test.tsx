"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { UpdateDialog } from "./update-dialog"

export function SkillTest() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 shrink-0">
                <Image
                  src="/images/html.png"
                  alt="HTML5"
                  width={48}
                  height={48}
                  className="rounded"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Hyper Text Markup Language</h2>
                <p className="text-sm text-muted-foreground">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            <Button onClick={() => setOpen(true)}>Update</Button>
          </div>
        </div>
      </div>
      <UpdateDialog open={open} onOpenChange={setOpen} />
    </>
  )
}

