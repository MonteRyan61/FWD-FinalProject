import React from "react";
import "./ingredents.css";
export default class form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            toggle : false
        }

        this.data = {   RecipeKey : [
                                // 0
                                [{"name":"Chicken Casserole"},
                                {"ingredients":"4 skinless, boneless chicken breast halves"},
                                {"ingredients":"1 (10.5 ounce) can condensed cream of chicken soup"},
                                {"ingredients":"1 cup sour cream"},
                                {"ingredients":"¼ cup chopped mushrooms"},
                                {"ingredients":"¼ cup chopped onion"},
                                {"ingredients":"32 buttery round crackers, crumbled"},
                                {"image":"Images/ChickenCasserole573x318.png"}],
                                // 1
                                [{"name":"Chicken Parmesan"},
                                {"ingredients":"4 skinless, boneless chicken breast halves"},
                                {"ingredients":"1 (10.5 ounce) can condensed cream of chicken soup"},
                                {"ingredients":"1 cup sour cream"},
                                {"ingredients":"¼ cup chopped mushrooms"},
                                {"ingredients":"¼ cup chopped onion"},
                                {"ingredients":"32 buttery round crackers, crumbled"},
                                {"image":"Images/ChickenParm573x322.png"}],
                                // 2
                                [{"name":"Chicken Pie"},
                                {"ingredients":"4 skinless, boneless chicken breast halves"},
                                {"ingredients":"1 (10.5 ounce) can condensed cream of chicken soup"},
                                {"ingredients":"1 cup sour cream"},
                                {"ingredients":"¼ cup chopped mushrooms"},
                                {"ingredients":"¼ cup chopped onion"},
                                {"ingredients":"32 buttery round crackers, crumbled"},
                                {"image":"Images/chickenpie.jpg"}],

                            ]
                    }   


        this.setToggle = this.setToggle.bind(this);
    }


    setToggle(){
        if (this.state.toggle === true) {
          this.props.parentCallback(false);
      } else {
          this.props.parentCallback(true);
        }
      }

    render() {
        return (
            <div className="Ingredients-Header"> 
            {console.log("Hi" + this.props.currRecipe)}
            {/* Load the name and image for the respective recipe */}
            <button onClick={() => this.setToggle()}>Back</button>
            {this.data.RecipeKey[this.props.currRecipe].map((item, idx) => {
                if(idx === 0)
                {
                    return (<h2 className="TitleRecipe">{item.name}</h2>)
                }
                else{
                    return (<img className="recipeImg" src = {item.image} alt={item.image}/>)
                }
            })}
            {/* Load the respective recipe ingredients */}
            {this.data.RecipeKey[this.props.currRecipe].map((data, idx) => {
                // Need to skip over the name and image in the list as the ingredients will be blank there 
                const ingredient = data.ingredients
                if(ingredient !== undefined)
                {
                    return (<li key={idx}>{ingredient}</li>)
                }
            })}
            </div>
        );
    }
}