import React, {useState} from "react";
import CookingTitles from "./CookingTitles";
import Ingredents from "./ingredents";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";
import './MainContainer.css';
///
const ExampleContainer = () => { 

const [toggle,setToggle]= useState(true);

const [data2, setData2] = useState('');

const childToParent = (childdata) => {
  setData2(childdata);
}

return(
    <div className="Main-Container">
      <h1 className="Main-header">College Cook</h1>
        <button onClick={()=> setToggle(!toggle)} className="btn btn-primary mb-5">Toggle State</button>
        <div>
      </div>
      {data2}
      {!toggle &&(
        <Ingredents test={data2}></Ingredents>
      )}
      {toggle &&(
        <Search></Search>
       )}
      {toggle && (
        <CookingTitles childToParent={childToParent}></CookingTitles>
       )}
    </div>
)}
export default ExampleContainer;