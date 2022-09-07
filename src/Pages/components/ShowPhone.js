import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Auth } from "aws-amplify";

function ShowPhone() {
  const [phones, setPhones] = useState([]);
  const { id } = useParams();

  const getPhonesData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    const requestInfo = {
      headers: {
        Authorization: token,
      },
    };
    await axios
      .get(
        `https://84rbgywbj1.execute-api.eu-central-1.amazonaws.com/dev/one2many/users/${id}`,
        requestInfo
      )
      .then((res) => {
        setPhones(res.data.phoneNumber);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Delete = async (id) =>{
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    const requestInfo = {
        headers: {
            Authorization: token,
        },
    }
    await axios
    .delete(
      `https://84rbgywbj1.execute-api.eu-central-1.amazonaws.com/dev/one2many/phonenr/${id}`
    ,requestInfo);
    getPhonesData();
  }

  useEffect(() => {
    getPhonesData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col px-10 py-8">
      <div className="w-full flex flex-col min-h-[35vh] justify-center items-center">
        <h1 className="text-black text-3xl font-semibold font-Montserrat">
          Phone Numbers
        </h1>
        <table className="w-[88%] text-center overflow-hidden overflow-y-scroll mt-8 border border-black">
          <thead className="border-b bg-gray-800">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                #
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Provider Name
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Number
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {phones.map((data, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {data.providerName}
                </td>
                <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {data.number}
                </td>
                <td className="flex justify-center items-center space-x-4 mt-1">
                  <Link
                    to={`/edit-phone/${data._id}`}
                    className="px-5 py-2 text-white font-normal bg-blue-600 rounded-lg"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => Delete(data._id)}
                    className="px-5 py-2 text-white font-normal bg-red-600 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link
          to={"/"}
          className="text-white font-semibold px-6 py-2 rounded-xl bg-zinc-400 font-Inter text-2xl mt-2"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ShowPhone;