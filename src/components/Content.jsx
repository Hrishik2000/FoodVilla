import { useEffect, useState } from "react";
import Card from "./Card.jsx"
//import {RestorantsList} from "../constants.jsx"
import ShimmerText from "./ShimmerText.jsx";


//!Note

  //!way 1 explicite return from arrow function
  function filterData(SearchData,AllRestorants){
    const filteredData = AllRestorants.filter((Restorant)=>{
      return Restorant?.info?.name.toLowerCase().includes(SearchData.toLowerCase())
  });

    return filteredData;
}
    
    //!way 2 implicit return from arrow function (remove the curly braces)
    // function filterData(SearchData,Restorants){
    //   const filteredData = Restorants.filter((Restorant)=>
    //     Restorant?.info?.name.toLowerCase().includes(SearchData.toLowerCase())
    // );
  
    //   return filteredData;
    //}
  
    
  
  
  
function Content() {
  
  // search functionality
  const [SearchData,setSearchData] = useState();
  //Updated list after search
  const [AllRestorants,setAllRestorents] = useState([])
  const [FilteredRestorents,setFilteredRestorents] = useState([])
  
  //[] -> no depency means useEffect will be called only once when the site loads
  useEffect(()=>{
    FetchData();
  },[])

  async function FetchData(){
    try{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.684889949661027&lng=77.2995937988162&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      if(!data.ok){
        throw new Error( `Failed to Fetch data: ${data.status}`)
      }
      const json = await data.json();
      //console.log(json);

       // optional chaining
      setAllRestorents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestorents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    catch(error){
      console.error("Error Fetchning Data", error.message);
    }
    
    

   
  }
  //restrict the rendering of AllRestorents is not there
  if(!AllRestorants) return null;

  
  //conditional rendering
  return AllRestorants.length == 0 ? <ShimmerText/>: (

    <>
    
    <div className="Search-fn">
    <input type="text" placeholder="search"
    value={SearchData} onChange={(e)=>
      {
        setSearchData(e.target.value);
        
      }}/>

    <button onClick={()=>{
         const data = filterData(SearchData,AllRestorants);
        //  console.log(RestorantsList)
        //  console.log(data)
        
         setFilteredRestorents(data);
    }
     
    }>Search</button>
    </div>
    
    {/* {console.log(AllRestorants)}
    {console.log(FilteredRestorents)} */}
    
    {/* render cards */}
    <div className="Restorant-list">
    {  
   (FilteredRestorents.length==0) ? <h1>Meal Not Found</h1> : FilteredRestorents.map((item)=>{
      
       return <Card {...item.info} key ={item.info.id}/>
    })
    }
    </div>
    </>
  )
}

export default Content;