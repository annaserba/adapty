import { getTranslation } from '../i18n';

interface G2AwardsProps {
  lang?: string;
}

export default function G2Awards({ lang = 'ru' }: G2AwardsProps) {
  const t = getTranslation(lang as any);

  const awards = [
    { image: '/images/g2-best-results.svg', title: 'Best Results' },
    { image: '/images/g2-high-performer.svg', title: 'High Performer' },
    { image: '/images/g2-best-usability.svg', title: 'Best Usability' },
    { image: '/images/g2-best-relationship.svg', title: 'Best Relationship' },
    { image: '/images/g2-most-implementable.svg', title: 'Most Implementable' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
          {t.g2Awards.title}
        </h2>
        
        <div className="flex items-center justify-center gap-1 mb-12">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-gray-600">{t.g2Awards.reviews}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
                src={award.image} 
                alt={award.title} 
                className="h-40 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
