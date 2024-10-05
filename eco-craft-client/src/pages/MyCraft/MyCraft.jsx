import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyCraftCard from "../../components/MyCraftCard/MyCraftCard";
import { Helmet } from "react-helmet";

const MyCraft = () => {
  const { user } = useAuth() || {};
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/myCraft/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
          setLoading(false);
        });
    }
  }, [user]);

  console.log(items);

  return (
    <div>
      <Helmet>
        <title>Eco Craft | My Craft</title>
      </Helmet>
      <div className="text-center space-y-3 py-16">
        <h2 className="font-semibold text-2xl font-customPlaywrite">
          My All Crafts 😍
        </h2>
        <div className="flex gap-1 justify-center items-center pt-4">
          <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
          <h1 className="border-2 border-neutral-900 bg-black w-8"></h1>
          <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[calc(100vh-383px)] w-full">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-items-center gap-6 max-w-screen-xl mx-auto mb-6 md:mb-10 lg:mb-28">
          {items.length > 0 ? (
            items.map((craft) => (
              <MyCraftCard
                craft={craft}
                key={craft._id}
                items={items}
                setItems={setItems}
              />
            ))
          ) : (
            <div className="flex justify-center items-center min-h-[calc(100vh-383px)] w-full">
              <p className="text-6xl font-bold">Opps! No Data Found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyCraft;
