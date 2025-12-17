import { useState } from 'react';
import { getTranslation } from '../i18n';

interface TestimonialsProps {
  lang?: string;
}

export default function Testimonials({ lang = 'ru' }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = getTranslation(lang as any);

  const testimonials = t.testimonials.items;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          {t.testimonials.title}
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800">
                {testimonials[currentIndex].image ? (
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600">
                    <span className="text-6xl">👤</span>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="text-6xl text-purple-400">"</div>
              <p className="text-xl text-gray-300 leading-relaxed">
                {testimonials[currentIndex].text}
              </p>
              <div>
                <div className="text-xl font-bold text-white">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentIndex].role}
                </div>
              </div>
              {testimonials[currentIndex].company && (
                <div className="pt-4">
                  <div className="text-2xl font-bold text-purple-400">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
