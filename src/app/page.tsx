import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Mail, Twitter, Instagram } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <BookOpen className="h-6 w-6 mr-2" />
            <span className="font-bold">Jane Doe</span>
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
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container mx-auto">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Jane Doe
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                    Bestselling author of contemporary fiction, exploring the depths of human emotions and
                    relationships.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link href="#contact">
                    <Button>Get in Touch</Button>
                  </Link>
                  <Link href="#works">
                    <Button variant="outline">Explore My Works</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section id="works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Featured Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((book) => (
                  <div key={book} className="flex flex-col items-center space-y-2">
                    <Image
                      src={`/placeholder.svg?height=400&width=300`}
                      alt={`Book cover ${book}`}
                      width={300}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                    <h3 className="text-xl font-bold">Book Title {book}</h3>
                    <p className="text-sm text-gray-500 text-center">A brief description of the book and its themes.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] max-w-6xl mx-auto">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Jane Doe"
                  width={400}
                  height={400}
                  className="mx-auto aspect-square rounded-full object-cover"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Jane Doe</h2>
                  <p className="text-gray-500 md:text-xl">
                    Jane Doe is an award-winning author known for her insightful and emotionally charged novels. With a
                    career spanning over a decade, she has captivated readers worldwide with her unique storytelling
                    style and deep understanding of the human psyche.
                  </p>
                  <p className="text-gray-500 md:text-xl">
                    When not writing, Jane enjoys traveling, reading, and spending time with her family. She draws
                    inspiration from everyday life and the complex relationships that shape our world.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                What Readers Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((testimonial) => (
                  <div key={testimonial} className="flex flex-col items-center space-y-2 text-center">
                    <p className="text-gray-500 italic">
                      &quot;Jane&apos;s writing is captivating and deeply moving. Her characters feel so real, I can&apos;t help but
                      get lost in their stories.&quot;
                    </p>
                    <p className="font-bold">- Reader {testimonial}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Connected</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                    Sign up for my newsletter to receive updates on new releases, book signings, and more.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                    <Button type="submit">Subscribe</Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">© 2024 Jane Doe. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

