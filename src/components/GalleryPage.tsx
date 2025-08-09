import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X, ZoomIn } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Tout voir' },
    { id: 'campus', label: 'Campus' },
    { id: 'students', label: 'Élèves' },
    { id: 'activities', label: 'Activités' },
    { id: 'teachers', label: 'Enseignants' },
    { id: 'events', label: 'Événements' }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Campus principal',
      category: 'campus',
      description: 'Vue d\'ensemble de notre magnifique campus'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Salle de classe moderne',
      category: 'campus',
      description: 'Environnement d\'apprentissage équipé des dernières technologies'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Élèves en activité',
      category: 'students',
      description: 'Nos élèves concentrés pendant un cours'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Enseignement personnalisé',
      category: 'teachers',
      description: 'Accompagnement individuel de qualité'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/4761615/pexels-photo-4761615.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Club de taekwondo',
      category: 'activities',
      description: 'Formation physique et mentale'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Cours d\'anglais',
      category: 'activities',
      description: 'Apprentissage des langues dès le plus jeune âge'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Bibliothèque',
      category: 'campus',
      description: 'Espace de lecture et de recherche'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.pexels.com/photos/3184164/pexels-photo-3184164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Échange culturel',
      category: 'events',
      description: 'Rencontre avec des étudiants internationaux'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Colonie de vacances',
      category: 'events',
      description: 'Aventures éducatives pendant les vacances'
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Cour de récréation',
      category: 'campus',
      description: 'Espace de jeu sécurisé'
    },
    {
      id: 11,
      type: 'image',
      src: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Cérémonie de remise des diplômes',
      category: 'events',
      description: 'Célébration de la réussite de nos élèves'
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Excellence académique',
      category: 'students',
      description: 'Nos élèves brillent par leur excellence'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(newIndex);
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Section Hero */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-800/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Galerie
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez la vie quotidienne au sein du Groupe scolaire Saint-Christophe
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille de la galerie */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => openLightbox(index)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                    <img 
                      src={item.src}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <ZoomIn className="w-8 h-8 text-white mb-2 mx-auto" />
                        <p className="text-white font-semibold">Agrandir</p>
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-4">
                    <h3 className="font-bold text-blue-900 mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500">Aucun élément trouvé pour cette catégorie.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Bouton fermer */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation précédent */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Navigation suivant */}
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <img 
              src={filteredItems[selectedImage].src}
              alt={filteredItems[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Informations */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold mb-2">
                {filteredItems[selectedImage].title}
              </h3>
              <p className="text-white/90">
                {filteredItems[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}

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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;