import { Code2, Smartphone, Palette, TrendingUp, Share2 } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Services - Vayu Tech',
  description: 'Website development, app development, UI/UX design, digital marketing, and social media management services.',
}

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: 'Website Development',
      description: 'We build custom, responsive websites using modern frameworks like Next.js, React, and Tailwind CSS. Every website is optimized for performance, SEO, and user experience across all devices.',
      features: [
        'Custom responsive design',
        'E-commerce integration',
        'Content management systems',
        'Performance optimization',
        'SEO-friendly architecture',
      ],
      pricing: 'Starting at ₹7,999',
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications built with Flutter, React Native, or native technologies. We create intuitive apps that deliver seamless experiences on iOS and Android.',
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
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'User-centered design that combines beautiful aesthetics with functional usability. We create interfaces that users love and that drive business results.',
      features: [
        'User research and personas',
        'Wireframes and prototypes',
        'Visual design systems',
        'Usability testing',
        'Design handoff for development',
      ],
      pricing: 'Request a Quote',
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to increase your online visibility, drive traffic, and boost conversions. We help you reach your target audience effectively.',
      features: [
        'SEO optimization',
        'Google Ads campaigns',
        'Content marketing strategy',
        'Email marketing',
        'Analytics and reporting',
      ],
      pricing: 'Request a Quote',
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: 'Social Media Management',
      description: 'Strategic social media presence across platforms. We create engaging content, manage your community, and build your brand identity online.',
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
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/60">
            Comprehensive digital solutions to help your business grow and succeed online
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start p-8 border border-white/10 rounded-lg hover:border-accent/50 transition-colors"
              >
                <div>
                  <div className="text-accent mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-white/60 mb-6">{service.description}</p>
                  <div className="text-2xl font-bold text-accent mb-6">{service.pricing}</div>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">What&apos;s Included</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-white/60">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/60 mb-8">
            Contact us to discuss your project requirements and get a custom quote
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
