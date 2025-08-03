// src/components/Footer.jsx
import { FaWhatsapp, FaTelegram, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="relative bg-black border-t border-cyan-500/10 text-gray-400 pt-16 pb-8 px-6 overflow-hidden"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Background Glow Effects */}
      <div
        className="absolute top-10 left-1/4 w-72 h-72 opacity-10 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00FFFF, transparent 70%)',
        }}
      ></div>
      <div
        className="absolute bottom-10 right-1/4 w-72 h-72 opacity-5 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #0088CC, transparent 70%)',
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">

          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow"
              >
                <path
                  d="M3 8L12 14L21 8V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V8Z"
                  fill="url(#footerGradient)"
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
                  <linearGradient id="footerGradient" x1="3" y1="8" x2="21" y2="18">
                    <stop stopColor="#00FFFF" />
                    <stop offset="1" stopColor="#0088CC" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold">
                <span className="text-cyan-400">Gmail</span>
                <span className="text-white">Deck</span>
                <span className="text-blue-400 font-extrabold">AI</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering users with secure, AI-driven Gmail management tools. Trusted for over 2 years.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://wa.me/YOURNUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://t.me/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                aria-label="Telegram"
              >
                <FaTelegram size={20} />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/sign-up" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/sign-in" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Sign In
                </Link>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@gmaildeck.ai"
                  className="hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Email Support
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/YOURNUMBER?text=Hi%2C%20I%27m%20having%20an%20issue%20with%20GmailDeckAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              © 2025 GmailDeckAI. All rights reserved. Secure • Fast • AI-Powered
            </p>
            <p className="text-xs text-gray-600 mt-4 md:mt-0">
              Made with 💙 for digital entrepreneurs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}