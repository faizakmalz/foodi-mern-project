import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import '../App.css'



const Cards = ({item}) => {
    const [isHeartFilled, setHeartFilled] = useState(false);
    const handleHeart = () => {
        setHeartFilled(!isHeartFilled)
    }
  return (
    <div className='relative'>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <div onClick={handleHeart} className={`heartStar rounded-md rating gap-1 absolute right-0 top-0 p-4 bg-green ${isHeartFilled ? 'text-rose-500' : 'text-white'}`}>
                <FaHeart className='h-5 w-5 cursor-pointer'/>
            </div>

            <Link to={`/menu/${item.id}`}> 
                <figure>
                    <img
                    src={item.image}
                    className='hover:scale-105 transition-all duration-200 md:h-72'
                    alt="food" />
                </figure>
            </Link>
            
            <div className="card-body">   
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions justify-between items-center mt-2">
                        <h5 className='font-semibold'><span className='text-sm text-red'>$</span>{item.price}</h5>
                        <button className="btn bg-green text-white">Order Now</button>
                    </div>
            </div>
        </div>
    </div>    
        
  )

}

export default Cards