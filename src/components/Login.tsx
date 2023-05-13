import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebaseConfig";
import toast from "react-hot-toast";
import Loader from "./Loader";
import "./styles/login.scss";
import logo from "../assets/logo.svg";
import illustration from "../assets/illustration.svg";

const Login = () => {
  const [email, setEmail] = useState<string>("guest@gmail.com");
  const [password, setPassword] = useState<string>("123456");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const signin = await signInWithEmailAndPassword(auth, email, password);
      console.log(signin);
      toast.success("Login successful");
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login__left">
        <img className="logo" src={logo} alt="logo" />
        <img className="illustration" src={illustration} alt="illustration" />
      </div>

      <div className="login__right">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
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
        <div className="login__right__forgot">FORGOT PASSWORD ?</div>
        <button onClick={handleLogin}>LOG IN</button>

        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
