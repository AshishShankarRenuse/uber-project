import React from 'react'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');

    const {captain, setCaptain} = useContext(CaptainDataContext);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const captainData = {
        fullname: {firstname: firstName, lastname: lastName},
        email: email,
        password: password,
        vehicle: {color: vehicleColor, vehicleType: vehicleType, capacity: vehicleCapacity, plate: vehiclePlate}
      }
      
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
      console.log(response);
      if(response.status === 201){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setVehicleColor('');
      setVehicleType('');
      setVehicleCapacity('');
      setVehiclePlate('');
    }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img className='w-20 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='uber-logo'/>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h3 className='text-lg font-medium mb-2'>What's our captain's name?</h3>
                    <div className='flex gap-2 mb-4'>
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

                    <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
                    <div className='flex gap-1 mb-1'>
                    <input required
                    value={vehicleColor}
                    onChange={(e) => setVehicleColor(e.target.value)}
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base'
                    type='text' 
                    placeholder='Vehicle Color' />  

                    <select required
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base'
                    type='text' 
                    placeholder='Vehicle Type' >
                        <option value='car'>car</option>
                        <option value='auto'>auto</option>
                        <option value='bike'>bike</option>
                    </select>
                    </div>

                    <div className='flex gap-2 mb-1'>
                    <input required
                    value={vehicleCapacity}
                    onChange={(e) => setVehicleCapacity(e.target.value)}
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base'
                    type='number' 
                    placeholder='Vehicle Capacity' />

                    <input required
                    value={vehiclePlate}
                    onChange={(e) => setVehiclePlate(e.target.value)}
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base'
                    type='text' 
                    placeholder='Vehicle Plate' />
                    </div>
                    
                    <button 
                    className='bg-[#111] mb-6 rounded px-4 py-2 w-full text-white font-semibold placeholder:text-base'
                    type='submit'>Create Captain Account</button>
                </form>
                    <p className='mb-7 text-center'>Already have a captain's account? <Link to='/captain-login' className='text-blue-600'>Login Here</Link></p>
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
