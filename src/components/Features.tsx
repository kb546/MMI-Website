import React from 'react';
import { Heart, Award, PiggyBank } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Soft and Strong',
    description: 'Delivers the perfect balance of comfort and reliability.'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Crafted with precision for a luxurious experience.'
  },
  {
    icon: PiggyBank,
    title: 'Affordable Excellence',
    description: 'Top-tier products at competitive prices, ensuring you get the best value without compromising quality.'
  }
];

export default function Features() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}