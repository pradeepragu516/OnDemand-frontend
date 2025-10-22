// components/UserLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the import path as necessary


const UserLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      
    </>
  );
};

export default UserLayout;
