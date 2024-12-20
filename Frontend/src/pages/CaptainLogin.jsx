import React from 'react'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {captain, setCaptain} = useContext(CaptainDataContext);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const captainData = {email: email, password: password};
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);
      console.log(response);
      if(response.status === 200){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
      setEmail('');
      setPassword('');
    }
    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img className='w-20 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='uber-logo'/>
                
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
                    <input required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    type='email' 
                    placeholder='email@example.com' />

                    <h3 className='text-lg font-medium mb-2'>Enter password?</h3>
                    <input required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                    type='password' 
                    placeholder='Password' />

                    <button 
                    className='bg-[#111] mb-3 rounded px-4 py-2 w-full text-white font-semibold placeholder:text-base'
                    type='submit'>Login</button>
                </form>
                    <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
            </div>
            <div>
                <Link 
                to='/login' 
                className='bg-[#d5622d] flex justify-center items-center mb-5 rounded px-4 py-2 w-full text-white font-semibold placeholder:text-base'>
                Sign in as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin
