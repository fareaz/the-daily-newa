import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { signInWithGoogle, setLoading, Verification, logOut } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    setLoading(true);

    signInWithGoogle()
      .then(async (result) => {
        const user = result.user;


        if (!user.emailVerified) {
    
          await Verification();
          toast.error("Please verify your email. Verification link sent to your mail.");
          
         
          if (logOut) {
            await logOut();
          }

          return;
        }
        toast.success("Signin successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2 className="font-semibold mb-5">Login With</h2>
      <div className="space-y-3">
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full btn-outline btn-secondary"
        >
          <FcGoogle size={20} /> Login With Google
        </button>
        <button className="btn w-full btn-outline btn-primary">
          <TbBrandGithubFilled size={20} /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
