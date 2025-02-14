import Image from "next/image"

export default function AboutSection() {
  return (
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
  )
}