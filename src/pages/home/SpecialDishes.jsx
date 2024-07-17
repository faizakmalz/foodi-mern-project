import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../components/Cards';
import {} from 'react-icons/fa6'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const simpleNextArrow = (props) => {
  const {className, style, onClick} = props
  return (
    <div className={className} style={{...style, display:'block', background:'red'}} onClick={onClick}>Next</div>
  )
}

const simplePrevArrow = (props) => {
  const {className, style, onClick} = props
  return (
    <div className={className} style={{...style, display:'block', background:'red'}} onClick={onClick}>Back</div>
  )
}

const SpecialDishes = () => {
    const [recipes, setRecipes] = useState([]);
    const slider = React.useRef(null);

    useEffect(() => {
        fetch('./menu.json').then(res => res.json()).then(data => {
            const specials = data.filter((item) => 
                item.category === 'popular'
            )
            console.log(specials)
            setRecipes(specials)
        });
    }, []);

    const settings = {
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
        ],

        nextArrow: <simpleNextArrow/>,
        preview: <simplePrevArrow/>
      };

  return (
    <div className='static'>
      <div className='section-container my-20'>
          <div className='flex justify-between items-center'>
            <div className='text-left mb-10'>
                  <h2 className='subtitle'>Special Dishes</h2>
                  <h3 className='title'>Standout Dishes <br /> From Our Menu</h3>
            </div>

            <div className=''>
            <button onClick={() => slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>
              <FaAngleLeft className='w-8 h-8 p-1'/>
            </button>
            <button onClick={() => slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5 bg-green text-white'>
              <FaAngleRight className='w-8 h-8 p-1'/>
            </button>
          </div>
        </div>
        

        <div className="static">
          <Slider ref={slider} {...settings}>
          {
            recipes.map((item, i) => (
              <div className='mr-8'>
                <Cards key={i} item={item}/>
              </div>
              
            ))
          }
          </Slider>
        </div>
      </div>
    </div>
    
  )
}

export default SpecialDishes