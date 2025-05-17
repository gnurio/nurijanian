import React from 'react';
import { ArrowRight, Linkedin, Twitter } from 'lucide-react';

interface Link {
  title: string;
  url: string;
  description: string;
}

const LinkList: React.FC = () => {
  const links: Link[] = [
    {
      title: "Resume",
      url: "https://docs.google.com/document/d/1nPU6ZuTTpvXnb-qhURQr2-1Xla1dc6w1ViKQvdu1g7U/edit?usp=sharing",
      description: "CV"
    },
    {
      title: "Blog",
      url: "https://nurijanian.substack.com/s/philosophers-stone",
      description: "short thoughts"
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-6">
      <div className="flex flex-col items-center gap-8">
        <ul className="flex flex-wrap gap-4 justify-center">
          {links.map((link, index) => (
            <li key={index}>
              <a 
                href={link.url}
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-black transition-all duration-300 text-sm jacquard-12-regular"
              >
                {link.title}
                <ArrowRight size={16} />
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/g-nurijanian/" className="text-gray-600 hover:text-black transition-colors duration-300" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/nurijanian" className="text-gray-600 hover:text-black transition-colors duration-300" aria-label="Twitter">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkList;