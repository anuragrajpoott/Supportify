import React from 'react'
import hi1 from "../assets/images/hi1.jpg"
import hi2 from "../assets/images/hi2.jpg"
import hi3 from "../assets/images/hi3.jpg"
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='w-[70%] flex flex-col items-center justify-center gap-10 p-10'>

      <div className='flex flex-col gap-5 items-center justify-center'>
         <p className='text-3xl font-bold'>Is Social Media a Curse for Mental Health ?</p>
         <p className='text-3xl font-bold'>Don't Worry, We've a Cure using Social Media</p>
      </div>

      <div className='flex items-center justify-center'>
        <img src={hi1} alt='' className="w-40 h-56 object-cover rounded-lg transform  -rotate-12 z-10 shadow-md"/>
        <img src={hi2} alt='' className='w-40 h-56 object-cover rounded-lg transform  rotate-0 z-20 shadow-lg'/>
        <img src={hi3} alt='' className='w-40 h-56 object-cover rounded-lg transform  rotate-12 z-10 shadow-md'/>
      </div>

      <div className='flex items-center justify-center'>
        <p className='text-3xl font-bold'>"You're not alone. Find support, share, and heal—together."</p>
      </div>

      <div className='flex gap-5'>
         <Link to={"/log-in"}><button className='border-2 p-2.5 bg-emerald-500 rounded-lg'>Get Back !</button></Link>
         <Link to={"/sign-up"}><button className='border-2 p-2.5 bg-emerald-500 rounded-lg'>Join Now !</button></Link>
      </div>
      
    </div>
  )
}

export default Home
