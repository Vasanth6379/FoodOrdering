import { useState } from "react"

function Body() {
    let [data, setData] = useState([])
    let  link="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

    
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            .then((val) => val.json())
            .then((res) => {
                setData(res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
            })
    
    return (
        <div>
            <div className="sr">
                <input className="bx" placeholder="search here"/>
                <button className="se"  >Search</button>
            </div>
            <div className="bo">
                {data.map((x) => (
                    <div  key={x.info.id}>
                        <img className="im" src={link + x.info.cloudinaryImageId} alt={x.info.name} />
                        <div>{x.info.name}</div>
                        <div>{x.info.cuisines.join(", ")}</div>
                        <div>{x.info.avgRating} stars</div>
                        <div>{x.info.areaName}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;