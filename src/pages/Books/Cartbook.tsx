import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../../styles/cartbook.css";

interface Book {
  id: number;
  name: string;
  image?: string;
  description: string;
  price: number;
  category: string;
}

const SquishyCard = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getallbook")
      .then((response) => {
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <section className="bg-[#F5FFFF] px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

interface CardProps {
  book: Book;
}

const Card = ({ book }: CardProps) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg">
      <div className="w-full aspect-[3/4] overflow-hidden mb-4">
        <img
          src={`http://localhost:8000/${book.image}`}
          alt={book.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-black font-semibold text-xl mb-1">{book.name}</h3>
      <p className="text-gray-600 text-sm mb-1">{book.category}</p>
      <p className="text-gray-600 text-sm mb-4">{book.description}</p>
      <p className="text-black font-bold">${book.price}</p>
    </div>
  );
};

export default SquishyCard;