'use client'

import { useState } from 'react'
import { Mail, MapPin } from 'lucide-react'

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
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = `Project Inquiry: ${formData.service || 'General'}`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}`

    const mailtoLink = `mailto:vayutech29@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-white/60">
            Let&apos;s discuss your project and how we can help bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:border-accent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:border-accent transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="p-6 border border-white/10 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-accent">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:vayutech29@gmail.com"
                        className="text-white/60 hover:text-accent transition-colors"
                      >
                        vayutech29@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-white/10 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-accent">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Location</h3>
                      <p className="text-white/60">India</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <p className="text-white/60">
                    We typically respond to inquiries within 24 hours during business days.
                  </p>
                </div>

                <div className="p-6 border border-accent/50 rounded-lg bg-accent/5">
                  <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
                  <p className="text-white/60 mb-4">
                    For urgent inquiries or immediate assistance, email us directly at the address above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Reference */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Starting Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Website Development</h3>
              <p className="text-2xl font-bold text-accent">Starting at ₹7,999</p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Social Media Management</h3>
              <p className="text-2xl font-bold text-accent">Starting at ₹5,999/month</p>
            </div>
          </div>
          <p className="text-white/60">
            For App Development, UI/UX Design, and Digital Marketing, please request a custom quote based on your requirements.
          </p>
        </div>
      </section>
    </main>
  )
}
