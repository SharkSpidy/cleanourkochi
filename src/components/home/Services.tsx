import { useState } from 'react';
import { motion } from 'framer-motion';
import { Chrome as Broom, SprayCan as Spray, Bug, Wrench, Zap, PaintBucket, PackageCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 'general-cleaning',
    title: 'General Cleaning',
    description: 'Regular cleaning services to keep your space spotless and hygienic.',
    icon: <Broom className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/4107119/pexels-photo-4107119.jpeg',
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of hard-to-reach areas, ensuring total cleanliness.',
    icon: <Spray className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/4110178/pexels-photo-4110178.jpeg',
  },
  {
    id: 'pest-control',
    title: 'Pest Control',
    description: 'Effective pest management solutions for a pest-free environment.',
    icon: <Bug className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/8489117/pexels-photo-8489117.jpeg',
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    description: 'Expert plumbing solutions for all your repair and maintenance needs.',
    icon: <Wrench className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/1007473/pexels-photo-1007473.jpeg',
  },
  {
    id: 'electrical',
    title: 'Electrical Work',
    description: 'Professional electrical services for residential and commercial spaces.',
    icon: <Zap className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg',
  },
  {
    id: 'painting',
    title: 'Painting',
    description: 'Quality painting services to refresh and transform your space.',
    icon: <PaintBucket className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/6696111/pexels-photo-6696111.jpeg',
  },
  {
    id: 'packing',
    title: 'Packing & Moving',
    description: 'Reliable packing and moving services for a stress-free relocation.',
    icon: <PackageCheck className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/5622519/pexels-photo-5622519.jpeg',
  },
  {
    id: 'specialized',
    title: 'Specialized Services',
    description: 'Custom solutions tailored to your specific maintenance requirements.',
    icon: <Star className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg',
  },
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="services" className="section bg-neutral-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of cleaning and maintenance services to keep your 
            home or business in perfect condition.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="relative overflow-hidden group card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {service.icon}
                  <h3 className="ml-2 text-xl font-semibold text-neutral-800">
                    {service.title}
                  </h3>
                </div>
                <p className="mb-4 text-neutral-600">{service.description}</p>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;