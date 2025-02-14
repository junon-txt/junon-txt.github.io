import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Book = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

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
];

const MobileLayout = ({ books }: { books: Book[] }) => (
  <Carousel className="w-full max-w-sm mx-auto">
    <CarouselContent>
      {books.map((book) => (
        <CarouselItem key={book.id}>
          <div className="p-1">
            <div className="flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow-md">
              <Image
                src={book.image}
                alt={`Book cover for ${book.title}`}
                width={200}
                height={300}
                className="rounded-lg w-[300px] h-[300px] object-cover"
              />
              <h3 className="text-xl font-bold">{book.title}</h3>
              <p className="text-sm text-gray-500 text-center">{book.description}</p>
              <Link href={book.link}>
                <Button variant="outline" size="sm">Leer</Button>
              </Link>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

const DesktopLayout = ({ books }: { books: Book[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {books.map((book) => (
      <div key={book.id} className="flex flex-col items-center space-y-2">
        <Image
          src={book.image}
          alt={`Book cover for ${book.title}`}
          width={300}
          height={400}
          className="rounded-lg w-[300px] h-[300px] object-cover"
        />
        <h3 className="text-xl font-bold">{book.title}</h3>
        <p className="text-sm text-gray-500 text-center">{book.description}</p>
        <Link href={book.link}>
          <Button variant="outline">Leer</Button>
        </Link>
      </div>
    ))}
  </div>
);

export default function FeaturedWorks({ isMobile }: { isMobile: boolean }) {
  return (
    <section id="works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Escritos
        </h2>
        {isMobile ? <MobileLayout books={books} /> : <DesktopLayout books={books} />}
      </div>
    </section>
  );
}
