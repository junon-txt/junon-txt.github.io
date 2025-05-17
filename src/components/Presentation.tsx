import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "./AnimatedBackground"

export default function Presentation() {
  return (
    <>
      <AnimatedBackground />
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center bg-white/40 backdrop-blur-[2px] rounded-xl p-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
              Robinson Fang
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Todo el mundo me dice Robin y soy de{" "}
              <span className="inline-block animate-[flag-wave_3s_ease-in-out_infinite] origin-[0%_100%]">
                🇦🇷
              </span>
            </p>
            <div className="mt-8">
              <Link href="#works">
                <Button variant="outline">
                  Escritos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}