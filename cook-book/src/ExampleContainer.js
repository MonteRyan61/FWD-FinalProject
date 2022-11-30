import React, {useState} from "react";
import './MainContainer.css';
import CookingTitles from "./CookingTitles";
import Ingredents from "./ingredents";
import Search from "./Search";


///
const ExampleContainer = () => { 

const [toggle,setToggle]= useState(true)

return(
  
    <div>
        <button onClick={()=> setToggle(!toggle)} className="btn btn-primary mb-5">Toggle State</button>
      
      {!toggle &&(

        <Ingredents></Ingredents>
      )}
      {toggle &&(
        <Search></Search>
       )}

      {toggle && (
        <CookingTitles></CookingTitles>
       )}
        </div>
)}
export default ExampleContainer;