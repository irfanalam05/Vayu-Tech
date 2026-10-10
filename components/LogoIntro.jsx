'use client'

import { useEffect, useState } from 'react'

export default function LogoIntro() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!showIntro) return null

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-[#071B30]">

      {/* Complete Logo + Left-to-Right Shine */}
      <div className="logo-reveal relative h-48 w-[340px] sm:h-60 sm:w-[440px]">
        <img
          src="/logo-vayu.png"
          alt="Vayu Tech Logo"
          className="h-full w-full object-contain"
        />

        <div className="logo-shine" />
      </div>

      {/* Brand Name */}
      <div className="brand-name mt-6 text-center">
        <h1 className="text-3xl font-extrabold tracking-[0.18em] text-white sm:text-5xl">
          VAYU TECH
        </h1>

        <p className="tagline mt-3 text-xs font-semibold tracking-[0.4em] text-[#28D8B0] sm:text-sm">
          DIGITAL SOLUTIONS
        </p>
      </div>

      <style jsx>{`
        .logo-reveal {
          opacity: 0;
          transform: scale(0.92);
          animation: logoAppear 0.7s ease-out 0.2s forwards;
        }

        .logo-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            100deg,
            transparent 35%,
            rgba(255, 255, 255, 0.95) 48%,
            rgba(40, 216, 176, 0.9) 52%,
            transparent 65%
          );
          background-size: 250% 100%;
          background-position: 100% 0;
          -webkit-mask-image: url('/logo-vayu.png');
          mask-image: url('/logo-vayu.png');
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
          -webkit-mask-size: contain;
          mask-size: contain;
          opacity: 0;
          animation: shineSweep 1.5s ease-in-out 0.9s forwards;
        }

        .brand-name {
          opacity: 0;
          transform: translateY(15px);
          animation: textIn 0.7s ease-out 2.5s forwards;
        }

        .tagline {
          opacity: 0;
          animation: taglineIn 0.6s ease-out 3.3s forwards;
        }

        @keyframes logoAppear {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shineSweep {
          0% {
            opacity: 0;
            background-position: 100% 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            background-position: -100% 0;
          }
        }

        @keyframes textIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes taglineIn {
          to {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-reveal,
          .logo-shine,
          .brand-name,
          .tagline {
            animation-duration: 0.01ms;
            animation-delay: 0s;
          }

          .logo-reveal,
          .brand-name {
            opacity: 1;
            transform: none;
          }

          .logo-shine {
            display: none;
          }

          .tagline {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}