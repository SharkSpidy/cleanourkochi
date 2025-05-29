import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-16 overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-primary-800 font-heading">
              Your Trusted Cleaning & Maintenance Partner in Kochi
            </h1>
            <p className="mb-8 text-lg text-neutral-700 md:text-xl">
              Professional cleaning and maintenance services for homes and businesses across Kochi. 
              Experience the difference with our expert team and state-of-the-art equipment.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <a href="#services" className="btn-primary">
                Explore Services
              </a>
              <a href="#quote" className="btn-secondary">
                Get Your Quote
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 sm:h-80 md:h-96 lg:h-full rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg"
              alt="Professional cleaning service in Kochi"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-primary-200 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-48 h-48 bg-secondary-200 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default Hero;