export const metadata = {
  title: 'Our Work - Vayu Tech',
  description: 'Portfolio of sample and concept projects showcasing our design and development capabilities.',
}

export default function Work() {
  const projects = [
    {
      title: 'EZ Tuitions',
      category: 'Web Development',
      image: '/Website img/EZ-Tuitions.png',
      link: 'https://www.eztuitions.com/',
      description:
        'A tutoring platform connecting students with verified home and online tutors, with smart matching, tutor profiles, flexible learning options, and free demo classes.',
    },
    {
      title: 'Chand Digital Services',
      category: 'Web Development',
      image: '/Website img/Chand-Digital-Services.png',
      link: 'https://www.chanddigitalservice.com/',
      description:
        'A digital services platform providing legal, documentation, compliance, business, and professional support services through an accessible online experience.',
    },
    {
      title: 'Ayush Dental Care',
      category: 'Web Development',
      image: '/Website img/Ayush-Dental-Care.png',
      link: 'https://ayushdentalcare.in/',
      description:
        'A modern dental clinic website showcasing comprehensive dental care, cosmetic treatments, restorative procedures, expert doctors, and online appointment booking.',
    },
    {
      title: 'Sathfere',
      category: 'Web Development',
      image: '/Website img/Sathfere.png',
      link: 'https://sathfere.com/',
      description:
        'A matrimonial platform designed to help individuals find a suitable life partner through trusted matchmaking services and personalized profile discovery.',
    },
    {
      title: 'Kaayasth Vivaah',
      category: 'Web Development',
      image: '/Website img/Kaayasth-Vivaah.png',
      link: 'https://kaayasthvivaah.com/',
      description:
        'A community-focused matrimonial platform created to help families and individuals discover compatible matches and begin meaningful relationships.',
    },
    {
      title: 'Learnet Skills',
      category: 'Web Development',
      image: '/Website img/Learnet-Skills.png',
      link: 'https://www.learnetskills.com/',
      description:
        'A skill-development platform offering job-linked courses, vocational training, career programmes, entrepreneurship initiatives, and global employment opportunities.',
    },
    {
      title: 'RepairTronics',
      category: 'Web Development',
      image: '/Website img/RepairTronics.png',
      link: 'https://repairtronics.online/',
      description:
        'A service-focused website built to present electronics repair solutions and make it easier for customers to explore repair and technical service offerings.',
    },
    {
      title: 'KPN App',
      category: 'Mobile App',
      image: '/App img/KPN.png',
      link: 'https://play.google.com/store/apps/details?id=com.kpn.android',
      description:
        'A grocery shopping app offering fresh produce, groceries, household essentials, healthcare products, fast delivery, secure payments, and real-time order tracking.',
    },
    {
      title: 'GRT Jewellers',
      category: 'Mobile App',
      image: '/App img/GRT-Jewellers.png',
      link: 'https://play.google.com/store/apps/details?id=com.grtjewels.oriana',
      description:
        'A jewellery shopping app offering a wide range of gold, diamond, silver, platinum, and gemstone jewellery with easy shopping, secure payments, delivery, and order tracking.',
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F8FAFC] pt-40 pb-20 md:pt-44 md:pb-24">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#28D8B0]/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full border border-[#B8D4E8]/40" />

        <div className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full border border-[#B8D4E8]/40" />

        <div className="pointer-events-none absolute left-8 top-40 hidden grid grid-cols-4 gap-3 opacity-50 md:grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[#7DB7E8]"
            />
          ))}
        </div>

        <div className="pointer-events-none absolute right-8 top-52 hidden grid grid-cols-4 gap-3 opacity-50 md:grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[#7DB7E8]"
            />
          ))}
        </div>

        <div className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full bg-[#28D8B0]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-[#005098]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8D4E8] bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#005098] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#28D8B0]" />
            Our Portfolio
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[#071B30] sm:text-5xl md:text-6xl">
            Work that speaks
            <span className="block text-[#005098]">for itself.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Explore websites and mobile applications we&apos;ve built to create
            meaningful digital experiences for businesses and their customers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-[#EAF4FA] px-4 py-2 text-xs font-semibold text-[#005098]">
              7 Web Projects
            </span>
            <span className="rounded-full bg-[#EAF8F5] px-4 py-2 text-xs font-semibold text-[#087A67]">
              2 Mobile Apps
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#64748B] shadow-sm ring-1 ring-[#E2E8F0]">
              Real Projects
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative overflow-hidden pt-10 pb-24">

        <div className="pointer-events-none absolute right-20 top-44 grid grid-cols-4 gap-3 opacity-50">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[#7DB7E8]"
            />
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid overflow-hidden rounded-[28px] border border-[#DCE8EF] hover:border-[#28D8B0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:grid-cols-[1.1fr_.9fr]"
              >
                {/* Project Preview */}
                <div className="relative h-[300px] overflow-hidden bg-white md:h-[360px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="absolute bottom-6 right-7 rounded-full border border-white/30 bg-[#071B30]/80 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur">
                    {project.category}
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col items-center justify-center p-8 text-center sm:p-12">
                  <h2 className="text-3xl font-bold text-[#071B30] sm:text-4xl">
                    {project.title}
                  </h2>

                  <p className="mt-4 max-w-md leading-7 text-[#64748B]">
                    {project.description}
                  </p>
                  <div className="mt-6 rounded-full bg-[#005098] px-4 py-2 text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-[#28D8B0] group-hover:text-[#071B30]">
                    Explore
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-[#E2E8F0] bg-[#F8FAFC] py-12">

        {/* Side Design */}
        <div className="pointer-events-none absolute -left-40 top-1/2 h-56 w-80 -translate-y-1/2 rounded-full border border-[#B8D4E8]/40 bg-[#28D8B0]/5">
          <div className="absolute right-16 top-1/2 grid -translate-y-1/2 grid-cols-4 gap-3 opacity-50">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-[#7DB7E8]"
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute -right-40 top-1/2 h-56 w-80 -translate-y-1/2 rounded-full border border-[#B8D4E8]/40 bg-[#005098]/5">
          <div className="absolute left-16 top-1/2 grid -translate-y-1/2 grid-cols-4 gap-3 opacity-50">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-[#7DB7E8]"
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8D4E8] bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#005098] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#28D8B0]" />
            Let&apos;s Work Together
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#071B30] sm:text-4xl md:text-5xl">
            Have a project in mind?
            <span className="block text-[#005098]">
              Let&apos;s build it together.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#64748B] sm:text-base">
            Tell us what you&apos;re looking to build and let&apos;s turn your idea into
            a meaningful digital experience.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#005098] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#28D8B0] hover:text-[#071B30]"
          >
            Start Your Project
            <span>→</span>
          </a>

        </div>
      </section>
    </main>
  )
}
