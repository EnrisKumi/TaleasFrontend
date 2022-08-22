import { useParams, Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState();

  const getUsersData = async () => {
    const user1 = await Auth.currentAuthenticatedUser();
    const token = user1.signInUserSession.idToken.jwtToken;
    const requestInfo = {
      headers: {
        Authorization: token,
      },
    };
    const res = await axios.get(
      `https://84rbgywbj1.execute-api.eu-central-1.amazonaws.com/dev/users/${id}`,
      requestInfo
    );
    setUser(res.data);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Link
        to={"/"}
        className="text-white font-semibold px-6 py-2 rounded-xl bg-zinc-400 font-Inter text-2xl mt-2"
      >
        Back to Home
      </Link>
      {user && (
        <div className="w-[700px] h-[300px] flex justify-center items-center px-6 py-4 border border-black mt-6">
          <div className="w-7/12 flex flex-col space-y-4">
            <h2 className="text-black font-semibold font-Inter text-xl border-b border-black">
              Name
            </h2>
            <h2 className="text-black font-semibold font-Inter text-xl border-b border-black">
              Surname
            </h2>
            <h2 className="text-black font-semibold font-Inter text-xl border-b border-black">
              Email
            </h2>
            <h2 className="text-black font-semibold font-Inter text-xl border-b border-black">
              Address
            </h2>
            <h2 className="text-black font-semibold font-Inter text-xl border-b border-black">
              Phone Number
            </h2>
          </div>

          <div className="w-7/12 flex flex-col space-y-4">
            <h2 className="text-black font-semibold font-Inter text-xl border-b border-black">
              {user.name}
            </h2>
            <h2 className="text-black font-semibold font-Inter text-xl border-b border-black">
              {user.surname}
            </h2>
            <h2 className="text-black font-semibold font-Inter text-xl border-b border-black">
              {user.email}
            </h2>
            <h2 className="text-black font-semibold font-Inter text-xl border-b border-black">
              {user.address}
            </h2>
            <Link
              to={`/phonenr/${id}`}
              className="px-16 font-semibold font-Inter text-lg text-white bg-blue-600 rounded-lg"
            >
              Click to see
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default User;
