import React, { useEffect, useState } from 'react';
import {
  ChevronDown,
  Star,
  Award,
  Users,
  BookOpen,
  Sparkles,
  ArrowRight,
  Play,
} from 'lucide-react';
import batimentReginaCaelie5 from '../img/batiment regina caelie5.jpg';
import WhatsAppImage101443 from '../img/WhatsApp Image 2025-08-08 à 10.14.43_2dce1b73.jpg';
import elevePrimaireLouis13 from '../img/eleve primaire louis 13.jpg';
import logoSC2 from '../logo_sc2.png';
import batimentReginaCaelie6 from '../img/batiment regina caelie6.jpg';
import elevePrimaireLouis2 from '../img/eleve primaire louis 2.jpg';

const HomePage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: batimentReginaCaelie5,
      title: 'Excellence Éducative',
      subtitle: 'Depuis 1979',
    },
    {
      image: WhatsAppImage101443,
      title: 'Innovation Pédagogique',
      subtitle: 'Technologies modernes',
    },
    {
      image: elevePrimaireLouis13,
      title: 'Épanouissement Personnel',
      subtitle: 'Chaque élève compte',
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="pt-20">
      {/* Section Hero avec carrousel et parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Carrousel de backgrounds */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-all duration-1000 ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollY * 0.5}px) scale(${
                index === currentSlide ? 1 : 1.1
              })`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-green-800/70"></div>
          </div>
        ))}

        {/* Particules flottantes */}
        <div className="absolute inset-0 z-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Contenu principal */}
        <div
          className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Logo Saint-Christophe animé */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
            <div className="relative w-50 h-50 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-20"></div>
              <div className="relative w-full h-full bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30">
                <a href="#" target="_blank">
                  <img
                    src={logoSC2}
                    alt="logo-GSC"
                    className="w-20 h-20 object-contain mx-auto"
                  />
                </a>
                <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="block animate-fadeInUp">Depuis 1979,</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-fadeInUp animation-delay-300">
              nous formons des élites
            </span>
            <span className="block text-3xl md:text-5xl mt-4 animate-fadeInUp animation-delay-600">
              avec excellence, confiance et valeurs
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-900">
            Plongez dans une aventure éducative exceptionnelle avec plus de 45
            ans d'expérience dans la formation des futurs leaders.
          </p>

          {/* Statistiques interactives */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Award,
                number: '45+',
                label: "Années d'expérience",
                color: 'from-yellow-400 to-orange-500',
              },
              {
                icon: Users,
                number: '1000+',
                label: 'Élèves formés',
                color: 'from-blue-400 to-cyan-500',
              },
              {
                icon: BookOpen,
                number: '3',
                label: 'Établissements',
                color: 'from-green-400 to-emerald-500',
              },
              {
                icon: Star,
                number: '100%',
                label: 'Réussite',
                color: 'from-pink-400 to-rose-500',
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-500 cursor-pointer"
                style={{
                  animationDelay: `${1200 + index * 200}ms`,
                  animation: isVisible
                    ? 'fadeInUp 0.8s ease-out forwards'
                    : 'none',
                }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:shadow-yellow-500/25 hover:scale-110 transform transition-all duration-500 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-3">
                <span>Découvrir notre excellence</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </div>

          {/* Indicateurs de slide */}
          <div className="flex justify-center space-x-3 mb-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Indicateur de scroll animé */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Section présentation avec animations */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 relative overflow-hidden">
        {/* Background décoratif */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-800 to-green-800 bg-clip-text text-transparent mb-8">
                Une tradition d'excellence éducative
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Le Groupe scolaire bilingue Saint-Christophe accompagne vos
                enfants dans leur épanouissement académique et personnel depuis
                1979.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Excellence académique',
                  description:
                    "Des programmes d'enseignement rigoureux et adaptés aux standards internationaux.",
                  image: batimentReginaCaelie6,
                  color: 'from-blue-500 to-cyan-500',
                  icon: BookOpen,
                },
                {
                  title: 'Environnement bienveillant',
                  description:
                    "Un cadre sécurisé et stimulant pour l'épanouissement de chaque élève.",
                  image: elevePrimaireLouis2,
                  color: 'from-green-500 to-emerald-500',
                  icon: Users,
                },
                {
                  title: 'Formation complète',
                  description:
                    'De la crèche au lycée, nous accompagnons vos enfants à chaque étape.',
                  image: batimentReginaCaelie5,
                  color: 'from-yellow-500 to-orange-500',
                  icon: Award,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-700 cursor-pointer"
                >
                  <div className="aspect-w-16 aspect-h-12 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                    ></div>
                  </div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div
                      className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-y-[-4px] transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed group-hover:translate-y-[-4px] transition-transform duration-300 delay-100">
                      {item.description}
                    </p>

                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-900 { animation-delay: 900ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </div>
  );
};

export default HomePage;
