import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  
  const { id } = useParams();
  const navigate = useNavigate();

  const getUsersData = () => {
    axios
      .get(`http://localhost:9000/users/${id}`)
      .then((res) => {
        setName(res.data.name);
        setSurname(res.data.surname);
        setEmail(res.data.email);
        setAddress(res.data.address);
        //set phone nr
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const data = {
    name: name,
    surname: surname,
    email: email,
    address: address,
    //phoneNumber: phoneNumber
  };

  function Update() {
    //e.preventDefault()
    axios.patch(`http://localhost:9000/users/${id}`, data).then(navigate("/"));
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-4">
      <h1 className="text-black text-3xl font-semibold font-Montserrat">
        Edit User
      </h1>
      <form className="w-[80%] h-full flex flex-col justify-center items-center ">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Update your name:"
          className="w-[80%] bg-white/10 mt-3 text-xl font-Montserrat font-normal outline-none py-2 pl-2 border border-zinc-400"
        />

        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="Update your surname:"
          className="w-[80%] bg-white/10 mt-3 text-xl font-Montserrat font-normal outline-none py-2 pl-2 border border-zinc-400"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Update your email:"
          className="w-[80%] bg-white/10 mt-3 text-xl font-Montserrat font-normal outline-none py-2 pl-2 border border-zinc-400"
        />

        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Update your address:"
          className="w-[80%] bg-white/10 mt-3 text-xl font-Montserrat font-normal outline-none py-2 pl-2 border border-zinc-400"
        />
        <button
          onClick={Update}
          className="w-[50%] bg-blue-600 mt-3 text-white font-semibold text-xl font-Montserrat py-2 pl-2 rounded-lg"
        >
          Update User
        </button>
      </form>
    </div>
  );
}

export default Edit;
