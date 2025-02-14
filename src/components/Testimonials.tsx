export default function Testimonials() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            What Readers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="flex flex-col items-center space-y-2 text-center">
                <p className="text-gray-500 italic">
                  "Jane's writing is captivating and deeply moving. Her characters feel so real, I can't help but
                  get lost in their stories."
                </p>
                <p className="font-bold">- Reader {testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }