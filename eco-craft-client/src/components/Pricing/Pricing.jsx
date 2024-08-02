
import './Pricing.css'

const Pricing = () => {
  const togglePricing = () => {
    const annualPrices = document.querySelectorAll(".annual");
    const monthlyPrices = document.querySelectorAll(".month");
    const toggle = document.getElementById("toggle");

    annualPrices.forEach((price) => {
      if (toggle.checked) {
        price.classList.add("hidden");
      } else {
        price.classList.remove("hidden");
      }
    });

    monthlyPrices.forEach((price) => {
      if (toggle.checked) {
        price.classList.remove("hidden");
      } else {
        price.classList.add("hidden");
      }
    });
  };

  return (
    <div className="text-gray-900 bg-no-repeat bg-left-bottom sm:bg-svg-bottom mb-12 mt-20">

      <h1 className="text-center font-extrabold text-lg md:text-xl lg:text-3xl mt-8 tracking-wide relative font-customPlaywrite">
        Our Pricing
      </h1>

      <div className="flex flex-row justify-center mt-8 text-sm tracking-tight font-medium text-gray-700 ">
        <p className="mx-3">Annually</p>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toggle"
              type="checkbox"
              className="hidden"
              onClick={togglePricing}
            />
            <div className="w-10 h-3 bg-gray-400 rounded-full shadow-inner" />
            <div className="toggle_dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0" />
          </div>
        </label>
        <p className="mx-3">Monthly</p>
      </div>

      <div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center">
        <div className="border rounded-lg md:rounded-r-none text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-gray-100 font-medium z-0 shadow-lg">
          <div className="">Basic</div>
          <div className="font-bold text-6xl month hidden">
            $19.99
          </div>
          <div className="font-bold text-6xl annual">
            $199.99
          </div>
          <hr />
          <div className="text-sm my-3">5% Discount on All Products</div>
          <hr />
          <div className="text-sm my-3">Minimum Purchase Quantity: 10 Items</div>
          <hr />
          <div className="text-sm my-3">Access to Basic Support</div>
          <hr />
          <a href="#" target="_blank">
            <div className="bg-gradient-base border border-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">
              Learn More
            </div>
          </a>
        </div>
        <div className="border-transparent rounded-lg text-center p-5 mx-auto md:mx-0 my-2 bg-gradient text-white font-medium z-0 shadow-lg">
          <div className="py-4">
            Professional
            <div className="font-bold text-6xl month hidden">
              $24.99
            </div>
            <div className="font-bold text-6xl annual">
              $249.99
            </div>
            <hr />
            <div className="text-sm my-3">10% Discount on All Products</div>
            <hr />
            <div className="text-sm my-3">Minimum Purchase Quantity: 5 Items</div>
            <hr />
            <div className="text-sm my-3">Priority Customer Support</div>
            <hr />
            <a href="#" target="_blank">
              <div className="bg-white border border-white hover:bg-transparent text-teal-600 hover:text-white font-bold uppercase text-xs mt-5 py-2 mpx-4 rounded cursor-pointer">
                Learn More
              </div>
            </a>
          </div>
        </div>
        <div className="border rounded-lg  md:rounded-l-none text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-gray-100 font-medium z-0 shadow-lg">
          <div className="">Master</div>
          <div className="font-bold text-6xl month hidden">
            $39.99
          </div>
          <div className="font-bold text-6xl annual">
            $399.99
          </div>
          <hr />
          <div className="text-sm my-3">$39.99/month or $399.99/year</div>
          <hr />
          <div className="text-sm my-3">20% Discount on All Products</div>
          <hr />
          <div className="text-sm my-3">Free Shipping on All Orders</div>
          <hr />
          <a href="#" target="_blank">
            <div className="bg-gradient-base border border-teal-600 hover:bg-transparent text-white hover:text-teal-600 font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">
              Learn More
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
