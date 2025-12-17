const features = [
  {
    title: 'Subscription Analytics',
    description: 'Track and analyze your subscription metrics in real-time with powerful dashboards.',
    icon: '📊',
  },
  {
    title: 'A/B Testing',
    description: 'Optimize your paywall and pricing with built-in A/B testing capabilities.',
    icon: '🧪',
  },
  {
    title: 'Cross-Platform',
    description: 'Support for iOS, Android, and web with a single unified API.',
    icon: '🌐',
  },
  {
    title: 'Revenue Optimization',
    description: 'Maximize your revenue with smart pricing strategies and insights.',
    icon: '💰',
  },
  {
    title: 'Easy Integration',
    description: 'Get started in minutes with our simple SDK and comprehensive documentation.',
    icon: '⚡',
  },
  {
    title: 'Customer Support',
    description: '24/7 dedicated support team to help you succeed.',
    icon: '🎯',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage and grow your subscription business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
