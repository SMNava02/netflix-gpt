import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <div className="flex justify-between align-bottom p-2 z-10 absolute w-full h-15 bg-linear-to-b from-black">
      <Link to="/">
        <img
          className="w-50 cursor-pointer"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </Link>
      <button
        className="bg-red-500 p-2 rounded-md font-bold text-white cursor-pointer"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;
