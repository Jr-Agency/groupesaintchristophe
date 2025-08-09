import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Users, BookOpen, Trophy, Heart, Zap, Shield, Globe } from 'lucide-react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SchoolsPage from './components/SchoolsPage';
import AssetsPage from './components/AssetsPage';
import GalleryPage from './components/GalleryPage';
import ParentsPage from './components/ParentsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

type Page = 'accueil' | 'apropos' | 'etablissements' | 'atouts' | 'galerie' | 'parents' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <HomePage />;
      case 'apropos':
        return <AboutPage />;
      case 'etablissements':
        return <SchoolsPage />;
      case 'atouts':
        return <AssetsPage />;
      case 'galerie':
        return <GalleryPage />;
      case 'parents':
        return <ParentsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header 
        currentPage={currentPage}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        navigateToPage={navigateToPage}
      />
      
      <main className="transition-all duration-500 ease-in-out">
        {renderCurrentPage()}
      </main>
      
      <Footer navigateToPage={navigateToPage} />
    </div>
  );
}

export default App;