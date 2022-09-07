import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams,Link } from "react-router-dom";
import { Auth } from 'aws-amplify';

function AddPhone() {

    const [providerName,setProviderName]= useState("");
    const [number,setNumber]= useState('');
    const { id } = useParams();

    const navigate = useNavigate();

    const datap = {
        providerName : providerName,
        number : number,
    }

    const Submit = async e =>{
      e.preventDefault();
      const userAuth = await Auth.currentAuthenticatedUser();
      const token = userAuth.signInUserSession.idToken.jwtToken;
      const requestInfo = {
          headers: {
              Authorization: token,
          },
      }
      await axios.post(`https://84rbgywbj1.execute-api.eu-central-1.amazonaws.com/dev/one2many/users/${id}`,datap,requestInfo);
      navigate("/");
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