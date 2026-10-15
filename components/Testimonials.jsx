
'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: 'The team understood our requirements and delivered a smooth, professional experience throughout the project.',
    name: 'Client Name',
    company: 'Company Name',
  },
  {
    id: 2,
    text: 'Working with the team was a positive experience. Communication was clear, and the process felt well organised.',
    name: 'Client Name',
    company: 'Company Name',
  },
  {
    id: 3,
    text: 'A thoughtful approach, attention to detail, and a clear focus on delivering a quality digital experience.',
    name: 'Client Name',
    company: 'Company Name',
  },
  {
    id: 4,
    text: 'The overall experience was straightforward, collaborative, and focused on our business needs.',
    name: 'Client Name',
    company: 'Company Name',
  },
]

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0)
  const [activeArrow, setActiveArrow] = useState(null)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)

    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const changeSlide = (direction) => {
    setActiveArrow(direction)

    setStartIndex((current) =>
      direction === 'right'
        ? (current + 1) % testimonials.length
        : (current - 1 + testimonials.length) % testimonials.length
    )

    setTimeout(() => setActiveArrow(null), 1500)
  }

  const visibleTestimonials = Array.from(
    { length: visibleCount },
    (_, index) => testimonials[(startIndex + index) % testimonials.length]
  )

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#005098]">
            Client Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#0B172A] sm:text-5xl">
            Words that build trust.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#64748B] sm:text-base">
            Feedback from the people we work with.
          </p>
        </div>

        <div className="relative px-0 sm:px-14">
          <button
            type="button"
            onClick={() => changeSlide('left')}
            aria-label="Previous testimonials"
            className={`testimonial-arrow absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D8E6EF] shadow-sm transition-colors duration-200 focus:outline-none ${
              activeArrow === 'left'
                ? 'bg-[#005098] text-white'
                : 'bg-white text-[#005098]'
            }`}
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => changeSlide('right')}
            aria-label="Next testimonials"
            className={`testimonial-arrow absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D8E6EF] shadow-sm transition-colors duration-200 focus:outline-none ${
              activeArrow === 'right'
                ? 'bg-[#005098] text-white'
                : 'bg-white text-[#005098]'
            }`}
          >
            <ArrowRight size={18} />
          </button>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleTestimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex min-h-[260px] flex-col rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8D4E8] hover:shadow-[0_18px_45px_rgba(7,59,107,0.08)]"
              >
                <Quote className="mb-5 h-7 w-7 shrink-0 text-[#28D8B0]" />

                <p className="flex-1 text-base leading-7 text-[#475569]">
                  “{testimonial.text}”
                </p>

                <div className="mt-6 border-t border-[#E2E8F0] pt-5">
                  <h3 className="font-bold text-[#0B172A]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#64748B]">
                    {testimonial.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => setStartIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={startIndex === index ? 'true' : undefined}
              className={`testimonial-arrow h-2.5 rounded-full transition-all duration-300 ${
                startIndex === index
                  ? 'w-6 bg-[#005098]'
                  : 'w-2.5 bg-[#005098]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
