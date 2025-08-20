interface PremiumHeroProps {
  onBookingClick?: () => void
}

export default function PremiumHero({ onBookingClick }: PremiumHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-primary-700 font-medium text-xs sm:text-sm">Advanced CO2 Laser Treatment</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Transform Your
              <span className="block gradient-text mt-1 sm:mt-2">Skin Today</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed">
              Experience the gold standard in laser skin rejuvenation with Kayleigh's expert CO2 treatments. 
              Dramatic results for wrinkles, scars, and complete skin transformation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={onBookingClick}
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 sm:py-3.5 rounded-full font-medium text-sm sm:text-base hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Consultation
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <a 
                href="#assessment" 
                className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-6 py-3 sm:py-3.5 rounded-full font-medium text-sm sm:text-base hover:bg-primary-50 transition-all duration-300"
              >
                Take Assessment
              </a>
            </div>

            {/* Social Proof - Mobile Optimized */}
            <div className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-6 pt-3 sm:pt-4">
              <div className="text-center">
                <div className="flex text-yellow-400 text-sm sm:text-base">
                  ★★★★★
                </div>
                <p className="text-xs sm:text-sm text-neutral-600">5.0 Rating</p>
              </div>
              <div className="text-neutral-300">|</div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary-600">10+</p>
                <p className="text-xs sm:text-sm text-neutral-600">Years Exp.</p>
              </div>
              <div className="text-neutral-300 hidden sm:block">|</div>
              <div className="text-center hidden sm:block">
                <p className="text-xl sm:text-2xl font-bold text-primary-600">RN</p>
                <p className="text-xs sm:text-sm text-neutral-600">Nurse-Led</p>
              </div>
            </div>
          </div>

          {/* Hero Image Section - Mobile Optimized */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-2xl sm:rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center h-full w-full">
                {/* Main Image */}
                <div className="relative w-full max-w-sm sm:max-w-md">
                  <img 
                    src="/images/home1.jpg" 
                    alt="CO2 Laser Treatment" 
                    className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full lg:animate-float"
                  />
                  
                  {/* Price Badge - Mobile */}
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-2 sm:p-3 lg:hidden">
                    <div className="text-center">
                      <p className="text-xs font-medium">From</p>
                      <p className="text-lg sm:text-xl font-bold">£150</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Card - Desktop Only */}
              <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg">
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Expert CO2 Laser Specialist</h3>
                    <div className="flex justify-center items-center space-x-2 text-primary-600">
                      <span className="font-medium">10+ Years Experience</span>
                      <span className="text-primary-300">•</span>
                      <span className="font-medium">Advanced Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements - Hidden on Mobile */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-float opacity-20 blur-2xl"></div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-tr from-primary-300 to-primary-500 rounded-full animate-float opacity-20 blur-2xl" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="hidden sm:block absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}