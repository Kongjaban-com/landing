import { Navigation } from "@/components/navigation"
import { LetterBlocks } from "@/components/letter-blocks"
import { MainContent } from "@/components/main-content"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <MainContent />
      <LetterBlocks />
    </div>
  )
}

