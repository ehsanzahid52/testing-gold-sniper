import { useState } from 'react';
import { Crosshair, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguageFromUrl } from './LanguageRouter';

interface NavigationProps {
  currentPage?: 'home' | 'features' | 'results' | 'pricing' | 'insights';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const [location, setLocation] = useLocation();
  const currentLang = useLanguageFromUrl();

  const createLanguagePath = (path: string) => {
    return `/${currentLang}${path}`;
  };

  const isActivePage = (page: string) => {
    const currentPath = location;
    if (page === 'home') {
      return currentPath === `/${currentLang}` || currentPath === '/';
    }
    return currentPath === `/${currentLang}/${page}` || currentPath === `/${page}`;
  };

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center">
              <Crosshair className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white">GOLDSNIPER</span>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              <a 
                href={createLanguagePath('')}
                className={`transition-colors ${isActivePage('home') ? 'text-[color:var(--brand-orange)] font-semibold' : 'text-gray-300 hover:text-[color:var(--brand-orange)]'}`}
              >
                {t('nav.home')}
              </a>
              <a 
                href={createLanguagePath('/signals-app')}
                className={`transition-colors ${isActivePage('signals-app') ? 'text-[color:var(--brand-orange)] font-semibold' : 'text-gray-300 hover:text-[color:var(--brand-orange)]'}`}
              >
                {t('nav.signalsApp')}
              </a>
              <a 
                href={createLanguagePath('/results')}
                className={`transition-colors ${isActivePage('results') ? 'text-[color:var(--brand-orange)] font-semibold' : 'text-gray-300 hover:text-[color:var(--brand-orange)]'}`}
              >
                {t('nav.performance')}
              </a>
              <a 
                href={createLanguagePath('/pricing')}
                className={`transition-colors ${isActivePage('pricing') ? 'text-[color:var(--brand-orange)] font-semibold' : 'text-gray-300 hover:text-[color:var(--brand-orange)]'}`}
              >
                {t('nav.pricing')}
              </a>
              <a 
                href={createLanguagePath('/support')}
                className={`transition-colors ${isActivePage('support') ? 'text-[color:var(--brand-orange)] font-semibold' : 'text-gray-300 hover:text-[color:var(--brand-orange)]'}`}
              >
                {t('nav.support')}
              </a>
            </nav>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white hover:text-[color:var(--brand-orange)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-6 py-4 space-y-4">
              <a 
                href={createLanguagePath('')}
                className={`block text-lg transition-colors ${isActivePage('home') ? 'text-[color:var(--brand-orange)] font-semibold' : 'text-gray-300'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a 
                href={createLanguagePath('/signals-app')}
                className={`block text-lg transition-colors ${isActivePage('signals-app') ? 'text-[color:var(--brand-orange)] font-semibold' : 'text-gray-300'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.signalsApp')}
              </a>
              <a 
                href={createLanguagePath('/results')}
                className={`block text-lg transition-colors ${isActivePage('results') ? 'text-[color:var(--brand-orange)] font-semibold' : 'text-gray-300'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.performance')}
              </a>
              <a 
                href={createLanguagePath('/pricing')}
                className={`block text-lg transition-colors ${isActivePage('pricing') ? 'text-[color:var(--brand-orange)] font-semibold' : 'text-gray-300'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.pricing')}
              </a>
              <a 
                href={createLanguagePath('/support')}
                className={`block text-lg transition-colors ${isActivePage('support') ? 'text-[color:var(--brand-orange)] font-semibold' : 'text-gray-300'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.support')}
              </a>
              
              <div className="pt-4 border-t border-gray-700">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}