import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import EmptyContent from "../../components/EmptyContent/EmptyContent";
import { Helmet } from "react-helmet";

const MyCart = () => {
  const { user } = useAuth();
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/purchasedItems?email=${user?.email}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch purchased items.");
        }

        const data = await response.json();
        setPurchasedItems(data);
      } catch (error) {
        console.error("Error fetching purchased items:", error);
        toast.error("Failed to fetch purchased items.");
      } finally {
        setLoading(false);
      }
    };

    if (user.email) {
      fetchPurchasedItems();
    } else {
      setLoading(false);
    }
    window.scrollTo(0, 0);
  }, [user.email]);

  const handleCancelItem = async (itemId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently cancel the item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
      confirmButtonColor: "#C70039",
      cancelButtonColor: "#93C572",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/purchasedItems/${itemId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          toast.success("Item deleted successfully!");
          // Refresh the purchased items list
          setPurchasedItems((prev) =>
            prev.filter((item) => item.itemId !== itemId)
          );
        } else {
          const result = await response.json();
          toast.error(result.message || "Failed to delete item.");
        }
      } catch (error) {
        console.error("Error deleting item:", error);
        toast.error("Failed to delete item.");
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
        <title>My Cart</title>
      </Helmet>
      <SectionTitle title="My Cart" />
      {purchasedItems.length === 0 ? (
        <EmptyContent title="Oops 🥲" subTitle="No items in your cart." />
      ) : (
        <div className="overflow-x-auto border rounded-2xl shadow-md py-2 px-2 mb-16">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {purchasedItems.map((item) => (
                <tr key={item.itemId}>
                  <td>{item.itemName}</td>
                  <td>
                    {item?.description
                      ? item.description.length > 100
                        ? item.description.slice(0, 100) + ". . ."
                        : item.description
                      : "No description available."}
                  </td>

                  <td>{item.itemPrice} BDT</td>
                  <td>{new Date(item.purchaseTime).toLocaleDateString()}</td>
                  <td>{new Date(item.purchaseTime).toLocaleTimeString()}</td>

                  <td>
                    <button
                      onClick={() => handleCancelItem(item.itemId)}
                      className="btn btn-sm text-red-900 bg-red-300 hover:bg-transparent hover:font-bold"
                    >
                      Cancel
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

export default MyCart;
