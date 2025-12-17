import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isCasesOpen, setIsCasesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/adapty-logo.svg" alt="Adapty" className="h-7" />
              <span className="px-2 py-0.5 bg-gray-900 text-white text-xs font-semibold rounded">EN</span>
            </a>

            <div className="hidden lg:flex items-center gap-6">
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Product
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Cases
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Resources
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Docs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <a href="#blog" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Blog
              </a>

              <a href="#pricing" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Pricing
              </a>

              <a href="#web2app" className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors">
                web2app
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#login" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Log in
            </a>
            <a href="#signup" className="px-5 py-2 text-sm text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium">
              Sign up →
            </a>
            <a href="#contact" className="px-5 py-2 text-sm text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Contact sales →
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-gray-200">
            <a href="#product" className="block text-gray-700 hover:text-gray-900 transition-colors">
              Product
            </a>
            <a href="#cases" className="block text-gray-700 hover:text-gray-900 transition-colors">
              Cases
            </a>
            <a href="#resources" className="block text-gray-700 hover:text-gray-900 transition-colors">
              Resources
            </a>
            <a href="#docs" className="block text-gray-700 hover:text-gray-900 transition-colors">
              Docs
            </a>
            <a href="#blog" className="block text-gray-700 hover:text-gray-900 transition-colors">
              Blog
            </a>
            <a href="#pricing" className="block text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#web2app" className="block text-orange-500 hover:text-orange-600 font-medium transition-colors">
              web2app
            </a>
            <div className="pt-4 space-y-2">
              <a href="#login" className="block w-full px-4 py-2 text-center text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Log in
              </a>
              <a href="#signup" className="block w-full px-4 py-2 text-center text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                Sign up →
              </a>
              <a href="#contact" className="block w-full px-4 py-2 text-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Contact sales →
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
