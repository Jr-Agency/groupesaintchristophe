import React, { useState } from 'react';
import { MapPin, Bed, Users, BookOpen, Utensils, Monitor, ChevronRight } from 'lucide-react';
import batimentReginaCaelie4 from '../img/batiment regina caelie4.jpg';
import maternelleLouis2 from '../img/maternelle louis2.jpg';
import batimentInterna1 from '../img/batiment interna1.jpg';
import whatsappNzengAyong from '../img/WhatsApp Image 2025-08-10 à 14.15.03_a5675470.jpg';

const SchoolsPage: React.FC = () => {
  const [selectedSchool, setSelectedSchool] = useState(0);

  const schools = [
    {
      name: 'Bas de Guégué',
      subtitle: 'Collège/Lycée Regina Caeli',
      description: 'Notre établissement phare accueille les élèves du secondaire de la 6e à la 3e avec un internat sécurisé.',
      image: batimentReginaCaelie4,
      features: [
        { icon: BookOpen, title: 'Secondaire 6e à 3e', description: 'Formation complète du collège' },
        { icon: Bed, title: 'Internat sécurisé', description: 'Pavillons séparés filles/garçons' },
        { icon: Users, title: 'Encadrement 24h/24', description: 'Surveillance et accompagnement permanent' },
      ],
      color: 'from-blue-500 to-blue-600',
      hasSecondaryLogo: true
    },
    {
      name: 'Louis',
      subtitle: 'Éducation complète de la petite enfance au primaire',
      description: 'Un environnement adapté aux plus jeunes avec des équipements modernes et une attention particulière au bien-être.',
      image: maternelleLouis2,
      features: [
        { icon: Users, title: 'Crèche climatisée', description: 'Accueil des tout-petits dans le confort' },
        { icon: BookOpen, title: 'Maternelle & Primaire', description: 'Formation de base solide' },
        { icon: Utensils, title: 'Cantine équilibrée', description: 'Repas nutritifs et savoureux' },
        { icon: Monitor, title: 'Salle informatique moderne', description: 'Initiation au numérique' },
      ],
      color: 'from-green-500 to-green-600',
      hasSecondaryLogo: false
    },
    {
      name: 'Nzeng-Ayong',
      subtitle: 'Annexe d\'excellence',
      description: 'Notre annexe maintient tous les standards du groupe avec les mêmes valeurs et programmes éducatifs.',
      image: whatsappNzengAyong,
      features: [
        { icon: BookOpen, title: 'Programmes complets', description: 'Tous les niveaux d\'enseignement' },
        { icon: Users, title: 'Équipe qualifiée', description: 'Enseignants expérimentés' },
        { icon: MapPin, title: 'Localisation stratégique', description: 'Accessibilité optimale' },
      ],
      color: 'from-yellow-500 to-orange-500',
      hasSecondaryLogo: false
    }
  ];

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
            Nos Établissements
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Trois sites d'excellence pour accompagner vos enfants à chaque étape de leur parcours éducatif
          </p>
        </div>
      </section>

      {/* Navigation des établissements */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {schools.map((school, index) => (
              <button
                key={index}
                onClick={() => setSelectedSchool(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedSchool === index
                    ? `bg-gradient-to-r ${school.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {school.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu dynamique de l'établissement sélectionné */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative">
                  <img 
                    src={schools[selectedSchool].image}
                    alt={schools[selectedSchool].name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${schools[selectedSchool].color} opacity-20`}></div>
                  
                  {/* Logo secondaire pour Regina Caeli */}
                  {schools[selectedSchool].hasSecondaryLogo && (
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                        <span className="text-lg font-bold text-blue-900">RC</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contenu */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                      {schools[selectedSchool].name}
                    </h2>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${schools[selectedSchool].color} bg-clip-text text-transparent mb-4`}>
                      {schools[selectedSchool].subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {schools[selectedSchool].description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {schools[selectedSchool].features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-2"
                      >
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${schools[selectedSchool].color} flex items-center justify-center flex-shrink-0`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-blue-900 mb-1">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <button className={`bg-gradient-to-r ${schools[selectedSchool].color} text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2`}>
                      <span>Découvrir cet établissement</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section comparative */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Trois sites, une même excellence
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Chaque établissement du groupe Saint-Christophe partage les mêmes valeurs d'excellence, 
              d'innovation et de bienveillance pour offrir à vos enfants la meilleure éducation possible.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {schools.map((school, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedSchool(index)}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${school.color} flex items-center justify-center mx-auto mb-4`}>
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{school.name}</h3>
                  <p className="text-gray-600 text-sm">{school.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolsPage;