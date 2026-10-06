/**
 * UMANG 2026 - Olympus Reborn
 * Annual Sports Festival of IIIT Bangalore
 * Official Sports Registration Portal
 */

import React, { useState } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SportsPage } from './pages/SportsPage';
import { SportDetailPage } from './pages/SportDetailPage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { RegistrationToast } from './components/RegistrationToast';
import { UmangIntroAnimation } from './components/UmangIntroAnimation';

function AppContent() {
  const { currentRoute, currentSportId } = useNavigation();
  const [toastEventName, setToastEventName] = useState<string | null>(null);

  const handleEventRegistered = (eventName: string) => {
    setToastEventName(eventName);
  };

  const renderActivePage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onEventRegistered={handleEventRegistered} />;
      case 'sports':
        return <SportsPage onEventRegistered={handleEventRegistered} />;
      case 'sport-detail':
        return (
          <SportDetailPage
            sportId={currentSportId || 'basketball'}
            onEventRegistered={handleEventRegistered}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onEventRegistered={handleEventRegistered} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#01040E] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#F5B81C] selection:text-[#01040E] olympian-stars-bg relative">
      {/* Dynamic Umang '26 Letter-Pop Intro Animation */}
      <UmangIntroAnimation />

      {/* Sticky Responsive Navigation Bar on Every Page */}
      <Navbar />

      {/* Main Routed Page Content Framed by Left-Most and Right-Most Greek Cream Pillars */}
      <main className="flex-1 lg:px-12 xl:px-16 transition-all duration-300">
        {renderActivePage()}
      </main>

      {/* Footer on Every Page */}
      <Footer />

      {/* External Registration Feedback Toast */}
      <RegistrationToast
        eventName={toastEventName}
        onClose={() => setToastEventName(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
