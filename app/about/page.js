import {
  Code2,
  Search,
  Megaphone,
  Target,
  TrendingUp,
  Database,
  Users,
  Video,
} from 'lucide-react'

export const metadata = {
  title: 'About Us - Vayu Tech',
  description:
    'Learn about Vayu Tech - a digital agency helping businesses build, grow, and strengthen their digital presence.',
}

export default function About() {
  const services = [
    {
      title: 'Web & App Development',
      icon: Code2,
      description:
        'Modern, responsive websites and mobile applications built for performance, scalability, and real business needs.',
    },
    {
      title: 'SEO / Rank Higher',
      icon: Search,
      description:
        'Search engine optimization strategies designed to improve visibility, attract relevant traffic, and build long-term online growth.',
    },
    {
      title: 'SMO / Social Media Management',
      icon: Megaphone,
      description:
        'Strategic social media management that helps businesses build a consistent presence, engage audiences, and grow their community.',
    },
    {
      title: 'Meta & Google Ads',
      icon: Target,
      description:
        'Performance-focused paid advertising campaigns designed to reach the right audience and generate meaningful business results.',
    },
    {
      title: 'Brand Promotion',
      icon: TrendingUp,
      description:
        'Digital brand promotion strategies that help businesses increase awareness, communicate their value, and stand out online.',
    },
    {
      title: 'CRM Development',
      icon: Database,
      description:
        'Custom CRM solutions that organize customer data, streamline workflows, and help teams manage their business more effectively.',
    },
    {
      title: 'Influencer Marketing',
      icon: Users,
      description:
        'Influencer-led campaigns that connect brands with relevant audiences through authentic and engaging digital content.',
    },
    {
      title: 'Content Writing & Video Production',
      icon: Video,
      description:
        'Creative content and video solutions designed to communicate ideas clearly and create stronger connections with your audience.',
    },
  ]

  const approach = [
    {
      title: 'Understand',
      description:
        'We first understand your business, goals, audience, and the challenges you want to solve.',
    },
    {
      title: 'Plan',
      description:
        'We turn those requirements into a clear strategy with practical solutions and focused execution.',
    },
    {
      title: 'Build',
      description:
        'Our team combines technology, design, and creativity to build solutions that are reliable and effective.',
    },
    {
      title: 'Grow',
      description:
        'We focus on long-term value, helping your digital presence evolve as your business grows.',
    },
  ]

  return (
    <main className="overflow-hidden bg-[#F8FAFC] text-[#0B172A]">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#28D8B0]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[900px] text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-[#B8D4E8] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#005098] shadow-sm">
            About Vayu Tech
          </div>

          <h1 className="text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Building digital
            <br />
            <span className="text-[#005098]">experiences that matter.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            We help businesses build, grow, and strengthen their digital
            presence through technology, design, and digital marketing.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#28BFA0]">
                Who We Are
              </p>

              <h2 className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                A digital partner focused on meaningful results.
              </h2>
            </div>

            <div className="max-w-3xl space-y-5 text-base leading-7 text-[#64748B] sm:text-lg">
              <p>
                Vayu Tech is a digital agency focused on creating modern,
                high-quality digital experiences and solutions for businesses.
                We combine technology, creative thinking, and digital strategy
                to help brands build a stronger presence online.
              </p>

              <p>
                Based in India, we work with businesses of different sizes and
                industries. From websites and applications to marketing,
                content, and customer-focused digital solutions, we bring
                different capabilities together under one team.
              </p>

              <p>
                Our approach is simple: understand the business, identify the
                right opportunity, build thoughtfully, and focus on outcomes
                that create real value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#28BFA0]">
              What We Do
            </p>

            <h2 className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
              Multiple digital capabilities. One focused team.
            </h2>

            <p className="mt-4 text-base leading-7 text-[#64748B]">
              From building digital products to growing your online presence,
              we provide the capabilities businesses need to move forward.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[26px] border border-[#B8D4E8] bg-white p-7 shadow-[0_15px_40px_rgba(0,80,152,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,80,152,0.09)]"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF8FC] text-[#005098] transition-colors duration-300 group-hover:bg-[#28D8B0] group-hover:text-[#071B30]">
                  {(() => {
                    const Icon = service.icon
                    return <Icon className="h-5 w-5" />
                  })()}
                </div>

                <h3 className="text-lg font-extrabold text-[#0B172A]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#28BFA0]">
              Our Approach
            </p>

            <h2 className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
              Simple process. Focused execution.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#64748B]">
              We keep the process clear and collaborative so every project
              moves from idea to execution with purpose.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-[26px] border border-[#B8D4E8] bg-white p-7 shadow-[0_15px_40px_rgba(0,80,152,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#28D8B0] hover:shadow-[0_20px_50px_rgba(40,216,176,0.14)]"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#005098] text-sm font-bold text-white transition-all duration-300 group-hover:bg-[#28D8B0] group-hover:text-[#071B30]">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-lg font-extrabold transition-colors duration-300 group-hover:text-[#005098]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[36px] bg-[#005098] px-7 py-16 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#28D8B0]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#28D8B0]/20 blur-3xl" />

          <div className="relative">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8FF5DF]">
              Let&apos;s work together
            </p>

            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              Have an idea?
              <br />
              Let&apos;s make it real.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/70">
              Tell us what you&apos;re building and let&apos;s find the right
              digital solution for your business.
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#005098] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
            >
              Start a Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}