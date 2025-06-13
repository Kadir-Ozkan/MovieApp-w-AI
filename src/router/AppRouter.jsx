import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Layout from "../pages/Layout";

// toastContainer de Browser da görünsün diye browserRouter sarmalını üst component olan indexedDB.js de yaptık
const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}> {/* Use Layout as the element for the parent route */}
          <Route index element={<Main />} /> {/* Render Main at the index route */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
  );
};

export default AppRouter;
