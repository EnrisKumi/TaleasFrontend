import React from "react";
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between">
        
        <Link to={'/'} className="text-white text-3xl font-semibold font-Montserrat">Users</Link>
        <Link to="add-user" className="w-48 bg-white flex text-blue-400 justify-center items-center font-semibold tex-xl h-12 rounded-lg">Add User</Link>
        </div>
    )
}

export default Navbar