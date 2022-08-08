import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  //home
  const [users, setUsers] = useState([]);

  const getUsersData = () => {
    axios
      .get("https://ar8x3qmjog.execute-api.us-east-1.amazonaws.com/dev/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function Delete(id) {
    axios.delete(`https://ar8x3qmjog.execute-api.us-east-1.amazonaws.com/dev/users/${id}`).then(getUsersData());
  }

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col px-10 py-8">
      <div className="w-full flex flex-col min-h-[35vh] justify-center items-center">
        <h1 className="text-black text-3xl font-semibold font-Montserrat">
          Home page
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
                Name
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Surname
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Email
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Address
              </th>
             {/* <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Phone Number
  </th> */}
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {data.name}
                </td>
                <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {data.surname}
                </td>
                <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {data.email}
                </td>
                <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {data.address}
                </td>
                {/*<td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {data.phoneNumber}
            </td>*/}

                <td className="flex justify-center items-center space-x-4 mt-1">
                  <Link
                    to={`/users/${data._id}`}
                    className="px-5 py-2 text-white font-normal bg-black rounded-lg"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit-user/${data._id}`}
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
                  <Link to={`/phone/${data._id}`}
                    className="px-3 py-2 text-white font-normal bg-orange-600 rounded-lg"
                  >
                    Add Phone
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
