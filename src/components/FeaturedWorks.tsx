"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"

type Book = {
  id: number
  title: string
  description: string
  image: string
  link: string
}

const books: Book[] = [
  {
    id: 1,
    title: "China diary",
    description: "Un breve diario que escribí durante un viaje con mi padre.",
    image: "/images/chinadiary.jpg",
    link: "/china-diary/entries/01/",
  },
  {
    id: 2,
    title: "ZhōngGuó II",
    description: "Una novela sobre estos tiempos modernos.",
    image: "/images/l2map.jpg",
    link: "/zhongguo-ii-pages/I/",
  },
  {
    id: 3,
    title: "华舸小男孩",
    description: "Cartas intercambiadas con mi tía china que vive en Argentina.",
    image: "/images/argchina.jpg",
    link: "/fang-huizhen",
  },
  {
    id: 4,
    title: "Cuentos",
    description: "Cuentos.",
    image: "/images/cuentos.jpg",
    link: "/cuentos",
  },
]

const Carousel = ({ books, isMobile }: { books: Book[]; isMobile: boolean }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: isMobile ? 1 : 3, // Scroll 1 slide on mobile, 3 on desktop
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    // Attach the event listener
    emblaApi.on("select", onSelect)

    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect)
      }
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-4">
          {books.map((book) => (
            <div key={book.id} className="flex-none w-[320px]">
              <div className="flex flex-col bg-white p-4 rounded-lg shadow-md h-[450px] w-full">
                <Image
                  src={book.image || "/placeholder.svg"}
                  alt={`Book cover for ${book.title}`}
                  width={280}
                  height={280}
                  className="rounded-lg w-[280px] h-[280px] object-cover"
                />
                {/* Centered text */}
                <div className="flex flex-grow flex-col items-center justify-center text-center">
                  <h3 className="text-xl font-bold">{book.title}</h3>
                  <p className="text-sm text-gray-500">{book.description}</p>
                </div>
                {/* Centered button */}
                <div className="flex items-center justify-center mt-2">
                  <Link href={book.link}>
                    <Button variant="outline" size="sm">
                      Leer
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Conditionally render dots only on mobile */}
      {isMobile && (
        <div className="flex justify-center mt-4">
          {books.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === selectedIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function FeaturedWorks({ isMobile }: {isMobile: boolean}) {
  return (
    <section id="works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Escritos</h2>
        <Carousel books={books} isMobile={isMobile} />
      </div>
    </section>
  )
}