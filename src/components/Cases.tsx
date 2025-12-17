import { getTranslation } from '../i18n';

interface CasesProps {
  lang?: string;
}

export default function Cases({ lang = 'ru' }: CasesProps) {
  const t = getTranslation(lang as any);

  const cases = [
    {
      image: '/images/app-icon-productivity.webp',
      iconBg: 'bg-blue-100',
      name: 'Productivity app',
      category: 'Productivity',
      metric: '+50% in total revenue',
      metricColor: 'text-blue-600',
      description: 'How pricing tests unlocked app\'s potential',
    },
    {
      image: '/images/app-icon-text-on-pic.webp',
      iconBg: 'bg-gray-100',
      name: 'Text on Pic',
      category: 'Photo & Video',
      metric: 'Over 30% MRR growth',
      metricColor: 'text-gray-600',
      description: 'How to boost revenue with the right experiments',
    },
    {
      image: null,
      iconBg: 'bg-purple-100',
      name: 'Trip planning',
      category: 'Travel',
      metric: '+102% ARPU growth',
      metricColor: 'text-purple-600',
      description: 'New onboarding and pricing strategy doubled revenue per user',
    },
    {
      image: '/images/app-logo-going-merry.webp',
      iconBg: 'bg-black',
      name: 'Going Merry',
      category: 'App publisher',
      metric: '5x MRR growth',
      metricColor: 'text-purple-600',
      description: 'How to scale subscription revenue with Paywall Builder',
    },
    {
      image: '/images/app-logo-shmoody.webp',
      iconBg: 'bg-cyan-100',
      name: 'Shmoody',
      category: 'Mental health',
      metric: 'ARR scaled from $0 to $2M',
      metricColor: 'text-cyan-600',
      description: 'How to grow from a free app to $2M ARR with Adapty',
    },
    {
      image: '/images/app-logo-lively.png',
      iconBg: 'bg-orange-100',
      name: 'Lively',
      category: 'Health & Fitness',
      metric: 'Refund rate dropped by 83%',
      metricColor: 'text-orange-600',
      description: 'Saved 82% of potentially lost revenue',
    },
    {
      image: '/images/app-logo-glam-ai.webp',
      iconBg: 'bg-pink-100',
      name: 'Glam AI',
      category: 'Makeup & Beauty',
      metric: 'ROAS from Adapty – 108%',
      metricColor: 'text-pink-600',
      description: 'How to scale to $1.2M ARR in 3 months',
    },
    {
      image: '/images/app-icon-pepapp.webp',
      iconBg: 'bg-red-100',
      name: 'Pepapp',
      category: 'Health & Fitness',
      metric: '400% ROI on Adapty',
      metricColor: 'text-red-600',
      description: 'How to make Adapty free with Refund Saver',
    },
    {
      image: '/images/app-icon-fotorama.webp',
      iconBg: 'bg-green-100',
      name: 'Fotorama',
      category: 'Photo & Video',
      metric: 'Refund rate dropped 60%',
      metricColor: 'text-green-600',
      description: 'How to decrease the refund rate with Adapty',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16">
          {t.cases.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className={`${caseItem.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden`}>
                  {caseItem.image ? (
                    <img src={caseItem.image} alt={caseItem.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl">📱</span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{caseItem.name}</h3>
                  <p className="text-sm text-gray-500">{caseItem.category}</p>
                </div>
              </div>
              
              <div className={`text-xl font-bold ${caseItem.metricColor} mb-2`}>
                {caseItem.metric}
              </div>
              
              <p className="text-gray-600 text-sm mb-6">
                {caseItem.description}
              </p>
              
              <button className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm">
                {t.cases.readMore} →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center text-gray-900 hover:text-purple-600 font-semibold transition-colors">
            {t.cases.readAll} →
          </a>
        </div>
      </div>
    </section>
  );
}
