import React, { useRef, useEffect } from 'react';

export default function WhatsAppStyleChat() {
  const chatRef = useRef(null);

  // Simulate staggered message appearance
  useEffect(() => {
    const messages = chatRef.current?.querySelectorAll('.msg');
    if (!messages) return;

    messages.forEach((msg, index) => {
      setTimeout(() => {
        msg.style.opacity = '1';
        msg.style.transform = 'translateY(0)';
      }, 400 + index * 600);
    });
  }, []);

  // Chat messages: user sends question → bot replies
  const chat = [
    {
      sender: 'user',
      text: 'What is a fresh Gmail account?',
    },
    {
      sender: 'bot',
      text: 'A fresh account is created within the last 7 days, with no prior usage, no spam activity, and no Google flags. These are the only ones accepted.',
    },
    {
      sender: 'user',
      text: 'How do I check if it’s clean?',
    },
    {
      sender: 'bot',
      text: 'Always scan it using emailscan.in. It checks for breaches, recovery issues, and security risks. Only clean scans get approved.',
    },
    {
      sender: 'user',
      text: 'Should I enable 2FA?',
    },
    {
      sender: 'bot',
      text: 'No. Deliver accounts without 2FA so the buyer can secure them. But make sure there’s no suspicious login history.',
    },
    {
      sender: 'user',
      text: 'Do you accept old accounts?',
    },
    {
      sender: 'bot',
      text: 'We don’t recommend it. Old or recycled accounts often fail scanning and get flagged. Focus only on fresh ones.',
    },
    {
      sender: 'user',
      text: 'Can I sell in bulk?',
    },
    {
      sender: 'bot',
      text: 'Yes! Just make sure every account is scanned and formatted cleanly. Bulk submissions with proof get approved faster.',
    },
    {
      sender: 'user',
      text: 'How should I format my list?',
    },
    {
      sender: 'bot',
      text: 'Use one account per line: email:password:recovery. Or use our Excel tool to make it professional and organized.',
    },
    {
      sender: 'user',
      text: 'Is recovery email required?',
    },
    {
      sender: 'bot',
      text: 'No. Most buyers prefer accounts without recovery. But if it exists, disclose it honestly.',
    },
    {
      sender: 'user',
      text: 'What if an account fails the scan?',
    },
    {
      sender: 'bot',
      text: 'Don’t submit it. Failed accounts are risky. Only send what passes emailscan.in with no warnings.',
    },
    // 🔹 NEW: Rates question
    {
      sender: 'user',
      text: 'Do rates change for fresh accounts?',
    },
    {
      sender: 'bot',
      text: 'Yes. Rates go up and down based on market demand. When verification is strict, prices rise. Fresh, scanned accounts sell faster and at higher value.',
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/3 left-1/2 w-96 h-96 blur-3xl opacity-10 transform -translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, #00FFFF, transparent 70%)',
        }}
      ></div>

      <div className="relative max-w-md mx-auto">
        {/* Chat Container (WhatsApp Style) */}
        <div
          ref={chatRef}
          className="bg-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl overflow-hidden mx-auto"
          style={{ minHeight: '600px' }}
        >
          {/* Chat Header */}
          <div className="bg-gray-800/90 px-4 py-3 flex items-center gap-3 border-b border-gray-600">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-sm font-bold">
              🤖
            </div>
            <div>
              <div className="font-semibold text-white">Assistant</div>
              <div className="text-xs text-gray-400">Online</div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 flex flex-col bg-gradient-to-b from-gray-900/50 to-black/50 min-h-96">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`msg max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none'
                      : 'bg-gray-800/70 text-gray-200 rounded-tl-none border border-gray-600'
                  }`}
                  style={{
                    opacity: 0,
                    transform: 'translateY(10px)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator (after last message) */}
            <div className="flex justify-start mt-2">
              <div
                className="msg bg-gray-800/70 rounded-2xl rounded-tl-none px-4 py-2 border border-gray-600 flex gap-1 text-sm"
                style={{
                  opacity: 0,
                  transform: 'translateY(10px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                }}
              >
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-800/40 text-center text-xs text-gray-500 border-t border-gray-700">
            Only fresh, scanned accounts accepted • Scroll to see full chat
          </div>
        </div>

        {/* CTA Button */}
        

        <p className="text-center text-gray-500 text-sm mt-4">
          This is how top sellers prepare — clean, verified, ready to go.
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce {
          animation: bounce 1.2s infinite;
        }
      `}</style>
    </section>
  );
}