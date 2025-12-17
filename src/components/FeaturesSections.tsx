import { getTranslation } from '../i18n';

interface FeaturesSectionsProps {
  lang?: string;
}

export default function FeaturesSections({ lang = 'ru' }: FeaturesSectionsProps) {
  const t = getTranslation(lang as any);

  return (
    <>
      {/* Section 1: Increase subscription revenue */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {t.features.section1.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t.features.section1.description}
              </p>
              <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                {t.features.section1.link} →
              </a>

              <div className="mt-12 space-y-6">
                {t.features.section1.testimonials.map((testimonial: any, index: number) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-sm text-gray-700 mb-2">{testimonial.text}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-900">{testimonial.author}</span>
                        <span className="text-sm text-gray-500">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-4 aspect-[9/16]">
                    <div className="bg-white rounded-xl h-full flex items-center justify-center text-teal-900 font-bold">
                      Paywall 1
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-4 aspect-[9/16]">
                    <div className="bg-white rounded-xl h-full flex items-center justify-center text-teal-900 font-bold">
                      Paywall 2
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-white text-center">
                  <div className="text-sm opacity-80">Test and iterate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Cut churn rate */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Churn Rate</span>
                    <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                      -60%
                    </span>
                  </div>
                  <div className="h-48">
                    <svg viewBox="0 0 300 150" className="w-full h-full">
                      <polyline
                        points="0,50 50,45 100,40 150,30 200,25 250,20 300,15"
                        fill="none"
                        stroke="#9333ea"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {t.features.section2.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t.features.section2.description}
              </p>
              <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                {t.features.section2.link} →
              </a>

              <div className="mt-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2">{t.features.section2.testimonial.text}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">{t.features.section2.testimonial.author}</span>
                      <span className="text-sm text-gray-500">{t.features.section2.testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Know your subscription numbers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {t.features.section3.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t.features.section3.description}
              </p>
              <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                {t.features.section3.link} →
              </a>

              <div className="mt-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2">{t.features.section3.testimonial.text}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">{t.features.section3.testimonial.author}</span>
                      <span className="text-sm text-gray-500">{t.features.section3.testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow">
                    <div className="h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: No-code paywall builder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl p-8">
                <div className="bg-white rounded-xl p-4 shadow-lg aspect-[9/16] max-w-xs mx-auto">
                  <div className="h-full bg-gradient-to-br from-pink-200 to-orange-200 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {t.features.section4.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t.features.section4.description}
              </p>
              <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                {t.features.section4.link} →
              </a>

              <div className="mt-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2">{t.features.section4.testimonial.text}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">{t.features.section4.testimonial.author}</span>
                      <span className="text-sm text-gray-500">{t.features.section4.testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
