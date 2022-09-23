import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmEXh05i6FeGbqaQlldssi6HLLDjp24BlbC9V1Zaqm8c64iR_yfk6O2WsOjnlwMjiYxw&usqp=CAU" pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmEXh05i6FeGbqaQlldssi6HLLDjp24BlbC9V1Zaqm8c64iR_yfk6O2WsOjnlwMjiYxw&usqp=CAU"} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}