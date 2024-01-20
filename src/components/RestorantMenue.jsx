import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {GET_IMAGE_URL} from "../constants"
import ShimmerText from "./ShimmerText"
import useFetchMenue from "../utils/useFetchMenue";

const RestorantMenue = () => {

    const {id} = useParams();

    const SpecificResorantMenue = useFetchMenue(id);
    console.log(SpecificResorantMenue);

  return (!SpecificResorantMenue) ? <ShimmerText/> :(
    <div className="items-center ">
      <div className="Rest-page items-center ">
        <div >{`RestorantMenue id: ${id}`}</div>
        {/* <p className="font-bold">{SpecificResorantMenue?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name}</p> */}

        {/* [2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info */}

        {/* // [2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name */}

        {/* <img src={GET_IMAGE_URL+SpecificResorantMenue?.cards[0]?.card?.info?.cloudinaryImageId} alt="img" /> */}
        <h3>Area:{SpecificResorantMenue?.cards[0]?.card?.card?.info?.areaName}</h3>
 
        <h3>Star Ratings:{SpecificResorantMenue?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.ratings?.aggregatedRating?.rating}</h3>
        <h1 className="font-bold">Menue</h1>
        <ul>
            {SpecificResorantMenue?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item)=>{
              console.log(item);
              return (
                <div className="">
                  <div className="Menue h-[250px] w-48 bg-[#E4AE74] m-2 ">
                    <img className="h-44 w-44 rounded-xl p-2 mx-auto block " src={GET_IMAGE_URL+item?.card?.info?.imageId} alt="" />

                    <div className="Price text-center">
                    <li>{item?.card?.info?.name}</li>
                    {/* {console.log(item?.card?.info?.price)} */}
                    {/* <h3>{Math.floor(item?.card?.info?.defaultPrice/ 100)}</h3> */}
                    <h3>
                        {item?.card?.info?.defaultPrice
                        ? Math.floor(item.card.info.defaultPrice / 100)
                          : Math.floor(item.card.info.price / 100)}
                        </h3>
                    </div>
                  </div>
                </div>
                    )
                })}
        </ul>
      </div>
    </div>
   
  )
}
export default RestorantMenue;

