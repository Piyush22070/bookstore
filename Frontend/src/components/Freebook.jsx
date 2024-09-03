import React from 'react';
import list from '../../public/list.json'; // Ensure this path is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
    // Filter data to get free courses
    const filterdata = list.filter((data) => data.category === 'free');
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (<>
        <div className='max-w-screen-2xl container mx-auto px-4'>
            <h2 className='text-2xl font-bold mb-4'>Boobs wali Raande</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur commodi voluptate nesciunt omnis architecto explicabo et ea eum quisquam?</p>
            
            
        </div>
        <div className="slider"><Slider {...settings}>
        {filterdata.map((item) => {
    console.log(item); // Check the output here
    return <Cards item={item} key={item.id} />;
})}

      </Slider>
</div>
        </>
    );
}

export default Freebook;
