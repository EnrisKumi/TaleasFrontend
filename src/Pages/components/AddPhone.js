import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams,Link } from "react-router-dom";

function AddPhone() {

    const [providerName,setProviderName]= useState("");
    const [number,setNumber]= useState('');
    const { id } = useParams();

    const navigate = useNavigate();

    const data = {
        providerName : providerName,
        number : number,
    }

    function Submit(e){
        e.preventDefault();
        axios.post(`http://localhost:9000/one2many/users/${id}`,data).then(navigate('/'));
    }



  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-4">
      <h1 className="text-black text-3xl font-semibold font-Montserrat">
        Add Phone Number
      </h1>
      <form className="w-[80%] h-full flex flex-col justify-center items-center">
        <input
        value={providerName}
          onChange={(e) => setProviderName(e.target.value)}
          type="text"
          placeholder="Enter your provider name:"
          className="w-[80%] bg-white/10 mt-3 text-xl font-Montserrat font-normal outline-none py-2 pl-2 border border-zinc-400"
        />

        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          placeholder="Enter your number:"
          className="w-[80%] bg-white/10 mt-3 text-xl font-Montserrat font-normal outline-none py-2 pl-2 border border-zinc-400"
        />
        <button
          onClick={Submit}
          className="w-[50%] bg-blue-600 mt-3 text-white font-semibold text-xl font-Montserrat py-2 pl-2 rounded-lg"
        >
          {" "}
          Add Phone Number
        </button>
      </form>
      <Link
        to={"/"}
        className="text-white font-semibold px-6 py-2 rounded-xl bg-zinc-400 font-Inter text-2xl mt-2"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default AddPhone;
