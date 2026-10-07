'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link'
import {
  X,
  ArrowDownRight,
  ArrowRight,
  Check,
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  Globe2,
  Sparkles,
  Search,
  Megaphone,
  Target,
  Database,
  Users,
  Video,
} from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Web & App Development',
    icon: Code2,
    text: 'Modern, responsive websites and mobile applications built around your business goals.',
  },
  {
    number: '02',
    title: 'SEO / Rank Higher',
    icon: Search,
    text: 'Search-focused strategies that improve visibility and help the right customers discover your business.',
  },
  {
    number: '03',
    title: 'SMO / Social Media Management',
    icon: Megaphone,
    text: 'Consistent social media management that keeps your brand active, recognizable and connected.',
  },
  {
    number: '04',
    title: 'Meta & Google Ads',
    icon: Target,
    text: 'Targeted paid campaigns designed to reach the right audience and generate meaningful results.',
  },
  {
    number: '05',
    title: 'Brand Promotion',
    icon: TrendingUp,
    text: 'Creative promotional strategies that strengthen your brand presence and connect with your audience.',
  },
  {
    number: '06',
    title: 'CRM Development',
    icon: Database,
    text: 'Custom CRM solutions that organize customer relationships, workflows and business operations.',
  },
  {
    number: '07',
    title: 'Influencer Marketing',
    icon: Users,
    text: 'Influencer-led campaigns that connect your brand with relevant audiences and build trust.',
  },
  {
    number: '08',
    title: 'Content Writing & Video Production',
    icon: Video,
    text: 'Engaging written and visual content created to communicate your brand and drive attention.',
  },
]

