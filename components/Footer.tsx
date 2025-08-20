export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/images/footer.png" 
              alt="Aesthetics with Kayleigh" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400">
              Professional CO2 laser treatments in Durham
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:07595944927" className="hover:text-white">
                  07595 944927
                </a>
              </li>
              <li>
                <a href="mailto:info@aestheticswithkayleigh.co.uk" className="hover:text-white">
                  info@aestheticswithkayleigh.co.uk
                </a>
              </li>
              <li>15 Hawthorn Drive, Durham, DL56GH</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#treatments" className="hover:text-white">Treatments</a></li>
              <li><a href="#results" className="hover:text-white">Results</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Aesthetics with Kayleigh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}