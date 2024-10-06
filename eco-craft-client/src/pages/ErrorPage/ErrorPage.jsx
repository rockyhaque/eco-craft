import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="max-h-screen">
      <div className="flex justify-center items-center">
        <img
          className="max-h-[calc(100vh-220px)]"
          src="https://i.ibb.co/nmWx8cM/404.jpg"
          alt="Error Page Photo"
        />
      </div>
      <Link to="/" className="flex justify-center pb-36">
        <h1 className="btn btn-sm md:btn-md lg:btn-wide bg-gradient-to-r from-emerald-300 to-orange-400 font-semibold text-sm md:text-lg lg:text-lg text-white rounded-full px-6 py-1 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gradient-to-l hover:from-orange-400 hover:to-emerald-300 hover:shadow-2xl hover:text-black hover:-translate-y-1 hover:border hover:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300">Go Home</h1>
      </Link>
    </div>
  );
}