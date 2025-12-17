import { getTranslation } from '../i18n';

interface HeroProps {
  lang?: string;
}

export default function Hero({ lang = 'ru' }: HeroProps) {
  const t = getTranslation(lang as any);

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
              <span className="px-2 py-0.5 bg-white rounded">{t.hero.badge}</span>
              <span>{t.hero.badgeText} →</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="email"
                    placeholder={t.hero.emailPlaceholder}
                    className="w-full px-6 py-4 pr-32 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                    {t.hero.startButton} →
                  </button>
                </div>
              </div>
              <button className="px-6 py-4 text-purple-600 font-semibold hover:text-purple-700 transition-colors whitespace-nowrap">
                {t.hero.demoButton} →
              </button>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              
              <img 
                src="/images/adapty-overview.webp" 
                alt="Adapty Dashboard Overview" 
                className="w-full h-auto relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
