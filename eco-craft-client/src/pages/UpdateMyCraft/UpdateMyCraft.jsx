import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const UpdateMyCraft = () => {
  const { user } = useAuth() || {};
  const craft = useLoaderData();
  const navigate = useNavigate();

  // console.log(craft);

  const {
    _id,
    name,
    rating,
    category,
    price,
    customization,
    stockStatus,
    processing_time,
    description,
    craftPhotoURL,
  } = craft;


  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const processing_time = form.processing_time.value;
    const description = form.description.value;
    const craftPhotoURL = form.craftPhotoURL.value;

    const info = {
      name,
      rating,
      category,
      price,
      customization,
      stockStatus,
      processing_time,
      description,
      craftPhotoURL,
    };

    fetch(`${import.meta.env.VITE_API_URL}/craft/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`${name} has been updated Successfully 🤩`);
          navigate("/myCraft")
        }
      });
    form.reset();
  };

  return (
    <section className="bg-gradient-to-r from-orange-50 to-teal-50">
      <div className="max-w-screen-xl mx-auto">
        <Helmet>
          <title>Eco Craft | Update A Craft</title>
        </Helmet>
        <div className="text-center space-y-3 py-16">
          <h2 className="font-semibold text-2xl font-customPlaywrite">
            Update Your Craft 😎
          </h2>
          <div className="flex gap-1 justify-center items-center pt-4">
            <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
            <h1 className="border-2 border-neutral-900 bg-black w-8"></h1>
            <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
          </div>
        </div>

        <section>
          <div className=" px-24 py-6 ">
            <form onSubmit={handleUpdateCraft}>
              {/* Form name and category Row */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 mb-7">
                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Handcrafted Wooden Chair"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Category</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    name="category"
                    defaultValue={category}
                  >
                    <option disabled selected>
                      Select One
                    </option>
                    <option>Wooden Furniture</option>
                    <option>Wooden Sculptures</option>
                    <option>Wooden Home Decor</option>
                    <option>Wooden Utensils</option>
                    <option>Wooden Kitchenware</option>
                    <option>Wooden Jewelry</option>
                    <option>Jute</option>
                    <option>Jute Home Decor</option>
                    <option>Jute Kitchenware</option>
                    <option>Jute Utensils</option>
                  </select>
                </div>
              </div>

              {/* Processing Time and price Row */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 mb-7">
                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Processing Time
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="processing_time"
                      defaultValue={processing_time}
                      placeholder="Ex :  5-7 days"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Price</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      name="price"
                      defaultValue={price}
                      placeholder="999"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* Form customization and rating Row */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 mb-7">
                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Customization
                    </span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    name="customization"
                    defaultValue={customization}
                  >
                    <option disabled selected>
                      Select One
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Rating</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      name="rating"
                      defaultValue={rating}
                      placeholder="5"
                      className="input input-bordered w-full"
                      max="5"
                      min="0"
                    />
                  </label>
                </div>
              </div>

              {/* Form Stock Status and craft photo Row */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 mb-7">
                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Stock Status
                    </span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    name="stockStatus"
                    defaultValue={stockStatus}
                  >
                    <option disabled selected>
                      Select One
                    </option>
                    <option>In Stock</option>
                    <option>Made to Order</option>
                    <option>Out of Stock</option>
                  </select>
                </div>
                <div className="form-control w-full md:w-1/2 lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Craft Photo URL
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="craftPhotoURL"
                      defaultValue={craftPhotoURL}
                      placeholder="https://craft-img.jpg"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* Form description  */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 mb-7">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Description
                    </span>
                  </label>
                  <textarea
                    name="description"
                    defaultValue={description}
                    placeholder="A versatile jute bag for everyday use..."
                    className="textarea textarea-bordered textarea-sm w-full"
                  ></textarea>
                </div>
              </div>

              <div className="text-center">
                <input
                  type="submit"
                  value="Update Craft"
                  className="btn btn-sm md:btn-md lg:btn-wide bg-gradient-to-r from-emerald-300 to-orange-400 font-semibold text-sm md:text-lg lg:text-lg text-white rounded-full px-6 py-1 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gradient-to-l hover:from-orange-400 hover:to-emerald-300 hover:shadow-2xl hover:text-black hover:-translate-y-1 hover:border hover:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default UpdateMyCraft;
