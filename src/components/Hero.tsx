import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0648C7]/5 via-[#5772FF]/5 to-[#B6C1FC]/10"></div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-[#7E93FC]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#5772FF]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-[#B6C1FC]/30">
              <Sparkles className="w-4 h-4 text-[#0648C7]" />
              <span className="text-sm font-medium text-[#0648C7]">8+ Years of Excellence in Kochi</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Professional{' '}
                <span className="bg-gradient-to-r from-[#0648C7] via-[#5772FF] to-[#7E93FC] bg-clip-text text-transparent">
                  Cleaning
                </span>
                <br />
                Solutions for Kochi
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Industry-grade equipment, trained professionals, and 8+ years of trusted service.
                Experience the highest standard of cleaning and maintenance for your home or business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('quote')}
                className="group bg-gradient-to-r from-[#0648C7] to-[#5772FF] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-[#0648C7] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg border-2 border-[#0648C7] hover:bg-[#0648C7] hover:text-white transition-all duration-300"
              >
                Our Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0648C7]">8+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0648C7]">2000+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0648C7]">100%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#0648C7] to-[#5772FF] rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-[#7E93FC] to-[#B6C1FC] rounded-3xl transform -rotate-6 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-white rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional Cleaning Service"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
