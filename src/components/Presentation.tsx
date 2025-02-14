import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Presentation() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Robinson Fang
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Todo el mundo me dice Robin y soy de 🇦🇷
            </p>
          </div>
          <div className="space-x-4">
            {/* <Link href="#contact">
              <Button>Get in Touch</Button>
            </Link> */}
            <Link href="#works">
              <Button variant="outline">Escritos</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}