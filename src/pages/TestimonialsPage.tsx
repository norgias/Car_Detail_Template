import { Star } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Michael Rodriguez',
      rating: 5,
      review:
        'Absolutely phenomenal service! My BMW looks better than the day I bought it. The attention to detail is incredible, and the ceramic coating is holding up beautifully after 6 months.',
      date: 'December 2025',
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      review:
        'I was skeptical about the price at first, but wow, it was worth every penny. My Tesla Model S interior looks brand new again. The team was professional and the results speak for themselves.',
      date: 'November 2025',
    },
    {
      name: 'David Chen',
      rating: 5,
      review:
        'Best detailing service in the area, hands down. They removed scratches I thought were permanent and the paint correction made my Porsche shine like a mirror. Highly recommended!',
      date: 'January 2026',
    },
    {
      name: 'Jennifer Williams',
      rating: 5,
      review:
        'Elite Detailing transformed my SUV! With three kids, the interior was a disaster. They got stains out I didnt think were possible. Scheduling was easy and they were punctual.',
      date: 'December 2025',
    },
    {
      name: 'Robert Taylor',
      rating: 5,
      review:
        'I take my classic Mustang here exclusively. They understand vintage cars and use techniques that preserve the original finish. True craftsmen who care about their work.',
      date: 'October 2025',
    },
    {
      name: 'Amanda Martinez',
      rating: 5,
      review:
        'The Ultimate Detail package exceeded my expectations. My Mercedes looks showroom fresh. The engine bay cleaning was meticulous and the leather conditioning brought the seats back to life.',
      date: 'January 2026',
    },
  ];

  const beforeAfterPhotos = [
    {
      before: 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Full exterior detail & ceramic coating',
    },
    {
      before: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Paint correction & polish',
    },
    {
      before: 'https://images.pexels.com/photos/3354647/pexels-photo-3354647.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Interior deep clean & leather treatment',
    },
    {
      before: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Headlight restoration',
    },
    {
      before: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Engine bay detailing',
    },
    {
      before: 'https://images.pexels.com/photos/3354365/pexels-photo-3354365.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Wheel & tire restoration',
    },
  ];

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
          CUSTOMER TESTIMONIALS
        </h1>
        <p className="text-center text-gray-300 mb-16 text-lg">
          See what our satisfied customers have to say
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
          BEFORE & AFTER
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Real results from real customers
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
