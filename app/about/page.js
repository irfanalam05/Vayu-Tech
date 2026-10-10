import Link from 'next/link'
import {
  ArrowRight,
  Smartphone,
  ShoppingCart,
  Cloud,
  ChartNoAxesColumnIncreasing,
  Target,
  Code2,
  Users,
  Puzzle,
  ShieldCheck,
  Layers3,
} from 'lucide-react'

export const metadata = {
  title: 'About Us - Vayu Tech',
  description:
    'Discover Vayu Tech, your digital transformation partner for web applications, mobile apps, marketplaces and digital growth.',
}

const capabilities = [
  {
    title: 'Custom Mobile & Web App Development',
    description:
      'High-performance cross-platform apps (Flutter/React Native) and scalable web solutions.',
    icon: Smartphone,
  },
  {
    title: 'Multi-Vendor & E-Commerce Ecosystems',
    description:
      'Advanced discovery marketplaces, marketplace dashboards, and admin panels.',
    icon: ShoppingCart,
  },
  {
    title: 'Cloud Infrastructure & Integration',
    description:
      'Secure, reliable cloud hosting and seamless third-party API integrations.',
    icon: Cloud,
  },
  {
    title: 'Digital Growth & Marketing',
    description:
      'Strategic marketing solutions to help brands launch, scale, and capture their target audience effectively.',
    icon: ChartNoAxesColumnIncreasing,
  },
]

const reasons = [
  {
    title: 'Quality-First Approach',
    description:
      'Clean code, scalable architecture, and rigorous testing.',
    icon: Code2,
  },
  {
    title: 'Client-Centric Collaboration',
    description:
      'Transparent communication and dedicated support at every stage of the project.',
    icon: Users,
  },
  {
    title: 'End-to-End Execution',
    description:
      'From a simple idea to a fully launched product in the market.',
    icon: Puzzle,
  },
]

