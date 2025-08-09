import React from 'react';
import { Globe, Zap, Trophy, Heart, Shield, Users, BookOpen, Star } from 'lucide-react';

const AssetsPage: React.FC = () => {
  const assets = [
    {
      icon: Globe,
      title: 'Cours d\'anglais dès le plus jeune âge',
      description: 'Immersion linguistique précoce pour une maîtrise parfaite de l\'anglais et préparation aux défis internationaux.',
      image: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-blue-500 to-blue-600',
      benefits: ['Bilinguisme garanti', 'Ouverture internationale', 'Avantage concurrentiel']
    },
    {
      icon: Zap,
      title: 'Clubs de taekwondo',
      description: 'Formation physique et mentale à travers l\'art martial, développant discipline, respect et confiance en soi.',
      image: 'https://images.pexels.com/photos/4761615/pexels-photo-4761615.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-red-500 to-red-600',
      benefits: ['Discipline physique', 'Force mentale', 'Valeurs martiales']
    },
    {
      icon: Trophy,
      title: 'Programme d\'échange culturel',
      description: 'Ouverture sur le monde grâce à des partenariats internationaux et des échanges enrichissants.',
      image: 'https://images.pexels.com/photos/3184164/pexels-photo-3184164.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-green-500 to-green-600',
      benefits: ['Vision mondiale', 'Échanges culturels', 'Réseau international']
    },
    {
      icon: Heart,
      title: 'Colonie de vacances',
      description: 'Aventures éducatives pendant les vacances pour continuer l\'apprentissage dans la joie et la découverte.',
      image: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-yellow-500 to-orange-500',
      benefits: ['Apprentissage ludique', 'Aventures enrichissantes', 'Souvenirs durables']
    },
    {
      icon: Users,
      title: 'Encadrement pédagogique de qualité',
      description: 'Équipe d\'enseignants expérimentés et passionnés, dédiés à l\'excellence éducative de chaque élève.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-purple-500 to-purple-600',
      benefits: ['Expertise reconnue', 'Suivi personnalisé', 'Passion éducative']
    },
    {
      icon: Shield,
      title: 'Environnement sain et stimulant',
      description: 'Cadre sécurisé et bienveillant favorisant l\'épanouissement personnel et académique des élèves.',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-teal-500 to-teal-600',
      benefits: ['Sécurité totale', 'Bien-être garanti', 'Développement optimal']
    },
    {
      icon: BookOpen,
      title: 'Enseignants qualifiés',
      description: 'Professionnels diplômés et certifiés, en formation continue pour rester à la pointe de la pédagogie moderne.',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-indigo-500 to-indigo-600',
      benefits: ['Diplômes reconnus', 'Formation continue', 'Méthodes innovantes']
    },
    {
      icon: Star,
      title: 'Excellence académique reconnue',
      description: 'Résultats exceptionnels aux examens et reconnaissance par les institutions éducatives nationales.',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-pink-500 to-pink-600',
      benefits: ['Taux de réussite élevé', 'Reconnaissance officielle', 'Réputation d\'excellence']
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Section Hero */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-800/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nos Atouts
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez les avantages uniques qui font la force du Groupe scolaire Saint-Christophe
          </p>
        </div>
      </section>

      {/* Grille des atouts */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Ce qui nous distingue
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chaque atout représente notre engagement vers l'excellence éducative 
                et l'épanouissement complet de nos élèves
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {assets.map((asset, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={asset.image}
                        alt={asset.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${asset.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                      
                      {/* Icône */}
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                          <asset.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4 leading-tight">
                        {asset.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {asset.description}
                      </p>

                      {/* Avantages */}
                      <div className="space-y-3">
                        {asset.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${asset.color} mr-3`}></div>
                            <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Badge */}
                      <div className="mt-6">
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${asset.color}`}>
                          Avantage exclusif
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section récapitulatif */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              L'excellence à chaque étape
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Ces atouts se combinent pour créer une expérience éducative unique, 
              préparant nos élèves à devenir les leaders de demain.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: '8+', label: 'Atouts majeurs' },
                { number: '45+', label: 'Années d\'expérience' },
                { number: '100%', label: 'Engagement qualité' },
                { number: '∞', label: 'Possibilités d\'avenir' }
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-blue-500/25 hover:scale-105 transform transition-all duration-300">
                Découvrir nos programmes
              </button>
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
      `}</style>
    </div>
  );
};

export default AssetsPage;