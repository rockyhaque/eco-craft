import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { CgNametag } from "react-icons/cg";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

const ViewDetails = () => {
  const { id } = useParams();
  const singleCraft = useLoaderData();

  const [craft, setCraft] = useState(singleCraft);

  // console.log(craft);

  const {
    _id,
    name,
    category,
    email,
    price,
    userName,
    photoURL,
    craftPhotoURL,
    stockStatus,
    rating,
    processing_time,
    description,
    accountCreation,
    customization
  } = craft;

  if (!craft) {
    return (
      <div>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }


  return (
    <div>
      <Helmet>
        <title>Eco Craft | {name}</title>
      </Helmet>
      <div className="text-center space-y-3 py-16">
        <h2 className="font-semibold text-2xl font-customPlaywrite">
          Details of {name}
        </h2>
        <div className="flex gap-1 justify-center items-center pt-4">
          <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
          <h1 className="border-2 border-neutral-900 bg-black w-8"></h1>
          <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
        </div>
      </div>

      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full h-[200px] md:h-[600px] object-cover object-center rounded border border-gray-200"
              src={craftPhotoURL}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font  mb-1">
                {name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>

                  <span className="text-gray-600 ml-3">{rating} Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed mb-6">{description}</p>

              <div className="flex items-center gap-2">
                <IoTimeOutline />
                <p>Processing Time :</p>
                <span className="badge badge-outline">{processing_time}</span>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <MdOutlineDesignServices />
                <p>Customization :</p>
                <span className="badge badge-accent">{customization}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span className="flex items-center gap-2 title-font text-gray-900">
                  <FaBangladeshiTakaSign />
                  <p>Price :</p>
                  {price}
                </span>

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>

              <hr />
              <div className="mt-6 items-center pb-5 ">
                <h1 className="text-lg md:text-2xl font-bold mb-4">
                  Owner Info
                </h1>
                <div className="border rounded-lg p-4">
                  <div>
                    <div className="flex flex-col md:flex-row justify-center md:justify-start lg:justify-start items-center gap-3 mt-4">
                      <CgNametag size={30} />
                      <p className="font-bold text-xl">User Name:</p>
                      <span className="text-xl">{userName}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row justify-center md:justify-start lg:justify-start items-center gap-3 mt-4">
                      <MdOutlineMarkEmailUnread size={30} />
                      <p className="font-bold text-xl">Email:</p>
                      <span className="text-xl">{email}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row justify-center md:justify-start lg:justify-start items-center gap-3 mt-4">
                      <IoCreateOutline size={30} />
                      <p className="font-bold text-xl">Since:</p>
                      <span className="text-xl">{accountCreation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 hidden">
            <Link to="/login" className="btn btn-wide hover:bg-gradient-to-l bg-gradient-to-r from-emerald-300 to-orange-400 font-semibold text-lg">
              Buy Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewDetails;
