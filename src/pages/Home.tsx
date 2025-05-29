import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import VideoSection from '../components/home/VideoSection';
import Reviews from '../components/home/Reviews';
import QuoteForm from '../components/home/QuoteForm';
import Stats from '../components/home/Stats';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <VideoSection />
      <Reviews />
      <QuoteForm />
    </>
  );
};

export default Home;