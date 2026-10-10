import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import LogoIntro from '@/components/LogoIntro'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vayu Tech - Website & App Development Agency',
  description: 'Premium website development, app development, UI/UX design, digital marketing, and social media management services in India.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LogoIntro />
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
