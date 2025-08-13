import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Users,
  CheckCircle,
} from 'lucide-react';
import batimentReginaCaelie5 from '../img/batiment regina caelie5.jpg';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    establishment: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const establishments = [
    {
      name: 'Bas de Guégué - Regina Caeli',
      address: 'Quartier Bas de Guégué, Libreville',
      phone: '(241) 60 35 41 92',
    },
    {
      name: 'Louis',
      address: 'Quartier Louis, Libreville',
      phone: '(241) 60 35 41 92',
    },
    {
      name: 'Nzeng-Ayong',
      address: 'Quartier Nzeng-Ayong, Libreville',
      phone: '(241) 60 35 41 92',
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      info: '+241 60 35 41 92',
      description: 'Du lundi au vendredi, 8h-18h',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '060 35 41 92',
      description: 'Réponse rapide garantie',
      color: 'from-green-500 to-green-600',
      isWhatsApp: true,
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contact@saint-christophe.ga',
      description: 'Réponse sous 24h',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      info: 'Libreville, Gabon',
      description: '3 établissements à votre service',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Section Hero */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${batimentReginaCaelie5})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-800/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact & Inscriptions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Nous sommes là pour répondre à toutes vos questions et vous
            accompagner dans vos démarches
          </p>

          {/* WhatsApp CTA principal */}
          <div className="flex justify-center">
            <a
              href="https://wa.me/24160354192"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Contactez-nous sur WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Méthodes de contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Comment nous joindre
              </h2>
              <p className="text-xl text-gray-600">
                Plusieurs moyens pour rester en contact avec notre équipe
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="text-center group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards',
                  }}
                >
                  <div
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                  >
                    <method.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {method.title}
                  </h3>

                  {method.isWhatsApp ? (
                    <a
                      href={`https://wa.me/24160354192`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-green-600 hover:text-green-700 transition-colors duration-300 block mb-2"
                    >
                      {method.info}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      {method.info}
                    </p>
                  )}

                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact et établissements */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Formulaire */}
              <div>
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">
                    Envoyez-nous un message
                  </h3>

                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-green-700">
                        Message envoyé avec succès ! Nous vous répondrons
                        rapidement.
                      </span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Votre nom complet"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="+241 XX XX XX XX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Établissement concerné
                        </label>
                        <select
                          name="establishment"
                          value={formData.establishment}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Sélectionner</option>
                          <option value="bas-de-guegoue">
                            Bas de Guégué - Regina Caeli
                          </option>
                          <option value="louis">Louis</option>
                          <option value="nzeng-ayong">Nzeng-Ayong</option>
                          <option value="general">Question générale</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Inscription, information, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Décrivez votre demande en détail..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Informations établissements */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">
                    Nos établissements
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Retrouvez nos trois sites d'excellence répartis à Libreville
                    pour vous offrir un service de proximité.
                  </p>
                </div>

                {establishments.map((establishment, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <h4 className="text-xl font-bold text-blue-900 mb-3">
                      {establishment.name}
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <span className="text-gray-600">
                          {establishment.address}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-600">
                          {establishment.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Horaires */}
                <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 mr-3" />
                    <h4 className="text-xl font-bold">Horaires d'ouverture</h4>
                  </div>

                  <div className="space-y-2 text-white/90">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span>7h30 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span>8h00 - 12h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span>Fermé</span>
                    </div>
                  </div>
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
      `}</style>
    </div>
  );
};

export default ContactPage;
