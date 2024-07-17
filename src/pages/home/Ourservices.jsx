import React from 'react'
import { FaStar } from 'react-icons/fa'

const serviceList = [
    {id: 1, title: 'Catering', desc: 'Delight yout guests with presentation and flowers.', image: '/images/home/services/icon1.png'},
    {id: 2, title: 'Fast Delivery', desc: 'Delight yout guests with presentation and flowers.', image: '/images/home/services/icon2.png'},
    {id: 3, title: 'Online Ordering', desc: 'Delight yout guests with presentation and flowers.', image: '/images/home/services/icon3.png'},
    {id: 4, title: 'Gift Cards', desc: 'Delight yout guests with presentation and flowers.', image: '/images/home/services/icon4.png'}


]

const Ourservices = () => {
  return (
    <div className='section-container my-16'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
            <div className='md:w-1/2'>
                <div className='text-left md:w-4/5'>
                    <h2 className='subtitle'>Our Story & Services</h2>
                    <h3 className='title'>Our Culinary Journey and Services</h3>
                    <p className='my-5 text-secondary leading-[30px]'>
                        Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
                    </p>
                </div>
                
                <button className='btn bg-green text-white px-8 py-3 rounded-full'>Explore</button>
                
            </div>


            <div className='md:w-1/2'>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
                    {
                        serviceList.map((service) => (
                            <div key={service.id} className='shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-green transition-all duration-200'>
                                <img src={service.image} alt="" className='mx-auto'/>
                                <h5 className='pt-3 font-semibold'>{service.title}</h5>
                                <p className='text-[#90BD95]'>{service.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>          
    </div>
  )
}

export default Ourservices