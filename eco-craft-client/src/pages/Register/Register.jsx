import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const Register = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { googleLogin, githubLogin, setUser, createUser, setLoading } =
    useAuth();

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, name, password, photoURL } = data;

    try {
      // create user in Firebase
      await createUser(email, password);

      setLoading(true);
      // update user profile
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL,
      });

      // set user to state
      setLoading(false);
      setUser({
        ...auth.currentUser,
        displayName: name,
        photoURL,
      });

      // Navigate to home or another page
      navigate("/");
      toast.success('Yay! User Created Successfully 🤩');
    } catch (error) {
      setError(error.message);
      toast.error(`Opps! ${error.message}`);
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        // console.log(result.user);
        toast.success("Logged In Successfully 🤩");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(`Opps! ${error.message}`);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        setUser(result.user);
        // console.log(result.user);
        toast.success("Logged In Successfully 🤩");
        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(`Opps! ${error.message}`);
      });
  };

  return (
    <div>
      <section className=" flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-950 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/4Rs47jj/pexels-armandvalendez-5725638.jpg)",
          }}
        >
          <div className="absolute bg-black opacity-70 inset-0 z-0" />
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Join the Eco Craft Community!
            </h1>
            <p className="text-3xl my-4">
              Register now and start your journey towards sustainable and
              beautiful living.
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/4Rs47jj/pexels-armandvalendez-5725638.jpg)",
            }}
          >
            <div className="absolute bg-black opacity-70 inset-0 z-0" />
          </div>
          <div className="w-full py-6 z-20">
            <h1 className="my-6 lg:text-3xl md:text-xl text-md font-semibold">
              Register
            </h1>
            <div className="py-6 space-x-2">
              <button
                onClick={handleGoogleLogin}
                className="w-28 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white hover:bg-teal-950"
              >
                Google
              </button>
              <button
                onClick={handleGithubLogin}
                className="w-28 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white hover:bg-orange-950"
              >
                Github
              </button>
            </div>
            <p className="text-gray-100">or use email your account</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
            >
              <div className="pb-2 pt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 font-semibold text-md mt-1">
                    *Name is required
                  </span>
                )}
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 font-semibold text-md mt-1">
                    *Email is required
                  </span>
                )}
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-500 font-semibold text-md mt-1">
                    *Photo URL is required
                  </span>
                )}
              </div>

              <div className="pb-2 pt-4 relative flex items-center">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />
                <span
                  className="absolute right-3 cursor-pointer text-xl"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <IoEyeOffOutline /> : <MdOutlineRemoveRedEye />}
                </span>
              </div>
              {errors.password?.type === "required" && (
                <span className="text-red-500 font-semibold text-md mt-2">
                  Password is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500 font-semibold text-md mt-2">
                  Password Must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-500 font-semibold text-md mt-2">
                  Password Must be less than 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500 font-semibold text-md mt-2">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </span>
              )}

              <div className="text-right text-gray-400 hover:underline hover:text-gray-100 mt-4">
                <a href="#">Forgot your password?</a>
              </div>
              <div className="flex gap-1 my-6">
                <p>Already have an account?</p>
                <Link to="/login" className="underline text-orange-600">
                  Login
                </Link>
              </div>
              <div className="px-4 pb-2 pt-4">
                <button
                  type="submit"
                  className="uppercase block w-full p-4 font-semibold text-lg rounded-full bg-orange-600 hover:bg-teal-600 focus:outline-none"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
