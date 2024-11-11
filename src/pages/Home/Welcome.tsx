
import book from '../../images/book-stack.png'; 
import books from '../../images/books.png'; 
import subtrect from '../../images/Subtract.png';
import rectongle from '../../images/Rectangle.png';
import "@fontsource/poppins";
import "../../styles/welcome.css"
import TextMoving from './TextMoving'; 

const Welcome = () => {
  return (
    <div className="flex items-center justify-between bg-[#F5FFFF] p-12 h-[70vh]">
      <div className="max-w-lg">
        <br />
        <h1 className="text-5xl font-bold text-gray-800">
        Buy  your textbooks for the best price.
        </h1>
        <p className="text-gray-600 mt-4">
          Discover the best prices for buying  textbooks in our marketplace.
          Buy  with confidence today!
        </p>
        
        {/* Buttons */}
        <div className="mt-6 flex items-center space-x-4">
          <button className="hover:bg-orange-600 bg-orange-500 text-white py-3 px-6 rounded-full flex items-center space-x-2">
            <span><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="white"
                            className="h-5  hover:transition-colors  hover: border-white/20 w-5">
                            <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clipRule="evenodd" />
                        </svg></span> 
            <span>Search Book</span>
          </button>
        </div>
      </div>
      <div className='flex'>
      <div className="mt-36 relative flex items-center justify-center w-[300px] h-[300px]">
        <img src={rectongle} alt="" className="absolute w-full h-full object-contain" />
        <img src={book} alt="Books" className="relative z-10 w-[90px] h-[90px] object-contain" />
      </div>

      <div className="relative flex items-center justify-center w-[600px] h-[600px]">
        <img src={subtrect} alt="" className="absolute w-full h-full object-contain" />
        <img src={books} alt="Books" className="relative z-10 w-full h-full object-contain" />
        
      </div>
    </div>
    </div>
  );
};

export default Welcome;
