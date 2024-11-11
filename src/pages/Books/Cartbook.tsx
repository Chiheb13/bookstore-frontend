import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../../styles/cartbook.css";

// Define the type for a book
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
      .get("http://localhost:8000/getallbook")  // Assurez-vous que l'URL est correcte
      .then((response) => {
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <section className="bg-[#F5FFFF] px-4 py-12">
      <div className="mx-auto w-fit flex flex-wrap gap-4 justify-center">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

// Specify props type for the Card component
interface CardProps {
  book: Book;
}

const Card = ({ book }: CardProps) => {
  // Limit the category to the first word, and truncate it with ellipsis if it's too long
  const truncatedCategory = book.category.split(" ")[0];

  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8 text-white backbook flex flex-col"
    >
      {/* Image Section */}
      {book.image && (
        <div className="h-64 w-full overflow-hidden rounded-t-xl">
          <img
            src={`http://localhost:8000/${book.image}`}  // Utilisez l'URL complète pour l'image
            alt={book.name}
            className="object-cover w-full h-full"
             // Image par défaut en cas d'erreur
          />
        </div>
      )}

      <div className="flex flex-col justify-between mt-4 flex-grow">
        {/* Name and Category Section */}
        <div className="flex flex-col flex-grow">
          {/* Name */}
          <motion.span
            initial={{ scale: 0.85 }}
            variants={{
              hover: {
                scale: 1,
              },
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            className="font-mono text-3xl font-black leading-[1.2] mb-2 truncate"
            style={{ height: "3rem" }}
          >
            {book.name}
          </motion.span>

          {/* Category - Truncated to one word */}
          <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white z-20">
            {truncatedCategory}
          </span>
        </div>

        {/* Price Section */}
        <div className="flex justify-between mt-4">
          <p className="font-mono font-black text-lg">${book.price}</p>
        </div>
      </div>

      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Get it now
      </button>
    </motion.div>
  );
};

export default SquishyCard;
