import { getTranslation } from '../i18n';

const companies = [
  { name: 'FEELD', logo: '/images/logos/feeld.svg' },
  { name: 'Bumble', logo: '/images/logos/bumble.svg' },
  { name: 'Weewoo', logo: '/images/logos/weewoo.svg' },
  { name: 'AppNation', logo: '/images/logos/appnation.webp' },
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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <p className="text-center text-sm text-gray-400 mb-10">
          {t.trustedBy.text}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-7 w-auto opacity-40"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
