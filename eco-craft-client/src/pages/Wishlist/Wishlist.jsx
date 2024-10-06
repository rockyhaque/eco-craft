import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";
import { CgEye } from "react-icons/cg";
import { Link } from "react-router-dom";
import EmptyContent from "../../components/EmptyContent/EmptyContent";

const Wishlist = () => {
  const { user } = useAuth() || {};
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      const email = user?.email;
      if (!email) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/wishlist/${email}`
        );
        const data = await response.json();
        setWishlistItems(data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
    window.scrollTo(0, 0);
  }, [user]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#C70039",
      cancelButtonColor: "#93C572",
      confirmButtonText: "Remove!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/wishlist/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          setWishlistItems(wishlistItems.filter((item) => item._id !== id));
          Swal.fire({
            title: "Removed!",
            text: "Your item has been deleted.",
            icon: "success",
            confirmButtonColor: "#93C572",
          });
        } else {
          Swal.fire("Error!", "Failed to remove item from wishlist.", "error");
        }
      } catch (error) {
        console.error("Error removing item from wishlist:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl px-6 py-4 mx-auto">
      <Helmet>
        <title>Eco Craft | Wishlist</title>
      </Helmet>
      <SectionTitle title="Wishlist" />
      {wishlistItems.length === 0 ? (
        <EmptyContent title="Opps 🥲" subTitle="No items in wishlist." />
      ) : (
        <div className="overflow-x-auto border rounded-2xl shadow-md py-2 px-2 mb-16">
          <table className="table ">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>View</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.itemImage}
                          alt={item.itemName}
                          className="item-image"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.itemName}</td>
                  <td>
                    {item.itemDescription.length > 150
                      ? item.itemDescription.slice(0, 150)
                      : item.itemDescription}{" "}
                    . . .{" "}
                  </td>
                  <td>{item.itemPrice} BDT</td>
                  <td>
                    <Link to={`/craftDetails/${item.itemId}`}>
                      <CgEye
                        size={25}
                        className="text-gray-600 hover:text-green-300 cursor-pointer transition duration-800"
                      />
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm text-red-900 bg-red-300 hover:bg-transparent hover:font-bold"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
