interface AboutSectionProps {
  onBookingClick?: () => void
}

export default function AboutSection({ onBookingClick }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase">Meet Your Practitioner</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Expert Care from
            <span className="block gradient-text">Kayleigh</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] relative">
                <img 
                  src="/images/img-1.jpg" 
                  alt="Kayleigh - CO2 Laser Specialist" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/10 to-primary-300/10"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-bold text-lg">10+ Years</p>
                  <p className="text-neutral-600">CO2 Expert</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-3xl font-bold">
                Kayleigh, RN
                <span className="block text-xl text-primary-600 font-normal mt-2">Lead Nurse & CO2 Laser Specialist</span>
              </h3>
            </div>

            <p className="text-lg text-neutral-600 leading-relaxed">
              As a registered nurse with over a decade of experience in advanced aesthetic treatments, I specialize 
              in CO2 laser resurfacing to help you achieve remarkable skin transformation. My medical background 
              ensures the highest standards of safety and care throughout your treatment journey.
            </p>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Having performed hundreds of successful CO2 laser treatments, I understand that each patient's 
              skin is unique. That's why I tailor every treatment plan to your specific needs and goals.
            </p>

            <div className="space-y-3">
              <h4 className="font-bold text-lg">Qualifications & Expertise</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Registered Nurse (RN)',
                  'Advanced CO2 Certification',
                  'Laser Safety Officer',
                  '500+ Treatments Performed'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-neutral-700">
                    <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button 
                onClick={onBookingClick}
                className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Your Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}