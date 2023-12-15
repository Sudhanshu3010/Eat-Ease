import CDN_URL from "../utils/constants";

const ResContainer = (props) =>{
    const {resData}= props;
    const {cloudinaryImageId, areaName, cuisines, costForTwo, avgRating} = resData?.info;
    return(
      <div className="res-card">
          <img className="res-img"
          alt="restaurant image"
          src={CDN_URL+cloudinaryImageId}/>
          <h2 style={{margin: "5px",}}>{resData.info.name}</h2>
          <h3>{areaName}</h3>
          <h3 style={{margin: "5px",}}>{cuisines.join(", ")}</h3>
          <h3 >{costForTwo}</h3>
          <h3>{avgRating+" "}<i className="fa fa-star"></i></h3>
          
      </div>
    )
  }
  export default ResContainer;