import { Star } from 'lucide-react';
import testimonialsData from '../../content/testimonials.json';

export default function TestimonialsPage() {
  const { testimonials, beforeAfterPhotos, page } = testimonialsData;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black text-white pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-yellow-400"
          style={{ fontFamily: "'Russo One', sans-serif" }}
        >
          {page.heading}
        </h1>

        <p className="text-center text-gray-300 mb-16 text-lg">
          {page.subheading}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-yellow-400">
                  {testimonial.name}
                </h3>
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {testimonial.review}
              </p>
              <p className="text-gray-500 text-sm">{testimonial.date}</p>
            </div>
          ))}
        </div>

        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-4 text-yellow-400"
          style={{ fontFamily: "'Russo One', sans-serif" }}
        >
          {page.beforeAfterHeading}
        </h2>

        <p className="text-center text-gray-300 mb-12 text-lg">
          {page.beforeAfterSubheading}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterPhotos.map((photo, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all duration-300 group"
            >
              <div className="relative">
                <div className="relative overflow-hidden">
                  <img
                    src={photo.before}
                    alt={`Before ${photo.description}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    BEFORE
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={photo.after}
                    alt={`After ${photo.description}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-yellow-400 font-bold text-center">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
