import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const AllCraft = () => {
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State to store search input

  // Fetch data from the API dynamically using the environment variable
  useEffect(() => {
    const fetchCrafts = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/craft`);
      const data = await response.json();
      setCrafts(Array.isArray(data) ? data : []);
      setLoading(false);
    };
    fetchCrafts();
  }, []);

  // Filter crafts based on the search term
  const filteredCrafts = crafts.filter((craft) =>
    craft.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    craft.category.toLowerCase().includes(searchTerm.toLowerCase()) || 
    craft.price.toString().includes(searchTerm)
  );

  if (loading) {
    return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>; 
  }

  return (
    <div className="max-w-screen-xl px-6 py-4 mx-auto">
      <Helmet>
        <title>Eco Craft | All Crafts</title>
      </Helmet>
      <SectionTitle title="All Crafts" />
      
      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search crafts by name, category, or price..."
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
        />
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
              {filteredCrafts.length > 0 ? (
                filteredCrafts.map((craft) => (
                  <tr key={craft._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={craft.craftPhotoURL}
                              alt="Craft"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{craft.name}</div>
                          <div className="text-sm opacity-50">
                            {craft.stockStatus}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{craft.category}</td>
                    <td>
                      <span className="badge badge-ghost badge-sm">
                        {craft.price}
                      </span>
                    </td>
                    <td>{craft.userName}</td>
                    <td>{craft.email}</td>
                    <th>
                      <Link
                        to={`/craftDetails/${craft._id}`}
                        className="btn text-white bg-teal-600  btn-md"
                      >
                        View Details
                      </Link>
                    </th>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No crafts available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCraft;
