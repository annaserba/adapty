import { useState } from 'react';
import { getTranslation } from '../i18n';

interface CodeIntegrationProps {
  lang?: string;
}

const highlightCode = (code: string, language: string) => {
  const keywords: Record<string, string[]> = {
    swift: ['import', 'do', 'try', 'await', 'let', 'catch'],
    kotlin: ['import', 'when', 'is', 'fun', 'val', 'var'],
    react: ['import', 'from', 'const', 'await', 'try', 'catch'],
    flutter: ['import', 'try', 'await', 'final', 'on', 'catch'],
    unity: ['using', 'if', 'null'],
  };

  const strings = /(".*?"|'.*?')/g;
  const comments = /(\/\/.*$)/gm;
  
  let highlighted = code
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Highlight comments
  highlighted = highlighted.replace(comments, '<span style="color: #6B7280;">$1</span>');

  // Highlight strings
  highlighted = highlighted.replace(strings, '<span style="color: #10B981;">$1</span>');

  // Highlight keywords
  const langKeywords = keywords[language] || [];
  langKeywords.forEach(keyword => {
    const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
    highlighted = highlighted.replace(regex, '<span style="color: #A78BFA;">$1</span>');
  });

  // Highlight function calls
  highlighted = highlighted.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span style="color: #60A5FA;">$1</span>(');

  return highlighted;
};

export default function CodeIntegration({ lang = 'ru' }: CodeIntegrationProps) {
  const [activeTab, setActiveTab] = useState('swift');
  const t = getTranslation(lang as any);

  const tabs = [
    { id: 'swift', name: 'Swift' },
    { id: 'kotlin', name: 'Kotlin' },
    { id: 'react', name: 'React Native' },
    { id: 'flutter', name: 'Flutter' },
    { id: 'unity', name: 'Unity' },
  ];

  const codeExamples = {
    swift: `// Your app's code
import Adapty

do {
  try await Adapty.activate("PUBLIC_SDK_KEY")
  
  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
    kotlin: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())

// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
  when (result) {
    is AdaptyResult.Success -> {
      // successful purchase
    }
    is AdaptyResult.Error -> {
      // handle the error
    }
  }
}`,
    react: `// Your app's code
import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');

// Make a purchase, Adapty handles the rest
try {
  const profile = await adapty.makePurchase(product);
  // successful purchase
} catch (error) {
  // handle the error
}`,
    flutter: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';

try {
  await Adapty().activate();
  
  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
}`,
    unity: `// Your app's code
using AdaptySDK;

Adapty.makePurchase(product, (profile, error) => {
  if (error == null) {
    // successful purchase
  }
});`,
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              {t.codeIntegration.title}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {t.codeIntegration.description}
            </p>
            <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold">
              {t.codeIntegration.link} →
            </a>

            <div className="mt-12 bg-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">"</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🔥</span>
                    </div>
                    <span className="text-xl font-bold text-pink-500">Smitten</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {t.codeIntegration.testimonial.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                    <div>
                      <div className="font-semibold">{t.codeIntegration.testimonial.author}</div>
                      <div className="text-sm text-gray-400">{t.codeIntegration.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <div className="flex border-b border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gray-900 text-white border-b-2 border-purple-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="p-6">
              <pre className="text-sm overflow-x-auto">
                <code dangerouslySetInnerHTML={{ __html: highlightCode(codeExamples[activeTab as keyof typeof codeExamples], activeTab) }} />
              </pre>
            </div>
            <div className="px-6 pb-6 flex items-center justify-between border-t border-gray-700 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
                <span className="ml-2">100% Open Source</span>
              </div>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Go to GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
