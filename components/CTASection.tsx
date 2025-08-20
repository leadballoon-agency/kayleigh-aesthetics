interface CTASectionProps {
  onBookingClick?: () => void
}

export default function CTASection({ onBookingClick }: CTASectionProps) {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto section-padding text-center text-white">
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-6">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
          <span className="font-medium text-sm">Limited Availability</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Ready to Transform
          <span className="block mt-2">Your Skin?</span>
        </h2>

        <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
          Join hundreds of satisfied patients who have experienced the remarkable results of CO2 laser treatment
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <a href="tel:07595944927" className="text-white/90 hover:text-white">
              07595 944927
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <a href="mailto:info@aestheticswithkayleigh.co.uk" className="text-white/90 hover:text-white text-sm break-all">
              info@aestheticswithkayleigh.co.uk
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold text-lg mb-2">Visit</h3>
            <p className="text-white/90 text-sm">
              15 Hawthorn Drive<br />Durham, DL56GH
            </p>
          </div>
        </div>

        <button 
          onClick={onBookingClick}
          className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Book Your Free Consultation
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <div className="mt-12 flex items-center justify-center space-x-8">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-sm text-white/80">5.0 on Google</p>
          </div>
          
          <div className="w-px h-12 bg-white/30"></div>
          
          <div className="text-center">
            <p className="text-2xl font-bold mb-1">500+</p>
            <p className="text-sm text-white/80">Happy Patients</p>
          </div>
          
          <div className="w-px h-12 bg-white/30"></div>
          
          <div className="text-center">
            <p className="text-2xl font-bold mb-1">10+</p>
            <p className="text-sm text-white/80">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}