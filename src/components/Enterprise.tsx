import { getTranslation } from '../i18n';

interface EnterpriseProps {
  lang?: string;
}

export default function Enterprise({ lang = 'ru' }: EnterpriseProps) {
  const t = getTranslation(lang as any);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16">
          {t.enterprise.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Secure */}
          <div className="relative">
            <div className="absolute right-0 top-0 bottom-0 w-px bg-purple-300 hidden md:block"></div>
            <div className="pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.enterprise.secure.title}
              </h3>
              <ul className="space-y-3">
                {t.enterprise.secure.items.map((item: string, i: number) => (
                  <li key={i} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reliable */}
          <div className="relative">
            <div className="absolute right-0 top-0 bottom-0 w-px bg-purple-300 hidden md:block"></div>
            <div className="pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.enterprise.reliable.title}
              </h3>
              <ul className="space-y-3">
                {t.enterprise.reliable.items.map((item: string, i: number) => (
                  <li key={i} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Responsive */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t.enterprise.responsive.title}
            </h3>
            <ul className="space-y-3">
              {t.enterprise.responsive.items.map((item: string, i: number) => (
                <li key={i} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
