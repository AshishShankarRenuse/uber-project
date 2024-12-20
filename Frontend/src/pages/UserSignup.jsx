import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/userContext';

const UserSignup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
    
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserDataContext);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newUser = {
        fullname: {
            firstname: firstName, 
            lastname: lastName
        }, 
        email: email, 
        password: password
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    if(response.status === 200){
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
    }
    console.log(response);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    }
    return (
    <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img className='w-16 mb-10' src='https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png' alt='uber-logo'/>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h3 className='text-lg font-medium mb-2'>What's your name?</h3>
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
                    <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
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
                    <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
            </div>
            <div>
                <p className='text-[12px] leading-tight text-center'>
                    By proceeding, you agree to Uber's <Link to='/terms' className='text-blue-600'>Terms of Use</Link> and <Link to='/privacy' className='text-blue-600'>Privacy Policy</Link>
                </p>
            </div>
        </div>
    )
}

export default UserSignup
