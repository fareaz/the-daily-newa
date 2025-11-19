import React, { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const {
    createUser,
    setUser,
    updateUser,
    Verification,
    
  } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
   const [show, setShow] = useState(false);
  const Navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
      setError("");
    const name = e.target.name.value;
      const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
        const terms = e.target.terms.checked;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      setSuccess(false);
      return;
    } else {
      setNameError("");
    }
    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;
    if (!regExp.test(password)) {
      setError(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
      );

    if (!terms) {
      setError("Please accept our terms and conditions");
      return;
    }
    setError("");
    setSuccess(false);
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        e.target.reset();
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
              
              
            Navigate("/");
           
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        
  
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-xs text-error">{nameError}</p>}
            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
             <div className="relative">
            <label className="label">Password</label>
            <input
              name="password"
              type={show ? "text" : "password"}
              className="input"
              placeholder="Password"
              required
            />
            <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[25px] top-[35px] cursor-pointer z-80"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>
            <div>
              <label className="label">
                <input type="checkbox" name="terms" className="checkbox" />
                Accept Our Terms and Conditions
              </label>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            {success && (
              <p className="text-green-500 text-center">
                Account created successfully.{" "}
              </p>
            )}
            {error && <p className="text-red-500 text-center">{error}</p>}
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
