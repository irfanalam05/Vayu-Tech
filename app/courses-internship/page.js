import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Briefcase,
  Check,
  Code2,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
} from 'lucide-react'

export const metadata = {
  title: 'Courses & Internship - Vayu Tech',
  description:
    'Explore Vayu Tech courses and the 2-month training and internship program. Build real projects and enrol through WhatsApp.',
}

/* Existing Vayu Tech WhatsApp number (same as Navbar / Footer). */
const WHATSAPP_NUMBER = '917303123047'

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

/* =========================================================
   CONTENT
   Source: screenshots of the Vayu Tech Digital reference site
   (home, Training & Internship, Terms & Conditions pages).
========================================================= */

const courses = [
  {
    title: 'Frontend Web Fundamentals',
    tag: 'Beginner Friendly',
    image: '/courses/frontend-web-fundamentals.jpg',
    description:
      'Master HTML, CSS, JavaScript, and responsive layouts with practical hands-on tasks.',
    includes: [
      'HTML, CSS & JavaScript (ES6+)',
      'Tailwind CSS & Responsive UI',
      'Git & GitHub Basics',
    ],
    price: '₹599',
  },
  {
    title: 'Advanced JavaScript & UI/UX',
    tag: 'Most Popular',
    image: '/courses/advanced-javascript-ui-ux.jpg',
    description:
      'Deep dive into advanced JS concepts, DOM manipulation, and clean modern UI principles.',
    includes: [
      'Advanced DOM & Event Handling',
      'REST APIs & Fetch Methods',
      'UI/UX Design Principles',
    ],
    price: '₹499',
  },
  {
    title: 'Full-Stack MERN + Agency Internship',
    tag: 'Ultimate Package',
    badge: 'Best Value for Career',
    featured: true,
    image: '/courses/fullstack-mern-internship.jpg',
    description:
      'Full-stack mastery combined with official MSME & GST certified agency internship program.',
    includes: [
      'Everything in Full-Stack Track',
      '2-Month Certified Agency Internship',
      'Live Client Project Experience',
    ],
    price: '₹1,499',
  },
]

const programDeliverables = [
  'Practical Training Curriculum + Live Code Reviews',
  '2 Months Industry Internship Experience Certificate',
  'Personalized Letter of Recommendation (LOR)',
  'Easy 2-Month Installments Plan (₹1,500/month)',
]

const benefits = [
  {
    icon: Code2,
    title: 'Practical Projects',
    text: 'Build production-ready web apps with real agency workflows.',
  },
  {
    icon: Award,
    title: 'MSME & GST Certified',
    text: 'Certificates are MSME recognized and issued after your project is reviewed and approved.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    text: 'Learn directly from senior developers with 1-on-1 code reviews.',
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    text: 'Guidance on your resume, GitHub and interview skills, with placement consideration for top performers in the internship program.',
  },
]

const goodToKnow = [
  {
    title: 'Course certificates',
    text: 'After studying, complete and submit the assigned project (live demo link and GitHub repository). The Course Completion Certificate is unlocked once it is reviewed and approved.',
  },
  {
    title: 'Installments',
    text: 'For the 2-month program, the second installment is due by the agreed month-wise date. Delays may temporarily suspend live class links, task submissions or credential processing.',
  },
  {
    title: 'Fees',
    text: 'Course purchase and training enrollment fees are non-refundable once module access or expert class links have been provided.',
  },
]

