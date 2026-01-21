import site from 'Car_Detail_Template/content/site.json';
import servicesData from 'Car_Detail_Template/content/services.json';
import { ArrowDown, CheckCircle2, Sparkles, Shield, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';
//import { supabase } from '../lib/supabase';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_datetime: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferred_datetime: '',
        message: '',
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = servicesData.services;

  /*const services = [
    {
      name: 'Basic Detail',
      price: '$149',
      features: [
        'Exterior hand wash & dry',
        'Wheel & tire cleaning',
        'Interior vacuum',
        'Dashboard & console wipe',
        'Window cleaning (inside & out)',
      ],
    },
    {
      name: 'Premium Detail',
      price: '$299',
      features: [
        'Everything in Basic Detail',
        'Clay bar treatment',
        'Paint sealant application',
        'Leather conditioning',
        'Deep carpet & upholstery cleaning',
        'Engine bay cleaning',
        'Headlight restoration',
      ],
      featured: true,
    },
    {
      name: 'Ultimate Detail',
      price: '$499',
      features: [
        'Everything in Premium Detail',
        'Paint correction & buffing',
        'Ceramic coating application',
        'Full interior detailing',
        'Odor elimination treatment',
        'Chrome polishing',
        'Scratch removal',
        '6-month protection guarantee',
      ],
    },
  ];*/

  return (
    <div className="bg-black text-white">
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400 animate-fade-in"
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            PREMIUM CAR DETAILING
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto">
            Experience the ultimate in automotive care. We transform your vehicle
            into a showroom masterpiece with precision, passion, and unmatched
            attention to detail.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
          >
            BOOK YOUR DETAIL
          </button>
          <div className="mt-12 animate-bounce">
            <ArrowDown className="mx-auto text-yellow-400" size={32} />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400"
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            WHY CHOOSE US
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
              <Sparkles className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3
                className="text-2xl font-bold mb-3 text-yellow-400"
                style={{ fontFamily: "'Russo One', sans-serif" }}
              >
                EXPERT CARE
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our certified detailing specialists have years of experience
                working with luxury and exotic vehicles. Every car receives
                white-glove treatment.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
              <Shield className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3
                className="text-2xl font-bold mb-3 text-yellow-400"
                style={{ fontFamily: "'Russo One', sans-serif" }}
              >
                PREMIUM PRODUCTS
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We use only the highest quality ceramic coatings, waxes, and
                cleaning solutions. Your vehicle deserves nothing but the best.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
              <Clock className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3
                className="text-2xl font-bold mb-3 text-yellow-400"
                style={{ fontFamily: "'Russo One', sans-serif" }}
              >
                FLEXIBLE SCHEDULING
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We work around your schedule with convenient appointment times
                and mobile detailing options. Premium service on your terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-400"
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            SERVICE PACKAGES
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Choose the perfect package for your vehicle's needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-lg p-8 border-2 ${
                  service.featured
                    ? 'border-yellow-400 transform md:scale-105 shadow-xl shadow-yellow-400/20'
                    : 'border-gray-700'
                } hover:border-yellow-400 transition-all duration-300`}
              >
                {service.featured && (
                  <div className="bg-yellow-400 text-black text-center py-1 px-4 rounded-full text-sm font-bold mb-4 inline-block">
                    MOST POPULAR
                  </div>
                )}
                <h3
                  className="text-3xl font-bold mb-2 text-yellow-400"
                  style={{ fontFamily: "'Russo One', sans-serif" }}
                >
                  {service.name}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">
                    {service.price}
                  </span>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2
                        className="text-yellow-400 mr-3 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-400"
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            GET IN TOUCH
          </h2>
          <p className="text-center text-xl text-gray-300 mb-12">
            Ready to give your car the treatment it deserves? Let us know when
            you'd like your car detailed!
          </p>
          {submitSuccess && (
            <div className="bg-yellow-400 text-black p-4 rounded-lg mb-6 text-center font-bold">
              Thank you! We'll contact you shortly to confirm your appointment.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-yellow-400 mb-2 font-bold">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-yellow-400 mb-2 font-bold">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-yellow-400 mb-2 font-bold">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-yellow-400 mb-2 font-bold">
                Preferred Date/Time
              </label>
              <input
                type="text"
                required
                value={formData.preferred_datetime}
                onChange={(e) =>
                  setFormData({ ...formData, preferred_datetime: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                placeholder="e.g., Next Monday at 2 PM"
              />
            </div>
            <div>
              <label className="block text-yellow-400 mb-2 font-bold">
                Message
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                placeholder="Tell us about your vehicle and any special requirements..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-400 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SUBMITTING...' : 'BOOK APPOINTMENT'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
