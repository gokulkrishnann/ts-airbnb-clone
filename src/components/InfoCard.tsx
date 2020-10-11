import React from 'react';
import './InfoCard.css'

type InfoCardProps = {
    src: string;
    title: string;
    description: string;
    price?:string;
}


const InfoCard : React.FC<InfoCardProps> =({src,title,description,
price}) => {
    return(
        <div className="infocard">
            <img src={src} alt=""/>
            <div className="infocard__detail">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default InfoCard;