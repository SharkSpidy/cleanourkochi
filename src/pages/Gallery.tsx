import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: string[];
};

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg',
    alt: 'Professional house cleaning',
    category: ['general-cleaning', 'before-after'],
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg',
    alt: 'Deep cleaning bathroom',
    category: ['deep-cleaning', 'before-after'],
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg',
    alt: 'Pest control service',
    category: ['pest-control'],
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
    alt: 'Plumbing repair work',
    category: ['plumbing'],
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/8961698/pexels-photo-8961698.jpeg',
    alt: 'Electrical installation',
    category: ['electrical'],
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/6195663/pexels-photo-6195663.jpeg',
    alt: 'Painting service',
    category: ['painting', 'before-after'],
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/4108841/pexels-photo-4108841.jpeg',
    alt: 'Carpet cleaning',
    category: ['deep-cleaning'],
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/4108813/pexels-photo-4108813.jpeg',
    alt: 'Window cleaning',
    category: ['general-cleaning'],
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/6195764/pexels-photo-6195764.jpeg',
    alt: 'Kitchen deep cleaning',
    category: ['deep-cleaning', 'before-after'],
  },
  {
    id: '10',
    src: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg',
    alt: 'Office cleaning',
    category: ['general-cleaning'],
  },
  {
    id: '11',
    src: 'https://images.pexels.com/photos/5591554/pexels-photo-5591554.jpeg',
    alt: 'Furniture cleaning',
    category: ['general-cleaning', 'deep-cleaning'],
  },
  {
    id: '12',
    src: 'https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg',
    alt: 'Bathroom renovation',
    category: ['plumbing', 'before-after'],
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'general-cleaning', name: 'General Cleaning' },
  { id: 'deep-cleaning', name: 'Deep Cleaning' },
  { id: 'pest-control', name: 'Pest Control' },
  { id: 'plumbing', name: 'Plumbing' },
  { id: 'electrical', name: 'Electrical' },
  { id: 'painting', name: 'Painting' },
  { id: 'before-after', name: 'Before & After' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category.includes(activeCategory));

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
              Our Gallery
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-neutral-700 md:text-xl">
              Browse through our portfolio of cleaning and maintenance projects. See the quality of our work firsthand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container">
          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setExpandedImage(item.src)}
                >
                  <LazyLoadImage
                    src={item.src}
                    alt={item.alt}
                    effect="blur"
                    className="object-cover w-full h-64"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Expanded Image Modal */}
          <AnimatePresence>
            {expandedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
                onClick={() => setExpandedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative max-w-4xl max-h-[90vh]"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
                    onClick={() => setExpandedImage(null)}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                  <img
                    src={expandedImage}
                    alt="Expanded view"
                    className="max-w-full max-h-[85vh] object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Upload CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-800 font-heading">
              Share Your Experience
            </h2>
            <p className="mb-8 text-lg text-neutral-700">
              Had a great experience with our services? Share your before and after photos with us!
            </p>
            <button className="px-8 py-3 text-lg btn-primary">
              Upload Your Photos
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;