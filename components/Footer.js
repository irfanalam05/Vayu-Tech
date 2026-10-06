import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#E2E8F0] bg-[#071B30] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Vayu Tech
            </h3>
            <p className="mb-4 max-w-md text-sm leading-6 text-slate-300">
              Premium website development, app development, and digital solutions that drive business growth.
            </p>
            <a
              href="mailto:vayutech29@gmail.com"
              className="inline-flex text-sm font-medium text-[#28D8B0] transition-colors duration-300 hover:text-white"
            >
              vayutech29@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="transition-colors duration-300 hover:text-[#28D8B0]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors duration-300 hover:text-[#28D8B0]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="transition-colors duration-300 hover:text-[#28D8B0]">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors duration-300 hover:text-[#28D8B0]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors duration-300 hover:text-[#28D8B0]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Web & App Development</li>
              <li>SEO / Rank Higher</li>
              <li>SMO / Social Media Management</li>
              <li>Meta & Google Ads</li>
              <li>Brand Promotion</li>
              <li>CRM Development</li>
              <li>Influencer Marketing</li>
              <li>Content Writing & Video Production</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40">
          <p>© {currentYear} Vayu Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
