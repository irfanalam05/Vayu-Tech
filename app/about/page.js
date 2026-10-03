export const metadata = {
  title: 'About Us - Vayu Tech',
  description: 'Learn about Vayu Tech - a premium digital agency specializing in website and app development.',
}

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Vayu Tech</h1>
          <p className="text-xl text-white/60">
            Building exceptional digital experiences for businesses in India and beyond
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Who We Are</h2>
          <div className="space-y-6 text-lg text-white/60">
            <p>
              Vayu Tech is a digital agency focused on creating modern, high-quality websites, mobile applications, and digital solutions. We combine technical expertise with creative design to deliver products that not only look great but perform exceptionally.
            </p>
            <p>
              Based in India, we work with businesses of all sizes to establish and strengthen their digital presence. Whether you need a professional website, a mobile app, or a complete digital strategy, we bring a fresh perspective and proven execution.
            </p>
            <p>
              Our approach is straightforward: understand your goals, design thoughtfully, build with quality, and deliver results. We believe in clear communication, transparent processes, and creating solutions that truly serve your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-white/60">
                Custom websites and mobile apps built with modern frameworks and best practices for performance, security, and scalability.
              </p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-white/60">
                User-centered UI/UX design that balances aesthetics with functionality, creating intuitive experiences that users love.
              </p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Marketing</h3>
              <p className="text-white/60">
                Digital marketing strategies including SEO, content marketing, and paid campaigns to increase your online visibility.
              </p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Social Media</h3>
              <p className="text-white/60">
                Strategic social media management with content creation and community engagement across multiple platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Approach</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Modern Technology</h3>
              <p className="text-white/60">
                We use current, proven technologies and frameworks that ensure your project is built on a solid foundation with long-term viability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-white/60">
                Every project undergoes thorough testing and quality assurance. We deliver clean, maintainable code and polished user experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Clear Communication</h3>
              <p className="text-white/60">
                We believe in transparent, direct communication throughout the project. You know what&apos;s happening, when it&apos;s happening, and why.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Business-Focused</h3>
              <p className="text-white/60">
                Beautiful design and clean code matter, but what matters most is delivering solutions that drive real business results for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <div className="space-y-4 text-lg">
            <p className="text-white/60">
              <span className="text-white font-semibold">Location:</span> India
            </p>
            <p className="text-white/60">
              <span className="text-white font-semibold">Email:</span>{' '}
              <a href="mailto:vayutech29@gmail.com" className="text-accent hover:text-accent/80">
                vayutech29@gmail.com
              </a>
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-semibold"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
