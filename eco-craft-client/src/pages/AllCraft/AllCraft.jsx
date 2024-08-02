// import { useEffect, useState } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";


const AllCraft = () => {
  const loadedCraft = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCraft);

  const {_id, name, category, email, price, userName, craftPhotoURL, stockStatus} = crafts;


  return (
    <div>
      <Helmet>
        <title>Eco Craft | All Crafts</title>
      </Helmet>
      <div className="text-center space-y-3 py-16">
        <h2 className="font-semibold text-2xl font-customPlaywrite">
          All Crafts 😍
        </h2>
        <div className="flex gap-1 justify-center items-center pt-4">
          <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
          <h1 className="border-2 border-neutral-900 bg-black w-8"></h1>
          <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
        </div>
      </div>

      {/* Table root */}
      <div className="max-w-screen-xl mx-auto">
        <div className="overflow-x-auto mb-8 md:mb-12 lg:mb-20">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Craft Info</th>
                <th>Category</th>
                <th>Price</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                crafts.map((craft) => <tr key={craft._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={craft.craftPhotoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{craft.name}</div>
                        <div className="text-sm opacity-50">{craft.stockStatus}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {craft.category}
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                    {craft.price}
                    </span>
                  </td>
                  <td>{craft.userName}</td>
                  <td>{craft.email}</td>
                  <th>
                    <Link to={`/craftDetails/${craft._id}`} className="btn text-white bg-teal-600  btn-md">View Details</Link>
                  </th>
                </tr>)
              }

            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCraft;
