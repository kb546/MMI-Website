import React from 'react';
import { ScrollText, Bath, Utensils, Package } from 'lucide-react';

const products = [
  {
    icon: ScrollText,
    title: 'JUMBO ROLLS',
    description: 'Sustainable jumbo rolls for eco-conscious businesses.'
  },
  {
    icon: Bath,
    title: 'TOILET PAPERS',
    description: 'Biodegradable toilet paper for a greener bathroom experience.'
  },
  {
    icon: Utensils,
    title: 'SERVIETTES',
    description: 'Unbleached, compostable napkins for all occasions.'
  },
  {
    icon: Package,
    title: 'BLENDED PRODUCTS',
    description: 'Custom eco-friendly paper solutions for unique needs.'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.title} className="group">
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors">
                <product.icon className="h-12 w-12 text-blue-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-center mb-2">{product.title}</h3>
                <p className="text-gray-600 text-center">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}