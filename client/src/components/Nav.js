import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
import { FcHome } from "react-icons/fc";
import { useSelector } from 'react-redux';


const Nav = () => {

  const {user} = useSelector((state)=>state.slice)

  if(user?.profileImage === ""){

  }

  const [search,setSearch] = useState("")

  const changeHandler = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className='flex items-center justify-between'>

      <div className="flex gap-2.5 items-center">
        <div className="h-10 w-10"><img src={logo} alt="" /></div>
        <div className="font-bold text-2xl">SUPPORTIFY...</div>
      </div>

      <div>
        <input
           type='text'
           name='search'
           value={search}
           placeholder='Search...'
           onChange={changeHandler}
           className='border-2 p-1 rounded-md w-60'
           />
      </div>

      <div className='flex gap-2.5 text-2xl items-center'>
        <div><FcHome /></div>
        <div><FcHome /></div>
        <div><FcHome /></div>
        <div><FcHome /></div>
        <div className='h-10 w-10 b-1 rounded-full'>
          
        </div>
      </div>

    </div>
  )
}

export default Nav
