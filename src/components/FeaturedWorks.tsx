import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const books = [
  { id: 1, title: "The Silent Echo", description: "A haunting tale of loss and redemption." },
  { id: 2, title: "Whispers in the Wind", description: "A romantic journey through time and space." },
  { id: 3, title: "The Forgotten Path", description: "An adventure of self-discovery and courage." },
]

export default function FeaturedWorks({ isMobile }: { isMobile: boolean }) {
  return (
    <section id="works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Featured Works
        </h2>
        {isMobile ? (
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {books.map((book) => (
                <CarouselItem key={book.id}>
                  <div className="p-1">
                    <div className="flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow-md">
                      <Image
                        src={`/placeholder.svg?height=300&width=200&text=${encodeURIComponent(book.title)}`}
                        alt={`Book cover for ${book.title}`}
                        width={200}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                      <h3 className="text-xl font-bold">{book.title}</h3>
                      <p className="text-sm text-gray-500 text-center">{book.description}</p>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <div key={book.id} className="flex flex-col items-center space-y-2">
                <Image
                  src={`/placeholder.svg?height=400&width=300&text=${encodeURIComponent(book.title)}`}
                  alt={`Book cover for ${book.title}`}
                  width={300}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <h3 className="text-xl font-bold">{book.title}</h3>
                <p className="text-sm text-gray-500 text-center">{book.description}</p>
                <Button variant="outline">Read More</Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}