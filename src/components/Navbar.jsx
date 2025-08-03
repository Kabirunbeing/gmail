// src/components/Navbar.jsx
import { SignedIn, SignedOut, UserButton, SignOutButton, useUser } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const [visitCount, setVisitCount] = useState(0);

  // Increment visit count on every page load (for signed-in users)
  useEffect(() => {
    if (user) {
      const key = `visitCount_${user.id}`;
      const stored = localStorage.getItem(key);
      const newCount = stored ? parseInt(stored, 10) + 1 : 1;

      // Always increase count on refresh/page load
      localStorage.setItem(key, newCount.toString());
      setVisitCount(newCount);
    }
  }, [user]);

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

        {/* Desktop Auth Controls */}
        <div className="hidden md:flex items-center space-x-6">
          <SignedIn>
            {/* Single Star with Tooltip */}
            <div
              className="relative"
              title={`You have visited this site ${visitCount} time${visitCount !== 1 ? 's' : ''}`}
            >
              <div
                className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-white font-semibold text-sm shadow-lg cursor-default"
                style={{
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <svg
                  className="w-5 h-5 text-white drop-shadow"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>{visitCount}</span>
              </div>
            </div>

            <UserButton
              appearance={{
                elements: {
                  userButtonTrigger: 'flex items-center space-x-2 bg-black/50 border border-cyan-500/30 rounded-full px-3 py-1.5 hover:bg-black/70 transition-all duration-200',
                },
              }}
            />

            {/* Sign Out Button */}
            <SignOutButton>
              <button
                className="group relative flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-white overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                style={{
                  background: 'linear-gradient(90deg, #990000, #cc0000, #990000)',
                  backgroundSize: '200% 100%',
                  border: '1px solid rgba(255, 50, 50, 0.4)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,0,0,0.2) 0%, rgba(255,0,0,0) 70%)',
                    zIndex: 0,
                  }}
                ></span>
                <span className="relative z-10 flex items-center space-x-1">
                  <span>Sign Out</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m-6 8h6v-2a2 2 0 012-2h10a2 2 0 012 2v2H3z"
                    />
                  </svg>
                </span>
              </button>
            </SignOutButton>
          </SignedIn>

          <SignedOut>
            <span className="text-gray-400 text-sm">Please sign in</span>
          </SignedOut>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
            <SignedIn>
              <div className="flex items-center justify-between">
                <UserButton />
                {/* Mobile Visit Count */}
                <div className="flex items-center space-x-2 text-sm text-yellow-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>You've visited {visitCount} time{visitCount !== 1 ? 's' : ''}</span>
                </div>
                <SignOutButton>
                  <button className="text-red-400 text-sm font-medium">Sign Out</button>
                </SignOutButton>
              </div>
            </SignedIn>
            <SignedOut>
              <p className="text-gray-400">Please sign in to continue</p>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
}