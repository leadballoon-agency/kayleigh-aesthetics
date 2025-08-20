interface PremiumTreatmentsProps {
  onBookingClick?: () => void
}

export default function PremiumTreatments({ onBookingClick }: PremiumTreatmentsProps) {
  const treatments = [
    {
      icon: '✨',
      title: 'Light CO2 Resurfacing',
      description: 'Perfect for fine lines and prevention',
      features: ['3-5 days downtime', 'Gentle treatment', '45-60 minutes', 'Minimal discomfort'],
      price: 'From £650',
      gradient: 'from-blue-400 to-cyan-600',
      popular: false
    },
    {
      icon: '🔬',
      title: 'Medium CO2 Resurfacing',
      description: 'Ideal for wrinkles and moderate scarring',
      features: ['5-7 days downtime', 'Dramatic results', '60-90 minutes', 'Visible improvement'],
      price: 'From £850',
      gradient: 'from-primary-400 to-primary-600',
      popular: true
    },
    {
      icon: '💎',
      title: 'Deep CO2 Resurfacing',
      description: 'Maximum results for severe concerns',
      features: ['7-10 days downtime', 'Complete transformation', '90-120 minutes', 'Long-lasting results'],
      price: 'From £1,200',
      gradient: 'from-purple-400 to-pink-600',
      popular: false
    }
  ]

  return (
    <section id="treatments" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Treatments That
            <span className="gradient-text"> Transform</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Each treatment is tailored to your unique needs for natural-looking results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className={`group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 transition-all duration-500 cursor-pointer flex flex-col h-full ${
                treatment.popular ? 'shadow-premium-lg scale-105' : 'shadow-premium hover:shadow-premium-lg'
              } hover:scale-105`}
            >
              {treatment.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${treatment.gradient} opacity-5 rounded-2xl sm:rounded-3xl transition-opacity group-hover:opacity-10`}></div>
              
              <div className="relative flex flex-col h-full">
                <div className="mb-4 sm:mb-6">
                  <div className={`text-4xl sm:text-5xl p-3 sm:p-4 bg-gradient-to-br ${treatment.gradient} rounded-xl sm:rounded-2xl bg-opacity-10 inline-block`}>
                    {treatment.icon}
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{treatment.title}</h3>
                  <p className="text-sm sm:text-base text-neutral-600">{treatment.description}</p>
                </div>

                <ul className="space-y-2 mb-4 sm:mb-6 flex-grow">
                  {treatment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-700">
                      <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-neutral-100 mt-auto">
                  <div>
                    <p className="text-xl sm:text-2xl font-bold gradient-text">{treatment.price}</p>
                  </div>
                  <button 
                    onClick={onBookingClick}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r ${treatment.gradient} text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}