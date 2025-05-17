import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} GN</p>
        </div>
        
        <div className="flex space-x-6">
          
          <a href="https://www.linkedin.com/in/g-nurijanian/" className="text-gray-600 hover:text-black transition-colors duration-300" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/nurijanian" className="text-gray-600 hover:text-black transition-colors duration-300" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;