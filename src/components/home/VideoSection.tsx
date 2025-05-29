import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="mb-4 text-3xl font-bold text-neutral-800 font-heading">
              See Our Cleaning Experts in Action
            </h2>
            <p className="mb-6 text-lg text-neutral-600">
              Watch how our professional team transforms spaces with our window cleaning service.
              We use advanced techniques and eco-friendly solutions to achieve streak-free, crystal clear results.
            </p>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
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
                <span className="text-neutral-700">Professional equipment for any height</span>
              </li>
              <li className="flex items-start">
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
                <span className="text-neutral-700">Eco-friendly cleaning solutions</span>
              </li>
              <li className="flex items-start">
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
                <span className="text-neutral-700">Trained and insured professionals</span>
              </li>
            </ul>
            <a href="#quote" className="btn-primary">
              Get a Quote Today
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Window Cleaning Services by Clean Our Kochi!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;