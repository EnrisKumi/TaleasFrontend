import axios from "axios";
import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const data = {
    name: name,
    surname: surname,
    email: email,
    address: address,
    //phoneNumber: phoneNumber
  };

  function Submit(e) {
    e.preventDefault();
    axios.post("http://localhost:9000/users", data).then(navigate("/"));
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-4">
      <h1 className="text-black text-3xl font-semibold font-Montserrat">
        Add User
      </h1>
      <form className="w-[80%] h-full flex flex-col justify-center items-center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name:"
          className="w-[80%] bg-white/10 mt-3 text-xl font-Montserrat font-normal outline-none py-2 pl-2 border border-zinc-400"
        />

        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="Enter your surname:"
          className="w-[80%] bg-white/10 mt-3 text-xl font-Montserrat font-normal outline-none py-2 pl-2 border border-zinc-400"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email:"
          className="w-[80%] bg-white/10 mt-3 text-xl font-Montserrat font-normal outline-none py-2 pl-2 border border-zinc-400"
        />

        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Enter your address:"
          className="w-[80%] bg-white/10 mt-3 text-xl font-Montserrat font-normal outline-none py-2 pl-2 border border-zinc-400"
        />
        <button
          onClick={Submit}
          className="w-[50%] bg-blue-600 mt-3 text-white font-semibold text-xl font-Montserrat py-2 pl-2 rounded-lg"
        >
          {" "}
          Add User
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
export default AddUser;