export default function CoursesInternship() {
  return (
    <main className="overflow-hidden bg-[#F8FAFC] text-[#0B172A]">

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#28D8B0]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1000px] text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8D4E8] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#005098] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#28D8B0]" />
            Crafting Digital Excellence
          </div>

          <h1 className="text-5xl font-extrabold tracking-[-0.04em] text-[#0B172A] sm:text-6xl lg:text-7xl">
            Courses &amp;
            <br />
            <span className="text-[#005098]">Internship.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Master in-demand web development skills, build real projects, and
            earn certificates through our courses and a 2-month training and
            internship program.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink(
                "Hi Vayu Tech, I'd like to know more about your courses and internship."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#005098] px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_35px_rgba(0,80,152,.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#073B6B]"
            >
              Enroll via WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-full border border-[#CBD5E1] bg-white/85 px-7 py-3.5 text-sm font-bold text-[#0B172A] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#005098]/40 hover:text-[#005098]"
            >
              View Courses
            </a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="scroll-mt-28 px-5 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#28BFA0]">
              Choose your learning path
            </p>
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
              Courses and pricing.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#64748B] sm:text-base">
              Structured, career-focused courses with hands-on projects.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.title}
                className={`group relative flex flex-col overflow-hidden rounded-[28px] border bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,80,152,0.08)] sm:p-6 ${
                  course.featured
                    ? 'border-[#28D8B0]/60 shadow-[0_18px_50px_rgba(40,216,176,0.12)]'
                    : 'border-[#E2E8F0] hover:border-[#9BC8D8]'
                }`}
              >
                {course.badge && (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-[#28D8B0] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#06251F]">
                    {course.badge}
                  </span>
                )}

                <div className="aspect-[2/1] overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#EEF8FC]">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <span className="mt-5 inline-flex w-fit rounded-full border border-[#B8D4E8] bg-[#EAF3FA] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#005098]">
                  {course.tag}
                </span>

                <h3 className="mt-3 text-xl font-extrabold tracking-[-0.02em] sm:text-2xl">
                  {course.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  {course.description}
                </p>

                <p className="mb-3 mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#0B172A]">
                  What&apos;s included
                </p>

                <ul className="space-y-2.5">
                  {course.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#64748B]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8F8F4] text-[#00A887]">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#E2E8F0] pt-5">
                  <p className="text-3xl font-extrabold text-[#005098]">
                    {course.price}
                  </p>

                  <a
                    href={whatsappLink(
                      `Hi Vayu Tech, I'd like to enroll in "${course.title}" (${course.price}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/link inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                      course.featured
                        ? 'bg-[#28D8B0] text-[#06251F] hover:bg-[#8FF5DF]'
                        : 'bg-[#005098] text-white hover:bg-[#073B6B]'
                    }`}
                  >
                    Enroll Now
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Training + Internship program */}
      <section id="internship" className="scroll-mt-28 px-5 pb-16">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[36px] bg-[#071B30] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#28D8B0]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#005098]/40 blur-3xl" />

          <div className="relative">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8FF5DF]">
              Agency internship program
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              2 Months Training +{' '}
              <span className="text-[#28D8B0]">Live Project Internship</span>
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
              Work directly under industry experts on real-world, client-grade
              projects, with live agency workflows, APIs, databases and
              production web app deployments, and earn your Internship
              Experience Certificate and Letter of Recommendation (LOR).
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8FF5DF]">
                  Total program fee
                </p>
                <p className="mt-2 text-3xl font-extrabold">₹2,999</p>
                <p className="mt-1 text-xs text-white/60">
                  Training + Internship + LOR
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8FF5DF]">
                  Easy payment
                </p>
                <p className="mt-2 text-xl font-extrabold">
                  2 Monthly Installments
                </p>
                <p className="mt-1 text-xs text-white/60">
                  ₹1,500 per month
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8FF5DF]">
                  Opportunity
                </p>
                <p className="mt-2 text-xl font-extrabold">
                  Placement Consideration
                </p>
                <p className="mt-1 text-xs text-white/60">
                  For top-performing students at Vayu Tech
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <p className="mb-4 text-sm font-bold">
                Program deliverables overview
              </p>

              <ul className="grid gap-3 sm:grid-cols-2">
                {programDeliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#28D8B0]/15 text-[#28D8B0]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink(
                  "Hi Vayu Tech, I'd like to apply for the 2 Months Training + Internship program (₹2,999)."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#28D8B0] px-7 py-3.5 text-sm font-bold text-[#06251F] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#8FF5DF]"
              >
                Apply via WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <p className="max-w-sm text-xs leading-5 text-white/50">
                This program is separate from the courses above and is priced
                separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose Vayu Tech */}
      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

          <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[28px] border border-[#DCEAF2] bg-white shadow-[0_25px_70px_rgba(0,80,152,0.10)] lg:max-w-none">
            <img
              src="/courses/students-learning.jpg"
              alt="Two students learning together on a laptop"
              loading="lazy"
              className="h-[280px] w-full object-cover object-top sm:h-[340px] lg:h-[440px]"
            />
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#28BFA0]">
              Why choose Vayu Tech
            </p>

            <h2 className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
              Built around real, practical learning.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="group rounded-[22px] border border-[#DCEAF2] bg-white p-5 shadow-[0_8px_25px_rgba(0,80,152,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0] hover:shadow-[0_16px_35px_rgba(40,216,176,0.12)] sm:p-6"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF6FC] text-[#005098] transition-all duration-300 group-hover:bg-[#28D8B0] group-hover:text-[#071B30]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-base font-extrabold leading-6">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#64748B]">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-[1200px] rounded-[28px] border border-[#E2E8F0] bg-white p-6 sm:p-8">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.16em] text-[#28BFA0]">
            Good to know before you enrol
          </p>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {goodToKnow.map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry (existing Vayu Tech contact details) */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-[1000px]">
          <div className="rounded-[30px] bg-[#071B30] p-7 text-white sm:p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8FF5DF]">
              Enquire
            </p>

            <h2 className="text-2xl font-extrabold tracking-[-0.025em] sm:text-3xl">
              Ask about courses and internships.
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/60">
              Reach out to Vayu Tech to ask about available courses and
              internship opportunities.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <a
                href="mailto:vayutech29@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0]/40 hover:bg-[#28D8B0]/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#28D8B0]/10 text-[#28D8B0]">
                  <Mail className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-white/40">Email</p>
                  <p className="mt-1 break-words text-sm font-semibold">
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

                <div className="min-w-0">
                  <p className="text-xs text-white/40">Phone</p>
                  <p className="mt-1 text-sm font-semibold">
                    +91 73031 23047
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/917303123047"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0]/40 hover:bg-[#28D8B0]/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#28D8B0]/10 text-[#28D8B0]">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-white/40">WhatsApp</p>
                  <p className="mt-1 text-sm font-semibold">Chat with us</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="px-5 pb-20">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[36px] bg-[#005098] px-7 py-16 text-center text-white sm:px-12">

          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#28D8B0]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#28D8B0]/20 blur-3xl" />

          <div className="relative">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8FF5DF]">
              Ready to enrol?
            </p>

            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              Ready to accelerate your developer career?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              Connect with our team on WhatsApp, ask any questions, and secure
              your seat.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappLink(
                  "Hi Vayu Tech, I'd like to enroll. Please share the next steps."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#005098] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(255,255,255,0.25)]"
              >
                Connect on WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
