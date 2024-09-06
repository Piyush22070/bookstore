import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Course() {
  const [book, setBook] = useState([]); // Fix: Correct state declaration

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:3000/book'); // Make sure the API endpoint is correct
        console.log(res.data);
        setBook(res.data); // Fix: Use correct setter function
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4">
        <div className="mt-30 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{' '}
            <span className="text-pink-600">here</span>
          </h1>

          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dicta blanditiis dolores! Optio, sint labore corrupti at totam ut
            aliquid consequuntur, rem amet esse cum, mollitia ex cumque!
            Incidunt enim ducimus, laboriosam et ad eius aperiam. Rerum dolore,
            sint voluptatem voluptas repudiandae exercitationem, harum id
            asperiores dignissimos fugit a velit?
          </p>
        </div>

        <Link to="/">
          <div className="flex justify-center mt-5">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200">
              Back
            </button>
          </div>
        </Link>

        <div className="mt-12 grid grid-cols-1">
          {book.map((item) => (
            <Cards key={item.id} item={item} /> // Ensure Cards component handles 'item' properly
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
