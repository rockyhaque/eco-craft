import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { TiUserDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [user, setUsers] = useState(loadedUsers);

  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#007f66",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: `User has been deleted.`,
                icon: "success",
                confirmButtonColor: "#007f66",
              });
              const remainingUser = user.filter((item) => item._id !== id);
              setUsers(remainingUser);
            }
          });
      }
    });
  };

  return (
    <section className="bg-gradient-to-r from-emerald-200 to-orange-100">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>ID</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <th>{user._id}</th>
                <td>{user.email}</td>
                <td>{user.createdAt ? user.createdAt : "Empty"}</td>
                <td>{user.lastLoginAt ? user.lastLoginAt : "Empty"}</td>
                <td
                  onClick={() => handleUserDelete(user._id)}
                  className="hover:text-red-600 hover:font-bold cursor-pointer"
                >
                  <TiUserDeleteOutline size={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
