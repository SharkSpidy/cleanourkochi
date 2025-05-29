import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rating } from 'react-simple-star-rating';
import { useForm } from 'react-hook-form';

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

type FormData = {
  name: string;
  rating: number;
  comment: string;
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      name: 'Priya Menon',
      rating: 5,
      comment: 'Exceptional deep cleaning service! They transformed my apartment completely. Will definitely hire them again.',
      date: '2025-04-10',
    },
    {
      id: '2',
      name: 'Rahul Nair',
      rating: 4,
      comment: 'Very professional team. They were punctual and did a great job with our office cleaning.',
      date: '2025-04-05',
    },
    {
      id: '3',
      name: 'Anita Thomas',
      rating: 5,
      comment: 'Used their plumbing service for a major leak. Quick response and excellent work! Highly recommend.',
      date: '2025-03-22',
    },
  ]);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>();
  const [rating, setRating] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    const newReview: Review = {
      id: Date.now().toString(),
      name: data.name,
      rating: rating,
      comment: data.comment,
      date: new Date().toISOString().split('T')[0],
    };
    
    setReviews([newReview, ...reviews]);
    reset();
    setRating(0);
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  useEffect(() => {
    setValue('rating', rating);
  }, [rating, setValue]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
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
    <section id="reviews" className="section bg-primary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">Customer Reviews</h2>
          <p className="section-subtitle">
            See what our satisfied customers have to say about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="mb-4 text-2xl font-bold text-neutral-800 font-heading">Share Your Experience</h3>
            
            {formSubmitted ? (
              <div className="p-4 mb-4 text-green-700 bg-green-100 rounded-md">
                Thank you for your review! It has been added successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                      errors.name ? 'border-error' : 'border-neutral-300 focus:border-primary-500'
                    }`}
                    {...register('name', { required: true })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">Please enter your name</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-neutral-700">
                    Your Rating
                  </label>
                  <Rating
                    onClick={(rate: number) => setRating(rate)}
                    initialValue={rating}
                    size={30}
                    fillColor="#1E88E5"
                    emptyColor="#e0e0e0"
                    SVGstyle={{ display: "inline-block" }}
                  />
                  {rating === 0 && (
                    <p className="mt-1 text-sm text-error">Please select a rating</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="comment" className="block mb-2 text-sm font-medium text-neutral-700">
                    Your Review
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                      errors.comment ? 'border-error' : 'border-neutral-300 focus:border-primary-500'
                    }`}
                    {...register('comment', { required: true })}
                  ></textarea>
                  {errors.comment && (
                    <p className="mt-1 text-sm text-error">Please enter your review</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary"
                  disabled={rating === 0}
                >
                  Submit Review
                </button>
              </form>
            )}
          </motion.div>

          {/* Reviews List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={itemVariants}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-neutral-800">{review.name}</h4>
                  <span className="text-sm text-neutral-500">{review.date}</span>
                </div>
                <div className="mb-3">
                  <Rating
                    initialValue={review.rating}
                    readonly
                    size={20}
                    fillColor="#1E88E5"
                    emptyColor="#e0e0e0"
                    SVGstyle={{ display: "inline-block" }}
                  />
                </div>
                <p className="text-neutral-600">{review.comment}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;