export default function About() {
  return (
    <main className="overflow-hidden bg-[#F8FAFC] text-[#071B30]">
      
      {/* HERO */}
      <section className="relative px-5 pb-12 pt-32 sm:pt-36 lg:pb-16 lg:pt-40">
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#28D8B0]/10 blur-[100px]" />

        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          {/* Hero Content */}
          <div className="relative z-10 text-center lg:text-left">
            <span className="inline-flex rounded-full border border-[#B8D4E8] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#005098]">
              About Vayu Tech
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[54px]">
              Building digital
              <span className="block text-[#005098]">
                experiences that matter.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#64748B] sm:text-base sm:leading-7 lg:mx-0">
              We help businesses build, grow, and strengthen their digital
              presence through technology, design, and digital marketing.
            </p>

            <div className="mt-7 flex justify-center lg:justify-start">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#005098] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#005098]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#28D8B0] hover:text-[#071B30]"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Founder Stats */}
            <div className="mt-8 grid max-w-[420px] grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#DCEAF2] bg-white p-5 sm:p-6">
                <p className="text-3xl font-semibold tracking-tight text-[#071B30] sm:text-4xl">
                  May ’25
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                  Founded
                </p>
              </div>

              <div className="rounded-2xl border border-[#DCEAF2] bg-white p-5 sm:p-6">
                <p className="text-3xl font-semibold tracking-tight text-[#071B30] sm:text-4xl">
                  10+
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                  Team Members
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-medium text-[#64748B] lg:justify-start">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#005098]" />
                Quality-focused delivery
              </span>
              <span className="flex items-center gap-2">
                <Layers3 className="h-4 w-4 text-[#005098]" />
                End-to-end solutions
              </span>
            </div>
          </div>

          {/* Founder Profile */}
          <div className="mx-auto w-full max-w-[470px]">
            <div className="relative overflow-hidden rounded-[30px] border border-[#B8D4E8] bg-white p-3 shadow-[0_25px_70px_rgba(0,80,152,0.12)] sm:p-4">
              <div className="relative overflow-hidden rounded-[22px] bg-[#EAF4F8]">
                <div className="group overflow-hidden rounded-2xl">
                  <img
                    src="/harshita-founder.jpeg"
                    alt="Ms. Harshita, Founder and CEO of Vayu Tech"
                    className="h-[340px] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 sm:h-[410px]"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071B30]/90 via-[#071B30]/30 to-transparent px-5 pb-5 pt-20">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8FF5DF]">
                    Founder &amp; CEO
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold text-white">
                    Ms. Harshita
                  </h2>
                  <p className="mt-1 text-sm text-white/80">
                    Vayu Tech
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-2 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF6FC] text-[#005098]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#071B30]">
                    Leadership &amp; Innovation
                  </p>
                  <p className="mt-1 text-xs text-[#64748B]">
                    Building meaningful digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* WHO WE ARE — COMPLETE OFFICIAL INTRODUCTION */}
      <section className="border-y border-[#E2EDF3] bg-white px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-[1200px] items-start gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.17em] text-[#20A98E]">
              Who We Are
            </p>

            <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
              A digital partner focused on meaningful results.
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-[#28D8B0]" />
          </div>

          <div className="space-y-5 text-sm leading-7 text-[#64748B] sm:text-base">
            <p>
              Welcome to Vayu Tech, your trusted digital transformation
              partner dedicated to turning bold ideas into scalable,
              high-performance digital products. We specialize in building
              cutting-edge web applications, mobile apps, multi-vendor
              marketplaces, and customized software solutions tailored to
              modern business needs.
            </p>

            <p>
              At Vayu Tech, we combine technical excellence with user-centric
              design to deliver robust, secure, and future-ready platforms.
              Whether you are an early-stage startup looking to launch your
              MVP or an established enterprise scaling your operations, our
              expert team provides end-to-end development services—from
              conceptualization and UI/UX design to robust backend engineering
              and deployment.
            </p>
          </div>

        </div>
      </section>

      {/* WHAT WE DO BEST */}
      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px]">

          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.17em] text-[#20A98E]">
              What We Do Best
            </p>

            <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl">
              Comprehensive digital solutions for modern businesses.
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#64748B] sm:text-base">
              From product development to digital growth, we provide
              end-to-end solutions tailored to your goals.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="group rounded-[22px] border border-[#DCEAF2] bg-white p-5 shadow-[0_8px_25px_rgba(0,80,152,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0] hover:shadow-[0_16px_35px_rgba(40,216,176,0.12)] sm:p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF6FC] text-[#005098] transition-all duration-300 group-hover:bg-[#28D8B0] group-hover:text-[#071B30]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-base font-extrabold leading-6">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="border-y border-[#E2EDF3] bg-white px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-2 lg:gap-12">

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.17em] text-[#20A98E]">
              Our Vision
            </p>

            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E8F5FC] text-[#005098]">
                <Target className="h-7 w-7" />
              </div>

              <div>
                <h2 className="text-2xl font-black leading-tight sm:text-3xl">
                  Empowering businesses through innovative technology.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#64748B] sm:text-base">
                  To empower businesses of all sizes with innovative
                  technology solutions that drive efficiency, accelerate
                  growth, and deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Vision image */}
          <div className="group relative h-[230px] overflow-hidden rounded-[26px] border border-[#DCEAF2] bg-[#E5F3FB] sm:h-[300px]">
            <img
              src="/our-vision-tech.png"
              alt="Digital technology network representing innovation and business growth"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B30]/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8FF5DF]">
                Our Vision
              </p>
              <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                Turning ideas into growth.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px]">

          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.17em] text-[#20A98E]">
              Why Choose Us?
            </p>

            <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl">
              Your success is our priority.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {reasons.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="group flex gap-4 rounded-[22px] border border-[#DCEAF2] bg-white p-5 shadow-[0_8px_25px_rgba(0,80,152,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0] hover:shadow-[0_16px_35px_rgba(40,216,176,0.12)] sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF6FC] text-[#005098] transition-all duration-300 group-hover:bg-[#28D8B0] group-hover:text-[#071B30]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold leading-6">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#64748B]">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-14 sm:pb-16">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-gradient-to-r from-[#073B6B] via-[#005098] to-[#1689D0] px-6 py-10 text-white shadow-[0_20px_55px_rgba(0,80,152,0.16)] sm:px-10 sm:py-12 lg:px-12">

          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-[30px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 right-20 h-64 w-64 rounded-full bg-[#28D8B0]/25 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8FF5DF]">
                Let&apos;s Build Together
              </p>

              <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
                Partner with Vayu Tech and let&apos;s build the future of your business together.
              </h2>
            </div>

            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#005098] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#28D8B0] hover:text-[#071B30]"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
