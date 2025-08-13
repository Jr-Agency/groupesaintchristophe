import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Home,
  Info,
  School,
  Award,
  Image,
  Users,
  Phone,
  Sparkles,
} from 'lucide-react';
import logoSC2 from '../logo_sc2.png';

type Page =
  | 'accueil'
  | 'apropos'
  | 'etablissements'
  | 'atouts'
  | 'galerie'
  | 'parents'
  | 'contact';

interface HeaderProps {
  currentPage: Page;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  navigateToPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({
  currentPage,
  isMenuOpen,
  toggleMenu,
  navigateToPage,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      key: 'accueil' as Page,
      label: 'Accueil',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'apropos' as Page,
      label: 'À propos',
      icon: Info,
      color: 'from-purple-500 to-pink-500',
    },
    {
      key: 'etablissements' as Page,
      label: 'Établissements',
      icon: School,
      color: 'from-green-500 to-emerald-500',
    },
    {
      key: 'atouts' as Page,
      label: 'Nos atouts',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      key: 'galerie' as Page,
      label: 'Galerie',
      icon: Image,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      key: 'parents' as Page,
      label: 'Association parents',
      icon: Users,
      color: 'from-rose-500 to-pink-500',
    },
    {
      key: 'contact' as Page,
      label: 'Contact',
      icon: Phone,
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-white/20'
            : 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-100'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo et titre avec animation */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => navigateToPage('accueil')}
            >
              <div className="relative">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-white-600 via-white
                -600 to-white-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3"
                >
                  <a href="#" target="_blank">
                    <img
                      src={logoSC2}
                      alt="logo-GSC"
                      className="w-12 h-12 object-contain mx-auto"
                    />
                  </a>

                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 bg-clip-text text-transparent">
                  Saint-Christophe
                </h1>
                <p className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                  Excellence depuis 1979
                </p>
              </div>
            </div>

            {/* Menu desktop avec design élégant */}
            <nav className="hidden lg:flex items-center space-x-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = currentPage === item.key;
                const isHovered = hoveredItem === item.key;

                return (
                  <div key={item.key} className="relative">
                    <button
                      onClick={() => navigateToPage(item.key)}
                      onMouseEnter={() => setHoveredItem(item.key)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`relative flex items-center space-x-2 px-4 py-3 rounded-2xl font-medium transition-all duration-500 transform ${
                        isActive
                          ? `bg-gradient-to-r ${item.color} text-white shadow-xl scale-105`
                          : 'text-gray-700 hover:text-white hover:scale-105'
                      }`}
                    >
                      {/* Background animé au hover */}
                      {!isActive && (
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${
                            item.color
                          } rounded-2xl opacity-0 transition-all duration-500 ${
                            isHovered ? 'opacity-100 scale-105' : 'scale-95'
                          }`}
                        ></div>
                      )}

                      <div className="relative z-10 flex items-center space-x-2">
                        <IconComponent
                          className={`w-4 h-4 transition-all duration-300 ${
                            isActive || isHovered ? 'animate-pulse' : ''
                          }`}
                        />
                        <span className="text-sm">{item.label}</span>
                      </div>

                      {/* Effet de brillance */}
                      {(isActive || isHovered) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl animate-shimmer"></div>
                      )}
                    </button>

                    {/* Indicateur actif */}
                    {isActive && (
                      <div
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r ${item.color} rounded-full animate-bounce`}
                      ></div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Bouton menu mobile avec animation */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="w-6 h-6 animate-spin" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </div>
              {/* Effet de pulsation */}
              <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping opacity-20"></div>
            </button>
          </div>

          {/* Menu mobile avec design amélioré */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-700 ease-out ${
              isMenuOpen
                ? 'max-h-[500px] opacity-100 mt-6'
                : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 py-6 overflow-hidden">
              {/* Background animé */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50"></div>

              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = currentPage === item.key;

                return (
                  <button
                    key={item.key}
                    onClick={() => navigateToPage(item.key)}
                    className={`relative w-full flex items-center space-x-4 px-8 py-4 text-left transition-all duration-500 transform hover:scale-105 ${
                      isActive
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                        : 'text-gray-700 hover:bg-white/50'
                    } ${index === 0 ? 'rounded-t-3xl' : ''} ${
                      index === menuItems.length - 1 ? 'rounded-b-3xl' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isMenuOpen
                        ? 'slideInLeft 0.6s ease-out forwards'
                        : 'none',
                    }}
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-white/20 backdrop-blur-sm'
                          : `bg-gradient-to-r ${item.color} text-white shadow-lg`
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-semibold text-lg">
                        {item.label}
                      </span>
                      {isActive && (
                        <div className="text-sm opacity-80">Page actuelle</div>
                      )}
                    </div>

                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
};

export default Header;
