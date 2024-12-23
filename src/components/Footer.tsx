import React from 'react';
import { ScrollText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <ScrollText className="h-8 w-8" />
            <span className="text-2xl font-bold">MMI</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">© {new Date().getFullYear()} MMI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}