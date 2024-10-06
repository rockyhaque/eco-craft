import { IoIosStar } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const CraftItemCard = ({ craft }) => {
  const { id } = useParams();

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
  } = craft;
  return (
    <div className="">
      <div className="relative pt-2 lg:pt-2 ">
        <div className="w-full ">
          <div className="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
            <div>
              <article className="bg-white p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                <div className="relative mb-4 rounded-2xl">
                  <img
                    className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                    src={craftPhotoURL}
                    alt=""
                  />
                  <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <IoIosStar className="text-orange-500" />
                    <span className="ml-1 text-sm text-slate-400">
                      {rating}
                    </span>
                  </div>
                  <Link
                    to={`/craftDetails/${craft._id}`}
                    className="flex justify-center items-center bg-teal-600 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    View Details
                    <svg
                      className="ml-2 w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="flex justify-between items-center w-full pb-4 mb-auto">
                  <div className="flex items-center">
                    <div className="pr-3">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={photoURL}
                        alt="photo"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-1">
                      <div className="">
                        <p className="text-sm font-semibold ">{name}</p>
                        <p className="text-sm text-gray-500">{category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-sm flex items-center text-gray-500 ">
                      {processing_time}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-xl leading-8">
                  <p className="block relative group-hover:text-teal-600 transition-colors duration-200 ">
                    {description.length > 80 ? (
                      <p>{description.slice(0, 80)}...</p>
                    ) : (
                      <p>{description}</p>
                    )}
                  </p>
                </h3>
                <div className="text-center mt-4">
                  <Link
                    to={`/craftDetails/${craft._id}`}
                    className="btn btn-sm md:btn-md lg:btn-wide bg-gradient-to-r from-emerald-300 to-orange-400 font-semibold text-sm md:text-lg lg:text-lg text-white rounded-full px-6 py-1 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gradient-to-l hover:from-orange-400 hover:to-emerald-300 hover:shadow-2xl hover:text-black hover:-translate-y-1 hover:border hover:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItemCard;
