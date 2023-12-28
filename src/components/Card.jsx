import {GET_IMAGE_URL} from "../constants"
export default function Card(
  // object describing
  {cloudinaryImageId,name,
    avgRating,cuisines,
    locality,areaName}
  ) 
  {
    //to enusre card not overflow due to more data
    const itemsToShow = cuisines.slice(0, 4);

    return (
      <>
      <div className="card">
        <img src={GET_IMAGE_URL+cloudinaryImageId} alt="" />
        <h2>{name}</h2>
        <h3>{avgRating} stars</h3>
        <h3>{itemsToShow.join(", ")}</h3>
        <h4>{locality}, {areaName}</h4>
      </div>
      </>
    )
  }