// shimmer text is some Sturcture of UI which is rendered during the API Call is executing & we want to show some loading screen till the data loads
//this improves user experience 
//YOutube is following this "it shows the structure of Cards  of Youtube untill real card is not loaded on screen
// Amazon is not following this


export default function ShimmerText(){

    return (
        <>
        <h1>Shimmer UI....</h1>
        <h1>Loading.....</h1>
        </>
        
    )
}