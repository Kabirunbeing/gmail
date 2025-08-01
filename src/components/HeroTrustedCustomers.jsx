export default function HeroTrustedCustomers() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden text-white"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Subtle Background Glows */}
      <div
        className="absolute top-[-100px] left-1/4 w-96 h-96 blur-3xl pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #00FFFF 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      ></div>
      <div
        className="absolute bottom-[-100px] right-1/4 w-96 h-96 blur-3xl pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, #0088CC 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 py-16 text-center max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent"
          style={{ animation: 'fadeIn 1s ease-out' }}
        >
          Trusted for Over 2 Years
        </h1>

        <p
          className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
          style={{ animation: 'fadeIn 1s ease-out 0.3s forwards', animationDelay: '0.3s' }}
        >
          We’ve been <strong className="text-white">securely sourcing and managing Gmail accounts</strong> for more than <span className="text-cyan-400 font-bold">two years</span>, providing reliable, private solutions for professionals who value discretion and consistency.
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