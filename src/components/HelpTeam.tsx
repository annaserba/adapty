import { getTranslation } from '../i18n';

interface HelpTeamProps {
  lang?: string;
}

export default function HelpTeam({ lang = 'ru' }: HelpTeamProps) {
  const t = getTranslation(lang as any);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.helpTeam.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.helpTeam.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">1</span>
                    <span>{t.helpTeam.steps.configuring}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">2</span>
                    <span>{t.helpTeam.steps.installing}</span>
                  </div>
                  <div className="bg-gray-100 rounded p-2 text-xs font-mono text-purple-600">
                    Adapty.activate("PUBLIC_SDK_KEY")
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">3</span>
                    <span>{t.helpTeam.steps.processing}</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              {t.helpTeam.forDevelopers.title}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>

            <div className="space-y-3">
              {t.helpTeam.forDevelopers.features.map((feature: string, index: number) => (
                <div key={index} className="text-gray-600">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="mb-6">
              <img 
                src="/images/app-monetization.webp" 
                alt="App monetization strategies" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              {t.helpTeam.forAppOwners.title}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>

            <div className="space-y-3">
              {t.helpTeam.forAppOwners.features.map((feature: string, index: number) => (
                <div key={index} className="text-gray-600">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="mb-6">
              <img 
                src="/images/no-code-paywall-builder.webp" 
                alt="No-code paywall builder" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              {t.helpTeam.forMarketers.title}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>

            <div className="space-y-3">
              {t.helpTeam.forMarketers.features.map((feature: string, index: number) => (
                <div key={index} className="text-gray-600">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
