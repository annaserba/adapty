import { getTranslation } from '../i18n';

interface FooterProps {
  lang?: string;
}

export default function Footer({ lang = 'ru' }: FooterProps) {
  const t = getTranslation(lang as any);

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold max-w-xl">
            {t.footer.cta.title}
          </h2>
          <div className="flex gap-4">
            <a
              href="#"
              className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold"
            >
              {t.footer.cta.startButton}
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              {t.footer.cta.demoButton}
            </a>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo and Social */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <img src="/images/adapty-logo.svg" alt="Adapty" className="h-8 mb-6 brightness-0 invert" />
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            {/* Paywall management */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">{t.footer.paywallManagement.title}</h4>
              <ul className="space-y-2 text-sm">
                {t.footer.paywallManagement.links.map((link: string, i: number) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">{t.footer.infrastructure.title}</h4>
              <ul className="space-y-2 text-sm">
                {t.footer.infrastructure.links.map((link: string, i: number) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Roles, Stages, Cases */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">{t.footer.roles.title}</h4>
              <ul className="space-y-2 text-sm mb-6">
                {t.footer.roles.links.map((link: string, i: number) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold mb-4 text-sm">{t.footer.stages.title}</h4>
              <ul className="space-y-2 text-sm mb-6">
                {t.footer.stages.links.map((link: string, i: number) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold mb-4 text-sm">{t.footer.cases.title}</h4>
              <ul className="space-y-2 text-sm">
                {t.footer.cases.links.map((link: string, i: number) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Migrate from, SDK, Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">{t.footer.migrateFrom.title}</h4>
              <ul className="space-y-2 text-sm mb-6">
                {t.footer.migrateFrom.links.map((link: string, i: number) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold mb-4 text-sm">{t.footer.sdk.title}</h4>
              <ul className="space-y-2 text-sm mb-6">
                {t.footer.sdk.links.map((link: string, i: number) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold mb-4 text-sm">{t.footer.resources.title}</h4>
              <ul className="space-y-2 text-sm">
                {t.footer.resources.links.map((link: string, i: number) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Analytics, Company */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">{t.footer.analytics.title}</h4>
              <ul className="space-y-2 text-sm mb-6">
                {t.footer.analytics.links.map((link: string, i: number) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold mb-4 text-sm">{t.footer.company.title}</h4>
              <ul className="space-y-2 text-sm">
                {t.footer.company.links.map((link: string, i: number) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Adapty Tech Inc.</p>
            <div className="flex items-center gap-2">
              <img src="https://flagcdn.com/w20/gb.png" alt="English" className="w-5" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
