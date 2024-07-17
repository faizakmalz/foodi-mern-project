import React from 'react'

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>

            <div className='md:w-[40%]'>
                <img src="../../images/home/banner.png" alt="" />

                <div className='hidden md:flex gap-4 flex-col md:flex-row justify-around -mt-14'>
                  <div className='flex items-center border-1 rounded-2xl shadow-md w-64 bg-white'>
                    <img src="../../images/home/b-food1.png" className='rounded-[24px] p-2' alt="" />
                    <div className='pl-2 pr-3 text-[15px] gap-1'>
                      <h2>Spicy noodles</h2>
                      <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      </div>                      
                      <h4 className='text-red'>$ <b className='text-black'>18.00</b></h4>
                    </div>
                  </div>

                  <div className='hidden md:flex items-center border-1 rounded-2xl shadow-md w-64 bg-white'>
                    <img src="../../images/home/b-food1.png" className='rounded-[24px] p-2' alt="" />
                    <div className='pl-2 pr-3 text-[15px] gap-1'>
                      <h2>Spicy noodles</h2>
                      <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      </div>                      
                      <h4 className='text-red'>$ <b className='text-black'>18.00</b></h4>
                    </div>
                  </div>
                </div>
            </div>

            <div className='md:w-1/2 space-y-7 px-4'>
                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights of Delecate <span className='text-green'>Food</span></h2>
                <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftmanship</p>
                <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
            </div>

            
        </div>
    </div>
  )
}

export default Banner