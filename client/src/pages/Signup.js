import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'

const Signup = () => {
  const [formData,setFormData]= useState({
      userName:"",
      firstName:"",
      lastName:"",
      password:"",
      confirmPassword:""
  
    })
  
    const {userName, firstName, lastName, password, confirmPassword} = formData
  
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
        firstName:"",
        lastName:"",
        password:"",
        confirmPassword:""
      })
  
    }
    return (
      <div className='flex flex-col items-center w-[60%] gap-10'>
  
        <div><p className='text-3xl'>You matter. Let’s create your space....</p></div>
  
        <form className='flex flex-col items-center justify-center border-2 gap-5 p-5 w-[50%] rounded-md'>
  
        <p className='border-b-2 w-full flex items-center justify-center p-2.5'>Connect Now !</p>
  
          <label className='flex flex-col w-full'>
            <p>Username</p>
            <input 
               required
               type='text'
               placeholder='Enter Username'
               name='userName'
               value={userName}
               onChange={changeHandler}
               className='w-full'
               />
          </label>

          <label className='flex flex-col w-full'>
            <p>First Name</p>
            <input 
               required
               type='text'
               placeholder='Enter First Name'
               name='firstName'
               value={firstName}
               onChange={changeHandler}
               className='w-full'
               />
          </label>


          <label className='flex flex-col w-full'>
            <p>Last Name</p>
            <input 
               required
               type='text'
               placeholder='Enter Last Name'
               name='lastName'
               value={lastName}
               onChange={changeHandler}
               className='w-full'
               />
          </label>

  
          <label className='flex flex-col w-full'>
            <p>Password</p>
            <input 
               required
               type='Password'
               placeholder='Enter Password'
               name='password'
               value={password}
               onChange={changeHandler}
               className='w-full '
               />
          </label>

          <label className='flex flex-col w-full'>
            <p>Confirm Password</p>
            <input 
               required
               type='Password'
               placeholder='Re-enter Password'
               name='ConfirmPassword'
               value={confirmPassword}
               onChange={changeHandler}
               className='w-full '
               />
          </label>
  
          <div className='w-full'>
          <button onClick={submitHandler} className='border-2 bg-violet-500 p-2.5 rounded-lg w-full'>Sign Up</button>
          <div className='flex justify-end'><Link to={"/log-in"}><button>Already Have an Account ?</button></Link></div>
          </div>
  
        </form>
        
      </div>
    )
}

export default Signup
