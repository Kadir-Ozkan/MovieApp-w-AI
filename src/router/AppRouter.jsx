import Navbar from "../components/Navbar";
import { Route } from 'react-router-dom';
import Main from "../pages/Main";
import Register from "../pages/Register";

// toastContainer de Browser da görünsün diye browserRouter sarmalını üst component olan indexedDB.js de yaptık
const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>

    </>
  )
}

export default AppRouter