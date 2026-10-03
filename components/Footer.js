import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Vayu Tech</h3>
            <p className="text-white/60 mb-4 max-w-md">
              Premium website development, app development, and digital solutions that drive business growth.
            </p>
            <a
              href="mailto:vayutech29@gmail.com"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              vayutech29@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/60">
              <li>Website Development</li>
              <li>App Development</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>Social Media Management</li>
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
