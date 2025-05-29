import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Sparkles, Award } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  endValue: number;
  title: string;
  prefix?: string;
  suffix?: string;
}

const AnimatedStat: React.FC<StatProps> = ({ icon, endValue, title, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const interval = 16; // ~60fps
    const stepValue = endValue / (duration / interval);
    
    const timer = setInterval(() => {
      start += stepValue;
      setCount(Math.min(Math.floor(start), endValue));
      
      if (start >= endValue) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [endValue, isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      onViewportEnter={() => setIsInView(true)}
      className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-soft"
    >
      <div className="p-3 mb-4 text-white rounded-full bg-primary-600">
        {icon}
      </div>
      <h3 className="mb-2 text-3xl font-bold text-primary-800 font-heading">
        {prefix}{count}{suffix}
      </h3>
      <p className="text-neutral-600">{title}</p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Our Impact in Numbers</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedStat
            icon={<Users className="w-6 h-6" />}
            endValue={1500}
            title="Happy Clients"
            suffix="+"
          />
          <AnimatedStat
            icon={<Home className="w-6 h-6" />}
            endValue={3200}
            title="Projects Completed"
            suffix="+"
          />
          <AnimatedStat
            icon={<Sparkles className="w-6 h-6" />}
            endValue={98}
            title="Satisfaction Rate"
            suffix="%"
          />
          <AnimatedStat
            icon={<Award className="w-6 h-6" />}
            endValue={12}
            title="Years of Experience"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;