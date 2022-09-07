import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import User from "./Pages/components/User";
import AddUser from "./Pages/components/AddUser";
import Edit from "./Pages/components/Edit";
import AddPhone from "./Pages/components/AddPhone";
import ShowPhone from "./Pages/components/ShowPhone";
import EditPhone from "./Pages/components/EditPhone";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import {withAuthenticator} from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<Edit />} />
        <Route path="/phone/:id" element={<AddPhone />} />
        <Route path="/phonenr/users/:id" element={<ShowPhone />} />
        <Route path="/edit-phone/:id" element={<EditPhone />} />
      </Routes>
    </div>
  );
}

export default withAuthenticator(App);
