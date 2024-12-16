import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setUserData({fullName: {firstName: firstName, lastName: lastName}, email: email, password: password});
      console.log(userData);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img className='w-20 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='uber-logo'/>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h3 className='text-lg font-medium mb-2'>What's our captain's name?</h3>
                    <div className='flex gap-2 mb-6'>
                        <input required 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border w-full text-base placeholder:text-base'
                        type='text' 
                        placeholder='First Name' />

                        <input required 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border w-full text-base placeholder:text-base'
                        type='text' 
                        placeholder='Last Name' />

                    </div>
                    <h3 className='text-lg font-medium mb-2'>What's our captain's email?</h3>
                    <input required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base'
                    type='email' 
                    placeholder='email@example.com' />

                    <h3 className='text-lg font-medium mb-2'>Enter password?</h3>
                    <input required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base' 
                    type='password' 
                    placeholder='Password' />

                    <button 
                    className='bg-[#111] mb-3 rounded px-4 py-2 w-full text-white font-semibold placeholder:text-base'
                    type='submit'>Create Account</button>
                </form>
                    <p className='text-center'>Already have a captain's account? <Link to='/captain-login' className='text-blue-600'>Login Here</Link></p>
            </div>
            <div>
                <p className='text-[12px] leading-tight text-center'>
                    By proceeding, you agree to Uber's <Link to='/terms' className='text-blue-600'>Terms of Use</Link> and <Link to='/privacy' className='text-blue-600'>Privacy Policy</Link>
                </p>
            </div>
        </div>
  )
}

export default CaptainSignup
