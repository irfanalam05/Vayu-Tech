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
} from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Web Development',
    icon: Code2,
    text: 'High-performance websites and web applications built around your business.',
  },
  {
    number: '02',
    title: 'Digital Marketing',
    icon: TrendingUp,
    text: 'Strategies that help your business become more visible and reach the right audience.',
  },
  {
    number: '03',
    title: 'App Development',
    icon: Smartphone,
    text: 'Modern mobile experiences designed for real users and real business needs.',
  },
  {
    number: '04',
    title: 'Branding & UI/UX',
    icon: Palette,
    text: 'Interfaces and visual systems that make your digital presence memorable.',
  },
]

const work = [
  {
    name: 'Cozy & Cuddles',
    type: 'E-commerce Experience',
    description:
      'A modern baby-products shopping experience focused on discovery, trust and simple navigation.',
    gradient: 'from-[#0A4775] via-[#087A82] to-[#28D8B0]',
  },
  {
    name: 'Business Dashboard',
    type: 'Web Application',
    description:
      'A focused dashboard experience designed to make complex business information easier to understand.',
    gradient: 'from-[#073B6B] via-[#005098] to-[#2D8ED1]',
  },
  {
    name: 'Mobile Experience',
    type: 'App Concept',
    description:
      'A clean mobile product experience designed around usability, speed and simple interactions.',
    gradient: 'from-[#06456D] via-[#087E92] to-[#28D8B0]',
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
          <section className="relative min-h-[940px] overflow-hidden bg-[#F8FAFC] pt-28 sm:pt-32">

            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-[-180px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[#28D8B0]/10 blur-[120px]" />
              <div className="absolute left-[8%] top-[28%] h-[420px] w-[420px] rounded-full bg-[#005098]/8 blur-[120px]" />
              <div className="absolute right-[-100px] top-[32%] h-[500px] w-[500px] rounded-full bg-[#28D8B0]/8 blur-[120px]" />
            </div>

            {/* SUBTLE GRID */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.28]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,80,152,.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,80,152,.06) 1px, transparent 1px)
                `,
                backgroundSize: '72px 72px',
                maskImage: 'radial-gradient(circle at center, black 20%, transparent 75%)',
                WebkitMaskImage:
                  'radial-gradient(circle at center, black 20%, transparent 75%)',
              }}
            />

            {/* LARGE SOFT ORBIT */}
            <div className="pointer-events-none absolute left-1/2 top-[38%] h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#005098]/[0.06]" />

            <div className="relative mx-auto flex min-h-[810px] w-[min(1280px,calc(100%-32px))] flex-col items-center justify-center text-center">

              {/* EYEBROW */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D5E5ED] bg-white/80 px-5 py-2.5 shadow-[0_8px_30px_rgba(15,23,42,.05)] backdrop-blur-xl">

                <span className="h-2 w-2 rounded-full bg-[#28D8B0] shadow-[0_0_12px_rgba(40,216,176,.8)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#005098]">
                  Full-service digital technology partner
                </span>

              </div>


              {/* MAIN HEADLINE */}
              <h1 className="relative z-10 max-w-[1050px] text-[52px] font-bold leading-[0.92] tracking-[-0.065em] text-[#0B172A] sm:text-[72px] md:text-[92px] lg:text-[112px]">

                Building

                <br />

                <span className="text-[#005098]">
                  Digital
                </span>

                <br />

                Experiences

                <br />

                <span className="relative inline-block">

                  That Move
                  <span className="bg-gradient-to-r from-[#005098] via-[#087E92] to-[#28D8B0] bg-clip-text text-transparent">
                    {" "}Businesses.
                  </span>

                  {/* underline */}
                  <span className="absolute -bottom-3 left-[12%] right-[4%] h-[2px] rounded-full bg-gradient-to-r from-[#005098] to-[#28D8B0] sm:-bottom-4" />

                </span>

              </h1>


              {/* DESCRIPTION */}
              <p className="relative z-10 mx-auto mt-7 max-w-[650px] text-sm leading-7 text-[#64748B] sm:text-base md:text-lg">
                We design and build websites, mobile apps and digital experiences
                that help businesses look credible, work smarter and grow online.
              </p>


              {/* CTA */}
              <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3">

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#005098] px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_35px_rgba(0,80,152,.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#073B6B]"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#CBD5E1] bg-white/80 px-7 py-3.5 text-sm font-bold text-[#0B172A] shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#005098]/40 hover:text-[#005098]"
                >
                  Explore our work
                  <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                </Link>

              </div>


              {/* LEFT FLOATING CARD */}
              <div className="hero-float absolute left-[10%] top-[30%] hidden items-center gap-3 rounded-[22px] border border-white bg-white/85 px-4 py-3 text-left shadow-[0_20px_50px_rgba(7,59,107,.12)] backdrop-blur-xl xl:flex">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E7F8F4] text-[#008D75]">
                  <Code2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#94A3B8]">
                    Web
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#0B172A]">
                    Web Development
                  </p>
                </div>

              </div>


              {/* LEFT LOWER FLOATING CARD */}
              <div className="hero-float-slow absolute bottom-[36%] left-[14%] hidden items-center gap-3 rounded-[22px] border border-white bg-white/85 px-4 py-3 text-left shadow-[0_20px_50px_rgba(7,59,107,.12)] backdrop-blur-xl xl:flex">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF3FA] text-[#005098]">
                  <Palette className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#94A3B8]">
                    Design
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#0B172A]">
                    UI / UX
                  </p>
                </div>

              </div>


              {/* RIGHT FLOATING CARD */}
              <div className="hero-float-slow absolute right-[10%] top-[28%] hidden items-center gap-3 rounded-[22px] border border-white bg-white/85 px-4 py-3 text-left shadow-[0_20px_50px_rgba(7,59,107,.12)] backdrop-blur-xl xl:flex">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF3FA] text-[#005098]">
                  <Smartphone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#94A3B8]">
                    Mobile
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#0B172A]">
                    App Development
                  </p>
                </div>

              </div>


              {/* RIGHT LOWER FLOATING CARD */}
              <div className="hero-float absolute bottom-[37%] right-[14%] hidden items-center gap-3 rounded-[22px] border border-white bg-white/85 px-4 py-3 text-left shadow-[0_20px_50px_rgba(7,59,107,.12)] backdrop-blur-xl xl:flex">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7F8F4] text-[#008D75]">
                  <TrendingUp className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#94A3B8]">
                    Growth
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#0B172A]">
                    Digital Growth
                  </p>
                </div>

              </div>


              {/* SMALL CENTER FLOATING BADGES */}
              <div className="absolute left-[22%] top-[19%] hidden h-9 w-9 items-center justify-center rounded-xl border border-white bg-white/80 text-[#005098] shadow-lg backdrop-blur-xl xl:flex">
                <Sparkles className="h-4 w-4" />
              </div>

              <div className="absolute right-[22%] top-[20%] hidden h-9 w-9 items-center justify-center rounded-xl border border-white bg-white/80 text-[#008D75] shadow-lg backdrop-blur-xl xl:flex">
                <Globe2 className="h-4 w-4" />
              </div>

            </div>

          </section>

      {/* =====================================================
          CAPABILITY STRIP
      ===================================================== */}
      <section className="overflow-hidden border-y border-[#E2E8F0] bg-white">

        <div className="flex h-[72px] items-center">

          {/* FIXED LABEL */}
          <div className="relative z-10 flex h-full shrink-0 items-center border-r border-[#E2E8F0] bg-white px-6 sm:px-10">
            <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[.2em] text-[#64748B]">
              Vayu Tech capabilities
            </span>
          </div>

          {/* ROTATING STRIP */}
          <div className="relative flex min-w-0 flex-1 overflow-hidden">

            {/* soft fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent" />

            <div className="capability-track flex shrink-0 items-center">

              {/* FIRST SET */}
              {[
                'Web',
                'Apps',
                'UI/UX',
                'Branding',
                'Marketing',
                'Social Media',
              ].map((item) => (
                <div
                  key={`first-${item}`}
                  className="flex w-[190px] shrink-0 items-center justify-center whitespace-nowrap"
                >
                  <span className="mx-4 h-1.5 w-1.5 shrink-0 rounded-full bg-[#28D8B0]" />
                  <span className="text-xs font-semibold text-[#334155]">
                    {item}
                  </span>
                </div>
              ))}

              {/* DUPLICATE SET FOR CONTINUOUS LOOP */}
              {[
                'Web',
                'Apps',
                'UI/UX',
                'Branding',
                'Marketing',
                'Social Media',
              ].map((item) => (
                <div
                  key={`second-${item}`}
                  className="flex w-[190px] shrink-0 items-center justify-center whitespace-nowrap"
                >
                  <span className="mx-4 h-1.5 w-1.5 shrink-0 rounded-full bg-[#28D8B0]" />
                  <span className="text-xs font-semibold text-[#334155]">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE BUILD
      ===================================================== */}
      <section className="relative py-20">

        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">

          <div className="grid items-start gap-12 lg:grid-cols-[.72fr_1.28fr]">

            <div className="lg:sticky lg:top-32 lg:h-fit">

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#005098]">
                What we build
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-.035em] sm:text-5xl">
                One team.
                <br />
                Multiple digital
                <br />
                possibilities.
              </h2>

              <p className="mt-6 max-w-sm leading-7 text-[#64748B]">
                From your first idea to a launched product, we bring
                strategy, design and technology together.
              </p>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#005098]"
              >
                Explore services
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>


            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">

              {services.map((service) => {
                const Icon = service.icon

                return (
                  <div
                    key={service.number}
                    className="group grid gap-4 rounded-2xl px-4 py-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:bg-white hover:shadow-[0_12px_35px_rgba(7,59,107,0.08)] sm:grid-cols-[55px_1fr_35px] sm:items-center"
                  >

                    <span className="text-xs font-bold text-[#94A3B8]">
                      {service.number}
                    </span>

                    <div className="flex gap-5">

                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FA] text-[#005098] sm:flex">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold transition-colors group-hover:text-[#005098]">
                          {service.title}
                        </h3>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#64748B]">
                          {service.text}
                        </p>
                      </div>

                    </div>

                    <ArrowDownRight className="hidden h-5 w-5 text-[#94A3B8] transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#005098] sm:block" />

                  </div>
                )
              })}

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PROBLEM / SOLUTION
      ===================================================== */}
      <section className="bg-white pt-0 pb-12">

        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">

          <div className="mb-10 max-w-3xl">

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

                <div
                  className={`relative min-h-[330px] overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >

                  <div className="absolute inset-7 rounded-[22px] border border-white/20 bg-black/10 p-5 backdrop-blur-sm">

                    <div className="flex items-center gap-2 border-b border-white/20 pb-4">
                      <span className="h-2 w-2 rounded-full bg-white/60" />
                      <span className="h-2 w-2 rounded-full bg-white/40" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                    </div>

                    <div className="mt-8 grid grid-cols-[.6fr_1.4fr] gap-4">

                      <div className="space-y-3">
                        <div className="h-10 rounded-xl bg-white/15" />
                        <div className="h-10 rounded-xl bg-white/10" />
                        <div className="h-10 rounded-xl bg-white/10" />
                      </div>

                      <div className="rounded-2xl bg-white/15 p-4">
                        <div className="h-4 w-24 rounded bg-white/30" />
                        <div className="mt-5 h-20 rounded-xl bg-white/15" />
                        <div className="mt-3 grid grid-cols-2 gap-3">
                          <div className="h-12 rounded-xl bg-white/10" />
                          <div className="h-12 rounded-xl bg-white/10" />
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="absolute bottom-6 right-7 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] font-semibold backdrop-blur">
                    {project.type}
                  </div>

                </div>


                <div className="flex flex-col justify-center p-8 sm:p-12">

                  <span className="text-xs font-bold uppercase tracking-[.18em] text-[#28D8B0]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold sm:text-4xl">
                    {project.name}
                  </h3>

                  <p className="mt-5 max-w-md leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <Link
                    href="/work"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white"
                  >
                    View project
                    <ArrowRight className="h-4 w-4 text-[#28D8B0]" />
                  </Link>

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


          <div className="relative mx-auto mt-16 h-[400px] max-w-4xl">

            {/* CURVED ECOSYSTEM CONNECTORS */}
            <svg
              className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
              viewBox="0 0 800 400"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Web → Vayu */}
              <path
                d="M155 70 C245 70 300 125 336 175"
                stroke="#9BC8D8"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.55"
              />

              <path
                d="M155 70 C245 70 300 125 336 175"
                stroke="#28D8B0"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="1000"
                className="ecosystem-flow ecosystem-flow-reverse"
                opacity="0.9"
              />

              {/* Design → Vayu */}
              <path
                d="M155 330 C245 330 300 275 336 225"
                stroke="#9BC8D8"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.55"
              />

              <path
                d="M155 330 C245 330 300 275 336 225"
                stroke="#005098"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="1000"
                className="ecosystem-flow ecosystem-flow-reverse"
                opacity="0.9"
              />

              {/* Vayu → Apps */}
              <path
                d="M464 175 C500 125 555 70 645 70"
                stroke="#9BC8D8"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.55"
              />

              <path
                d="M464 175 C500 125 555 70 645 70"
                stroke="#28D8B0"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="1000"
                className="ecosystem-flow"
                opacity="0.9"
              />

              {/* Vayu → Growth */}
              <path
                d="M464 225 C500 275 555 330 645 330"
                stroke="#9BC8D8"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.55"
              />

              <path
                d="M464 225 C500 275 555 330 645 330"
                stroke="#005098"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="1000"
                className="ecosystem-flow"
                opacity="0.9"
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
                ['Web', 'Websites & platforms', 'left-0 top-0', Code2],
                ['Design', 'UI/UX & branding', 'left-0 bottom-0', Palette],
                ['Apps', 'Mobile experiences', 'right-0 top-0', Smartphone],
                ['Growth', 'Marketing & social', 'right-0 bottom-0', TrendingUp],
              ].map(([title, text, position, Icon]) => (
              <div
                key={title}
                className={`group absolute ${position} w-40 overflow-hidden rounded-[22px] border border-[#D8E6EF] bg-white/90 p-3.5 text-center shadow-[0_12px_35px_rgba(7,59,107,0.07)] backdrop-blur-xl transition-all duration-300 ease-out hover:scale-[1.04] hover:border-[#28D8B0]/60 hover:shadow-[0_20px_55px_rgba(0,80,152,0.16)]`}
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