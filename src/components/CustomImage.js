export default function CustomImage({imgSrc, pt}){
    return (
        <div className="custom-image" style={{paddingTop: pt}}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmEXh05i6FeGbqaQlldssi6HLLDjp24BlbC9V1Zaqm8c64iR_yfk6O2WsOjnlwMjiYxw&usqp=CAU"} alt="" />
        </div>
    )
}