import React, { createContext, useContext, useState, useEffect } from 'react';

export type AppRoute = 'home' | 'sports' | 'sport-detail' | 'about' | 'team' | 'contact';

interface NavigationContextType {
  currentRoute: AppRoute;
  currentSportId: string | null;
  navigateToHome: () => void;
  navigateToSports: () => void;
  navigateToSportDetail: (sportId: string) => void;
  navigateToAbout: () => void;
  navigateToTeam: () => void;
  navigateToContact: () => void;
  navigateTo: (route: AppRoute, sportId?: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function parsePath(pathname: string): { route: AppRoute; sportId: string | null } {
  const clean = pathname.replace(/\/$/, '') || '/';
  
  if (clean === '/' || clean === '') {
    return { route: 'home', sportId: null };
  }
  if (clean === '/sports') {
    return { route: 'sports', sportId: null };
  }
  if (clean.startsWith('/sports/')) {
    const sportId = clean.replace('/sports/', '');
    return { route: 'sport-detail', sportId };
  }
  if (clean === '/about') {
    return { route: 'about', sportId: null };
  }
  if (clean === '/team') {
    return { route: 'team', sportId: null };
  }
  if (clean === '/contact') {
    return { route: 'contact', sportId: null };
  }

  // Default fallback to home
  return { route: 'home', sportId: null };
}

function getPathForRoute(route: AppRoute, sportId?: string | null): string {
  switch (route) {
    case 'home':
      return '/';
    case 'sports':
      return '/sports';
    case 'sport-detail':
      return `/sports/${sportId || 'basketball'}`;
    case 'about':
      return '/about';
    case 'team':
      return '/team';
    case 'contact':
      return '/contact';
    default:
      return '/';
  }
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('home');
  const [currentSportId, setCurrentSportId] = useState<string | null>(null);

  // Parse path on initial mount
  useEffect(() => {
    const { route, sportId } = parsePath(window.location.pathname);
    setCurrentRoute(route);
    setCurrentSportId(sportId);

    const handlePopState = () => {
      const { route: newRoute, sportId: newSportId } = parsePath(window.location.pathname);
      setCurrentRoute(newRoute);
      setCurrentSportId(newSportId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: AppRoute, sportId?: string) => {
    setCurrentRoute(route);
    setCurrentSportId(sportId || null);

    const targetPath = getPathForRoute(route, sportId);
    try {
      window.history.pushState(null, '', targetPath);
    } catch {
      // Handle iframe sandbox restriction if any
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => navigateTo('home');
  const navigateToSports = () => navigateTo('sports');
  const navigateToSportDetail = (sportId: string) => navigateTo('sport-detail', sportId);
  const navigateToAbout = () => navigateTo('about');
  const navigateToTeam = () => navigateTo('team');
  const navigateToContact = () => navigateTo('contact');

  return (
    <NavigationContext.Provider
      value={{
        currentRoute,
        currentSportId,
        navigateToHome,
        navigateToSports,
        navigateToSportDetail,
        navigateToAbout,
        navigateToTeam,
        navigateToContact,
        navigateTo,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
