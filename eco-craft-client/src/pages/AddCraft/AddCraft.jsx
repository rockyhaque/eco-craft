import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const AddCraft = () => {
  const { user } = useAuth() || {};

  const handleAddCraft = (e) => {
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

    const email = user.email;
    const userName = user.displayName;
    const photoURL = user.photoURL;
    const accountCreation = user.metadata?.creationTime;
    const accountLastSignIn = user.metadata?.lastSignInTime;

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
      photoURL,
      email,
      userName,
      accountCreation,
      accountLastSignIn,
    };

    fetch(`${import.meta.env.VITE_API_URL}/craft`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success(`${name} has been added Successfully 🤩`);
        }
      });
    form.reset();
  };

  return (
    <section className="bg-gradient-to-r from-orange-50 to-teal-50">
      <div className="max-w-screen-xl mx-auto">
        <Helmet>
          <title>Eco Craft | Add A Craft</title>
        </Helmet>
        <div className="text-center space-y-3 py-16">
          <h5 className="text-customTeal font-semibold text-xl ">Craft</h5>
          <h2 className="font-semibold text-2xl font-customPlaywrite">
            Add your desired Craft 😍
          </h2>
          <div className="flex gap-1 justify-center items-center pt-4">
            <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
            <h1 className="border-2 border-neutral-900 bg-black w-8"></h1>
            <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
          </div>
        </div>

        <section>
          <div className=" px-24 py-6">
            <form onSubmit={handleAddCraft}>
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
                    placeholder="A versatile jute bag for everyday use..."
                    className="textarea textarea-bordered textarea-sm w-full"
                  ></textarea>
                </div>
              </div>

              <div className="text-center">
                <input
                  type="submit"
                  value="Add Craft"
                  className="btn btn-md lg:btn-wide hover:bg-gradient-to-r bg-gradient-to-l from-emerald-300 to-orange-400 font-semibold text-sm md:text-lg lg:text-lg"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AddCraft;
