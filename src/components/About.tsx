import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          <p className="mb-6">
            At MMI we are dedicated to providing high-quality paper products that bring comfort and convenience to homes and businesses. Our product range, crafted with precision and care, includes jumbo-based toilet paper, napkins, and more—designed to deliver exceptional value and reliability.
          </p>
          <p className="mb-6">
            We are guided by a commitment to excellence, affordability, and sustainable practices. By focusing on the needs of our customers, we aim to build lasting relationships through innovative solutions and unmatched service.
          </p>
          <p className="text-xl text-center font-semibold text-gray-800 italic">
            At MMI, we believe in delivering more than just products—we deliver trust, quality, and value with every roll.
          </p>
        </div>
      </div>
    </section>
  );
}