'use client'

export default function FloatingContact() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917303123047"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-[1000] flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
        aria-label="Chat with Vayu Tech on WhatsApp"
      >
        <img
          src="/WhatsApp_logo.png"
          alt="WhatsApp"
          className="pointer-events-none h-[4.5rem] w-[4.5rem] object-contain scale-[1.35] md:h-16 md:w-16"
        />
      </a>

      {/* Call Floating Button */}
      <a
        href="tel:+917303123047"
        className="fixed bottom-6 right-6 z-[1000] flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
        aria-label="Call Vayu Tech"
      >
        <img
          src="/Call_logo.png"
          alt="Call"
          className="h-[4.5rem] w-[4.5rem] object-contain md:h-16 md:w-16"
        />
      </a>
    </>
  )
}