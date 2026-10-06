'use client'

import { useState } from 'react'
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Check,
  MessageCircle,
  Clock3,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const services = [
    'Website Development',
    'App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Social Media Management',
    'Other',
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `Project Inquiry: ${formData.service || 'General'}`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}`

    const mailtoLink = `mailto:vayutech29@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  return (
    <main className="overflow-hidden bg-[#F8FAFC] text-[#0B172A]">

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#28D8B0]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[900px] text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8D4E8] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#005098] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#28D8B0]" />
            Start a conversation
          </div>

          <h1 className="text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Let's build something
            <br />
            <span className="text-[#005098]">great together.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Tell us what you're building, what you need, or simply share
            an idea. We'll get back to you and figure out the right way
            forward.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid items-start gap-6">

            {/* Form */}
            <div className="rounded-[30px] border border-[#CBD5E1] bg-white p-7 shadow-[0_18px_50px_rgba(0,80,152,0.05)] sm:p-8 lg:p-9">
              <div className="mb-8">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#28BFA0]">
                  Project enquiry
                </p>

                <h2 className="text-2xl font-extrabold tracking-[-0.025em] sm:text-3xl">
                  Tell us about your project.
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  Share a few details and we'll understand what you need
                  before getting in touch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4.5">

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold text-[#0B172A]"
                    >
                      Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0B172A] outline-none transition-all duration-300 placeholder:text-[#94A3B8] focus:border-[#28BFA0] focus:bg-white focus:ring-4 focus:ring-[#28D8B0]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold text-[#0B172A]"
                    >
                      Email *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0B172A] outline-none transition-all duration-300 placeholder:text-[#94A3B8] focus:border-[#28BFA0] focus:bg-white focus:ring-4 focus:ring-[#28D8B0]/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold text-[#0B172A]"
                    >
                      Phone
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0B172A] outline-none transition-all duration-300 placeholder:text-[#94A3B8] focus:border-[#28BFA0] focus:bg-white focus:ring-4 focus:ring-[#28D8B0]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-xs font-bold text-[#0B172A]"
                    >
                      Service Interested In *
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0B172A] outline-none transition-all duration-300 focus:border-[#28BFA0] focus:bg-white focus:ring-4 focus:ring-[#28D8B0]/10"
                    >
                      <option value="">Select a service</option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold text-[#0B172A]"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0B172A] outline-none transition-all duration-300 placeholder:text-[#94A3B8] focus:border-[#28BFA0] focus:bg-white focus:ring-4 focus:ring-[#28D8B0]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#005098] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#005098]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#073B6B] hover:shadow-xl"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="mt-6 grid items-center gap-4 lg:grid-cols-[1fr_auto]">

              <div className="rounded-[30px] bg-[#071B30] p-7 text-white sm:p-8">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8FF5DF]">
                  Contact Vayu Tech
                </p>

                <h2 className="text-2xl font-extrabold tracking-[-0.025em] sm:text-3xl">
                  Let's talk about what's next.
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  Whether you're starting something new or improving an
                  existing digital product, we're here to help.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr]">

                  <a
                    href="mailto:vayutech29@gmail.com"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0]/40 hover:bg-[#28D8B0]/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#28D8B0]/10 text-[#28D8B0]">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs text-white/40">Email</p>
                      <p className="mt-1 text-sm font-semibold">
                        vayutech29@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+917303123047"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0]/40 hover:bg-[#28D8B0]/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#28D8B0]/10 text-[#28D8B0]">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs text-white/40">Phone</p>
                      <p className="mt-1 text-sm font-semibold">
                        +91 73031 23047
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#28D8B0]/10 text-[#28D8B0]">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs text-white/40">Location</p>
                      <p className="mt-1 text-sm font-semibold">
                        New Delhi, India
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917303123047"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-20 w-20 items-center justify-center rounded-2xl border border-[#B8D4E8] bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src="/WhatsApp_logo.png"
                  alt="WhatsApp"
                  className="h-12 w-12 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Starting prices */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-[1000px]">

          <div className="mb-8 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#28BFA0]">
              Starting points
            </p>

            <h2 className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
              Clear starting prices.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#64748B]">
              Simple starting points for the services with published
              pricing. Everything else is tailored to your requirements.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-[26px] border border-[#B8D4E8] bg-white p-7 text-center shadow-[0_15px_40px_rgba(0,80,152,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,80,152,0.09)]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#64748B]">
                Website Development
              </p>

              <p className="mt-3 text-2xl font-extrabold text-[#005098]">
                Starting at ₹7,999
              </p>
            </div>

            <div className="rounded-[26px] border border-[#E2E8F0] bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#9BC8D8] hover:shadow-[0_20px_50px_rgba(0,80,152,0.08)]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#64748B]">
                Social Media Management
              </p>

              <p className="mt-3 text-2xl font-extrabold text-[#005098]">
                Starting at ₹5,999/month
              </p>
            </div>

          </div>

          <p className="mt-6 text-center text-sm text-[#64748B]">
            App Development, UI/UX Design and Digital Marketing are
            available through custom quotes.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-24">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[36px] bg-[#005098] px-7 py-16 text-center text-white sm:px-12">

          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#28D8B0]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#28D8B0]/20 blur-3xl" />

          <div className="relative">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8FF5DF]">
              Your next project
            </p>

            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              Have an idea?
              <br />
              Let's make it real.
            </h2>

            <Link
              href="mailto:vayutech29@gmail.com"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#005098] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
            >
              Email Vayu Tech
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}