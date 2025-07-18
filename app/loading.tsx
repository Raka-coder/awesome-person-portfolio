import { Loader } from "lucide-react"

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Loader className="w-14 h-14 text-purple-500" />
    </main>
  )
}
