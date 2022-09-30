import CustomImage from "./CustomImage";
import { UserContext } from "host/Store";
import { useContext } from "react";

export default function RecipeCard({ recipe }) {
    const [user, setUser] = useContext(UserContext);
  return (
    <div className="recipe-card">
      <CustomImage
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmEXh05i6FeGbqaQlldssi6HLLDjp24BlbC9V1Zaqm8c64iR_yfk6O2WsOjnlwMjiYxw&usqp=CAU"
        pt="65%"
      />
      <div className="recipe-card-info">
        <img
          className="auther-img"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmEXh05i6FeGbqaQlldssi6HLLDjp24BlbC9V1Zaqm8c64iR_yfk6O2WsOjnlwMjiYxw&usqp=CAU"
          }
          alt=""
        />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setUser((user) => [...user, recipe?.title]);
          }}
          className="view-btn"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
