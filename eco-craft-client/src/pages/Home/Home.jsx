import Category from "../../components/Category/Category";
import Pricing from "../../components/Pricing/Pricing";
import Slider from "../../components/Slider/Slider";
import Support from "../../components/Support/Support";
import CraftItems from './../../components/CraftItems/CraftItems';



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <CraftItems></CraftItems>
            <Pricing></Pricing>
            <Support></Support>

        </div>
    );
};

export default Home;