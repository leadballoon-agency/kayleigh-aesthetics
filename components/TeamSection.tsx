interface TeamSectionProps {
  onBookingClick?: () => void
}

export default function TeamSection({ onBookingClick }: TeamSectionProps) {
  const team = [
    {
      name: 'Kayleigh',
      title: 'Lead Nurse & CO2 Specialist',
      credentials: 'RN',
      image: '/images/img-1.jpg',
      bio: 'As a registered nurse with over 10 years of experience in advanced aesthetic treatments, I lead our CO2 laser program with a focus on medical excellence and patient safety.',
      qualifications: [
        'Registered Nurse (RN)',
        'Advanced CO2 Certification',
        'Laser Safety Officer',
        '10+ Years Experience'
      ]
    },
    {
      name: 'Sam',
      title: 'Senior Therapist',
      credentials: '',
      image: '/images/home2.jpg',
      bio: 'With extensive training in advanced skin therapies and laser treatments, I work alongside Kayleigh to ensure every patient receives exceptional care and support throughout their journey.',
      qualifications: [
        'Senior Aesthetic Therapist',
        'CO2 Laser Certified',
        'Advanced Skin Analysis',
        'Post-Treatment Care Specialist'
      ]
    }
  ]

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase">Our Experts</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Meet Your
            <span className="block gradient-text">Treatment Team</span>
          </h2>
          <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
            Expert care from qualified professionals dedicated to your skin transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">
                    {member.name}{member.credentials && `, ${member.credentials}`}
                  </h3>
                  <p className="text-white/90">{member.title}</p>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-neutral-500">
                    Qualifications
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {member.qualifications.map((qual, idx) => (
                      <li key={idx} className="flex items-center text-sm text-neutral-700">
                        <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
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

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-premium">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👩‍⚕️</span>
              </div>
              <h4 className="font-semibold mb-2">Medical Expertise</h4>
              <p className="text-sm text-neutral-600">Nurse-led treatments ensuring the highest safety standards</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold mb-2">Proven Results</h4>
              <p className="text-sm text-neutral-600">Expert CO2 laser treatments available</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h4 className="font-semibold mb-2">Personalized Care</h4>
              <p className="text-sm text-neutral-600">Dedicated support throughout your treatment journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}