import React from "react";
import "./ingredents.css";
export default class form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            toggle : false
        }

// have to bind to class when you make a function 
        this.setToggle = this.setToggle.bind(this);
    }

// Sets toggle for the state in ingrednets. 
    setToggle(){
        // for constructor toggle
        if (this.state.toggle === true) {
            //main container toggle 
          this.props.parentCallback(false);
      } else {
          this.props.parentCallback(true);
        }
      }

    render() {
        return (
            <div className="Ingredients-Header"> 
            {/* Loads name of Recipe */}
            {/* Load the name and image for the respective recipe */}
            {/* Toggles the setToggle State with the back button, parent Callback(false) else set to true */}
            {/* Takes Recipe Key and takes the currRecipe toggle */}
            {/* Item Is all the different items 1,2,3,4(the id's) */}
            {/* idx is the index of all the different ingredents */}
            {console.log(this.props.searchRecipe[this.props.index])}
            <h2 className="TitleRecipe"><button className="backButton btn btn-outline-secondary" onClick={() => this.setToggle()}>Back</button> <br></br> {this.props.searchRecipe[this.props.index]}</h2>
            <img className="ingredientsRecipeImg" src = {this.props.searchImg[this.props.index]} alt={this.props.searchRecipe[this.props.index]}/>
            
            {/* Load the respective recipe ingredients */}
            <h2 className="subHeader">Ingredients</h2>
            <ul className="list-group">
            {/* This is no longer a list so we need to parse it again to get the list form back better than dealing with object */}
            {this.props.listOfIngredients[this.props.index].split("*").map((data, idx) => {
                // Need to skip over the name and image in the list as the ingredients will be blank there 
                //Must parse the comma on the front if not the first item alot of 
                let ingredient = data
                if(idx !== 0)
                {
                    ingredient = (ingredient.substring(1, ingredient.length))
                }
                //Have a empty list item being output at the end
                if(ingredient === "")
                {return("")}
                return (<li className="list-group-item" key={idx}><input class="form-check-input me-1" type="checkbox" value=""/> {ingredient}</li>)
            })}
            </ul>
            {console.log("Source List: " + this.props.sourceList)}
            <a class="btn btn-outline-secondary" id="btn-outline-secondary-link" target="_blank" rel="noreferrer" href={this.props.sourceList[this.props.index]} role="button"><div className="buttonText">Source</div></a>
            </div>
        );
    }
}