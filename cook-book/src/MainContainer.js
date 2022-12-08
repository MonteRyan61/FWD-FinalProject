import React from "react";
import './MainContainer.css';
import Search from "./Search";
import CookingTitles from "./CookingTitles";
import Ingredents from "./ingredents";
import CenterMain from "./CenterMain";


export default class MainContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Header: 'College Cook',
            toggle: true,
            showing: "",
            searchArray: [],
            searchedYet: false,

            // Nothing will be here until a request is made
            listRecipes: [],
            listImages: [],
            listIngredients: [],
            listSources: [],
            currRecipe: "",
        
        };
    }

    // Creates a toggle for childData from CookingTitles
    handleToggleCallback = (childData) =>{
        this.setState({toggle: childData})
    }

    // Creates a toggle for Current Recipe from CookingTitles
    handleCurrRecipeCallback = (childData1) =>{
        // takes in current recipe as a parameter for the toggle
        this.setState({currRecipe: childData1})
    }

    handleShowing = (searchedForInSearch) =>{
        // takes in current recipe as a parameter for the toggle
        this.setState({
            showing: searchedForInSearch,
            searchedYet: true,
        })
    }

    // gets the array of recipes from search which does the api request
    getSearchTitles = (searchArray) =>{
        // Gets the list of recipes that was search for
        //need to copy this over in a different way grrrr
        this.setState({listRecipes:  []})
        let buildListOfNames = []
        let buildListOfImg = []
        let buildListOfIngredient = []
        let buildListOfSources = []
        for(let i = 0; i < searchArray.length; i++)
        {
            buildListOfNames.push(searchArray[i].name)
            buildListOfImg.push(searchArray[i].img)
            buildListOfIngredient.push(searchArray[i].ingredients)
            buildListOfSources.push(searchArray[i].source)
        }
        this.setState({
            listRecipes: buildListOfNames,
            listImages: buildListOfImg,
            listIngredients: buildListOfIngredient,
            listSources: buildListOfSources,
        })
    }


    

    render(){
        return(

            <div className="Main-Container">
                {this.state.showing === "" && <CenterMain></CenterMain>}
                <h1 className="Main-header">{this.state.Header}</h1>
                {/* The main toggle here will be set in the cooking titles component if one is clicked it will pass which was clicked and change the state here for a reload to hide the search and cooking titles and show ingredients. */}
                {this.state.toggle && <Search showing = {this.handleShowing} searchTitleCallback = {this.getSearchTitles} lastSearch = {this.state.showing} searchedYet = {this.state.searchedYet} ></Search>}


                {this.state.searchedYet && this.state.toggle && <CookingTitles 
                        searchRecipe = {this.state.listRecipes} 
                        searchImg = {this.state.listImages} 
                        currRecipeCallback = {this.handleCurrRecipeCallback} 
                        parentCallback = {this.handleToggleCallback}>
                </CookingTitles>}
                
                
                {!this.state.toggle && <Ingredents index = {this.state.currRecipe} 
                        sourceList = {this.state.listSources} 
                        searchImg = {this.state.listImages} 
                        searchRecipe = {this.state.listRecipes} 
                        listOfIngredients = {this.state.listIngredients} 
                        parentCallback = {this.handleToggleCallback}>
                </Ingredents>}
            </div>
        );
    }
}