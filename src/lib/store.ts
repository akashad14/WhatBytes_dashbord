import { create } from "zustand"

interface ScoreState {
  rank: number
  percentile: number
  score: number
  updateScores: (rank: number, percentile: number, score: number) => void
}

export const useScoreStore = create<ScoreState>((set) => ({
  rank: 4,
  percentile: 80,
  score: 10,
  updateScores: (rank, percentile, score) => set({ rank, percentile, score }),
}))

