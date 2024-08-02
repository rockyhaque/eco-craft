import { useTypewriter } from 'react-simple-typewriter';

const Slider = () => {
  
  const [text] = useTypewriter({
    words: ['Exclusive Discount!', 'Fresh Arrivals!', 'Limited Time Offer!']
})
  return (
    <div>
      <div className="carousel w-full h-[85vh] md:h-[55vh] lg:h-[60vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/2W4KPFH/nathan-anderson-y-Fm-KSmy-C7-Pg-unsplash.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center">
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-12 md:p-20 rounded-lg text-center">
              <h2 className="text-xl md:text-6xl font-bold text-white mb-4">{text}</h2>
              <p className="text-md md:text-3xl text-white">Save up to <span className='badge badge-lg badge-secondary'>50%</span> on selected items</p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/5RXtD1b/agrrro-organic-v-Ar-BGq-X-Et-Y-unsplash.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center">
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-12 md:p-20 rounded-lg text-center">
            <h2 className="text-xl md:text-6xl font-bold text-white mb-4">{text}</h2>
              <p className="text-md md:text-3xl text-white">Discover our new collection</p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/68Xdvgb/w-eibo-8r-T2-B-HZ-kk-unsplash.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center">
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-12 md:p-20 rounded-lg text-center">
            <h2 className="text-xl md:text-6xl font-bold text-white mb-4">{text}</h2>
              <p className="text-md md:text-3xl text-white">Hurry up, don&apos;t miss out!</p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/gWDWfJc/andre-taissin-2-Tq2na8-CLR8-unsplash.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center">
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-12 md:p-20 rounded-lg text-center">
              <h2 className="text-xl md:text-6xl font-bold text-white mb-4">Best Sellers!</h2>
              <p className="text-md md:text-3xl text-white">Check out our top products</p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
