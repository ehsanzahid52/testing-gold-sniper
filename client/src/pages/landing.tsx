import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, TrendingUp, Crosshair, Download, ExternalLink, Star, Globe, Clock, Award } from 'lucide-react';
import { SiApple, SiGoogleplay } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import Navigation from '../components/Navigation';
import SEOHead from '../components/SEOHead';
import FAQ from '../components/FAQ';

export default function Landing() {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { t } = useTranslation();
  const [location] = useLocation();

  const handleDownloadClick = (platform: string) => {
    setIsLoading(platform);
    setTimeout(() => {
      setIsLoading(null);
    }, 2000);
  };

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for fade-in animation
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle section scrolling based on URL
  useEffect(() => {
    const path = location;
    const sectionMatch = path.match(/\/([^\/]+)$/);
    
    if (sectionMatch) {
      const section = sectionMatch[1];
      let targetId = '';
      
      // Map route sections to section IDs
      switch (section) {
        case 'results':
        case 'performance':
          targetId = 'results';
          break;
        case 'pricing':
          targetId = 'pricing';
          break;
        case 'support':
          targetId = 'insights';
          break;
        default:
          return;
      }
      
      // Scroll to the target section after a short delay to ensure the page is loaded
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="bg-black text-white font-inter">
      <SEOHead 
        title="GoldSniper - #1 Gold Trading Signals App | 93% Accuracy XAUUSD"
        description="Get professional gold trading signals with 93% accuracy. Join thousands of successful XAUUSD traders using GoldSniper's proven signals and analysis."
        keywords="gold trading signals, XAUUSD signals, gold sniper, trading app, forex signals, gold analysis, trading alerts"
        pagePath="/"
      />
      <Navigation currentPage="home" />

      {/* Section 1: Hero Banner */}
      <section className="relative bg-black overflow-hidden">
        {/* Floating Currency Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden w-full h-full">
          {/* Central area distribution - avoiding corners */}
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae031688687cc5192a5_c1.svg" alt="Pound" className="floating-currency absolute top-24 left-1/4 w-16 h-16 opacity-30" />
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae0ad2e1685755a6a76_c2.svg" alt="Euro" className="floating-currency absolute top-1/3 right-1/4 w-14 h-14 opacity-40" />
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae0bcfccaa7b374cb68_c3.svg" alt="Coin" className="floating-currency absolute top-20 left-1/2 w-12 h-12 opacity-35" />
          
          {/* Middle area */}
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae0bf08d44241b9ed78_c4.svg" alt="Yen" className="floating-currency absolute top-2/3 left-1/3 w-20 h-20 opacity-25" />
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae0c81f4b71b40ee5e4_c6.svg" alt="Dollar" className="floating-currency absolute top-1/2 right-1/3 w-18 h-18 opacity-45" />
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae02e33bd2eac043d61_c7.svg" alt="Currency" className="floating-currency absolute top-3/4 left-1/2 w-10 h-10 opacity-50" />
          
          {/* Lower central area */}
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae0bf08d42d71b9ed79_c5.svg" alt="Rupee" className="floating-currency absolute bottom-32 left-2/5 w-15 h-15 opacity-35" />
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae031688687cc5192a5_c1.svg" alt="Pound" className="floating-currency absolute bottom-24 right-2/5 w-13 h-13 opacity-40" />
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae0ad2e1685755a6a76_c2.svg" alt="Euro" className="floating-currency absolute bottom-40 left-1/3 w-17 h-17 opacity-30" />
          
          {/* Scattered throughout central zone */}
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae0bcfccaa7b374cb68_c3.svg" alt="Coin" className="floating-currency absolute top-1/2 left-1/5 w-11 h-11 opacity-35" />
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae0bf08d44241b9ed78_c4.svg" alt="Yen" className="floating-currency absolute top-2/5 right-1/5 w-9 h-9 opacity-45" />
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae0c81f4b71b40ee5e4_c6.svg" alt="Dollar" className="floating-currency absolute bottom-1/2 left-3/5 w-14 h-14 opacity-40" />
          <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61483ae02e33bd2eac043d61_c7.svg" alt="Currency" className="floating-currency absolute top-3/5 right-3/5 w-12 h-12 opacity-25" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            {/* Main Content */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {t('hero.title')}
                <br />
                <span className="text-[color:var(--brand-orange)]">{t('hero.titleHighlight')}</span> 🔥
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button 
                  onClick={() => handleDownloadClick('android')}
                  disabled={isLoading === 'android'}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-12 rounded-xl transition-all duration-200 flex items-center justify-center space-x-4 h-16 text-xl shadow-xl transform hover:scale-105 min-w-[280px]"
                >
                  {isLoading === 'android' ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      <span>{t('common.loading')}</span>
                    </>
                  ) : (
                    <>
                      <SiGoogleplay className="w-8 h-8" />
                      <span>{t('common.downloadFor', { platform: 'Google Play' })}</span>
                    </>
                  )}
                </Button>
                <Button 
                  onClick={() => handleDownloadClick('ios')}
                  disabled={isLoading === 'ios'}
                  className="bg-black hover:bg-gray-900 text-white font-bold py-6 px-12 rounded-xl transition-all duration-200 flex items-center justify-center space-x-4 h-16 text-xl shadow-xl transform hover:scale-105 min-w-[280px] border-2 border-gray-700"
                >
                  {isLoading === 'ios' ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      <span>{t('common.loading')}</span>
                    </>
                  ) : (
                    <>
                      <SiApple className="w-8 h-8" />
                      <span>{t('common.downloadFor', { platform: 'App Store' })}</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            {/* Phone Mockup - Positioned underneath */}
            <div className="relative flex justify-center">
              <div className="hero-phone">
                <img 
                  src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614a4da80502ad8434e17664_Group%20150.png" 
                  alt="GoldSniper app interface showing gold trading signals" 
                  className="w-80 md:w-96 h-auto max-w-full object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Partner Logos */}
      <section className="bg-gradient-to-r from-[color:var(--brand-orange)] to-[color:var(--amber-accent)] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-white text-lg font-medium">
              {t('common.professionalTraders')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 w-full flex items-center justify-center min-h-[70px] shadow-lg border border-gray-700">
              <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614838cae48d81b411567f3b_1.png" alt="Partner 1" className="max-w-full max-h-10 object-contain filter brightness-90" />
            </div>
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 w-full flex items-center justify-center min-h-[70px] shadow-lg border border-gray-700">
              <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614838ca29fed5856bc8887f_2.png" alt="Partner 2" className="max-w-full max-h-10 object-contain filter brightness-90" />
            </div>
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 w-full flex items-center justify-center min-h-[70px] shadow-lg border border-gray-700">
              <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614838ca6b5ac54d19e25818_3.png" alt="Partner 3" className="max-w-full max-h-10 object-contain filter brightness-90" />
            </div>
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 w-full flex items-center justify-center min-h-[70px] shadow-lg border border-gray-700">
              <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614838cac81f4b7ee60ee47f_4.png" alt="Forex.com" className="max-w-full max-h-10 object-contain filter brightness-90" />
            </div>
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 w-full flex items-center justify-center min-h-[70px] shadow-lg border border-gray-700">
              <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614838ca6d336c311f611dce_5.png" alt="XM" className="max-w-full max-h-10 object-contain filter brightness-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section id="features" className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('features.title')}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="fade-in bg-blue-600/20 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/6138949899094ef54a8050b7_Group%2070.svg" alt="XAUUSD Trading" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{t('features.cards.xauusd.title')}</h3>
                <p className="text-gray-300">{t('features.cards.xauusd.description')}</p>
              </CardContent>
            </Card>
            
            <Card className="fade-in bg-yellow-600/20 border-yellow-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614843340b4f491cc6e2673d_image%2016.png" alt="Worldwide Members" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{t('features.cards.members.title')}</h3>
                <p className="text-gray-300">{t('features.cards.members.description')}</p>
              </CardContent>
            </Card>
            
            <Card className="fade-in bg-pink-600/20 border-pink-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614842f4d12a71cdaf9b6488_image%2017.png" alt="Best in Industry" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{t('features.cards.best.title')}</h3>
                <p className="text-gray-300">{t('features.cards.best.description')}</p>
              </CardContent>
            </Card>
            
            <Card className="fade-in bg-green-600/20 border-green-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614843238a8b048290abd2a3_image%2018.png" alt="Daily Signals" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{t('features.cards.daily.title')}</h3>
                <p className="text-gray-300">{t('features.cards.daily.description')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Performance Results */}
      <section id="results" className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-white mb-6">
                {t('performance.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {t('performance.subtitle')}
              </p>
              <Button className="bg-[color:var(--brand-orange)] hover:bg-[color:var(--amber-accent)] text-white font-bold py-6 px-12 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 h-16 text-xl shadow-xl transform hover:scale-105 min-w-[200px]">
                <TrendingUp className="w-6 h-6" />
                <span>{t('performance.button')}</span>
              </Button>
            </div>
            
            <div className="relative fade-in flex justify-center">
              <div className="w-80 h-80 flex items-center justify-center">
                <img 
                  src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61484477f7c5051f6345d215_image%2022.png" 
                  alt="3D performance chart showing profitable trading results" 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Safe & Precise Traders */}
      <section className="bg-gradient-to-r from-[color:var(--brand-orange)] to-[color:var(--amber-accent)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative fade-in flex justify-center">
              <div className="w-80 h-80 flex items-center justify-center">
                <img 
                  src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61484d84b3d2118169c790b9_image%2020.png" 
                  alt="Gold bars representing safe and precise trading" 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            </div>
            
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-black mb-6">
                {t('safeTraders.title')}
              </h2>
              <p className="text-xl text-black/80 mb-8">
                {t('safeTraders.subtitle')}
              </p>
              <Button className="bg-black text-white hover:bg-gray-900 font-bold py-6 px-12 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 h-16 text-xl shadow-xl transform hover:scale-105 min-w-[200px]">
                <Award className="w-6 h-6" />
                <span>{t('safeTraders.button')}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('howItWorks.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-[color:var(--brand-orange)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614846ec1f4bfca9d4f0cf91_1.svg" alt="Step 1" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{t('howItWorks.steps.download.title')}</h3>
              <p className="text-gray-300 text-lg">{t('howItWorks.steps.download.description')}</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-[color:var(--brand-orange)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614846ec9864f117fba866a6_2.svg" alt="Step 2" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{t('howItWorks.steps.join.title')}</h3>
              <p className="text-gray-300 text-lg">{t('howItWorks.steps.join.description')}</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-[color:var(--brand-orange)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <img src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614846ec2df9d37fc5428497_3.svg" alt="Step 3" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{t('howItWorks.steps.copy.title')}</h3>
              <p className="text-gray-300 text-lg">{t('howItWorks.steps.copy.description')}</p>
            </div>
          </div>
          
          <div className="text-center mb-12 fade-in">
            <div className="inline-block bg-[color:var(--green-success)]/20 border border-[color:var(--green-success)]/30 rounded-2xl px-8 py-4">
              <p className="text-white text-xl font-semibold">
                {t('howItWorks.cta')}
              </p>
            </div>
          </div>
          
          <div className="text-center fade-in">
            <div className="bg-white rounded-2xl p-4 max-w-2xl mx-auto shadow-2xl">
              <img 
                src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61484cdffad3cb706f71c727_61389171fc46d54c9a0c083f_Profit-1024x879.png.png" 
                alt="Profit table showing successful trading results" 
                className="w-full h-auto object-contain rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Free Download */}
      <section id="pricing" className="bg-gradient-to-r from-[color:var(--brand-orange)] to-[color:var(--amber-accent)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center fade-in">
            <h2 className="text-4xl font-bold text-white mb-8">
              {t('download.title')}
            </h2>
            <p className="text-xl text-white/90 mb-16 max-w-2xl mx-auto">
              {t('download.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button 
                onClick={() => handleDownloadClick('android-pricing')}
                disabled={isLoading === 'android-pricing'}
                className="bg-green-600 text-white hover:bg-green-700 font-bold py-5 px-10 rounded-xl text-lg flex items-center justify-center space-x-3 shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                                  {isLoading === 'android-pricing' ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      <span>{t('common.loading')}</span>
                    </>
                  ) : (
                    <>
                      <SiGoogleplay className="w-6 h-6" />
                      <span>{t('common.downloadFor', { platform: 'Google Play' })}</span>
                    </>
                  )}
              </Button>
              <Button 
                onClick={() => handleDownloadClick('ios-pricing')}
                disabled={isLoading === 'ios-pricing'}
                className="bg-black text-white hover:bg-gray-900 font-bold py-5 px-10 rounded-xl text-lg flex items-center justify-center space-x-3 shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-gray-700"
              >
                                  {isLoading === 'ios-pricing' ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      <span>{t('common.loading')}</span>
                    </>
                  ) : (
                    <>
                      <SiApple className="w-6 h-6" />
                      <span>{t('common.downloadFor', { platform: 'App Store' })}</span>
                    </>
                  )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Trading Insights */}
      <section id="insights" className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('tradingInsights.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="fade-in bg-gray-900 border-gray-800 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.prod.website-files.com/61389171fc46d544580c0812/6214e8118d762c3d04f3dd66_dollar-1703159_1280.png" 
                  alt="Smart dollar entries analysis" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{t('tradingInsights.cards.smartDollar.title')}</h3>
                <p className="text-gray-400 mb-4">{t('tradingInsights.cards.smartDollar.description')}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{t('tradingInsights.cards.smartDollar.readTime')}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="fade-in bg-gray-900 border-gray-800 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.prod.website-files.com/61389171fc46d544580c0812/620e77beafc92d3765d55add_leather-3080553_1920.jpg" 
                  alt="Gold market analysis" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{t('tradingInsights.cards.goldTrends.title')}</h3>
                <p className="text-gray-400 mb-4">{t('tradingInsights.cards.goldTrends.description')}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{t('tradingInsights.cards.goldTrends.readTime')}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="fade-in bg-gray-900 border-gray-800 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.prod.website-files.com/61389171fc46d544580c0812/620e283584825daf8cd56fd0_photo-1624365169364-0640dd10e180.jpg" 
                  alt="Risk management strategies" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{t('tradingInsights.cards.riskManagement.title')}</h3>
                <p className="text-gray-400 mb-4">{t('tradingInsights.cards.riskManagement.description')}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{t('tradingInsights.cards.riskManagement.readTime')}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button className="bg-[color:var(--brand-orange)] hover:bg-[color:var(--amber-accent)] text-white font-bold py-6 px-12 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 h-16 text-xl shadow-xl transform hover:scale-105 min-w-[240px]">
              <Globe className="w-6 h-6" />
              <span>{t('tradingInsights.viewMore')}</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="bg-gradient-to-r from-[color:var(--brand-orange)] to-[color:var(--amber-accent)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-white fade-in">
            <h2 className="text-4xl font-bold mb-8">
              {t('finalCta.title')}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button 
                onClick={() => handleDownloadClick('android-final')}
                disabled={isLoading === 'android-final'}
                className="bg-green-600 text-white hover:bg-green-700 font-bold py-6 px-12 rounded-xl text-xl flex items-center justify-center space-x-4 shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {isLoading === 'android-final' ? (
                  <>
                    <div className="loading-spinner mr-2"></div>
                    <span>Loading...</span>
                  </>
                                  ) : (
                    <>
                      <SiGoogleplay className="w-7 h-7" />
                      <span>{t('finalCta.getOnGooglePlay')}</span>
                    </>
                  )}
              </Button>
              <Button 
                onClick={() => handleDownloadClick('ios-final')}
                disabled={isLoading === 'ios-final'}
                className="bg-black text-white hover:bg-gray-900 font-bold py-6 px-12 rounded-xl text-xl flex items-center justify-center space-x-4 shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-gray-700"
              >
                {isLoading === 'ios-final' ? (
                  <>
                    <div className="loading-spinner mr-2"></div>
                    <span>Loading...</span>
                  </>
                                  ) : (
                    <>
                      <SiApple className="w-7 h-7" />
                      <span>{t('finalCta.downloadOnAppStore')}</span>
                    </>
                  )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Section 10: Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <Crosshair className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-white">GOLDSNIPER</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[color:var(--brand-orange)] transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[color:var(--brand-orange)] transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[color:var(--brand-orange)] transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.sections.appFeatures')}</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">{t('nav.features')}</a></li>
                <li><a href="#results" className="hover:text-white transition-colors">{t('nav.performance')}</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">{t('nav.pricing')}</a></li>
                <li><a href="#insights" className="hover:text-white transition-colors">{t('nav.support')}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.sections.support')}</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.helpCenter')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.userGuide')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.communityAccess')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('common.contactSupport')}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <p className="text-gray-400">{t('footer.copyright')}</p>
                <p className="text-sm text-gray-500 mt-1">{t('footer.disclaimer')}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={() => handleDownloadClick('android-footer')}
                  disabled={isLoading === 'android-footer'}
                  className="bg-[color:var(--brand-orange)] hover:bg-[color:var(--amber-accent)] text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  {isLoading === 'android-footer' ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      <span>{t('common.loading')}</span>
                    </>
                  ) : (
                    <>
                      <SiGoogleplay className="w-4 h-4" />
                      <span>{t('common.downloadFor', { platform: 'Google Play' })}</span>
                    </>
                  )}
                </Button>
                <Button 
                  onClick={() => handleDownloadClick('ios-footer')}
                  disabled={isLoading === 'ios-footer'}
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  {isLoading === 'ios-footer' ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      <span>{t('common.loading')}</span>
                    </>
                  ) : (
                    <>
                      <SiApple className="w-4 h-4" />
                      <span>{t('common.downloadFor', { platform: 'App Store' })}</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
