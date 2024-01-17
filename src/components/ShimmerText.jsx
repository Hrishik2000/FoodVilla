// shimmer text is some Sturcture of UI which is rendered during the API Call is executing & we want to show some loading screen till the data loads
//this improves user experience 
//YOutube is following this "it shows the structure of Cards  of Youtube untill real card is not loaded on screen
// Amazon is not following this


export default function ShimmerText(){

    return (
        <>
        <div className="Restorant-list">
        {Array(10).fill("").map((element,index)=>{
                 return <div className="Shimmer-Card" key = {index}></div>
        })}
        </div>
        
        </>
        
    )
}