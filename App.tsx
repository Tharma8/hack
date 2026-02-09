
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import AIToolPanel from './components/AIToolPanel';
import EvidenceToolkit from './components/EvidenceToolkit';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import Resources from './components/Resources';
import LiveScamMap from './components/LiveScamMap';
import ForensicLab from './components/ForensicLab';
import CasePortal from './components/CasePortal';
import IntelligenceHub from './components/IntelligenceHub';
import IntakeForm from './components/IntakeForm';
import FeatureDetail from './components/FeatureDetail';
import GuaranteePage from './components/GuaranteePage';
import AboutPage from './components/AboutPage';
import AddressScanner from './components/AddressScanner';
import { FEATURES } from './constants';

type Page = 'home' | 'portal' | 'intel' | 'intake' | 'feature-detail' | 'guarantee' | 'about';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedFeatureId]);

  const handleSelectFeature = (id: string) => {
    setSelectedFeatureId(id);
    setCurrentPage('feature-detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'portal':
        return <CasePortal />;
      case 'intel':
        return <IntelligenceHub />;
      case 'intake':
        return <IntakeForm onBack={() => setCurrentPage('home')} />;
      case 'guarantee':
        return <GuaranteePage onStartCase={() => setCurrentPage('intake')} />;
      case 'about':
        return <AboutPage />;
      case 'feature-detail':
        const feature = FEATURES.find(f => f.id === selectedFeatureId);
        if (!feature) {
          setCurrentPage('home');
          return null;
        }
        return (
          <FeatureDetail 
            feature={feature} 
            onBack={() => setCurrentPage('home')} 
            onStartIntake={() => setCurrentPage('intake')}
          />
        );
      default:
        return (
          <>
            <Hero onStartCase={() => setCurrentPage('intake')} />
            
            <section className="py-12 border-y border-white/5 bg-slate-900/40">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "Assets Traced", value: "$12M+" },
                  { label: "Cases Solved", value: "850+" },
                  { label: "Success Rate", value: "94%" },
                  { label: "Partner Agencies", value: "40+" }
                ].map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className="text-3xl font-sora font-bold text-teal-400 mb-1 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <AddressScanner />
            <AIToolPanel />
            <ForensicLab />
            <LiveScamMap />
            <FeatureGrid onSelectFeature={handleSelectFeature} />
            <AboutSection />
            <CaseStudies />
            
            <section className="py-24 px-6">
              <div className="max-w-5xl mx-auto glass rounded-[3rem] p-12 text-center space-y-8 relative overflow-hidden border-teal-500/20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/10 to-transparent pointer-events-none"></div>
                <h2 className="font-sora text-4xl font-bold relative z-10">Secure Your Digital Legacy.</h2>
                <p className="text-slate-400 max-w-xl mx-auto relative z-10">
                  Don't wait for the fraudster to disappear. Every second counts in digital forensics. Our WhatsApp investigators are standing by.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                  <button onClick={() => setCurrentPage('intake')} className="px-8 py-4 rounded-xl bg-teal-500 text-slate-900 font-bold hover:shadow-xl hover:shadow-teal-500/20 transition-all">
                    Start New Case Intake
                  </button>
                  <a href="https://wa.me/1234567890" className="px-8 py-4 rounded-xl glass font-bold hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2">
                    Direct WhatsApp Support
                  </a>
                </div>
              </div>
            </section>

            <EvidenceToolkit />
            <FAQ />
            
            <section className="py-24 px-6 overflow-hidden">
              <div className="max-w-7xl mx-auto text-center space-y-16">
                <h2 className="font-sora text-3xl font-bold">Trusted Professional Support</h2>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="glass p-8 rounded-3xl space-y-4 border-l-4 border-l-teal-400">
                    <div className="flex gap-1 text-teal-400 text-sm">★ ★ ★ ★ ★</div>
                    <p className="text-slate-300 italic text-lg leading-relaxed">
                      "After losing 2.5 BTC in a phishing scam, Hackite provided the tracing reports my bank needed. Their professionalism is unmatched."
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="w-12 h-12 rounded-full bg-slate-800" />
                      <div>
                        <div className="font-bold">David R.</div>
                        <div className="text-xs text-slate-500">Recovery Client</div>
                      </div>
                    </div>
                  </div>
                  <div className="glass p-8 rounded-3xl space-y-4 border-l-4 border-l-teal-400">
                    <div className="flex gap-1 text-teal-400 text-sm">★ ★ ★ ★ ★</div>
                    <p className="text-slate-300 italic text-lg leading-relaxed">
                      "The identity protection checklist saved me months of legal headaches. They knew exactly which buttons to push with the carriers."
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="w-12 h-12 rounded-full bg-slate-800" />
                      <div>
                        <div className="font-bold">Sarah M.</div>
                        <div className="text-xs text-slate-500">Identity Cleanup</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Resources />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen relative">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
