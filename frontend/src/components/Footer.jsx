import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

        {/***** Left Section ****/}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:2/3 text-gray-600 leading-6'>Prescripto is a trusted platform for seamless doctor appointments. It simplifies the booking process, ensuring fast and secure access to medical professionals.Experience hassle-free healthcare with Prescripto—your health, our priority. Book your appointment today and take a step toward better wellness.</p>
        </div>
        {/***** Center Section ****/}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600 '>
                <li className="hover:underline transition duration-300 cursor-pointer">Home</li>
                <li className="hover:underline transition duration-300 cursor-pointer">About us</li>
                <li className="hover:underline transition duration-300 cursor-pointer">Contact us</li>
                <li className="hover:underline transition duration-300 cursor-pointer">Privacy policy</li>
            </ul>

        </div>
        {/***** Right Section ****/}
        <div>
            <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1 (555) 123-4567</li>
                <li>prescripto@gmail.com</li>
            </ul>
        </div>

      </div>
      
        {/***** Cppyright Text */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ prescripto.dev - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
