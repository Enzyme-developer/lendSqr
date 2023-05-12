import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebaseConfig";
import toast from "react-hot-toast";
import Loader from "../Loader";
import "./login.scss";
import logo from "../../assets/logo.svg";
import illustration from "../../assets/illustration.svg";

const Login = () => {
  const [email, setEmail] = useState<string>("guest@gmail.com");
  const [password, setPassword] = useState<string>("123456");

  const handleLogin = async () => {
    try {
      const signin = await signInWithEmailAndPassword(auth, email, password);
      console.log(signin);
      toast.success("Login successful");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="loin__left">
        <img src={logo} alt='logo' />
        <img src={illustration} alt='illustration' />
      </div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <Loader />
    </div>
  );
};

export default Login;
