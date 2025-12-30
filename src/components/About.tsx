import { Shield, Users, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#B6C1FC]/20 text-[#0648C7] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About Clean Our Kochi
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Trusted Cleaning Experts in{' '}
            <span className="bg-gradient-to-r from-[#0648C7] to-[#5772FF] bg-clip-text text-transparent">
              Kochi
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 8 years of experience, we deliver professional cleaning and maintenance services
            that exceed expectations. Your satisfaction is our commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#0648C7]/5 to-[#5772FF]/5 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#0648C7] to-[#5772FF] rounded-xl flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">8+ Years Experience</h3>
            <p className="text-gray-600">
              Nearly a decade of professional cleaning excellence and customer satisfaction in Kochi.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#5772FF]/5 to-[#7E93FC]/5 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#5772FF] to-[#7E93FC] rounded-xl flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trained Professionals</h3>
            <p className="text-gray-600">
              Our team consists of highly skilled and certified cleaning specialists.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#7E93FC]/5 to-[#B6C1FC]/5 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#7E93FC] to-[#B6C1FC] rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted & Safe</h3>
            <p className="text-gray-600">
              Background-verified staff with comprehensive insurance for your peace of mind.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0648C7]/5 to-[#B6C1FC]/5 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#0648C7] to-[#B6C1FC] rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Kochi Based</h3>
            <p className="text-gray-600">
              Local expertise with deep understanding of Kochi's residential and commercial needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0648C7]/20 to-[#5772FF]/20 rounded-3xl blur-2xl"></div>
            <img
              src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our Professional Team"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Why Choose Clean Our Kochi?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#0648C7] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Industry-Grade Equipment</h4>
                  <p className="text-gray-600">
                    We use advanced, professional-grade cleaning tools and eco-friendly products.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#5772FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Customized Solutions</h4>
                  <p className="text-gray-600">
                    Every space is unique. We tailor our services to meet your specific needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#7E93FC] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quality Assurance</h4>
                  <p className="text-gray-600">
                    Rigorous quality checks ensure consistently excellent results every time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#B6C1FC] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Reliable & Punctual</h4>
                  <p className="text-gray-600">
                    We value your time. Our team arrives on schedule, every single time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
