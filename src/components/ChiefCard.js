import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"


export default function ChiefCard({chief}) {
    return (
        <div className="chief-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmEXh05i6FeGbqaQlldssi6HLLDjp24BlbC9V1Zaqm8c64iR_yfk6O2WsOjnlwMjiYxw&usqp=CAU" alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
                <p className="cheif-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
    )
}