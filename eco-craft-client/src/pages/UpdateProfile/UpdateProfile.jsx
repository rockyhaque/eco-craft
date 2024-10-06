import moment from "moment";
import { updateProfile } from "firebase/auth";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { IoCreateOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const UpdateProfile = () => {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [lastLoginAt, setLastLoginAt] = useState("");

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");

      // time conversion with moment js
      if (user.metadata) {
        setCreatedAt(moment(user.metadata.creationTime).format("LLL"));
        setLastLoginAt(moment(user.metadata.lastSignInTime).format("LLL"));
      } else {
        setCreatedAt("Unknown");
        setLastLoginAt("Unknown");
      }
    }
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (user) {
      try {
        await updateProfile(user, {
          displayName,
          photoURL,
        });

        setSuccess("Profile updated successfully! 🥳");
        toast.success("Profile updated successfully! 🥳");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  if (!user) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return (
    <div className="max-w-3xl mx-auto my-20 p-6  bg-white rounded-lg shadow-lg">
      <Helmet>
        <title>{`Update Profile | ${user.displayName || "User"}`}</title>
      </Helmet>
      <div className="flex flex-col md:flex-row lg:flex-row items-center mb-6 gap-6">
        <div className="avatar flex items-center ">
          <div className="w-56 rounded-xl">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-full h-full object-cover"
              data-aos="slide-right"
            />
          </div>
        </div>
        <div>
          <h1 className="text-xl md:text-3xl font-semibold" data-aos="slide-down">
            {user.displayName}
          </h1>
          <div
            className="flex items-center gap-2 text-lg mt-2"
            data-aos="fade-down-left"
          >
            <MdOutlineMarkEmailUnread className="text-customTeal font-bold" />
            <p className="text-gray-600" data-aos="fade-down-left">
              {user.email}
            </p>
          </div>
          <div className="flex items-center gap-2 text-lg mt-2">
            <SiAmazonsimpleemailservice className="text-customTeal font-bold" />

            <p className="text-gray-600" data-aos="fade-down-left">
              Provider: {user.providerData?.[0]?.providerId}
            </p>
          </div>
          <div
            className="flex items-center gap-2 text-lg mt-2 text-gray-600"
            data-aos="fade-down-left"
          >
            <IoCreateOutline className="text-customTeal font-bold" />
            <p>Created At: {createdAt}</p>
          </div>
          <div
            className="flex items-center gap-2 text-lg mt-2 text-gray-600"
            data-aos="fade-down-left"
          >
            <CiLogin className="text-customTeal font-bold" />
            <p>Last Login At: {lastLoginAt}</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleUpdateProfile}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-lg md:text-3xl font-bold">
            Name
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-lg md:text-3xl font-bold">
            Photo URL
          </label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-center">
        <button
          type="submit"
          className="btn btn-sm md:btn-md lg:btn-wide bg-gradient-to-r from-emerald-300 to-orange-400 font-semibold text-sm md:text-lg lg:text-lg text-white rounded-full px-6 py-1 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gradient-to-l hover:from-orange-400 hover:to-emerald-300 hover:shadow-2xl hover:text-black hover:-translate-y-1 hover:border hover:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          Save Changes
        </button>
        </div>
      </form>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {success && <div className="text-green-500 mt-4">{success}</div>}
    </div>
  );
};

export default UpdateProfile;
