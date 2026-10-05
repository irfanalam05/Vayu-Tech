'use client'
import { useEffect, useState } from 'react'
import {
  MessageCircle,
  X,
  Mail,
  Phone,
  Linkedin,
  Instagram,
} from 'lucide-react'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
        setOpen(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
    }, [])

  return (
    <>
      {/* Floating contact panel */}
      {open && (
        <div className="fixed bottom-28 right-6 z-[999] w-[320px] overflow-hidden rounded-3xl border border-[#1E293B] bg-[#071B30] text-white shadow-2xl shadow-black/30">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <h3 className="text-base font-bold">Connect with Vayu Tech</h3>
              <p className="mt-1 text-xs text-slate-400">
                Choose a way to reach us
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-white/10 hover:text-white"
              aria-label="Close contact panel"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Contact options */}
          <div className="grid grid-cols-2 gap-3 p-4">
            
            <a
              href="https://wa.me/917303123047"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0]/50 hover:bg-[#28D8B0]/10"
            >
              <MessageCircle className="mb-3 h-5 w-5 text-[#28D8B0]" />
              <p className="text-sm font-semibold">WhatsApp</p>
              <p className="mt-1 text-[11px] text-slate-400">Chat with us</p>
            </a>

            <a
              href="mailto:vayutech29@gmail.com"
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0]/50 hover:bg-[#28D8B0]/10"
            >
              <Mail className="mb-3 h-5 w-5 text-[#28D8B0]" />
              <p className="text-sm font-semibold">Email</p>
              <p className="mt-1 text-[11px] text-slate-400">Send an email</p>
            </a>

            <a
              href="tel:+917303123047"
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0]/50 hover:bg-[#28D8B0]/10"
            >
              <Phone className="mb-3 h-5 w-5 text-[#28D8B0]" />
              <p className="text-sm font-semibold">Call</p>
              <p className="mt-1 text-[11px] text-slate-400">7303123047</p>
            </a>

            <a
              href="https://www.linkedin.com/company/vayu-techh/home/"
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0]/50 hover:bg-[#28D8B0]/10"
            >
              <Linkedin className="mb-3 h-5 w-5 text-[#28D8B0]" />
              <p className="text-sm font-semibold">LinkedIn</p>
              <p className="mt-1 text-[11px] text-slate-400">Follow us</p>
            </a>

            <a
              href="https://www.instagram.com/vayutechstudio?stkn=aTBwdmd0eDRrZHZn"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#28D8B0]/50 hover:bg-[#28D8B0]/10"
            >
              <Instagram className="mb-3 h-5 w-5 text-[#28D8B0]" />
              <p className="text-sm font-semibold">Instagram</p>
              <p className="mt-1 text-[11px] text-slate-400">Follow us</p>
            </a>

          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-14 right-6 z-[1000] flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_10px_35px_rgba(0,80,152,0.30)] transition-all duration-300 hover:scale-110"
        aria-label="Open contact options"
      >
        {open ? (
          <X className="h-6 w-6 text-[#005098]" />
        ) : (
          <img
            src="/logo-vayu.png"
            alt="Vayu Tech"
            className="h-11 w-11 object-contain"
          />
        )}
      </button>
    </>
  )
}