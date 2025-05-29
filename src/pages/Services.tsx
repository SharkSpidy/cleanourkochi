import React from 'react';
import { motion } from 'framer-motion';
import { Chrome as Broom, SprayCan as Spray, Bug, Wrench, Zap, PaintBucket, PackageCheck, Star } from 'lucide-react';
import QuoteForm from '../components/home/QuoteForm';

const servicesData = [
  {
    id: 'general-cleaning',
    title: 'General Cleaning',
    icon: <Broom className="w-12 h-12 text-primary-600" />,
    description: 'Our general cleaning service covers all the basics to keep your space clean and hygienic. We offer customized cleaning plans based on your specific needs and schedule.',
    features: [
      'Regular dusting and wiping of all surfaces',
      'Vacuuming and mopping of floors',
      'Bathroom and kitchen cleaning',
      'Waste removal and bin cleaning',
      'Window sill and blind cleaning'
    ],
    image: 'https://images.pexels.com/photos/4107119/pexels-photo-4107119.jpeg'
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    icon: <Spray className="w-12 h-12 text-primary-600" />,
    description: 'Our deep cleaning service is a comprehensive cleaning solution for those areas that need extra attention. We use specialized equipment and techniques to ensure a thorough clean.',
    features: [
      'Detailed cleaning of hard-to-reach areas',
      'Deep cleaning of carpets and upholstery',
      'Sanitizing of high-touch surfaces',
      'Descaling of bathroom fixtures',
      'Cleaning behind and under furniture'
    ],
    image: 'https://images.pexels.com/photos/4110178/pexels-photo-4110178.jpeg'
  },
  {
    id: 'pest-control',
    title: 'Pest Control',
    icon: <Bug className="w-12 h-12 text-primary-600" />,
    description: 'Our pest control service uses safe and effective methods to eliminate pests and prevent future infestations. We offer both one-time treatments and ongoing pest management plans.',
    features: [
      'Comprehensive pest inspection',
      'Targeted treatment for specific pests',
      'Use of child and pet-friendly products',
      'Preventive measures to avoid re-infestation',
      'Follow-up visits as needed'
    ],
    image: 'https://images.pexels.com/photos/8489117/pexels-photo-8489117.jpeg'
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    icon: <Wrench className="w-12 h-12 text-primary-600" />,
    description: 'Our professional plumbing services cover everything from minor repairs to major installations. Our licensed plumbers are equipped to handle any plumbing issue efficiently.',
    features: [
      'Repair of leaks and dripping faucets',
      'Unclogging of drains and toilets',
      'Installation of new fixtures',
      'Water heater repair and installation',
      'Pipe repair and replacement'
    ],
    image: 'https://images.pexels.com/photos/1007473/pexels-photo-1007473.jpeg'
  },
  {
    id: 'electrical',
    title: 'Electrical Work',
    icon: <Zap className="w-12 h-12 text-primary-600" />,
    description: 'Our electrical services ensure your electrical systems are safe and functional. Our certified electricians can handle all your electrical needs, from repairs to installations.',
    features: [
      'Repair of faulty wiring and outlets',
      'Installation of lighting fixtures',
      'Circuit breaker repair and replacement',
      'Electrical safety inspections',
      'Installation of fans and appliances'
    ],
    image: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg'
  },
  {
    id: 'painting',
    title: 'Painting',
    icon: <PaintBucket className="w-12 h-12 text-primary-600" />,
    description: 'Our painting service can transform your space with a fresh coat of paint. We use high-quality paints and techniques to ensure a beautiful, long-lasting finish.',
    features: [
      'Interior and exterior painting',
      'Surface preparation and priming',
      'Color consultation',
      'Wallpaper removal and installation',
      'Decorative finishing techniques'
    ],
    image: 'https://images.pexels.com/photos/6696111/pexels-photo-6696111.jpeg'
  },
  {
    id: 'packing',
    title: 'Packing & Moving',
    icon: <PackageCheck className="w-12 h-12 text-primary-600" />,
    description: 'Our packing and moving service takes the stress out of relocating. We carefully pack, transport, and unpack your belongings, ensuring a smooth move.',
    features: [
      'Professional packing of all items',
      'Secure transportation',
      'Furniture disassembly and reassembly',
      'Unpacking and organization',
      'Disposal of packing materials'
    ],
    image: 'https://images.pexels.com/photos/5622519/pexels-photo-5622519.jpeg'
  },
  {
    id: 'specialized',
    title: 'Specialized Services',
    icon: <Star className="w-12 h-12 text-primary-600" />,
    description: 'We offer a range of specialized services tailored to your unique needs. Contact us to discuss your specific requirements, and we\'ll create a customized solution.',
    features: [
      'Post-construction cleaning',
      'Event setup and cleanup',
      'Seasonal deep cleaning',
      'Move-in/move-out cleaning',
      'Commercial space maintenance'
    ],
    image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg'
  }
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-primary-800 md:text-5xl lg:text-6xl font-heading">
              Our Services
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-neutral-700 md:text-xl">
              Discover our comprehensive range of cleaning and maintenance services designed to keep your spaces pristine and functional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-24">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h2 className="ml-4 text-3xl font-bold text-primary-800 font-heading">
                        {service.title}
                      </h2>
                    </div>
                    <p className="mb-6 text-lg text-neutral-600">
                      {service.description}
                    </p>
                    <ul className="mb-8 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 mt-1 mr-2 text-primary-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#quote" className="btn-primary">
                      Get a Quote
                    </a>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm />
    </>
  );
};

export default Services;