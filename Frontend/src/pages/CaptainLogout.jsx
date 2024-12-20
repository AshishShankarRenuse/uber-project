import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CaptainLogout = () =>{
    const token = localStorage.getItem('token');

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200){
            localStorage.removeItem('token');
            navigate('/captain-login');
        }
    }).catch((error) => {
        console.log(error);
    });
    return(
        <div>
            <h1>captain Logout</h1>
        </div>
    )
}

export default CaptainLogout;