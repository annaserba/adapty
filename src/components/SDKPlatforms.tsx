import { getTranslation } from '../i18n';

interface SDKPlatformsProps {
  lang?: string;
}

export default function SDKPlatforms({ lang = 'ru' }: SDKPlatformsProps) {
  const t = getTranslation(lang as any);

  const platforms = [
    { name: 'Swift SDK', icon: '🔶', color: 'from-orange-500 to-red-500' },
    { name: 'Kotlin SDK', icon: '🟣', color: 'from-purple-500 to-pink-500' },
    { name: 'React Native SDK', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Unity SDK', icon: '⬛', color: 'from-gray-600 to-gray-800' },
    { name: 'Flutter SDK', icon: '🔷', color: 'from-blue-400 to-cyan-400' },
    { name: 'Capacitor SDK', icon: '⚡', color: 'from-blue-500 to-indigo-500' },
    { name: 'Kotlin Multiplatform', icon: '🟪', color: 'from-purple-600 to-indigo-600' },
    { name: 'FlutterFlow', icon: '💜', color: 'from-purple-500 to-blue-500' },
    { name: 'Web API', icon: '🌐', color: 'from-blue-500 to-cyan-500' },
    { name: 'Stripe', icon: 'S', color: 'from-indigo-600 to-purple-600' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          {t.sdkPlatforms.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href="#"
              className="group relative bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:scale-105"
            >
              <div className={`text-4xl bg-gradient-to-br ${platform.color} bg-clip-text text-transparent font-bold`}>
                {platform.icon}
              </div>
              <div className="text-sm text-center text-gray-300 group-hover:text-white transition-colors">
                {platform.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
