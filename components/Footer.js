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

            <div className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              <p className="mb-1 font-semibold text-white">Office Address</p>
              <a
                href="https://maps.app.goo.gl/WfPSFbu4Ctif2VWG9"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#28D8B0]"
              >
                Upper Ground Floor, F-52, Vishwakarma Colony, New Delhi – 110044
              </a>
            </div>
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

                    {/* Social Media */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Social Media
            </h4>

            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="https://www.instagram.com/vayutechstudio?stkn=aTBwdmd0eDRrZHZn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#28D8B0]"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/vayu-techh/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#28D8B0]"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="mailto:vayutech29@gmail.com"
                  className="transition-colors duration-300 hover:text-[#28D8B0]"
                >
                  Email Us
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/917303123047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#28D8B0]"
                >
                  WhatsApp
                </a>
              </li>
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
