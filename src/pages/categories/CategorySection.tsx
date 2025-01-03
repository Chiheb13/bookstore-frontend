import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Category {
  name: string;
  image: string;
}

const BrowseByCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/getallcategory')
      .then((response) => {
        const fetchedCategories = response.data.data || [];
        setCategories(fetchedCategories);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <section className="py-8 bg-white">
      {/* Container with left-aligned heading */}
      <div className="px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">
          Browse By Category
        </h2>

        {/* Responsive grid with no shadows/cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <img
              key={index}
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
