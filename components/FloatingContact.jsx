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
          className="h-14 w-14 object-contain"
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
          className="h-12 w-12 object-contain"
        />
      </a>
    </>
  )
}