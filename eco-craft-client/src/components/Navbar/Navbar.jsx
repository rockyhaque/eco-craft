import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";

// import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logout, loading } = useAuth();
  // const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("sunset");
    } else {
      setTheme("light");
    }
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        // console.log("User Logged Out");
        toast.success(`User Logged Out Successfully!`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {
  //   setCurrentUser(user);
  // }, [user])

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/allCraft">All Craft</NavLink>
          </li>
          <li>
            <NavLink to="/myCraft">My Craft</NavLink>
          </li>
          <li>
            <NavLink to="/addCraft">Add Craft</NavLink>
          </li>
          <li>
            <NavLink to="/myCart">My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return (
    <div className="navbar bg-base-100 fixed z-10">
      <Tooltip id="my-tooltip" />
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <Slide>
            <Link
              to="/"
              className="text-md md:text-xl lg:text-3xl font-bold bg-gradient-to-r from-amber-400 to-cyan-900 bg-clip-text text-transparent"
            >
              <span>Eco Craft</span> 
            </Link>
          </Slide>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        <div>
          <label className="cursor-pointer grid place-items-center ml-6 mr-2 md:mr-4">
            <input
              onChange={handleThemeToggle}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>

        <div>
          {user ? (
            <div
              className="dropdown dropdown-end "
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user?.displayName}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="photo"
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/updateProfile">Settings</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
