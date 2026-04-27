import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import siteLogo from './SiteLogo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Intelligent adjustment: Ensure the search is always contextualized for Bonsai
    const refinedQuery = searchQuery.toLowerCase().includes('bonsai') 
      ? searchQuery 
      : `bonsai ${searchQuery}`;
    
    window.open(`https://www.google.com/search?q=${encodeURIComponent(refinedQuery)}`, '_blank');
  };

  const menuItems = [
    { label: 'HOME', action: () => scrollTo('home') },
    { label: 'FEATURES', action: () => scrollTo('features') },
    { label: 'OUR PRODUCTS', action: () => window.open('https://jadebonsaipakistan.com/', '_blank') },
    { label: 'CONTACTS', action: () => window.open('https://t.me/GetVerse', '_blank') },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-[100] px-4 md:px-12 py-0 flex items-center justify-between pointer-events-none translate-y-4 md:translate-y-0">
      {/* Brand / Logo */}
      <div className="flex flex-col items-center pointer-events-auto">
        <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] bg-[#0d1e12] border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden">
          <img 
             src={siteLogo} 
             alt="Bonsai Logo" 
             className="w-full h-full object-cover scale-[1.02]"
             referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Navigation Links - Persistent */}
      <ul className="flex items-center gap-4 md:gap-12 text-[clamp(8px,1vw,10px)] font-bold tracking-[0.15em] md:tracking-[0.3em] uppercase text-white/80 pointer-events-auto md:mt-6">
        {menuItems.map((item) => (
          <li key={item.label}>
            <button 
              onClick={item.action} 
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Search Bar - Persistent */}
      <div className="flex items-center gap-2 pointer-events-auto md:mt-6">
        <form onSubmit={handleSearch} className="relative group">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#243b2a]/40 text-[clamp(8px,1vw,12px)] pl-7 md:pl-10 pr-2 md:pr-12 py-1.5 md:py-3 rounded-sm focus:outline-none border border-white/5 w-24 md:w-64 transition-all placeholder:text-white/30 focus:bg-[#243b2a]/60"
          />
          <Search className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-3 md:w-4 h-3 md:h-4 text-white/40" />
          <div className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-center w-8 h-8 bg-white/5 rounded-sm">
             <ShoppingBag className="w-4 h-4 text-white/60" />
          </div>
        </form>
      </div>
    </nav>
  );
}
