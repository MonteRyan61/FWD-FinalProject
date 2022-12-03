import React, {useState} from "react";
import './CookingTitles.css';
import Ingredents from "./ingredents";
import Search from "./Search";


export default class CookingTitles extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            overviewTitles : [
              {"name":"Chicken Casserole", "img":"Images/ChickenCasserole573x318.png", "id": "ChickenParIngredients"},
              {"name":"Chicken Parmesan1", "img":"Images/ChickenParm573x322.png", "id": "Parmesan1"},
              {"name":"Chicken Pie", "img":"Images/chickenpie.jpg", "id": "ChickenPie"},
              {"name":"Chicken Parmesan3", "img":"Images/ChickenParm573x322.png", "id": "Parmesan4"},
              {"name":"Chicken Parmesan4", "img":"Images/ChickenParm573x322.png", "id": "Parmesan5"},
              {"name":"Chicken Parmesan5", "img":"Images/ChickenParm573x322.png", "id": "Parmesan6"},
              {"name":"Chicken Parmesan6", "img":"Images/ChickenParm573x322.png", "id": "Parmesan7"},
              {"name":"Chicken Parmesan7", "img":"Images/ChickenParm573x322.png", "id": "Parmesan8"},
              {"name":"Chicken Parmesan8", "img":"Images/ChickenParm573x322.png", "id": "Parmesan9"},],
              data : "ChickenParmIngredients"
        };   
    }

    //https://developer.edamam.com/edamam-recipe-api
    render() {
        return (
          <div className="Recipe">
            <button primary onClick={() => this.props.childToParent(this.state.data)}>Click Child</button>
            <h1>{this.props.parentToChild}</h1>
          {this.state.overviewTitles.map(function(item){
            return (<div className="recipeItem" id={item.id}>
                <h1 className="recipeTitle">{item.name}</h1> 
                <img className="recipeImg" src = {item.img} alt={item.name} />
                </div>)
           })}
          </div>
        );
    }
}
