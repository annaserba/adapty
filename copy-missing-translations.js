const fs = require('fs');
const path = require('path');

// Read English translations as source
const enPath = './src/i18n/translations/en.ts';
const enContent = fs.readFileSync(enPath, 'utf8');

// Extract the missing sections from English file (from line 55 onwards - features.section1 to end)
const missingSection = `  features: {
    title: 'Powerful Features',
    description: 'Everything you need to manage and grow your subscription business',
    items: [
      { title: 'Subscription Analytics', description: 'Track and analyze your subscription metrics in real-time with powerful dashboards.' },
      { title: 'A/B Testing', description: 'Optimize your paywall and pricing with built-in A/B testing capabilities.' },
      { title: 'Cross-Platform', description: 'Support for iOS, Android, and web with a single unified API.' },
      { title: 'Revenue Optimization', description: 'Maximize your revenue with smart pricing strategies and insights.' },
      { title: 'Easy Integration', description: 'Get started in minutes with our simple SDK and comprehensive documentation.' },
      { title: 'Customer Support', description: '24/7 dedicated support team to help you succeed.' },
    ],
    section1: {
      title: 'Increase subscription revenue without extra dev time',
      description: 'Launch paywalls and run experiments without app releases. Test different prices, trial durations, and offers to find what works best.',
      link: 'Learn about A/B testing',
      testimonials: [
        { text: 'We increased our revenue by 40% in just 3 months using Adapty\\'s A/B testing features.', author: 'Sarah Chen', role: 'Product Manager at FitApp' },
        { text: 'The ability to test paywalls without releasing updates saved us months of development time.', author: 'Mike Johnson', role: 'CTO at MindfulApp' },
      ],
    },
    section2: {
      title: 'Cut churn rate by 60%',
      description: 'Reduce involuntary churn with smart retry logic and grace periods. Keep subscribers engaged with personalized offers.',
      link: 'Explore churn prevention',
      testimonial: { text: 'Adapty helped us reduce churn by 60% with automated retry logic and grace periods.', author: 'Emma Wilson', role: 'Growth Lead at StreamApp' },
    },
    section3: {
      title: 'Know your subscription numbers at any moment',
      description: 'Get real-time insights into MRR, LTV, churn, and other key metrics. Make data-driven decisions with comprehensive analytics.',
      link: 'View analytics features',
      testimonial: { text: 'The analytics dashboard gives us complete visibility into our subscription metrics in real-time.', author: 'David Park', role: 'CEO at LearnApp' },
    },
    section4: {
      title: 'No-code paywall builder',
      description: 'Design beautiful paywalls without writing code. Use our drag-and-drop builder to create and test paywalls instantly.',
      link: 'Try paywall builder',
      testimonial: { text: 'The no-code builder let our marketing team create and test paywalls without bothering developers.', author: 'Lisa Martinez', role: 'Marketing Director at HealthApp' },
    },
  },
  pricing: { title: 'Simple Pricing', description: 'Choose the plan that fits your needs', getStarted: 'Get Started' },
  helpTeam: {
    title: 'Help your team run the mobile subscription business.',
    subtitle: 'Faster and cheaper.',
    steps: { configuring: 'Configuring platforms', installing: 'Installing Adapty SDK', processing: 'Processing purchasing events' },
    forDevelopers: { title: 'For developers', features: ['Subscriptions SDK', 'Refund Saver', 'Remote config', 'Fallback paywalls'] },
    forAppOwners: { title: 'For app owners', features: ['Revenue analytics', 'LTV analytics', 'AI LTV and revenue predictions'] },
    forMarketers: { title: 'For marketers', features: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting'] },
  },
  stats: {
    title: 'Adapty processes subscription revenue with the industry\\'s highest SLA Rate',
    trackedRevenue: 'tracked revenue',
    historicalUptime: 'historical uptime',
    usersServed: 'users served',
    apiCalls: 'API calls / month',
  },
  codeIntegration: {
    title: 'Integrate in-app purchases with a few lines of code',
    description: 'Integrate IAPs within a few hours without server coding. Adapty handles the correct subscription state, taking everything under the hood, from free trials to refunds, in a simple, developer-friendly SDK.',
    link: 'Make subscriptions easy',
    testimonial: { text: '"Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android."', author: 'Magnus Ólafsson', role: 'Chief Technology Officer at Smitten' },
  },
  sdkPlatforms: { title: 'Get the SDK for your platform' },
  testimonials: {
    title: 'Developer from all kind of apps move to Adapty to grow their revenue',
    items: [
      { text: 'We\\'ve been working with Adapty since 2021 and I couldn\\'t be happier about it. We\\'ve tried other subscription management platforms in the past so I can compare. Adapty introduced numerous features over the years and constantly helped us grow. They have the best analytics on the market and all the integrations you can think of. If you looking to boost the revenue of your app, I definitely recommend Adapty.', author: 'Chris Bick', role: 'Founder and CEO', company: 'Bickster', image: '' },
      { text: 'Adapty has been instrumental in scaling our subscription business. The A/B testing features alone have helped us increase revenue by 40% in just a few months.', author: 'Sarah Chen', role: 'Product Manager', company: 'FitApp', image: '' },
      { text: 'The analytics dashboard is incredibly powerful. We can see exactly what\\'s working and what\\'s not in real-time, which has been game-changing for our business.', author: 'David Park', role: 'CEO', company: 'LearnApp', image: '' },
      { text: 'Integration was seamless and the support team has been amazing. They helped us migrate from our old system without any downtime.', author: 'Emma Wilson', role: 'Growth Lead', company: 'StreamApp', image: '' },
      { text: 'The no-code paywall builder is a game changer. Our marketing team can now test different offers without waiting for developers.', author: 'Lisa Martinez', role: 'Marketing Director', company: 'HealthApp', image: '' },
    ],
  },
  footer: {
    cta: { title: 'Get started today or schedule a demo for your personal onboarding', startButton: 'START FOR FREE', demoButton: 'SCHEDULE A DEMO' },
    paywallManagement: { title: 'Paywall management', links: ['Paywall builder', 'Onboarding builder', 'AI generator', 'A/B testing', 'Autopilot', 'Targeting', 'Localization', 'Remote config'] },
    infrastructure: { title: 'Infrastructure', links: ['Subscription SDK', 'Subscriber sync', 'Fallback paywalls', 'Refund saver', 'Integrations'] },
    roles: { title: 'Roles', links: ['For developers', 'For marketers', 'For app owners'] },
    stages: { title: 'Stages', links: ['Indie', 'Startups', 'Publishers', 'Enterprise'] },
    cases: { title: 'Cases', links: ['Integrate subscriptions', 'Grow app revenue', 'Analyze performance', 'Read our cases'] },
    migrateFrom: { title: 'Migrate from', links: ['RevenueCat', 'Purchasely', 'Qonversion', 'Superwall'] },
    sdk: { title: 'SDK', links: ['iOS', 'Android', 'React Native', 'Flutter', 'FlutterFlow', 'Kotlin Multiplatform', 'Capacitor', 'Unity', 'Stripe'] },
    resources: { title: 'Resources', links: ['Blog', 'Ebooks', 'Podcast', 'Webinars', 'Events', 'Glossary', 'Documentation', 'Paywall library', 'LTV prediction model', 'Apple fiscal calendar', 'Apple receipt checker', 'Subscription calculator', 'Refund saver calculator', 'In-app subscription reports', 'Community'] },
    analytics: { title: 'Analytics', links: ['Revenue analytics', 'LTV analytics', 'AI predictive analytics', 'Apple ads manager'] },
    company: { title: 'Company', links: ['About us', 'Contact us', 'Careers', 'Terms', 'Privacy policy', 'Data protection', 'System status', 'SOC2 compliance', 'Become a partner'] },
  },
  enterprise: {
    title: 'Enterprise-grade platform',
    secure: { title: 'Secure', items: ['SOC2 verified', 'Encrypted', '24/7 global fraud monitoring'] },
    reliable: { title: 'Reliable', items: ['99.99% SLA', 'Over $500M/year of in-app purchases processed'] },
    responsive: { title: 'Responsive', items: ['Dedicated customer success manager', 'Direct communication via Slack', 'Live chat on the website', 'Four ways to reach us'] },
  },
  g2Awards: { title: 'Trusted for usability and customer service', reviews: 'Based on 500+ reviews' },
  cases: { title: 'Read the real cases of our customers', readMore: 'Read more', readAll: 'Read all cases' },`;

// Languages that need updating
const languages = ['tr', 'de', 'uk', 'es', 'fr', 'pl', 'ja', 'ko', 'zh', 'pt'];

languages.forEach(lang => {
  const filePath = `./src/i18n/translations/${lang}.ts`;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove the closing }; and add missing sections
  content = content.replace(/\};[\s]*$/, '');
  content += '\n' + missingSection + '\n};\n';
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Updated ${lang}.ts`);
});

console.log('\\n✅ All translation files updated with missing sections!');
console.log('Note: These use English text as placeholders. Translate them later.');
