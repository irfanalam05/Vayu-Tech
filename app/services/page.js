import {
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  Share2,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Services - Vayu Tech',
  description:
    'Website development, app development, UI/UX design, digital marketing, and social media management services.',
}

export default function Services() {
  const services = [
    {
      number: '01',
      icon: <Code2 className="h-7 w-7" />,
      title: 'Website Development',
      shortTitle: 'Digital experiences that work.',
      description:
        'We build fast, responsive and scalable websites designed around your business goals, users and growth.',
      features: [
        'Custom responsive design',
        'E-commerce integration',
        'Performance optimization',
        'SEO-friendly architecture',
        'Modern CMS integration',
      ],
      pricing: 'Starting at ₹7,999',
      featured: true,
    },
    {
      number: '02',
      icon: <Smartphone className="h-7 w-7" />,
      title: 'App Development',
      shortTitle: 'Products people return to.',
      description:
        'We create intuitive mobile applications with smooth interactions, reliable technology and scalable architecture.',
      features: [
        'iOS and Android apps',
        'Cross-platform development',
        'API integration',
        'Push notifications',
        'App store deployment',
      ],
      pricing: 'Request a Quote',
    },
    {
      number: '03',
      icon: <Palette className="h-7 w-7" />,
      title: 'UI/UX Design',
      shortTitle: 'Interfaces built around people.',
      description:
        'Thoughtful interfaces that balance visual quality, usability and business objectives across every screen.',
      features: [
        'User research and personas',
        'Wireframes and prototypes',
        'Visual design systems',
        'Usability testing',
        'Developer-ready handoff',
      ],
      pricing: 'Request a Quote',
    },
    {
      number: '04',
      icon: <TrendingUp className="h-7 w-7" />,
      title: 'Digital Marketing',
      shortTitle: 'Get discovered by the right people.',
      description:
        'Data-driven digital strategies that help your brand build visibility, attract the right audience and grow online.',
      features: [
        'SEO optimization',
        'Google Ads campaigns',
        'Content strategy',
        'Email marketing',
        'Analytics and reporting',
      ],
      pricing: 'Request a Quote',
    },
    {
      number: '05',
      icon: <Share2 className="h-7 w-7" />,
      title: 'Social Media Management',
      shortTitle: 'A stronger presence, consistently.',
      description:
        'Strategic social media management that keeps your brand active, recognizable and connected with its audience.',
      features: [
        'Content creation and scheduling',
        'Community management',
        'Platform strategy',
        'Brand voice development',
        'Performance analytics',
      ],
      pricing: 'Starting at ₹5,999/month',
    },
  ]

  return (
    <main className="overflow-hidden bg-[#F8FAFC] text-[#0B172A]">

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:pt-40">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#28D8B0]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1000px] text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8D4E8] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#005098] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#28D8B0]" />
            What we do
          </div>

          <h1 className="text-5xl font-extrabold tracking-[-0.04em] text-[#0B172A] sm:text-6xl lg:text-7xl">
            Digital solutions
            <br />
            <span className="text-[#005098]">built to move.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            From websites and mobile apps to design and digital growth,
            we connect strategy, technology and creativity into one
            consistent digital experience.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-[1200px]">

          {/* Intro */}
          <div className="mb-6 flex flex-col justify-between gap-5 border-b border-[#E2E8F0] pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#28BFA0]">
                Our capabilities
              </p>
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                One team. Multiple
                <br className="sm:hidden" /> digital possibilities.
              </h2>
            </div>
          </div>

          {/* Service cards */}
          <div className="space-y-5">
            {services.map((service) => (
              <article
                key={service.number}
                className={`group relative overflow-hidden rounded-[28px] border p-6 transition-all duration-300 ease-out sm:p-8 lg:p-10 ${
                  service.featured
                    ? 'border-[#9BC8D8] bg-white shadow-[0_18px_50px_rgba(0,80,152,0.08)]'
                    : 'border-[#E2E8F0] bg-white hover:-translate-y-1 hover:border-[#9BC8D8] hover:shadow-[0_18px_50px_rgba(0,80,152,0.08)]'
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#28D8B0]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative grid gap-8 lg:grid-cols-[80px_1fr_0.85fr] lg:gap-10">

                  {/* Number + icon */}
                  <div className="flex items-start justify-between lg:block">
                    <span className="text-xs font-bold tracking-[0.15em] text-[#005098]">
                      {service.number}
                    </span>

                    <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF8FC] text-[#005098] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#005098] group-hover:text-white">
                      {service.icon}
                    </div>
                  </div>

                  {/* Main content */}
                  <div>
                    <p className="mb-2 text-sm font-semibold text-[#28BFA0]">
                      {service.shortTitle}
                    </p>

                    <h3 className="text-2xl font-extrabold tracking-[-0.025em] sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#64748B]">
                      {service.description}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      <span className="text-lg font-extrabold text-[#005098]">
                        {service.pricing}
                      </span>

                      <Link
                        href="/contact"
                        className="group/link inline-flex items-center gap-2 rounded-full bg-[#005098] px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#073B6B]"
                      >
                        Get Started
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="border-t border-[#E2E8F0] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-[#0B172A]">
                      What's included
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-[#64748B]"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8F8F4] text-[#00A887]">
                            <Check className="h-3 w-3" />
                          </span>

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[36px] bg-[#005098] px-7 py-16 text-center text-white sm:px-12">

          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#28D8B0]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#28D8B0]/20 blur-3xl" />

          <div className="relative">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8FF5DF]">
              Have a project in mind?
            </p>

            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              Let's build something
              <br />
              worth remembering.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              Tell us what you're building and we'll help turn the idea
              into a digital experience that works.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#005098] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(255,255,255,0.25)]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}