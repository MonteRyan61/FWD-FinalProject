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
                                {"ingredients":"3 cups chopped cooked chicken"},
                                {"ingredients":"2 cans (10.5 oz each) condensed cream of chicken soup"},
                                {"ingredients":"2 cups shredded Cheddar cheese (8 oz)"},
                                {"ingredients":"3 cups of Progresso plain panko crispy bread crumbs"},
                                {"ingredients":"6 tablespoons butter, melted"},
                                {"image":"Images/ChickenCasserole573x318.png"}],
                                // 1
                                [{"name":"Chicken Parmesan"},
                                {"ingredients":"5 skinless, boneless chicken breast halves"},
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
                                //3 
                                [{"name":"Bacon Breakfast Pizza"},
                                {"ingredients":"1 tube (13.8 ounces) refrigerated pizza crust"},
                                {"ingredients":"2 tablespoons olive oil, divided"},
                                {"ingredients":"6 large eggs"},
                                {"ingredients":"2 tablespoons water"},
                                {"ingredients":"1 package (3 ounces) bacon bits"},
                                {"ingredients":"1 cup shredded Monterey Jack cheese"},
                                {"ingredients":"1 cup shredded cheddar cheese"},
                                {"image":"Images/BaconPizza.jpg"}],
                                //4 
                                [{"name":"Chicken Provolone"},
                                {"ingredients":"4 boneless skinless chicken breast halves (4 ounces each)"},
                                {"ingredients":"1/4 teaspoon pepper"},
                                {"ingredients":"8 fresh basil leaves"},
                                {"ingredients":"4 thin slices prosciutto or deli ham"},
                                {"ingredients":"4 slices provolone cheese"},
                                {"image":"Images/ChickenProv.jpg"}],
                                //5 
                                [{"name":"Mac & Cheese"},
                                {"ingredients":"2 cups uncooked pasta (about 8 ounces), such as elbow macaroni, cavatappi or shells"},
                                {"ingredients":"2 tablespoons butter"},
                                {"ingredients":"2 tablespoons all-purpose flour"},
                                {"ingredients":"1-1/2 cups half-and-half cream"},
                                {"ingredients":"3/4 pound process cheese (Velveeta), cubed"},
                                {"ingredients":"Optional toppings: Fresh arugula, halved cherry tomatoes and coarsely ground pepper"},
                                {"image":"Images/Mac&Cheese.jpg"}],
                                //6
                                [{"name":"Salsa Steak Garlic Toast"},
                                {"ingredients":"4 slices frozen garlic Texas toast"},
                                {"ingredients":"1 tablespoon olive oil"},
                                {"ingredients":"1 beef top sirloin steak (1 pound), thinly sliced"},
                                {"image":"Images/SalsaSteak.jpg"}],
                                //7
                                [{"name":"Waffle-Iron Pizzas"},
                                {"ingredients":"1 package (16.3 ounces) large refrigerated buttermilk biscuits"},
                                {"ingredients":"1 cup shredded part-skim mozzarella cheese"},
                                {"ingredients":"24 slices turkey pepperoni (about 1-1/2 ounces)"},
                                {"ingredients":"2 ready-to-serve fully cooked bacon strips, chopped"},
                                {"ingredients":"Pizza sauce, warmed"},
                                {"image":"Images/WaffleIronPizza.jpg"}],
                                //8
                                [{"name":"Carolina-Style Vinegar BBQ Chicken"},
                                {"ingredients":"2 cups water"},
                                {"ingredients":"1 cup white vinegar"},
                                {"ingredients":"1/4 cup sugar"},
                                {"ingredients":"1 tablespoon reduced-sodium chicken base"},
                                {"ingredients":"1 teaspoon crushed red pepper flakes"},
                                {"ingredients":"1-1/2 pounds boneless skinless chicken breasts"},
                                {"ingredients":"6 whole wheat hamburger buns, split, optional"},
                                {"image":"Images/BBQChicken.jpg"}],
                                

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