import { MdHomeRepairService } from "react-icons/md";
import { FaPeopleRobbery } from "react-icons/fa6";
import { MdShoppingBag } from "react-icons/md";

const Support = () => {
  return (
    <div>
      <>
        {/* component */}
        <section className="">
          <div className="py-10 sm:py-16 block lg:pt-24 lg:pb-12 relative bg-opacity-50  z-0  ">
            <div className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                <div className="max-w-xl mx-auto text-center">
                  <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                    <p className="text-lg md:text-xl lg:text-3xl font-extrabold tracking-widest uppercase font-customPlaywrite">
                      Our Support
                    </p>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-gray-600 group-hover:text-white">
                    By choosing Eco Craft, you are supporting a business that
                    values the environment and works tirelessly to reduce its
                    carbon footprint
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-12 lg:mt-20   ">
                  <a className="transition-all  duration-1000 bg-white hover:bg-teal-600  hover:shadow-xl m-2 p-4 relative z-0 group ">
                    <div className=" absolute  bg-teal-600 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <MdHomeRepairService size={40} />
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Dedicated Customer Service
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        At Eco Craft, we prioritize our customers and their
                        satisfaction. Our dedicated customer service team is
                        always ready to assist you with any inquiries, concerns,
                        or feedback.
                      </p>
                    </div>
                  </a>
                  <a className="transition-all  duration-1000 bg-white hover:bg-teal-600  hover:shadow-xl m-2 p-4 relative z-0 group  ">
                    <div className=" absolute  bg-teal-600 top-0 left-0 w-24 h-1 z-0  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <FaPeopleRobbery size={40} />

                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Community Engagement
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        Eco Craft believes in giving back to the community. We
                        regularly participate in local events, support craft
                        fairs, and collaborate with artisans to promote handmade
                        crafts.
                      </p>
                    </div>
                  </a>

                  <a className="transition-all  duration-1000 bg-white hover:bg-teal-600  hover:shadow-xl m-2 p-4 relative z-0 group ">
                    <div className=" absolute  bg-teal-600 top-0 left-0 w-24 h-1 z-0  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <MdShoppingBag size={40} />

                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Secure and Convenient Shopping
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        Your shopping experience is our priority. Eco Craft
                        ensures a secure and user-friendly online platform for
                        all your craft needs.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Support;
