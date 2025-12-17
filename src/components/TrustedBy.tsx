import { getTranslation } from '../i18n';

const companies = [
  { name: 'FEELD', logo: '/images/logos/feeld.svg' },
  { name: 'Bumble', logo: '/images/logos/bumble.svg' },
  { name: 'Weewoo', logo: '/images/logos/weewoo.svg' },
  { name: 'AppNation', logo: '/images/logos/appnation.svg' },
  { name: 'Almus', logo: '/images/logos/almus.svg' },
  { name: 'Impala Studios', logo: '/images/logos/impala-studios.svg' },
  { name: 'HUBX', logo: '/images/logos/hubx.svg' },
];

interface TrustedByProps {
  lang?: string;
}

export default function TrustedBy({ lang = 'ru' }: TrustedByProps) {
  const t = getTranslation(lang as any);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <p className="text-center text-sm text-gray-500 mb-8">
          {t.trustedBy.text}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-6 lg:h-8 w-auto grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
