import Category from "../../components/Category/Category";
import Faq from "../../components/FAQ/Faq";
import GiftIdeaGenerator from "../../components/GiftIdeaGenerator/GiftIdeaGenerator";
import JoinCommunity from "../../components/JoinCommunity/JoinCommunity";
import OurSpeciality from "../../components/OurSpeciality/OurSpeciality";
import Slider from "../../components/Slider/Slider";
import UpComingEvents from "../../components/UpComingEvents/UpComingEvents";
import VideoTutorials from "../../components/VideoTutorials/VideoTutorials";
import CraftItems from "./../../components/CraftItems/CraftItems";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Category></Category>
      <CraftItems></CraftItems>
      <VideoTutorials />
      <OurSpeciality />
      <GiftIdeaGenerator />
      <Faq />
      <UpComingEvents />
      <JoinCommunity />
    </div>
  );
};

export default Home;
