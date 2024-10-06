import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftCard = ({ craft, items, setItems }) => {
  const {
    _id,
    name,
    price,
    category,
    craftPhotoURL,
    processing_time,
    rating,
    stockStatus,
    customization,
  } = craft;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3bd6c6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: `${name} has been deleted.`,
                icon: "success",
                confirmButtonColor: "#3bd6c6",
              });
              const remaining = items.filter((item) => item._id !== _id);
              setItems(remaining);
            }
          });
      }
    });
  };

  if (!craft) {
    return (
      <div>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="border p-4 rounded-xl shadow-md w-full ">
      <div className="flex flex-col md:flex-row">
        <div className="flex-none w-full md:w-48 relative mb-4 md:mb-0">
          <img
            src={craftPhotoURL}
            alt="Craft Photo"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <form className="flex-auto p-4">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold">
              {name}
            </h1>
            <div className="flex justify-center items-center gap-2 text-lg font-semibold text-black-500">
              <FaBangladeshiTakaSign />
              {price}
            </div>
            <div className="w-full flex-none text-sm font-medium text-black-700 mt-2">
              {stockStatus}
            </div>
          </div>
          <div className="mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <BiCategoryAlt />
              <span className="bg-teal-300 rounded-full px-4 ">{category}</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <IoTimeOutline />
              <span className="bg-gray-300 rounded-md px-4 ">
                {processing_time}
              </span>
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <Link
                to={`/updateMyCraft/${_id}`}
                className="btn btn-sm md:btn-md text-teal-900 bg-teal-300 hover:bg-transparent hover:font-bold"
                type="button"
              >
                Update
              </Link>
              <Link
                onClick={() => handleDelete(_id)}
                className="btn btn-sm md:btn-md  text-red-900 bg-red-300 hover:bg-transparent hover:font-bold"
                type="button"
              >
                Delete
              </Link>
            </div>
            <button
              className="flex items-center justify-center gap-2 w-14 h-9 rounded-md text-gray-800 border border-slate-500 shadow-2xl"
              type="button"
              aria-label="Favorites"
            >
              <span className="text-lg font-semibold ">{rating}</span>
              <IoIosStar className="text-orange-500" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineDesignServices />
            <p className="text-sm text-slate-700 ">
              Customization: <span className="font-bold">{customization}</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyCraftCard;

MyCraftCard.propTypes = {
  craft: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    craftPhotoURL: PropTypes.string.isRequired,
    processing_time: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    stockStatus: PropTypes.string.isRequired,
    customization: PropTypes.string.isRequired,
  }).isRequired,
};
