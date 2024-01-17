import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {GET_IMAGE_URL} from "../constants"
import ShimmerText from "./ShimmerText"

const RestorantMenue = () => {

    // this state will change as we click on another restorent menue will update & initially  empty array is passed to it
    const [SpecificResorantMenue , setSpecificResorantMenue]  = useState(null)
  

    const {id} = useParams();

    useEffect(()=>{
        FetchMenue();
        console.log("called")
    },[id]);

console.log("rendered")
    async function FetchMenue(){
         const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.684889949661027&lng=77.2995937988162&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
         try {
          const response = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.684889949661027&lng=77.2995937988162&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
          );
          const json = await response.json();
          console.log(json.data.cards);
    
          setSpecificResorantMenue(json.data);
        } catch (error) {
          console.error("Error fetching menu:", error);
          setSpecificResorantMenue({}); // Set an empty object in case of an error
        }
    }



  return (!SpecificResorantMenue) ? <ShimmerText/> :(
    <>
    <div className="Rest-page">
     <div>{`RestorantMenue id: ${id}`}</div>
     <p>{SpecificResorantMenue?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name}</p>
     {/* <img src={GET_IMAGE_URL+SpecificResorantMenue?.cards[0]?.card?.info?.cloudinaryImageId} alt="img" /> */}
     <h3>address:</h3>
     <h3>Star Ratings</h3>
  <h1>Menue</h1>
  <ul>
      {SpecificResorantMenue.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((item)=>{
          return (
              <>
              <div className="Menue">
                <div className="Name=Price">
                <li>{item.card.info.name}</li>
                <h3>{Math.floor(item.card.info.defaultPrice / 100)}</h3>
                </div>
              
              <img src={GET_IMAGE_URL+item.card.info.imageId} alt="" />
              </div>

              
              
              </>
          )
      })}
    </ul>


    </div>
     
    </>
   
  )
}
export default RestorantMenue;

