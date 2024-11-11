import React, { useEffect, useState, useRef } from 'react';
import ofre from "../../images/promo.png";

interface Book {
  id: number;
  name: string;
  image?: string;
  description: string;
  price: number;
  category: string;
}

const BookCarousel = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/getallbook")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.data);
        console.log("Fetched books:", data.data); // Debug log
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400; // Increase scroll amount for smoother and longer scroll
      const newScrollLeft = carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      
      // Debug log to check values
      console.log('scrollLeft:', scrollLeft, 'scrollWidth:', scrollWidth, 'clientWidth:', clientWidth);
  
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);  // Check if there's still more content to scroll
    }
  };

  if (books.length === 0) {
    return <div className="text-black text-center py-8">Loading books...</div>;
  }

  return (
    <div className="w-full justify-between bg-[#F5FFFF] p-12">
      <div className="max-w-full px-8"> {/* Max width set to full screen */}
        <div className="flex items-center space-x-2 mb-8">
          <h2 className="text-3xl font-bold text-black">Special Offers</h2>
          <span>
            <img src={ofre} className="w-12" alt="Special Offer Icon" />
          </span>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg ${
              !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            disabled={!canScrollLeft}
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-x-auto hide-scrollbar flex gap-8 pb-4"
            onScroll={checkScroll}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {books.map((book) => (
              <div
                key={book.id}
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-xl"
              >
                <div className="relative pt-[100%]">
                  {/* Image Section */}
                  <img
                    src={book.image ? `http://localhost:8000/${book.image}` : '/path/to/default-image.jpg'}
                    alt={book.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-1">{book.name}</h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{book.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="line-through text-gray-400 text-sm">
                        {(book.price * 1.2).toFixed(2)} грн.
                      </span>
                      <p className="text-lg font-bold text-gray-800">{book.price} грн.</p>
                    </div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                      Check Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg ${
              !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            disabled={!canScrollRight}
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCarousel;
