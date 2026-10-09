'use client'

export default function FloatingContact() {
  return (
    <a
      href="tel:+917303123047"
      className="fixed bottom-14 right-6 z-[1000] flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_10px_35px_rgba(0,80,152,0.30)] transition-all duration-300 hover:scale-110"
      aria-label="Call Vayu Tech"
    >
      <img
        src="/Call_logo.png"
        alt="Call"
        className="h-11 w-11 object-contain"
      />
    </a>
  )
}