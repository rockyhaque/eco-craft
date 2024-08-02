
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import "./Category.css";

const Category = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Heading */}
      <div className="text-center mt-20">
        <div className="inline-flex px-4 py-1.5 mx-auto rounded-full">
          <p className="text-lg md:text-xl lg:text-3xl font-extrabold tracking-widest uppercase font-customPlaywrite">
            Category
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Discover diverse categories tailored to your interests and needs.
            Find the latest trends, essential tools, <br /> and specialized
            services in our curated selection of high-quality options.
          </p>
        </div>
      </div>

      {/* Swiper */}
      <div className="mt-12"> {/* Added margin-top to create space above the Swiper */}
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative overflow-hidden aspect-square cursor-pointer rounded-xl group">
              <div className="absolute inset-0 z-50 transition-opacity duration-300 ease-in-out bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end">
                <div className="p-4 pb-10 space-y-3 text-xl text-white transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-4">
                  <div className="font-bold">Wooden Furniture</div>
                  <div className="text-sm opacity-60">
                    High-quality handcrafted wooden furniture.
                  </div>
                </div>
              </div>
              <img
                alt="Wooden Furniture"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="https://i.ibb.co/TBXJhdw/pexels-tiana-18128-2995012.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden aspect-square cursor-pointer rounded-xl group">
              <div className="absolute inset-0 z-50 transition-opacity duration-300 ease-in-out bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end">
                <div className="p-4 pb-10 space-y-3 text-xl text-white transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-4">
                  <div className="font-bold">Jute</div>
                  <div className="text-sm opacity-60">
                    Elegant and eco-friendly jute products.
                  </div>
                </div>
              </div>
              <img
                alt="Jute"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="https://i.ibb.co/JHQmnrK/pexels-cottonbro-6074019.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden aspect-square cursor-pointer rounded-xl group">
              <div className="absolute inset-0 z-50 transition-opacity duration-300 ease-in-out bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end">
                <div className="p-4 pb-10 space-y-3 text-xl text-white transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-4">
                  <div className="font-bold">Wooden Sculptures</div>
                  <div className="text-sm opacity-60">
                    Beautiful and intricate wooden sculptures.
                  </div>
                </div>
              </div>
              <img
                alt="Wooden Sculptures"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="https://i.ibb.co/SwZWVNQ/pexels-cheng-shi-song-427082720-20848052.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden aspect-square cursor-pointer rounded-xl group">
              <div className="absolute inset-0 z-50 transition-opacity duration-300 ease-in-out bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end">
                <div className="p-4 pb-10 space-y-3 text-xl text-white transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-4">
                  <div className="font-bold">Wooden Home Decor</div>
                  <div className="text-sm opacity-60">
                    Handcrafted wooden decor for your home.
                  </div>
                </div>
              </div>
              <img
                alt="Wooden Home Decor"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="https://i.ibb.co/nMWdMMc/pexels-orlovamaria-4946961.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden aspect-square cursor-pointer rounded-xl group">
              <div className="absolute inset-0 z-50 transition-opacity duration-300 ease-in-out bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end">
                <div className="p-4 pb-10 space-y-3 text-xl text-white transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-4">
                  <div className="font-bold">Wooden Utensils</div>
                  <div className="text-sm opacity-60">
                    Durable and stylish wooden utensils.
                  </div>
                </div>
              </div>
              <img
                alt="Wooden Utensils"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="https://i.ibb.co/99sTrr0/pexels-tima-miroshnichenko-7879862.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden aspect-square cursor-pointer rounded-xl group">
              <div className="absolute inset-0 z-50 transition-opacity duration-300 ease-in-out bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end">
                <div className="p-4 pb-10 space-y-3 text-xl text-white transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-4">
                  <div className="font-bold">Wooden Kitchenware</div>
                  <div className="text-sm opacity-60">
                    High-quality wooden kitchenware for all your needs.
                  </div>
                </div>
              </div>
              <img
                alt="Wooden Kitchenware"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="https://i.ibb.co/9w03cS3/pexels-margarita-141441249-20844308.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden aspect-square cursor-pointer rounded-xl group">
              <div className="absolute inset-0 z-50 transition-opacity duration-300 ease-in-out bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end">
                <div className="p-4 pb-10 space-y-3 text-xl text-white transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-4">
                  <div className="font-bold">Jute Home Decor</div>
                  <div className="text-sm opacity-60">
                    Stylish and sustainable jute home decor.
                  </div>
                </div>
              </div>
              <img
                alt="Jute Home Decor"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="https://i.ibb.co/641c05P/pexels-kseniachernaya-3965563.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden aspect-square cursor-pointer rounded-xl group">
              <div className="absolute inset-0 z-50 transition-opacity duration-300 ease-in-out bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end">
                <div className="p-4 pb-10 space-y-3 text-xl text-white transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-4">
                  <div className="font-bold">Jute Kitchenware</div>
                  <div className="text-sm opacity-60">
                    Eco-friendly jute kitchenware for your home.
                  </div>
                </div>
              </div>
              <img
                alt="Jute Kitchenware"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="https://i.ibb.co/tpzWMk4/pexels-sarah-chai-7262898.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden aspect-square cursor-pointer rounded-xl group">
              <div className="absolute inset-0 z-50 transition-opacity duration-300 ease-in-out bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end">
                <div className="p-4 pb-10 space-y-3 text-xl text-white transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-4">
                  <div className="font-bold">Jute Utensils</div>
                  <div className="text-sm opacity-60">
                    Durable and sustainable jute utensils.
                  </div>
                </div>
              </div>
              <img
                alt="Jute Utensils"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="https://i.ibb.co/c3Xvw8T/pexels-cup-of-couple-8474068.jpg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
