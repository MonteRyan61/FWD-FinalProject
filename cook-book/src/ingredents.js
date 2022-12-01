import React from "react";
export default class form extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
                RecipeName: '',
                Image:'',
                ingred:'',
                ChickenParmIngredients : [{"ingredients":"4 skinless, boneless chicken breast halves"},
                            {"ingredients":"1 (10.5 ounce) can condensed cream of chicken soup"},
                            {"ingredients":"1 cup sour cream"},
                            {"ingredients":"¼ cup chopped mushrooms"},
                            {"ingredients":"¼ cup chopped onion"},
                            {"ingredients":"32 buttery round crackers, crumbled"},
                            {"image":"Images/ChickenParm573x322.png"}],
        };
        // changeRecipe = () => {
        //     this.setState({RecipeName: "Chicken Cassorle"});

        //   }
    }
    render() {
        return (
            <div className="Ingredients-Header"> 
            {/* Load the image for the respective recipe */}
            {this.state.ChickenParmIngredients.map(function(item){
                return (<img src = {item.image} alt={item.image} />)
            })}
            {/* Load the respective recipe ingredients */}
            {this.state.ChickenParmIngredients.map(function(d, idx){
               return (<li key={idx}>{d.ingredients}</li>)
             })}
            </div>
        );
    }
}