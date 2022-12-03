import React, {useState} from "react";
import './CookingTitles.css';
import Ingredents from "./ingredents";
import Search from "./Search";


export default class CookingTitles extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            Header: 'College Cook',
            Toggle: true,
        };
        
    }

    setToggle() {
      this.setState((Toggle) => ({toggle: !Toggle.toggle}));
      <Ingredents></Ingredents>
  }
  
    // setToggle =() => {
    //   if (this.state.Toggle== true){
    //     <Ingredents></Ingredents>
    //   }
    //   else{
    //     <CookingTitles></CookingTitles>
        
    //   }
    // }


   // https://www.youtube.com/watch?v=XZZ9DaG4ZvE  (hover for text)

    //https://developer.edamam.com/edamam-recipe-api
    //https://www.youtube.com/watch?v=U9T6YkEDkMo
    render() {
        const data =[
        {"name":"Chicken Casserole", "img":"Images/ChickenCasserole573x318.png", "id": "1"},
        {"name":"Chicken Parmesan1", "img":"Images/ChickenParm573x322.png", "id": "2"},
        {"name":"Chicken Pie", "img":"Images/chickenpie.jpg", "id": "ChickenPie"},
        {"name":"Chicken Parmesan3", "img":"Images/ChickenParm573x322.png", "id": "3"},
        {"name":"Chicken Parmesan4", "img":"Images/ChickenParm573x322.png", "id": "4"},
        {"name":"Chicken Parmesan5", "img":"Images/ChickenParm573x322.png", "id": "5"},
        {"name":"Chicken Parmesan6", "img":"Images/ChickenParm573x322.png", "id": "Parmesan7"},
        {"name":"Chicken Parmesan7", "img":"Images/ChickenParm573x322.png", "id": "Parmesan8"},
        {"name":"Chicken Parmesan8", "img":"Images/ChickenParm573x322.png", "id": "Parmesan9"},
        ];


        // const Recipe1 = () => { 

        //     const [toggle,setToggle]= useState(true)
        // return(
  
        //     <div>

        //         {/* <img
        //     className="active"
        //     src={Active}
        //     alt="yellow star"
        //     onClick={() => handleChangeActive()}
        //   /> */}
              
        //       {!toggle &&(
        //         <Ingredents></Ingredents>
        //       )}
        //       {toggle &&(
        //         <Search></Search>
        //        )}
        
        //       {toggle && (
        //         <CookingTitles></CookingTitles>
        //        )}
        //         </div>
        // )}
        return (
          

          <div className="Recipe">
            <button primary onClick={() => this.props.childToParent(this.state.data)}>Click Child</button>
            <h1>{this.props.parentToChild}</h1>
          {this.state.overviewTitles.map(function(item){
            return (<div className="recipeItem" id={item.id}>
                <h1 className="recipeTitle">{item.name}</h1> 
                {/* <img className="recipeImg" src = {item.img} alt={item.name} /> */}
                <button onClick={()=> this.setToggle(this.state.Toggle)}><img className="recipeImg" src= {item.img}/> </button>
                </div>) 
           })}
          </div>
        );
    }
}
