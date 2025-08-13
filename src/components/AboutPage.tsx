import React from 'react';
import { Calendar, Users, Trophy, Heart, Target, BookOpen } from 'lucide-react';
import batimentReginaCaelie4 from '../img/batiment regina caelie4.jpg';
import maternelleLouis1 from '../img/maternelle louis1.jpg';
import chambreInterna1 from '../img/chambre interna1.jpg';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Section Hero */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${batimentReginaCaelie4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-800/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Notre Histoire
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Plus de 45 ans d'excellence éducative au service de la formation des futurs leaders
          </p>
        </div>
      </section>

      {/* Timeline historique */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Une tradition qui perdure
              </h2>
              <p className="text-xl text-gray-600">
                Découvrez les étapes marquantes de notre parcours éducatif
              </p>
            </div>

            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500"></div>

              {[
                {
                  year: '1979',
                  title: 'Fondation du Groupe',
                  description: 'Création du Groupe scolaire bilingue Saint-Christophe avec la vision de former des élites éducatives.',
                  icon: Calendar,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  year: '1985',
                  title: 'Expansion des programmes',
                  description: 'Développement de programmes bilingues innovants et introduction de l\'enseignement de l\'anglais dès le plus jeune âge.',
                  icon: BookOpen,
                  color: 'from-green-500 to-green-600'
                },
                {
                  year: '1995',
                  title: 'Ouverture de nouveaux sites',
                  description: 'Extension avec l\'ouverture des établissements de Louis et Nzeng-Ayong pour répondre aux besoins croissants.',
                  icon: Trophy,
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  year: '2010',
                  title: 'Modernisation des infrastructures',
                  description: 'Rénovation complète des équipements : salles informatiques modernes, bibliothèques, cantines équilibrées.',
                  icon: Target,
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  year: 'Aujourd\'hui',
                  title: 'Excellence reconnue',
                  description: 'Plus de 45 ans d\'expérience, des milliers d\'élèves formés et une réputation d\'excellence dans toute la région.',
                  icon: Heart,
                  color: 'from-red-500 to-pink-500'
                }
              ].map((milestone, index) => (
                <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                    {/* Contenu */}
                    <div className="flex-1 ml-20 md:ml-0">
                      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center mr-4`}>
                            <milestone.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Marqueur timeline */}
                    <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${milestone.color} border-4 border-white shadow-lg z-10`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission et valeurs */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Notre Mission & Nos Valeurs
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Mission */}
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Notre Mission</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Former des élites capables de relever les défis du 21e siècle en cultivant 
                    l'excellence académique, les valeurs morales et l'ouverture sur le monde.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Excellence éducative garantie',
                      'Développement personnel complet',
                      'Préparation aux défis futurs'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Valeurs */}
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Nos Valeurs</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Des principes fondamentaux qui guident notre approche pédagogique 
                    et notre engagement envers chaque élève.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Excellence',
                      'Respect',
                      'Intégrité',
                      'Innovation',
                      'Bienveillance',
                      'Engagement'
                    ].map((value, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 text-center"
                      >
                        <span className="text-blue-800 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;