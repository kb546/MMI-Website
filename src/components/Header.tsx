import React from 'react';
import { ScrollText } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ScrollText className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">MMI</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
          <a href="#why-us" className="text-gray-700 hover:text-blue-600 transition-colors">Why Choose Us</a>
          <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Our Products</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}