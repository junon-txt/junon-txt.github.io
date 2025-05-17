import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/me01.jpg",
  "/images/me02.jpg",
  "/images/me03.jpg",
];

export default function AboutSection() {
  const [randomImage, setRandomImage] = useState<string | null>(null);

  useEffect(() => {
    const selectedImage = images[Math.floor(Math.random() * images.length)];
    setRandomImage(selectedImage);
  }, []);

  if (!randomImage) {
    return null;
  }

  return (
    <section id="about" className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] max-w-6xl mx-auto bg-white/40 backdrop-blur-[1px] rounded-xl p-8">
          <Image
            src={`${randomImage}?height=400&width=400`}
            alt="A photo of me"
            width={400}
            height={400}
            className="mx-auto aspect-square rounded-full object-cover"
          />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre mí</h2>
            <p className="text-gray-500 md:text-xl">
              Me gusta jugar Yu-gi-oh! 🫰
            </p>
            <p className="text-gray-500 md:text-xl">
              En mi tiempo libre programo (?)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
