import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Heart,
  Sparkles,
  ArrowUp,
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

interface FooterProps {
  navigateToPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateToPage }) => {
  const quickLinks = [
    { key: 'accueil' as Page, label: 'Accueil' },
    { key: 'apropos' as Page, label: 'À propos' },
    { key: 'etablissements' as Page, label: 'Établissements' },
    { key: 'atouts' as Page, label: 'Nos atouts' },
  ];

  const services = [
    { key: 'galerie' as Page, label: 'Galerie' },
    { key: 'parents' as Page, label: 'Association parents' },
    { key: 'contact' as Page, label: 'Contact' },
    { key: 'contact' as Page, label: 'Inscriptions' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background décoratif animé */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Section principale */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-white-400 via-white-500 to-white-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <a href="#" target="_blank">
                    <img
                      src={logoSC2}
                      alt="logo-GSC"
                      className="w-12 h-12 object-contain mx-auto"
                    />
                  </a>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400 animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Saint-Christophe
                </h3>
                <p className="text-blue-200 text-sm font-medium">
                  Excellence depuis 1979
                </p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed mb-8 text-lg">
              Former des élites avec excellence, confiance et valeurs depuis
              plus de 45 ans. Votre partenaire éducatif de confiance.
            </p>

            {/* Réseaux sociaux avec animations */}
            <div className="flex space-x-4">
              {[
                {
                  icon: Facebook,
                  color: 'from-blue-600 to-blue-700',
                  href: '#',
                },
                {
                  icon: Instagram,
                  color: 'from-pink-500 to-purple-600',
                  href: '#',
                },
                {
                  icon: Twitter,
                  color: 'from-blue-400 to-cyan-500',
                  href: '#',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`group w-12 h-12 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-500`}
                >
                  <social.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Liens rapides
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => navigateToPage(link.key)}
                    className="group text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 transform inline-flex items-center space-x-2 text-lg"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Nos services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigateToPage(service.key)}
                    className="group text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 transform inline-flex items-center space-x-2 text-lg"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>{service.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact avec design amélioré */}
          <div>
            <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              Contact
            </h4>
            <div className="space-y-6">
              <div className="group flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/90 text-lg">+241 60 35 41 92</span>
              </div>

              <a
                href="https://wa.me/24160354192"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border border-green-400/20 hover:bg-green-500/30 transition-all duration-300 hover:scale-105 transform"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-300 font-semibold text-lg">
                  060 35 41 92
                </span>
              </a>

              <div className="group flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/90 text-lg">
                  contact@saint-christophe.ga
                </span>
              </div>

              <div className="group flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-white/90 text-lg block">
                    Libreville, Gabon
                  </span>
                  <span className="text-white/70 text-sm">
                    3 établissements
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section établissements avec design moderne */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Bas de Guégué',
                subtitle: 'Collège/Lycée Regina Caeli',
                description: 'Secondaire + Internat',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                name: 'Louis',
                subtitle: 'Crèche, Maternelle, Primaire',
                description: 'Cantine + Informatique',
                color: 'from-green-500 to-emerald-500',
              },
              {
                name: 'Nzeng-Ayong',
                subtitle: 'Annexe',
                description: '',
                color: 'from-purple-500 to-pink-500',
              },
            ].map((establishment, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${establishment.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}
                >
                  <span className="text-white font-bold text-xl">
                    {establishment.name.charAt(0)}
                  </span>
                </div>
                <h5 className="font-bold text-white text-xl mb-3">
                  {establishment.name}
                </h5>
                <p className="text-white/80 mb-2 text-lg">
                  {establishment.subtitle}
                </p>
                <p className="text-white/60 text-sm">
                  {establishment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright avec bouton retour en haut */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-lg mb-4 md:mb-0">
              © 2024 Groupe scolaire bilingue Saint-Christophe. Tous droits
              réservés.
            </p>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-white/70 text-lg">
                <span>Fait avec</span>
                <Heart className="w-5 h-5 text-red-400 animate-pulse" />
                <span>pour l'excellence éducative</span>
              </div>

              <button
                onClick={scrollToTop}
                className="group w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300"
              >
                <ArrowUp className="w-6 h-6 text-white group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }

        .animate-float { animation: float 8s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
      `}</style>
    </footer>
  );
};

export default Footer;
