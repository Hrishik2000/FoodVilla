import { useState } from "react";

const Section = ({name,data})=>{
    // STATE IS Managed by child only & here no sibling could update each others state
    // hence auto collapsable accordian cant be made like this(one user open one accordion then another accordiaon will close automaticaly)
    const [isActive , useIsActive] =useState(false);
    return(<>
        <div className="border border-black">
            <h1>{name}</h1>
            {/* toggel between show or hide button */}
            { isActive ? <button onClick={()=>{useIsActive(false)}} className="bg-black text-white p-1 rounded-md  border border-black">hide</button> :
                        <button onClick={()=>{useIsActive(true)}} className="bg-black text-white p-1 rounded-md border border-black">show</button>}
            {/* p tag will only be rendered when isActive is true */}
            { isActive && <p>{data}</p> }
        </div>
    </>)      
}

//!LIFTING STATE UP EXAMPLE
    //here simlings state(isVisible, useIsActive) is controlled by Parent of all siblings
const Section2 = ({name,data, isVisible, useIsActive})=>{
   
    return(<>
        <div className="border border-black">
            <h1>{name}</h1>
            {/* toggel between show or hide button */}
            { isVisible ? <button onClick={()=>{useIsActive(false)}} className="bg-black text-white p-1 rounded-md  border border-black">hide</button> :
                        <button onClick={()=>{useIsActive(true)}} className="bg-black text-white p-1 rounded-md border border-black">show</button>}
            {/* p tag will only be rendered when isActive is true */}

            { isVisible && <p>{data}</p> }
            
        </div>
    </>)      
}

const InstaMart = ()=>{
    
     // state for auto accordion style
    //  these states are passed as props to childern
    const [section2config , setsection2config] = useState({
        showAbout : false,
        showProfile : false,
        showCarrier: false
    });
    return(
        
        <>

        <h1>"Instamart Component"</h1>
        <h2>"Having 100's Comonents Inside"</h2>

        {/* Normal accordion */}
       <div className="border border-black p-4 m-2">
        <h1>NORMAL ACCORDION STYLE</h1>
       <Section name = "Profile Instamart" data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum cum explicabo officiis enim animi rerum, dolores quos laborum, architecto minima sequi. Rerum, voluptate quis nihil aliquam asperiores necessitatibus dolorum."/>
        <Section name = "About Instamart" data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum cum explicabo officiis enim animi rerum, dolores quos laborum, architecto minima sequi. Rerum, voluptate quis nihil aliquam asperiores necessitatibus dolorum."/>
        <Section name = "Carrier Instamart" data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum cum explicabo officiis enim animi rerum, dolores quos laborum, architecto minima sequi. Rerum, voluptate quis nihil aliquam asperiores necessitatibus dolorum."/>
       </div>


        {/*Auto closing accordion  */}
       <div className="border border-black p-4 m-2">
        <h1>CUSTOMIZABLE/AUTO CLOSING ACCORDION STYLE</h1>
        <Section2 name = "Profile Instamart2" data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum cum explicabo officiis enim animi rerum, dolores quos laborum, architecto minima sequi. Rerum, voluptate quis nihil aliquam asperiores necessitatibus dolorum."
        isVisible={section2config.showProfile} 

        //! It's bad code 
        // here er require to check weather which section should be visible  & remaining should be false but we are  managing states for all
        // NOT MAINTANABLE CODE
        // NOT EXTENDABLE CODE
        // in consistant code (if 1 section need to add then we need to change data all sections places)
        useIsActive={()=>{
            setsection2config({
                showProfile : true,
                showAbout : false,
                showCarrier: false
            })
           }}/>
        <Section2 name = "About Instamart2" data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum cum explicabo officiis enim animi rerum, dolores quos laborum, architecto minima sequi. Rerum, voluptate quis nihil aliquam asperiores necessitatibus dolorum." 
        isVisible={section2config.showAbout} 
        useIsActive={()=>{
            setsection2config({
                
                showProfile : false,
                showAbout : true,
                showCarrier: false
            })
           }}/>
        <Section2 name = "Carrier Instamart2" data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum cum explicabo officiis enim animi rerum, dolores quos laborum, architecto minima sequi. Rerum, voluptate quis nihil aliquam asperiores necessitatibus dolorum." 
        isVisible={section2config.showCarrier}
        useIsActive={()=>{
            setsection2config({
               
                showProfile : false,
                showAbout : false,
                showCarrier: true
            })
           }}/>
       </div>
        
        </>)
}

export default InstaMart;