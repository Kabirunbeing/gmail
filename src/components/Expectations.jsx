import { useState } from 'react';

export default function Expectations() {
  const [language, setLanguage] = useState('both'); // 'en', 'ur', or 'both'

  return (
    <section className="py-16 px-6 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Language Toggle */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex bg-gray-800 rounded-full p-1 text-sm">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-1.5 rounded-full transition ${language === 'en' ? 'bg-cyan-600 text-white' : 'text-gray-300 hover:text-white'}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('both')}
              className={`px-4 py-1.5 transition ${language === 'both' ? 'bg-cyan-600 text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Both
            </button>
            <button
              onClick={() => setLanguage('ur')}
              className={`px-4 py-1.5 rounded-full transition ${language === 'ur' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}
            >
              اردو
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Start earning by following simple steps — flexible, fast, and secure.
          </p>
        </div>

        {/* Dual Cards - Flex with Equal Height */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
          {/* English Card */}
          {(language === 'en' || language === 'both') && (
            <div
              className="flex-1 bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 shadow-lg min-w-0"
              style={{ minHeight: '520px' }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <h3 className="text-xl font-semibold text-cyan-300">English</h3>
              </div>

              {/* List */}
              <ul className="space-y-5 text-gray-200 leading-relaxed text-sm md:text-base">
                <li className="flex gap-3">
                  <span className="text-cyan-400 text-lg mt-0.5 flex-shrink-0">📩</span>
                  <span>
                    <strong>Create a new Gmail ID</strong> and send us the email address with its password.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 text-lg mt-0.5 flex-shrink-0">🛡️</span>
                  <span>
                    All Gmail IDs must use the <strong>same daily password</strong> (we’ll update it every day).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 text-lg mt-0.5 flex-shrink-0">💵</span>
                  <span>
                    Earn <strong>Rupees for every valid Gmail ID</strong> you submit.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 text-lg mt-0.5 flex-shrink-0">✔️</span>
                  <span>
                    <strong>The more accounts you create, the more you earn.</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 text-lg mt-0.5 flex-shrink-0">✔️</span>
                  <span>
                    <strong>Safe, secure, and 100% genuine work.</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 text-lg mt-0.5 flex-shrink-0">📱</span>
                  <span>
                    All you need is a <strong>mobile or PC</strong>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 text-lg mt-0.5 flex-shrink-0">💸</span>
                  <span>
                    <strong>Payment via JazzCash or EasyPaisa</strong> — fast and reliable.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 text-lg mt-0.5 flex-shrink-0">⏱️</span>
                  <span>
                    <strong>Work on your own time</strong> — fully flexible!
                  </span>
                </li>
              </ul>
            </div>
          )}

          {/* Urdu Card */}
          {(language === 'ur' || language === 'both') && (
            <div
              dir="rtl"
              className="flex-1 bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 shadow-lg min-w-0"
              style={{ minHeight: '520px' }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-xl font-semibold text-blue-300">اردو</h3>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>

              {/* List */}
              <ul className="space-y-5 text-gray-200 leading-relaxed text-sm md:text-base">
                <li className="flex gap-3">
                  <span className="text-blue-400 text-lg mt-0.5 flex-shrink-0">📩</span>
                  <span className="text-right">
                    صرف <strong>ایک نئی Gmail ID بنائیں</strong> اور اس کا ای میل ایڈریس اور پاسورڈ ہمیں بھیجیں۔
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 text-lg mt-0.5 flex-shrink-0">🛡️</span>
                  <span className="text-right">
                    تمام Gmail IDs کا پاسورڈ <strong>ایک جیسا ہونا چاہیے</strong> (روزانہ نیا پاسورڈ فراہم کیا جائے گا)۔
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 text-lg mt-0.5 flex-shrink-0">💵</span>
                  <span className="text-right">
                    <strong>ہر درست Gmail ID پر آپ کو روپے ملیں گے</strong>۔
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 text-lg mt-0.5 flex-shrink-0">✔️</span>
                  <span className="text-right">
                    <strong>جتنی زیادہ IDs بنائیں گے، اتنی زیادہ کمائی ہوگی</strong>۔
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 text-lg mt-0.5 flex-shrink-0">✔️</span>
                  <span className="text-right">
                    یہ کام مکمل طور پر <strong>محفوظ، قابلِ اعتماد اور 100٪ حقیقی</strong> ہے۔
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 text-lg mt-0.5 flex-shrink-0">📱</span>
                  <span className="text-right">
                    آپ کے پاس صرف <strong>ایک موبائل یا کمپیوٹر</strong> ہونا چاہیے۔
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 text-lg mt-0.5 flex-shrink-0">💸</span>
                  <span className="text-right">
                    <strong>ادائیگی JazzCash یا EasyPaisa کے ذریعے</strong> کی جائے گی۔
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 text-lg mt-0.5 flex-shrink-0">⏱️</span>
                  <span className="text-right">
                    <strong>کام کا وقت آپ کی سہولت کے مطابق</strong> — مکمل لچکدار!
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            <strong className="text-yellow-400">Note:</strong> This opportunity is for educational or account management training purposes. 
            We do not promote violation of any platform’s Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
}