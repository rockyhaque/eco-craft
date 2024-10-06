import { TfiLocationPin } from "react-icons/tfi";
import { MdMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-16  ">
      <Helmet>
        <title>Eco Craft | Contact Us</title>
      </Helmet>
      <div className="text-center space-y-3 ">
        <h2 className="font-semibold text-2xl font-customPlaywrite">
        Contact Us
        </h2>
        <div className="flex gap-1 justify-center items-center pt-4">
          <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
          <h1 className="border-2 border-neutral-900 bg-black w-8"></h1>
          <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-8  py-12 px-3 md:px-10 lg:px-10">
        <div className="w-full md:w-full lg:w-1/3 shadow-xl bg-customWhite rounded-lg">
          <div className="card bg-base-100 flex justify-center items-center py-6">
            <div>
              <TfiLocationPin className="text-6xl" />
            </div>
            <div className="card-body items-center text-center">
              <p>40 Bulu Ocean Tower, Kemal Ataturk Ave, Dhaka 1213</p>
            </div>
          </div>
          <div className=" border-b-2 border-neutral-200 mx-4"></div>
          <div className="card bg-base-100 flex justify-center items-center py-6">
            <div>
              <MdMarkEmailUnread className="text-6xl" />
            </div>
            <div className="card-body items-center text-center">
              <p>info@ecocraft.com</p>
              <p>support@ecocraft.com</p>
            </div>
          </div>
          <div className=" border-b-2 border-neutral-200 mx-4"></div>
          <div className="card bg-base-100 flex justify-center items-center py-6">
            <div>
              <LuPhoneCall className="text-6xl" />
            </div>
            <div className="card-body items-center text-center">
              <p>(+880) 1742460399</p>
            </div>
          </div>
        </div>
        <div className="w-full shadow-xl rounded-xl bg-customWhite px-10 py-5">
          <div className="space-y-5 ">
            <h1 className="text-xl font-semibold">Just Say Hello!</h1>
            <p className="text-customGray">
              Discover diverse categories tailored to your interests and needs.
              Find the latest trends, essential tools, and specialized services
              in our curated selection of high-quality options.
            </p>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full "
              />
              <input
                type="email"
                placeholder="email@gmail.com"
                className="input input-bordered w-full "
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Say Hello..."
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <textarea
                className="textarea textarea-bordered w-full h-36"
                placeholder="Subjects"
              ></textarea>
            </div>
            <button className="btn btn-sm md:btn-md lg:btn-wide bg-gradient-to-r from-emerald-300 to-orange-400 font-semibold text-sm md:text-lg lg:text-lg text-white rounded-full px-6 py-1 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gradient-to-l hover:from-orange-400 hover:to-emerald-300 hover:shadow-2xl hover:text-black hover:-translate-y-1 hover:border hover:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="mb-10">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.700523887522!2d90.4028106047616!3d23.793676362079477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e61d7a8e5%3A0x2f089a60bc187f92!2sBulu%20Ocean%20Tower!5e0!3m2!1sen!2sbd!4v1714184376634!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
