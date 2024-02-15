import ResContainer from "./ResContainer";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";


const Body = () =>{

    //Local State Variable
    const[listofRestaurants, setlistofRestaurants] = useState(resList);

    useEffect(()=>{
      fetchData();
    }, []);

    const fetchData = async () =>{
      const data = await fetch(
"https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.095468426005787&lng=79.10003162920476&carousel=true&third_party_vendor=1"
      );
      const json = await data.json();
      console.log(json);
      setlistofRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
   

    return listofRestaurants.length === 0 ? (<Shimmer/>) : (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() =>
          {
            const filteredList = listofRestaurants.filter(
            (res) => res.info.avgRating >= 4
            );
            setlistofRestaurants(filteredList);
          }
          }>Filter
                
          </button>
        </div>
        <div className="res-container">
          {
            listofRestaurants.map((restaurant) =>(
                <ResContainer key={restaurant.info.id} resData={restaurant}/>
            ))
          }
        </div>
      </div>
    )
  };
  export default Body;