const work = [
  {
    name: 'EZ Tuitions',
    type: 'Web Development',
    description:'A modern tutoring platform designed to connect students with verified home and online tutors, making it easier to discover the right learning support and get started with confidence.',
    image: '/Website img/EZ-Tuitions.png',
    link: 'https://www.eztuitions.com/',
  },

  {
    name: 'Chand Digital Services',
    type: 'Web Development',
    description:
      'A digital services platform offering a wide range of legal, compliance, documentation, and business support services through a simple and accessible online experience.',
    image: '/Website img/Chand-Digital-Services.png',
    link: 'https://www.chanddigitalservice.com/',
  },

  {
    name: 'GRT Jewellers',
    type: 'Mobile App',
    description:
      'A premium jewellery shopping app offering curated collections, product discovery, offers, wishlist, cart, delivery options, and a seamless online shopping experience.',
    image: '/App img/GRT-Jewellers.png',
    link: 'https://play.google.com/store/apps/details?id=com.grtjewels.oriana',
  },
]

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="overflow-hidden bg-[#F8FAFC] text-[#0B172A]">
      {/* =========================================================
            ENTRY POPUP / PROJECT CTA
            Opens automatically after 1.2 seconds
        ========================================================= */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#073B6B]/35 px-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg overflow-hidden rounded-[30px] border border-white/70 bg-white p-8 shadow-[0_30px_100px_rgba(7,59,107,0.25)] sm:p-10">

            {/* Cyan glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#28D8B0]/20 blur-3xl" />

            {/* Close */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#64748B] transition hover:bg-[#F8FAFC] hover:text-[#073B6B]"
              aria-label="Close popup"
            >
              <X size={17} />
            </button>

            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-[#28D8B0]/30 bg-[#28D8B0]/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#005098]">
                Let's Build Together
              </span>

              <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight tracking-tight text-[#0B172A] sm:text-4xl">
                Have a digital idea in mind?
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#64748B]">
                Let's turn your idea into a modern website, app, or digital
                experience built for growth.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  onClick={() => setShowPopup(false)}
                  className="btn inline-flex items-center justify-center gap-2 rounded-full bg-[#005098] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#005098]/20"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </Link>

                <button
                  onClick={() => setShowPopup(false)}
                  className="btn rounded-full border border-[#E2E8F0] px-6 py-3 text-sm font-semibold text-[#0B172A]"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* =====================================================
              HERO
          ===================================================== */}
          <section className="relative overflow-hidden bg-[#F8FAFC] px-5 pb-8 pt-28 sm:pt-32">

            {/* Soft background glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-[-180px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[#28D8B0]/10 blur-[120px]" />

              <div className="absolute left-[-120px] top-[38%] h-[420px] w-[420px] rounded-full bg-[#005098]/[0.07] blur-[120px]" />

              <div className="absolute right-[-120px] top-[35%] h-[450px] w-[450px] rounded-full bg-[#28D8B0]/[0.07] blur-[120px]" />
            </div>

            {/* Subtle grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.22]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,80,152,.055) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,80,152,.055) 1px, transparent 1px)
                `,
                backgroundSize: '72px 72px',
                maskImage:
                  'radial-gradient(circle at center, black 15%, transparent 72%)',
                WebkitMaskImage:
                  'radial-gradient(circle at center, black 15%, transparent 72%)',
              }}
            />

            {/* Orbital rings */}
            <div className="pointer-events-none absolute left-1/2 top-[46%] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#005098]/[0.06]" />

            <div className="pointer-events-none absolute left-1/2 top-[46%] h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#28D8B0]/[0.05]" />

            <div className="relative mx-auto flex min-h-[620px] w-[min(1280px,100%)] flex-col items-center justify-center text-center">

              {/* Floating service - left */}
              <div className="hero-float absolute left-[3%] top-[25%] hidden items-center gap-3 rounded-[20px] border border-white bg-white/85 px-4 py-3 text-left shadow-[0_18px_45px_rgba(7,59,107,.10)] backdrop-blur-xl xl:flex">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF3FA] text-[#005098]">
                  <Code2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#94A3B8]">
                    Development
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#0B172A]">
                    Web & App
                  </p>
                </div>
              </div>

              {/* Floating service - right */}
              <div className="hero-float-slow absolute right-[3%] top-[15%] hidden items-center gap-3 rounded-[20px] border border-white bg-white/85 px-4 py-3 text-left shadow-[0_18px_45px_rgba(7,59,107,.10)] backdrop-blur-xl xl:flex">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF3FA] text-[#005098]">
                  <Search className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#94A3B8]">
                    Visibility
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#0B172A]">
                    SEO / Rank Higher
                  </p>
                </div>
              </div>

              {/* Floating service - lower left */}
              <div className="hero-float-slow absolute bottom-[33%] left-[8%] hidden items-center gap-3 rounded-[20px] border border-white bg-white/85 px-4 py-3 text-left shadow-[0_18px_45px_rgba(7,59,107,.10)] backdrop-blur-xl xl:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7F8F4] text-[#008D75]">
                  <Megaphone className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#94A3B8]">
                    Social
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#0B172A]">
                    Social Media
                  </p>
                </div>
              </div>

              {/* Floating service - lower right */}
              <div className="hero-float absolute bottom-[38%] right-[8%] hidden items-center gap-3 rounded-[20px] border border-white bg-white/85 px-4 py-3 text-left shadow-[0_18px_45px_rgba(7,59,107,.10)] backdrop-blur-xl xl:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7F8F4] text-[#008D75]">
                  <Target className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#94A3B8]">
                    Advertising
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#0B172A]">
                    Meta & Google Ads
                  </p>
                </div>
              </div>

              {/* Small orbit points */}
              <div className="absolute left-[19%] top-[22%] hidden h-3 w-3 rounded-full bg-[#28D8B0] shadow-[0_0_18px_rgba(40,216,176,.7)] xl:block" />

              <div className="absolute right-[20%] top-[27%] hidden h-2.5 w-2.5 rounded-full bg-[#005098] shadow-[0_0_16px_rgba(0,80,152,.5)] xl:block" />

              <div className="absolute bottom-[27%] left-[24%] hidden h-2 w-2 rounded-full bg-[#005098]/60 xl:block" />

              <div className="absolute bottom-[29%] right-[24%] hidden h-2.5 w-2.5 rounded-full bg-[#28D8B0]/70 xl:block" />

              {/* Main hero */}
              <div className="relative z-10 max-w-[900px]">

                {/* Eyebrow */}
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#B8D4E8] bg-white/85 px-5 py-2.5 shadow-[0_8px_30px_rgba(15,23,42,.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0]">
                  <Sparkles className="h-3.5 w-3.5 text-[#28D8B0]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#005098]">
                    What we build
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-[54px] font-bold leading-[0.94] tracking-[-0.065em] text-[#0B172A] sm:text-[72px] md:text-[88px] lg:text-[104px]">
                  One team.
                  <br />

                  Multiple digital
                  <br />

                  <span className="bg-gradient-to-r from-[#005098] via-[#087E92] to-[#28D8B0] bg-clip-text text-transparent">
                    possibilities.
                  </span>
                </h1>

                {/* Description */}
                <p className="mx-auto mt-7 max-w-[680px] text-sm leading-7 text-[#64748B] sm:text-base md:text-lg">
                  From your first idea to a launched product, we bring strategy,
                  design and technology together.
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">

                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#005098] px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_35px_rgba(0,80,152,.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#073B6B] hover:shadow-[0_20px_40px_rgba(0,80,152,.25)]"
                  >
                    Explore services
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full border border-[#CBD5E1] bg-white/85 px-7 py-3.5 text-sm font-bold text-[#0B172A] shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#005098]/40 hover:text-[#005098]"
                  >
                    Start a Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                </div>

                {/* Moving Capability Strip */}
                <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-hidden">

                  {/* Left fade */}
                  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent" />

                  {/* Right fade */}
                  <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent" />

                  <div className="flex w-max animate-marquee gap-3">

                    {[
                      ['Web & App Development', Code2],
                      ['SEO / Rank Higher', Search],
                      ['SMO / Social Media', Megaphone],
                      ['Meta & Google Ads', Target],
                      ['Brand Promotion', TrendingUp],
                      ['CRM Development', Database],
                      ['Influencer Marketing', Users],
                      ['Content & Video Production', Video],

                      // Duplicate for seamless loop
                      ['Web & App Development', Code2],
                      ['SEO / Rank Higher', Search],
                      ['SMO / Social Media', Megaphone],
                      ['Meta & Google Ads', Target],
                      ['Brand Promotion', TrendingUp],
                      ['CRM Development', Database],
                      ['Influencer Marketing', Users],
                      ['Content & Video Production', Video],
                    ].map(([label, Icon], index) => (
                      <div
                        key={`${label}-${index}`}
                        className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/80 px-5 py-3 text-xs font-semibold text-[#64748B] shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#9BC8D8] hover:text-[#005098]"
                      >
                        <Icon className="h-3.5 w-3.5 text-[#005098] transition-transform duration-300 group-hover:scale-110" />
                        {label}
                      </div>
                    ))}

                  </div>

                  <style jsx>{`
                    @keyframes marquee {
                      from {
                        transform: translateX(0);
                      }
                      to {
                        transform: translateX(-50%);
                      }
                    }

                    .animate-marquee {
                      animation: marquee 32s linear infinite;
                    }
                  `}</style>

                </div>
              </div>

            </div>
          </section>

      {/* =====================================================
              DIGITAL CAPABILITIES
          ===================================================== */}
          <section className="relative bg-[#F8FAFC] pt-4 pb-16 sm:pt-6 sm:pb-20">

            <div className="mx-auto w-[min(1200px,calc(100%-40px))]">

              {/* Section heading */}
              <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#005098]">
                  Our digital capabilities
                </p>

                <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] text-[#0B172A] sm:text-5xl">
                  Everything your business needs
                  <br className="hidden sm:block" />
                  <span className="text-[#005098]"> to grow digitally.</span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
                  From development and marketing to automation and content,
                  we bring the right digital capabilities together.
                </p>

              </div>


              {/* Services grid */}
              <div className="grid gap-4 md:grid-cols-2">

                {services.map((service) => {
                  const Icon = service.icon

                  return (
                    <div
                      key={service.number}
                      className="group relative overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#9BC8D8] hover:shadow-[0_18px_45px_rgba(7,59,107,0.09)]"
                    >

                      {/* Hover glow */}
                      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#28D8B0]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative flex items-start gap-5">

                        {/* Number + Icon */}
                        <div className="shrink-0">

                          <span className="text-xs font-bold tracking-[0.12em] text-[#94A3B8]">
                            {service.number}
                          </span>

                          <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF3FA] text-[#005098] transition-all duration-300 group-hover:bg-[#005098] group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </div>

                        </div>


                        {/* Content */}
                        <div className="min-w-0 flex-1">

                          <div className="flex items-start justify-between gap-3">

                            <h3 className="text-xl font-bold tracking-[-0.02em] text-[#0B172A] transition-colors group-hover:text-[#005098] sm:text-2xl">
                              {service.title}
                            </h3>

                            <ArrowDownRight className="mt-1 h-5 w-5 shrink-0 text-[#94A3B8] transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#005098]" />

                          </div>

                          <p className="mt-3 max-w-xl text-sm leading-6 text-[#64748B]">
                            {service.text}
                          </p>

                        </div>

                      </div>

                    </div>
                  )
                })}

              </div>

            </div>

          </section>

      {/* =====================================================
          PROBLEM / SOLUTION
      ===================================================== */}
      <section className="bg-white pt-0 pb-12">

        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">

          <div className="mx-auto mb-10 max-w-3xl text-center">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#005098]">
              Beyond the deliverable
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-.035em] sm:text-5xl">
              What are you really
              <span className="text-[#005098]"> paying for?</span>
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-[#64748B]">
              Not just a website. Not just an app. You are building the
              digital system your customers experience every day.
            </p>

          </div>


          <div className="grid gap-4 lg:grid-cols-2">

            {[
              {
                small: 'A Website',
                title: 'A digital front door.',
                text: 'A fast, clear and trustworthy experience that communicates what your business does within seconds.',
              },
              {
                small: 'An App',
                title: 'A product people return to.',
                text: 'Useful interactions designed around real user behaviour rather than unnecessary features.',
              },
              {
                small: 'Digital Marketing',
                title: 'A way to get discovered.',
                text: 'A stronger digital presence that helps the right people find and understand your brand.',
              },
              {
                small: 'Your Brand',
                title: 'A connected ecosystem.',
                text: 'Design, technology and communication working together instead of feeling like separate pieces.',
              },
            ].map((item, index) => (

              <div
                key={index}
                className="group grid gap-5 rounded-3xl border border-[#E2E8F0] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.06] hover:border-[#9BC8D8] hover:shadow-[0_18px_45px_rgba(7,59,107,0.10)] sm:grid-cols-[150px_1fr]"
              >

                <p className="text-xs font-semibold text-[#94A3B8]">
                  {item.small}
                </p>

                <div>
                  <h3 className="text-2xl font-bold group-hover:text-[#005098]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#64748B]">
                    {item.text}
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURED WORK
      ===================================================== */}
      <section className="bg-[#071B30] pt-16 pb-24 text-white">

        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">

          <div className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#28D8B0]">
                Selected work
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-.035em] sm:text-5xl">
                Digital experiences,
                <br />
                made with intention.
              </h2>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#28D8B0]"
            >
              View all work
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>


          <div className="space-y-8">

            {work.map((project, index) => (

              <div
                key={project.name}
                className="group grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[.035] lg:grid-cols-[1.1fr_.9fr]"
              >

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block min-h-[280px] overflow-hidden bg-white"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="absolute bottom-6 right-7 rounded-full border border-white/30 bg-[#071B30]/80 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur">
                    {project.type}
                  </div>
                </a>


                <div className="flex flex-col items-center justify-center p-8 text-center sm:p-12">

                  <h3 className="text-3xl font-bold sm:text-4xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-slate-400">
                    {project.description}
                  </p>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          VAYU ECOSYSTEM
      ===================================================== */}
      <section className="relative overflow-hidden py-20">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#28D8B0]/10 blur-[100px]" />

        <div className="relative mx-auto w-[min(1200px,calc(100%-40px))]">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#005098]">
              The Vayu ecosystem
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-.035em] sm:text-5xl">
              Design, technology and growth —
              <span className="text-[#005098]"> connected.</span>
            </h2>

            <p className="mt-5 leading-7 text-[#64748B]">
              Instead of treating every digital requirement separately,
              we connect the pieces into one consistent experience.
            </p>

          </div>


          <div className="relative mx-auto mt-16 h-[620px] max-w-4xl">

            {/* CURVED ECOSYSTEM CONNECTORS */}
            <svg
              className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
              viewBox="0 0 800 560"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Web & App → Vayu */}
              <path
                d="M160 70 C245 70 300 145 335 220"
                stroke="#B8D4E8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M335 220 C300 145 245 70 160 70"
                stroke="#28D8B0"
                strokeWidth="3"
                strokeLinecap="butt"
                pathLength="1"
                strokeDasharray="0.03 0.97"
                className="ecosystem-flow"
              />

              {/* SEO → Vayu */}
              <path
                d="M160 225 C250 225 295 245 335 260"
                stroke="#B8D4E8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M335 260 C295 245 250 225 160 225"
                stroke="#005098"
                strokeWidth="3"
                strokeLinecap="butt"
                pathLength="1"
                className="ecosystem-flow"
              />

              {/* Social Media → Vayu */}
              <path
                d="M160 380 C245 380 295 320 335 300"
                stroke="#B8D4E8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M335 300 C295 320 245 380 160 380"
                stroke="#28D8B0"
                strokeWidth="3"
                strokeLinecap="butt"
                pathLength="1"
                className="ecosystem-flow"
              />

              {/* Meta & Google Ads → Vayu */}
              <path
                d="M160 490 C245 490 300 360 335 335"
                stroke="#B8D4E8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M335 335 C300 360 245 490 160 490"
                stroke="#005098"
                strokeWidth="3"
                strokeLinecap="butt"
                pathLength="1"
                className="ecosystem-flow"
              />

              {/* Vayu → Brand Promotion */}
              <path
                d="M465 220 C500 145 555 70 640 70"
                stroke="#B8D4E8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M465 220 C500 145 555 70 640 70"
                stroke="#28D8B0"
                strokeWidth="3"
                strokeLinecap="butt"
                pathLength="1"
                className="ecosystem-flow"
              />

              {/* Vayu → CRM */}
              <path
                d="M465 260 C505 245 550 225 640 225"
                stroke="#B8D4E8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M465 260 C505 245 550 225 640 225"
                stroke="#005098"
                strokeWidth="3"
                strokeLinecap="butt"
                pathLength="1"
                className="ecosystem-flow"
              />

              {/* Vayu → Influencer */}
              <path
                d="M465 300 C505 320 555 380 640 380"
                stroke="#B8D4E8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M465 300 C505 320 555 380 640 380"
                stroke="#28D8B0"
                strokeWidth="3"
                strokeLinecap="butt"
                pathLength="1"
                className="ecosystem-flow"
              />

              {/* Vayu → Content & Video */}
              <path
                d="M465 335 C500 360 555 490 640 490"
                stroke="#B8D4E8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M465 335 C500 360 555 490 640 490"
                stroke="#005098"
                strokeWidth="3"
                strokeLinecap="butt"
                pathLength="1"
                className="ecosystem-flow"
              />
            </svg>

            {/* center */}
            <div className="group absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-white bg-[#005098] text-center text-white shadow-2xl shadow-[#005098]/25 transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_0_45px_rgba(40,216,176,0.35)]">

              <Globe2 className="mb-2 h-6 w-6" />

              <span className="text-sm font-bold">
                Vayu Tech
              </span>

              <span className="mt-1 text-[9px] text-blue-100">
                Digital partner
              </span>

            </div>


            {[
              ['Web & App', 'Websites and mobile applications', 'left-0 top-0', Code2],
              ['SEO', 'Search visibility and growth', 'left-0 top-[160px]', Search],
              ['Social Media', 'Social media management', 'left-0 top-[320px]', Megaphone],
              ['Meta & Google Ads', 'Targeted paid campaigns', 'left-0 top-[480px]', Target],

              ['Brand Promotion', 'Build a stronger brand presence', 'right-0 top-0', TrendingUp],
              ['CRM', 'Customer and workflow management', 'right-0 top-[160px]', Database],
              ['Influencer', 'Creator-led brand campaigns', 'right-0 top-[320px]', Users],
              ['Content & Video', 'Writing and visual production', 'right-0 top-[480px]', Video],
            ].map(([title, text, position, Icon]) => (
              <div
                key={title}
                className={`group ecosystem-card absolute ${position} w-40 ... overflow-hidden rounded-[22px] border border-[#D8E6EF] bg-white/90 p-3.5 text-center shadow-[0_12px_35px_rgba(7,59,107,0.07)] backdrop-blur-xl transition-all duration-300 ease-out hover:scale-[1.04] hover:border-[#28D8B0]/60 hover:shadow-[0_20px_55px_rgba(0,80,152,0.16)]`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#28D8B0]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D8EAF2] bg-gradient-to-br from-[#EAF5FB] to-[#F2FBF8] text-[#005098] shadow-[0_6px_18px_rgba(0,80,152,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#28D8B0]/50 group-hover:shadow-[0_8px_24px_rgba(40,216,176,0.18)]">
                  <Icon className="h-4 w-4" />
                </div>

                <h3 className="mt-3 text-sm font-bold">
                  {title}
                </h3>

                <p className="mt-1 text-[11px] text-[#64748B]">
                  {text}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="border-y border-[#E2E8F0] bg-white pt-10 pb-0">

        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#005098]">
                How we work
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-.035em] sm:text-5xl">
                Simple process.
                <br />
                Serious execution.
              </h2>

              <p className="mt-6 max-w-sm leading-7 text-[#64748B]">
                A straightforward process keeps projects focused,
                transparent and moving forward.
              </p>

            </div>


            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">

              {[
                ['01', 'Discover', 'Understand your business, audience and goals.'],
                ['02', 'Design', 'Create the visual direction and user experience.'],
                ['03', 'Build', 'Develop the product with clean, reliable technology.'],
                ['04', 'Launch', 'Test, refine and get your digital experience live.'],
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="group relative grid gap-5 overflow-hidden rounded-2xl px-4 py-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#EEF8FC] hover:shadow-[0_14px_40px_rgba(0,80,152,0.10)] sm:grid-cols-[60px_180px_1fr] sm:items-center"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_50%,rgba(40,216,176,0.12),transparent_55%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="text-xs font-bold text-[#005098]">
                    {number}
                  </span>

                  <h3 className="text-xl font-bold">
                    {title}
                  </h3>

                  <p className="text-sm leading-6 text-[#64748B]">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PRICING
      ===================================================== */}
      <section className="pt-20 pb-16">

        <div className="mx-auto w-[min(1000px,calc(100%-40px))]">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#005098]">
              Starting points
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-.035em] sm:text-5xl">
              Clear starting prices.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[#64748B]">
              Every project is different. These prices give you a starting
              point before we understand your exact requirements.
            </p>

          </div>


          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <div className="group rounded-[29px] border border-[#B8D4E8] bg-white p-8 shadow-xl shadow-[#005098]/5 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-[#28D8B0]/50 hover:shadow-[0_20px_50px_rgba(0,80,152,0.12)]">

              <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Website
              </p>

              <p className="mt-5 text-3xl font-bold text-[#005098]">
                ₹7,999+
              </p>

              <p className="mt-4 text-sm leading-6 text-[#64748B]">
                Custom website development for your business.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#005098] transition-all duration-300 hover:text-[#073B6B]"
              >
                Discuss your website
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>


            <div className="group rounded-[28px] border border-[#E2E8F0] bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-[#28D8B0]/50 hover:shadow-[0_20px_50px_rgba(0,80,152,0.10)]">

              <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Social Media
              </p>

              <p className="mt-5 text-3xl font-bold text-[#005098]">
                ₹5,999+
              </p>

              <p className="mt-4 text-sm leading-6 text-[#64748B]">
                Monthly content creation and social media management.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#005098]"
              >
                Discuss your brand
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>


            <div className="group rounded-[28px] bg-[#071B30] p-8 text-white transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_55px_rgba(40,216,176,0.18)]">

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Other services
              </p>

              <p className="mt-5 text-2xl font-bold">
                Request a Quote
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                App development, UI/UX design and digital marketing.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#28D8B0] px-5 py-2.5 text-xs font-bold text-[#06251F]"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="px-5 pt-4 pb-24">

        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[36px] bg-[#005098] px-7 py-16 text-center text-white sm:px-12">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#28D8B0]/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#073B6B] blur-3xl" />

          <div className="relative">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#8FF1DB]">
              Let&apos;s create something useful
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-.035em] sm:text-6xl">
              Your next digital experience starts here.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-blue-100">
              Tell us what you are building. We&apos;ll figure out the
              right digital approach together.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#005098] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(255,255,255,0.25)]"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}