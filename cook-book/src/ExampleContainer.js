import React, {useState} from "react";
import CookingTitles from "./CookingTitles";
import Ingredents from "./ingredents";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";
import './MainContainer.css';
///
const ExampleContainer = () => { 

const [toggle,setToggle]= useState(true)

return(
    <div className="Main-Container">
      <h1 className="Main-header">College Cook</h1>
        {/* <img onClick={()=> setToggle(!toggle)} className="btn btn-primary mb-5">Toggle State</img> */}
      
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