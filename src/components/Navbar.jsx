import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black/80 border-b border-cyan-500/10 shadow-lg"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          {/* Logo with Glow */}
          <div className="relative">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              <path
                d="M3 8L12 14L21 8V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V8Z"
                fill="url(#gradient)"
                stroke="#00FFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 8L12 14L21 8"
                stroke="#00FFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="gradient" x1="3" y1="8" x2="21" y2="18">
                  <stop stopColor="#00FFFF" />
                  <stop offset="1" stopColor="#0088CC" />
                </linearGradient>
              </defs>
            </svg>

            {/* Pulsing Glow Effect */}
            <div className="absolute inset-0 w-10 h-10 bg-cyan-400 rounded-full opacity-20 blur-xl pointer-events-none animate-pulse"></div>
          </div>

          {/* Gradient Text Logo */}
          <span className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              GmailDeck
            </span>
            <span className="text-white font-extrabold">AI</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-cyan-400 font-medium transition-all duration-200 transform hover:scale-105 text-sm">
            Features
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-cyan-400 font-medium transition-all duration-200 transform hover:scale-105 text-sm">
            Pricing
          </a>
          <a href="#contact" className="text-gray-300 hover:text-cyan-400 font-medium transition-all duration-200 transform hover:scale-105 text-sm">
            Contact
          </a>
          <a
            href="mailto:support@gmaildeck.ai"
            className="bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold py-2 px-5 rounded-full shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 text-sm no-underline"
          >
            Mail Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-cyan-500/10">
          <div className="px-6 py-4 flex flex-col space-y-4 text-sm">
            <a
              href="#features"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="mailto:support@gmaildeck.ai"
              className="bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold py-2 px-5 rounded-full shadow w-fit hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 no-underline self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              Mail Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}