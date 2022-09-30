import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import Suggestion from "ads/Suggestion"
import Pizzas from "./Recipes"
import Adv from "ads/Adv"

export default function Home(){
    return (
        <div>
            <div className="remote">
                <div className="teamAdsAdvertise"><Adv/></div>
                <div className="teamAdsAdvertise"><Suggestion/></div></div>
            <div className="host"><Pizzas/></div>
            <div className="host"><ImproveSkills /></div>
        </div>
    )
}