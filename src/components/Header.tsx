import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function Header() {
  return (
    <header className="h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <BookOpen className="h-6 w-6 mr-2" />
        <span className="font-bold">Robinson Fang</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#works">
          Works
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}