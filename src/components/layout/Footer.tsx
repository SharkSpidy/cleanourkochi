import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Droplets } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Droplets className="w-8 h-8 mr-2 text-primary-300" />
              <span className="text-xl font-bold font-heading">Clean Our Kochi!</span>
            </div>
            <p className="mb-4 text-primary-100">
              Your trusted cleaning and maintenance partner in Kochi, Kerala.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-primary-200 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-primary-200 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-primary-200 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-primary-200 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/gallery" 
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <a 
                  href="#quote" 
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white font-heading">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/services#general-cleaning" 
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                >
                  General Cleaning
                </a>
              </li>
              <li>
                <a 
                  href="/services#deep-cleaning" 
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Deep Cleaning
                </a>
              </li>
              <li>
                <a 
                  href="/services#pest-control" 
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Pest Control
                </a>
              </li>
              <li>
                <a 
                  href="/services#plumbing" 
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Plumbing Services
                </a>
              </li>
              <li>
                <a 
                  href="/services#electrical" 
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Electrical Work
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white font-heading">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-primary-300 shrink-0" />
                <span className="text-primary-100">
                  123 Marine Drive, Kochi, Kerala, India - 682031
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-primary-300 shrink-0" />
                <a 
                  href="tel:+919876543210" 
                  className="text-primary-100 hover:text-white transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-primary-300 shrink-0" />
                <a 
                  href="mailto:info@cleanoukochi.com" 
                  className="text-primary-100 hover:text-white transition-colors duration-300"
                >
                  info@cleanoukochi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 text-center border-t border-primary-700">
          <p className="text-primary-200">
            © {currentYear} Clean Our Kochi! All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;