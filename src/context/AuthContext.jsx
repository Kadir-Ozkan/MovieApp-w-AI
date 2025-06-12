import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, {createContext} from 'react'
import {auth} from '../auth/firebase';
import { toast } from 'react-toastify';


export  const AuthContextt = createContext();


const AuthContext = ({ children }) => {
const navigate = useNavigate();

const createKullanici=async(email, password, displayName) => {
  await createUserWithEmailAndPassword(auth, email, password)

  toastSuccess("Kullanıcı başarıyla oluşturuldu")

navigate("/")

//! Login
const giris=async(email, password) => {
  await signInWithEmailAndPassword(auth, email, password)

  toastSuccess("Giriş başarılı")

  navigate("/")
}


//! Google ile giriş
const googleGiris = async () => {

//! Google Hesaplarımıza erişme metodu
  const provider = new GoogleAuthProvider();

  //! Açılır perspektif ile giriş yapma
  signInWithPopup(auth, provider);
.then((result) => {
  
  toastSuccess("Google ile giriş başarılı");

  navigate("/");

})
.catch((error) => {
  toast.error("Google ile giriş başarısız: " + error.message);
});

  return (
    <AuthContext.Provider value={{createKullanici, giris, googleGiris}}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthContext