import React from 'react'
import banner from '/Banner.avif';

function Cards({item}) {
  
  return (
    <><div className='mt-2 my-3 p-3'>  <div className="card card-compact bg-base-100 w-90 shadow-xl mt-3">
    <figure>
      <img
        src={banner}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Books
          <div className='badge badge-secondary '>Free</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-between">
          <div className='badge badge-outline'>Price   $0.00</div>
        <button className="badge badge-outline cursor-pointer border-black-[2px] rounded-full  hover:bg-pink-300 hover:text-white px-2 py-1 ">Buy Now</button>
      </div>
    </div>
  </div></div>
    
    </>
  )
}

export default Cards
