import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const services = [
  { value: 'general-cleaning', label: 'General Cleaning' },
  { value: 'deep-cleaning', label: 'Deep Cleaning' },
  { value: 'pest-control', label: 'Pest Control' },
  { value: 'plumbing', label: 'Plumbing Services' },
  { value: 'electrical', label: 'Electrical Work' },
  { value: 'painting', label: 'Painting' },
  { value: 'packing', label: 'Packing & Moving' },
  { value: 'other', label: 'Other Services' },
];

const QuoteForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitting(false);
      setSubmitted(true);
      reset();
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="quote" className="section bg-primary-800 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-heading">
            Get Your Free Quote Today
          </h2>
          <p className="mb-12 text-lg text-primary-100">
            Fill out the form below and our team will get back to you within 24 hours with a customized quote.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="p-8 text-center bg-white rounded-lg shadow-lg">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-4 text-2xl font-bold text-neutral-800 font-heading">
                Quote Request Received!
              </h3>
              <p className="mb-6 text-neutral-600">
                Thank you for your interest in our services. Our team will review your request
                and get back to you with a personalized quote within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 text-white transition-colors duration-300 bg-primary-600 rounded-md hover:bg-primary-700"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-8 bg-white rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-neutral-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                      errors.name ? 'border-error' : 'border-neutral-300 focus:border-primary-500'
                    }`}
                    {...register('name', { required: true })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">Name is required</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-neutral-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                      errors.email ? 'border-error' : 'border-neutral-300 focus:border-primary-500'
                    }`}
                    {...register('email', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error">
                      {errors.email.type === 'required'
                        ? 'Email is required'
                        : 'Invalid email address'}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-neutral-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                      errors.phone ? 'border-error' : 'border-neutral-300 focus:border-primary-500'
                    }`}
                    {...register('phone', { required: true })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-error">Phone number is required</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block mb-2 text-sm font-medium text-neutral-700"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                      errors.service ? 'border-error' : 'border-neutral-300 focus:border-primary-500'
                    }`}
                    {...register('service', { required: true })}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-error">Please select a service</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-neutral-700"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                      errors.message ? 'border-error' : 'border-neutral-300 focus:border-primary-500'
                    }`}
                    placeholder="Tell us more about your requirements..."
                    {...register('message', { required: true })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-error">Please provide some details</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2 -ml-1 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Get Your Free Quote'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteForm;