import { checkSignInData } from "../utils/validate";
import Header from "./Header";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [displaySignUp, setDisplaySignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = () => {
    setDisplaySignUp(!displaySignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateRes = checkSignInData(
      email.current.value,
      password.current.value
    );
    if (validateRes !== null) {
      setErrorMessage(validateRes);
      return;
    }

    //TODO: Sign In or Sign UP user in Auth store (Firebase)

    //Dispatch addUser
    dispatch(addUser({ email: email.current.value, displayName: "User" }));
    navigate("/browse");
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/AU-en-20251229-TRIFECTA-perspective_0ca6c07d-13c7-465d-8331-c1f194166d59_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="p-8 space-y-4 absolute flex flex-col text-white border-2 bg-black w-3/12 h-auto m-auto right-0 left-0 top-1/2">
        <h1 className="p-2 text-3xl font-bold">
          {displaySignUp ? "Sign Up" : "Sign In"}
        </h1>
        {displaySignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 m-2 bg-gray-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 bg-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-500"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button className="p-2 m-2 bg-red-500" onClick={handleSubmit}>
          {displaySignUp ? "Sign Up" : "Sign In"}
        </button>
        {displaySignUp ? (
          <div className="p-2 m-2">
            Already Registered,
            <span className="font-bold cursor-pointer" onClick={handleSignUp}>
              Sign In Now
            </span>
          </div>
        ) : (
          <div className="p-2 m-2">
            New To Netflix,
            <span className="font-bold cursor-pointer" onClick={handleSignUp}>
              Sign Up Now
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
