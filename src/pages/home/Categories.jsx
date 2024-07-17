import React from 'react'

const categoryItems = [
  {id: 1, title: 'Main Dish', desc: '(86 Dishes)', image: '/images/home/category/img1.png'},
  {id: 2, title: 'Side Dish', desc: '(86 Side)', image: '/images/home/category/img2.png'},
  {id: 3, title: 'Appetizer', desc: '(86 Appt)', image: '/images/home/category/img3.png'},
  {id: 4, title: 'Drinks', desc: '(86 Appt)', image: '/images/home/category/img3.png'}

]

const Categories = () => {
  return (
    <div className='container py-16 section-container'>
      
      <div className='text-center'>
        <h2 className='subtitle'>Customer Favorites</h2>
        <h3 className='title'>Popular Categories</h3>
      </div>

        {/* Category Items */}
      <div className='flex flex-col sm:flex-row flex-warp gap-8 justify-around items-center mt-12'>
        {
          categoryItems.map((item, i) => (
            <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
              <div className='flex w-full mx-auto items-center justify-center'>
                <img src={item.image} alt="image" className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28'/>
              </div>
              <div className='mt-5 space-y-1'>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories