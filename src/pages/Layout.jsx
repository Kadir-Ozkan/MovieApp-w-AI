jsx
   // src/pages/Layout.jsx
   import { Outlet } from "react-router-dom";
   import Navbar from "../components/Navbar";

   const Layout = () => {
     return (
       <>
         <Navbar />
         <Outlet /> // This will render the nested routes
       </>
     );
   };

   export default Layout;
