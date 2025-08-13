import React, { useState } from 'react';
import { Calendar, MessageSquare, Users, Bell, ChevronRight, Heart, Star, BookOpen } from 'lucide-react';
import parentsDeleve from '../img/parents deleve.jpg';
import WhatsAppImage101444 from '../img/WhatsApp Image 2025-08-08 à 10.14.44_59588fa0.jpg';
import WhatsAppImage111821 from '../img/WhatsApp Image 2025-08-08 à 11.18.21_052ac271.jpg';
import WhatsAppImage112001 from '../img/WhatsApp Image 2025-08-08 à 11.20.01_cfaf5a9d.jpg';

const ParentsPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Rentrée scolaire 2024-2025 : Tout ce qu\'il faut savoir',
      excerpt: 'Découvrez les nouveautés de cette rentrée et préparez sereinement la nouvelle année scolaire de votre enfant.',
      content: 'La rentrée scolaire approche à grands pas et nous sommes ravis de vous présenter les nouveautés de cette année. Nouveaux programmes, activités enrichissantes et équipe pédagogique renforcée vous attendent.',
      date: '15 Août 2024',
      category: 'Actualités',
      image: parentsDeleve,
      author: 'Direction pédagogique'
    },
    {
      id: 2,
      title: 'Comment accompagner votre enfant dans ses devoirs',
      excerpt: 'Nos conseils d\'experts pour créer un environnement propice aux études à la maison.',
      content: 'L\'accompagnement scolaire à la maison est essentiel. Découvrez nos méthodes éprouvées pour aider votre enfant à développer son autonomie tout en maintenant sa motivation.',
      date: '10 Août 2024',
      category: 'Conseils',
      image: WhatsAppImage101444,
      author: 'Équipe pédagogique'
    },
    {
      id: 3,
      title: 'Journée portes ouvertes : Un succès retentissant',
      excerpt: 'Retour en images sur notre journée portes ouvertes qui a attiré de nombreuses familles.',
      content: 'Plus de 200 familles ont visité nos établissements lors de la journée portes ouvertes. Parents et enfants ont pu découvrir nos installations modernes et rencontrer notre équipe.',
      date: '5 Août 2024',
      category: 'Événements',
      image: WhatsAppImage111821,
      author: 'Service communication'
    },
    {
      id: 4,
      title: 'L\'importance du bilinguisme dans l\'éducation moderne',
      excerpt: 'Pourquoi commencer l\'apprentissage de l\'anglais dès le plus jeune âge est crucial.',
      content: 'Dans un monde globalisé, la maîtrise de plusieurs langues devient indispensable. Notre approche pédagogique favorise un apprentissage naturel et progressif de l\'anglais.',
      date: '1er Août 2024',
      category: 'Conseils',
      image: WhatsAppImage112001,
      author: 'Département langues'
    }
  ];

  const upcomingEvents = [
    {
      date: '20 Sept',
      title: 'Assemblée générale des parents',
      time: '18h00',
      location: 'Campus principal'
    },
    {
      date: '5 Oct',
      title: 'Soirée culturelle',
      time: '19h30',
      location: 'Établissement Louis'
    },
    {
      date: '15 Oct',
      title: 'Réunion parents-professeurs',
      time: '16h00',
      location: 'Tous établissements'
    }
  ];

  const quickTips = [
    {
      icon: BookOpen,
      title: 'Lecture quotidienne',
      tip: 'Encouragez 30 minutes de lecture par jour pour développer le vocabulaire et la compréhension.'
    },
    {
      icon: Heart,
      title: 'Communication positive',
      tip: 'Valorisez les efforts de votre enfant plus que les résultats pour maintenir sa motivation.'
    },
    {
      icon: Star,
      title: 'Routine équilibrée',
      tip: 'Établissez des horaires réguliers pour les devoirs, les loisirs et le sommeil.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Section Hero */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${parentsDeleve})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-800/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Association des Parents d'Élèves
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Ensemble pour l'épanouissement de nos enfants - Actualités, conseils et événements
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { icon: Users, number: '500+', label: 'Familles membres' },
              { icon: Calendar, number: '15+', label: 'Événements annuels' },
              { icon: MessageSquare, number: '24/7', label: 'Support disponible' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
                <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section principale avec blog et sidebar */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Blog principal */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">Actualités & Conseils</h2>
                  <p className="text-gray-600">Restez informés des dernières nouvelles et bénéficiez de nos conseils d'experts</p>
                </div>

                <div className="space-y-8">
                  {blogPosts.map((post, index) => (
                    <article 
                      key={post.id}
                      className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards'
                      }}
                    >
                      <div className="md:flex">
                        {/* Image */}
                        <div className="md:w-1/3">
                          <img 
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>

                        {/* Contenu */}
                        <div className="md:w-2/3 p-8">
                          <div className="flex items-center mb-4">
                            <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {post.category}
                            </span>
                            <span className="text-gray-500 text-sm ml-4">{post.date}</span>
                          </div>

                          <h3 className="text-2xl font-bold text-blue-900 mb-3 leading-tight">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Par {post.author}</span>
                            <button 
                              onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                            >
                              <span>{selectedPost === post.id ? 'Réduire' : 'Lire la suite'}</span>
                              <ChevronRight className={`w-4 h-4 transform transition-transform duration-300 ${selectedPost === post.id ? 'rotate-90' : ''}`} />
                            </button>
                          </div>

                          {/* Contenu étendu */}
                          {selectedPost === post.id && (
                            <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
                              <p className="text-gray-700 leading-relaxed">
                                {post.content}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Événements à venir */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-900">Événements à venir</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100">
                        <div className="text-center mr-4">
                          <div className="text-lg font-bold text-blue-600">{event.date.split(' ')[0]}</div>
                          <div className="text-sm text-gray-500">{event.date.split(' ')[1]}</div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-blue-900 text-sm">{event.title}</h4>
                          <p className="text-xs text-gray-600">{event.time} • {event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conseils rapides */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <Bell className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-900">Conseils de la semaine</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {quickTips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <tip.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 text-sm mb-1">{tip.title}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{tip.tip}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact rapide */}
                <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-6 text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-4">Besoin d'aide ?</h3>
                  <p className="mb-6 text-white/90">Notre équipe est là pour vous accompagner</p>
                  <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    Nous contacter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ParentsPage;