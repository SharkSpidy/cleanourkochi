import { Home, Wrench, Package, Bug, Building2, Castle, Sparkles, Droplets } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Housekeeping Services',
    description: 'Complete home maintenance including daily cleaning, organization, and upkeep for a spotless living environment.',
    gradient: 'from-[#0648C7] to-[#5772FF]',
  },
  {
    icon: Wrench,
    title: 'Maintenance Services',
    description: 'Expert repair and maintenance solutions for electrical, plumbing, and general home or office repairs.',
    gradient: 'from-[#5772FF] to-[#7E93FC]',
  },
  {
    icon: Package,
    title: 'Packing & Moving',
    description: 'Professional packing, safe transportation, and careful unpacking services for hassle-free relocation.',
    gradient: 'from-[#7E93FC] to-[#B6C1FC]',
  },
  {
    icon: Bug,
    title: 'Pest Control',
    description: 'Comprehensive pest management using safe, effective methods to keep your space pest-free.',
    gradient: 'from-[#0648C7] to-[#7E93FC]',
  },
  {
    icon: Building2,
    title: 'Office Cleaning',
    description: 'Professional commercial cleaning tailored for offices, maintaining a pristine workplace environment.',
    gradient: 'from-[#5772FF] to-[#B6C1FC]',
  },
  {
    icon: Castle,
    title: 'Villa Cleaning',
    description: 'Specialized deep cleaning for villas and large homes with attention to every corner and detail.',
    gradient: 'from-[#0648C7] to-[#B6C1FC]',
  },
  {
    icon: Sparkles,
    title: 'General Cleaning',
    description: 'Routine cleaning services for homes and businesses, ensuring consistent cleanliness and hygiene.',
    gradient: 'from-[#7E93FC] to-[#5772FF]',
  },
  {
    icon: Droplets,
    title: 'Deep Cleaning',
    description: 'Intensive, thorough cleaning reaching every nook and cranny for a completely refreshed space.',
    gradient: 'from-[#5772FF] to-[#0648C7]',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-[#B6C1FC]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-white text-[#0648C7] px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-[#0648C7] to-[#5772FF] bg-clip-text text-transparent">
              Cleaning Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From residential to commercial spaces, we offer a complete range of professional
            cleaning and maintenance services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0648C7] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#0648C7] to-[#5772FF] rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Service Package?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            We understand every space has unique needs. Let us create a personalized cleaning plan just for you.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('quote');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-[#0648C7] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
