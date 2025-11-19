import React, { use } from "react";
import { Link, NavLink } from "react-router";
import User from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";


const NavBar = () => {
    const { user,logOut } = use(AuthContext);
    // console.log(user)
    const handelLogOUT = ()=>{
        logOut()
       .then(() => {
     toast("loggg outt")
}).catch((error) => {
  console.log(error)
});

    }
  return (
    <div className="flex justify-between items-center">
      <div className="start font-semibold">{user && user.email}</div>

      <div className="middle flex gap-3 font-semibold text-accent ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink >About</NavLink>
        <NavLink >Career</NavLink>
      </div>

      <div className="end flex gap-3">
        <img className="w-10 rounded-[100%]" src={user ? user.photoURL : User} alt="" />
        {
            user? <button onClick={handelLogOUT} className="btn btn-primary px-5">Log Out</button>:<Link to={"/auth/login"} className="btn btn-primary px-5">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default NavBar;
