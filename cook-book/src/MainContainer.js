import React from "react";
import './MainContainer.css';
import Search from "./Search";
import CookingTitles from "./CookingTitles";
import Ingredents from "./ingredents";

export default class MainContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Header: 'College Cook',
            toggle: true,
            currRecipe: "",
        };
    }

    // Creates a toggle for childData
    handleToggleCallback = (childData) =>{
        this.setState({toggle: childData})
    }

    // Creates a toggle for Current Recipe 
    handleCurrRecipeCallback = (childData1) =>{
        console.log(childData1)
        // takes in current recipe as a parameter for the toggle
        this.setState({currRecipe: childData1})
    }

    

    render(){
        return(
        <div className="Main-Container">
            <h1 className="Main-header">College Cook</h1>
            {/* The main toggle here will be set in the cooking titles component if one is clicked it will pass which was clicked and change the state here for a reload to hide the search and cooking titles and show ingredients. */}
            {this.state.toggle && <Search></Search>}
            {this.state.toggle && <CookingTitles currRecipeCallback = {this.handleCurrRecipeCallback} parentCallback = {this.handleToggleCallback}></CookingTitles>}
            {!this.state.toggle && <Ingredents currRecipe = {this.state.currRecipe} parentCallback = {this.handleToggleCallback}></Ingredents>}
        </div>
        );
    }
}