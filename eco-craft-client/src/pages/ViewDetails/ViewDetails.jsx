import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import {
  FaBangladeshiTakaSign,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";
import { CgNametag } from "react-icons/cg";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const ViewDetails = () => {
  const { id } = useParams();
  const singleCraft = useLoaderData();
  const { user } = useAuth();
  const [craft, setCraft] = useState(singleCraft);

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
    customization,
  } = craft;

  const handleAddOnWishlist = async (id) => {
    const email = user?.email;

    const itemDetails = {
      userEmail: email,
      itemId: id,
      itemName: name,
      itemDescription: description,
      itemPrice: price,
      itemImage: craftPhotoURL,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/wishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemDetails),
      });

      if (response.status === 400) {
        const result = await response.json();
        if (result.message === "Item already exists in wishlist.") {
          toast.error("Item already exists in wishlist.");
        } else {
          toast.error("Failed to add item to wishlist.");
        }
      } else if (response.ok) {
        toast.success(`${name} added to wishlist!`);
      } else {
        toast.error("Failed to add item to wishlist.");
      }
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
      toast.error("Failed to add item to wishlist.");
    }
  };

  const handlePurchase = async (id) => {
    const email = user?.email;
    const purchaseDetails = {
      userEmail: email,
      itemId: id,
      itemName: name,
      itemPrice: price,
      itemImage: craftPhotoURL,
      description,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/purchase`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(purchaseDetails),
      });

      if (response.ok) {
        await response.json();
        toast.success(`${name} added on your cart`);
      } else {
        const errorResponse = await response.json();
        toast.error(
          errorResponse.message || "Failed to complete the purchase."
        );
      }
    } catch (error) {
      console.error("Error making purchase:", error);
      toast.error("An error occurred while making the purchase.");
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Check out this amazing craft: ${name}`,
          text: description,
          url: window.location.href,
        })
        .then(() => {
          toast.success("Craft shared successfully!");
        })
        .catch((error) => {
          toast.error("Error sharing craft: " + error);
        });
    } else {
      toast.error("Web share not supported in this browser.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <title>Eco Craft | Details of {name}</title>
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
              <div className="flex flex-col md:flex-row mb-4">
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
                  {/* Social Sharing Buttons */}
                  <div className="mt-2 flex gap-4">
                    <button
                      className="bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
                      onClick={() =>
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                          "_blank"
                        )
                      }
                    >
                      <FaFacebook size={20} />
                    </button>
                    <button
                      className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
                      onClick={() =>
                        window.open(
                          `https://www.instagram.com/?url=${window.location.href}`,
                          "_blank"
                        )
                      }
                    >
                      <FaInstagram size={20} />
                    </button>
                    <button
                      className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
                      onClick={() =>
                        window.open(
                          `https://pinterest.com/pin/create/button/?url=${window.location.href}`,
                          "_blank"
                        )
                      }
                    >
                      <FaPinterest size={20} />
                    </button>
                    <button
                      className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
                      onClick={handleShare}
                    >
                      Share
                    </button>
                  </div>
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
                  {price} BDT
                </span>

                {/* wish list button */}
                <button
                  onClick={() => handleAddOnWishlist(_id)}
                  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-600 ml-4"
                >
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

          {/* purchase button */}
          <div
            onClick={() => handlePurchase(_id)}
            className="text-center mt-8 "
          >
            <button className="btn btn-sm md:btn-md lg:btn-wide bg-gradient-to-r from-emerald-300 to-orange-400 font-semibold text-sm md:text-lg lg:text-lg text-white rounded-full px-6 py-1 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gradient-to-l hover:from-orange-400 hover:to-emerald-300 hover:shadow-2xl hover:text-black hover:-translate-y-1 hover:border hover:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300">
              Purchase Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewDetails;
