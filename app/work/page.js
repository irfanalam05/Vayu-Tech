import { Code2 } from 'lucide-react'

export const metadata = {
  title: 'Our Work - Vayu Tech',
  description: 'Portfolio of sample and concept projects showcasing our design and development capabilities.',
}

export default function Work() {
  const projects = [
    {
      title: 'EcoStore',
      category: 'E-commerce Platform',
      label: 'Concept Project',
      description: 'A full-stack e-commerce platform featuring product catalog, shopping cart, checkout flow, and payment gateway integration. Built with Next.js and Stripe.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
      features: [
        'Product catalog with search and filters',
        'Shopping cart and checkout',
        'Payment processing',
        'Order management',
        'Responsive design',
      ],
    },
    {
      title: 'HealthTrack',
      category: 'Mobile Application',
      label: 'Sample Project',
      description: 'A comprehensive fitness tracking mobile app with workout planning, nutrition logging, progress analytics, and social features. Cross-platform using Flutter.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
      features: [
        'Workout tracking and planning',
        'Nutrition and calorie logging',
        'Progress charts and analytics',
        'Social sharing features',
        'Push notifications',
      ],
    },
    {
      title: 'ProBiz',
      category: 'Business Dashboard',
      label: 'Concept Project',
      description: 'An analytics dashboard for business intelligence with real-time data visualization, customizable reports, and team collaboration features. Built for data-driven decision making.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'MongoDB'],
      features: [
        'Real-time data visualization',
        'Custom report builder',
        'Team collaboration tools',
        'Export and sharing',
        'Role-based access control',
      ],
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-white/60">
            Sample and concept projects demonstrating our technical expertise and design capabilities
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="border border-white/10 rounded-lg overflow-hidden hover:border-accent/50 transition-colors">
                {/* Project Image Placeholder */}
                <div className="h-64 md:h-96 bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                  <Code2 className="w-24 h-24 text-accent/50" />
                </div>

                {/* Project Details */}
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded">
                      {project.label}
                    </span>
                    <span className="px-3 py-1 bg-white/10 text-white/60 text-sm rounded">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
                  <p className="text-white/60 text-lg mb-8">{project.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 border border-white/20 text-sm rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-white/60">
                            <span className="text-accent mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Something Together</h2>
          <p className="text-xl text-white/60 mb-8">
            Ready to start your next project? Get in touch to discuss your requirements
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-semibold"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </main>
  )
}
