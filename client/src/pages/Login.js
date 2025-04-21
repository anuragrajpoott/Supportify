import React, { useState } from 'react'
import { Link } from 'react-router'

const Login = () => {

  const [formData,setFormData]= useState({
    userName:"",
    password:""

  })

  const {userName, password} = formData

  const changeHandler = (e) => {
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      userName:"",
      password:""
    })

  }
  return (
    <div className='flex flex-col items-center w-[60%] gap-10 p-10'>

      <div><p className='text-3xl'>Continue your journey of healing and connection...</p></div>

      <form className='flex flex-col items-center justify-center border-2 gap-5 p-5 w-[50%] rounded-md'>

      <p className='border-b-2 w-full flex items-center justify-center p-2.5'>Welcome Back !</p>

        <label className='flex flex-col w-full'>
          <p>Username</p>
          <input 
             required
             type='text'
             placeholder='Enter Email'
             name='userName'
             value={userName}
             onChange={changeHandler}
             className='w-full'
             />
        </label>

        <label className='flex flex-col w-full'>
          <p>Password</p>
          <input 
             required
             type='password'
             placeholder='Enter Password'
             name='password'
             value={password}
             onChange={changeHandler}
             className='w-full '
             />
             <div className='flex justify-end w-full'><button>forgot password ?</button></div>
        </label>

        <div className='w-full'>
        <button onClick={submitHandler} className='border-2 bg-violet-500 p-2.5 rounded-lg w-full'>Log In</button>
        <div className='flex justify-end'><Link to={"/sign-up"}><button>Don't Have an Account ?</button></Link></div>
        </div>

      </form>
      
    </div>
  )
}

export default Login
