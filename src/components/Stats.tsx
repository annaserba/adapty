import { getTranslation } from '../i18n';

interface StatsProps {
  lang?: string;
}

export default function Stats({ lang = 'ru' }: StatsProps) {
  const t = getTranslation(lang as any);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16">
            {t.stats.title}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                $2B
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {t.stats.trackedRevenue}
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                99.99%
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {t.stats.historicalUptime}
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                2.5B
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {t.stats.usersServed}
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                60B
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {t.stats.apiCalls}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
