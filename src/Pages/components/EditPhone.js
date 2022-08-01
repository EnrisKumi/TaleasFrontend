import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function EditPhone() {

    const [providerName,setProviderName]= useState('');
    const [number,setNumber] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    const getPhones = () =>{
    axios
      .get(`http://localhost:9000/one2many/users/${id}`)
      .then((res) => {
        setProviderName(res.data.providerName);
        setNumber(res.data.number);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    useEffect(() => {
        getPhones();
      }, []);
    
      const data = {
        providerName: providerName,
        number: number
      };
    
      function Update() {
        axios.patch(`http://localhost:9000/one2many/phonenumbers/${id}`, data).then(navigate("/"));
      }


  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-4">
      <h1 className="text-black text-3xl font-semibold font-Montserrat">
        Edit Phone Number
      </h1>
      <form className="w-[80%] h-full flex flex-col justify-center items-center ">
        <input
          type="text"
          placeholder="Update your provider name:"
          className="w-[80%] bg-white/10 mt-3 text-xl font-Montserrat font-normal outline-none py-2 pl-2 border border-zinc-400"
          value={providerName}
          onChange={(e) => setProviderName(e.target.value)}
          />

        <input
          value={number}
          type="text"
          placeholder="Update your number:"
          className="w-[80%] bg-white/10 mt-3 text-xl font-Montserrat font-normal outline-none py-2 pl-2 border border-zinc-400"
          onChange={(e) => setNumber(e.target.value)}
          />
        <Link to={`/`}
          onClick={Update}
          className="w-[50%] bg-blue-600 mt-3 text-white font-semibold text-xl font-Montserrat py-2 pl-2 rounded-lg"
        >
          Update Phone Number
        </Link>
      </form>
    </div>
  );
}

export default EditPhone;
