import React from 'react';
import './SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StartIcon from '@material-ui/icons/Star';

type SearchResultProps = {
    img: string;
    location: string;
    title: string;
    description: string;
    star: number;
    price: string;
    total: string;

}

const SearchResult: React.FC<SearchResultProps> = ({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}) =>{
    return(
        <div className="searchResult">
            <img src={img} alt={title}/>
            <FavoriteBorderIcon className="searchResult_heart"/>
            <div className="searchResult_info">
                <div className="searchResult_infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_______</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult_infoBottom">
                    <div className="searchResult_stars">
                        <StartIcon className="searchResult_star"/>
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResults_price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchResult;