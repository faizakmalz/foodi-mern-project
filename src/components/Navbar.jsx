import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { MdAddIcCall } from "react-icons/md";


const Navbar = () => {

const [isSticky, setSticky] = useState(false)

useEffect(() => {
    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 0) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.addEventListener('scroll', handleScroll);
    }

}, [])

const navItems = (
    <>
        <li><a href='/'>Home</a></li>

        <li>
            <details>
            <summary>Menu</summary>
            <ul className="p-2">
                <li><a>All</a></li>
                <li><a>Salad</a></li>
                <li><a>Pizza</a></li>
            </ul>
            </details>
        </li>

        <li>
            <details>
            <summary>Services</summary>
            <ul className="p-2">
                <li><a>Online Order</a></li>
                <li><a>Table Booking</a></li>
                <li><a>Order Tracking</a></li>
            </ul>
            </details>
        </li>

        <li><a href="">Offers</a></li>

    </>
);

return (
    <div className='z-50 container mx-auto fixed top-0 left-0 right-0 transition-a;; duration-300 ease-in-out'>
        <div className={`px-[3%] py-3 md:py-5 navbar xl:px-24 bg-base-100 ${isSticky? "shadow-md bg-base-100 transition-all duration-300 ease-in-out" : ""}`}>
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {navItems}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navItems}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                
                {/* search */}
                <button className="btn btn-ghost btn-circle hidden lg:flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                {/* cart */}
                <label className=''>
                    <div className="flex-none lg:flex hidden items-center justify-center">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                                    <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                    <div className="card-body">
                                    <span className="text-lg font-bold">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>    
                </label>
                
                <a className="btn bg-green text-white rounded-full px-6 flex items-center gap-2"><MdAddIcCall /> Contact
                </a>
            </div>

        </div>
    </div>
  )
}
export default Navbar