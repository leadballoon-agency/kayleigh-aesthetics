'use client'

import { useState } from 'react'

interface ResultsGalleryProps {
  onBookingClick?: () => void
}

export default function ResultsGallery({ onBookingClick }: ResultsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const results = [
    {
      image: '/images/beforeafter1.jpg',
      title: 'CO2 Transformation',
      description: 'Remarkable skin improvement',
      time: 'Results Vary'
    },
    {
      image: '/images/beforeafter2.jpg',
      title: 'Skin Rejuvenation',  
      description: 'Visible texture refinement',
      time: 'Results Vary'
    },
    {
      image: '/images/beforeafter3.jpg',
      title: 'Complete Renewal',
      description: 'Dramatic skin transformation',
      time: 'Results Vary'
    },
    {
      image: '/images/beforeafter4.jpg',
      title: 'Resurfacing Results',
      description: 'Professional CO2 treatment',
      time: 'Results Vary'
    }
  ]

  return (
    <section id="results" className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase">Real Results</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Transformations That
            <span className="block gradient-text">Speak For Themselves</span>
          </h2>
          <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
            Browse through our gallery of real patient results
          </p>
        </div>

        {/* Premium Results Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {results.map((result, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Before/After Label */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
                  Before
                </span>
                <span className="bg-primary-500/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium">
                  After
                </span>
              </div>

              {/* Time Badge */}
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur rounded-full px-3 py-1">
                <span className="text-xs font-medium text-neutral-700">{result.time}</span>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={result.image} 
                  alt={result.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{result.title}</h3>
                <p className="text-neutral-600">{result.description}</p>
                
                <div className="mt-4 flex items-center text-primary-600 font-medium">
                  <span>View Details</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Image Section */}
        <div className="mt-12">
          <div className="relative rounded-2xl overflow-hidden shadow-premium">
            <img 
              src="/images/home2.jpg" 
              alt="CO2 Laser Treatment Process" 
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-lg">
                <h3 className="text-white text-3xl font-bold mb-4">
                  See the Difference
                </h3>
                <p className="text-white/90 mb-6">
                  Our CO2 laser treatments deliver remarkable, long-lasting results that continue to improve over time.
                </p>
                <button 
                  onClick={onBookingClick}
                  className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '10+', label: 'Years Experience' },
            { number: 'RN', label: 'Registered Nurse' },
            { number: '£150', label: 'Starting From' },
            { number: '2', label: 'Expert Practitioners' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">{stat.number}</p>
              <p className="text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img 
                src={results[selectedImage].image} 
                alt={results[selectedImage].title}
                className="w-full rounded-lg"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 hover:bg-white transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}