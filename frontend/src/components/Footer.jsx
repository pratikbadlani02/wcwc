import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { contactInfo, navigationLinks, acceptedDonations, donationHours } from '../mockData';
import { toast } from '../hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-green-500 to-green-600 text-white overflow-hidden">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 Q360,0 720,30 T1440,30 L1440,0 L0,0 Z"
            fill="white"
          />
          <path
            d="M0,30 Q360,0 720,30 T1440,30"
            fill="none"
            stroke="#374151"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Sign Up for our eNewsletter</h3>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-pink-500 hover:bg-pink-600 rounded-full font-semibold transition-all duration-200 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-pink-200 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-pink-200 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accepted Donations */}
          <div>
            <h4 className="text-lg font-bold mb-4">We Accept</h4>
            <ul className="space-y-1 text-sm">
              {acceptedDonations.slice(0, 4).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* Donation Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Donation Hours</h4>
            <p className="text-sm mb-4">{donationHours}</p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-green-600 hover:bg-pink-500 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-green-600 hover:bg-pink-500 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="text-center text-sm">
            <p className="mb-2">
              Donations of new and gently used clothing, hygiene products, gift cards, food, and paper products are accepted {donationHours}.
            </p>
            <p>© 2025 Women's Center. All Rights Reserved | Registered 501(c)(3) Charity: 58-1316004</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;