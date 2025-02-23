import React from 'react'
import authService from '../utils/services/authService'
import { useNavigate } from 'react-router-dom';

function Logout() {
 const navigate=useNavigate()
    const signOut=async ()=>{
        const { success, error } = await authService.signOut();

        if (success) {
          setTimeout(() => {
            navigate("/");
          }, 500);
        } else {
          alert(error)
        }
    }
    return (
        <button onClick={signOut} className="w-[90%] bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
          {"Logout"}
        </button>
    )
}

export default Logout
