import React from 'react';

export default function HeroEmailScanTool() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden text-white"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Background Glows */}
      <div
        className="absolute top-[-100px] left-1/2 w-96 h-96 blur-3xl pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #00FFFF 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      ></div>
      <div
        className="absolute bottom-[-100px] right-1/2 w-96 h-96 blur-3xl pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, #0088CC 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-16 text-center max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent"
          style={{ animation: 'fadeIn 1s ease-out' }}
        >
          Scan Every Account Before Selling
        </h1>

        <p
          className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          style={{ animation: 'fadeIn 1s ease-out 0.3s forwards' }}
        >
          As a seller, <strong className="text-white">you must verify every Gmail account</strong> using{' '}
          <strong className="text-cyan-400">emailscan.in</strong>. This ensures the account is clean, secure, and free from:
        </p>

        {/* Risks List */}
        <ul
          className="text-left max-w-2xl mx-auto mb-8 space-y-3 text-gray-300 text-lg"
          style={{ animation: 'fadeIn 1s ease-out 0.5s forwards' }}
        >
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            <strong>Breach history</strong> or dark web exposure
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            <strong>Suspicious login activity</strong> or recovery issues
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            <strong>Disabled/flagged status</strong> (Google red flags)
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            <strong>Weak or missing 2FA</strong> — a major buyer red flag
          </li>
        </ul>

        {/* Bulk Instructions */}
        <div
          className="max-w-2xl mx-auto mb-10 p-5 bg-black/40 border border-cyan-500/30 rounded-xl text-yellow-100 text-left text-lg"
          style={{ animation: 'fadeIn 1s ease-out 0.7s forwards' }}
        >
          <h3 className="font-bold text-white flex items-center gap-2 mb-3">
            ⚠️ Bulk Scanning Note
          </h3>
          <p className="text-gray-200">
            You can scan <strong className="text-cyan-400">up to 10 accounts at a time</strong> as a free user on emailscan.in. 
            If you're checking a large batch, <strong>be patient</strong> — process them in batches to avoid errors or rate limits.
          </p>
        </div>

        {/* CTA */}
        <div
          style={{ animation: 'fadeIn 1s ease-out 0.9s forwards' }}
        >
          <a
            href="https://emailscan.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <span>🔍 Scan Accounts at emailscan.in</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        <p
          className="mt-8 text-sm text-gray-400"
          style={{ animation: 'fadeIn 1s ease-out 1.1s forwards' }}
        >
          Verified accounts = Higher trust, fewer refunds, better ratings.
        </p>
      </div>

      {/* Fade-in Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}