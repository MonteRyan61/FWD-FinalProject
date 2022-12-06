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
                                {"steps":"Heat oven to 425°F. Prepare pie crusts as directed on box for Two-Crust Pie using 9-inch glass pie pan."},
                                {"steps":"In 2-quart saucepan, melt butter over medium heat. Add onion; cook 2 minutes, stirring frequently, until tender. Stir in flour, salt and pepper until well blended. Gradually stir in broth and milk, cooking and stirring until bubbly and thickened."},
                                {"steps":"Stir in chicken and mixed vegetables. Remove from heat. Spoon chicken mixture into crust-lined pan. Top with second crust; seal edge and flute. Cut slits in several places in top crust."},
                                {"steps":"Bake 30 to 40 minutes or until crust is golden brown. During last 15 to 20 minutes of baking, cover crust edge with strips of foil to prevent excessive browning. Let stand 5 minutes before serving."},
                                {"image":"Images/ChickenCasserole573x318.png"}],
                                // 1
                                [{"name":"Chicken Parmesan"},
                                {"ingredients":"5 skinless, boneless chicken breast halves"},
                                {"ingredients":"1 (10.5 ounce) can condensed cream of chicken soup"},
                                {"ingredients":"1 cup sour cream"},
                                {"ingredients":"¼ cup chopped mushrooms"},
                                {"ingredients":"¼ cup chopped onion"},
                                {"ingredients":"32 buttery round crackers, crumbled"},
                                {"steps": " Preheat an oven to 450 degrees F (230 degrees C)."},
                                {"steps": " Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper."},
                                {"steps": "Beat eggs in a shallow bowl and set aside."},
                                {"steps": "Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside."},
                                {"steps": "Place flour in a sifter or strainer; sprinkle over chicken breasts, evenly coating both sides."},
                                {"steps": "Dip a flour-coated chicken breast in beaten eggs. Transfer breast to the bread crumb mixture, pressing crumbs into both sides. Repeat for each breast. Let chicken rest for 10 to 15 minutes."},
                                {"steps": "Heat 1/2 inch olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken in the hot oil until golden, about 2 minutes per side. The chicken will finish cooking in the oven."},
                                {"steps": "Transfer chicken to a baking dish. Top each breast with 2 tablespoons tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle remaining Parmesan over top and drizzle each with 1/2 teaspoon olive oil."},
                                {"steps": "Bake in the preheated oven until cheese is browned and bubbly and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C)."},
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
            {console.log("Hi" + this.props.currRecipe)}
            {/* Load the name and image for the respective recipe */}
            <button onClick={() => this.setToggle()}>Back</button>
            {/* Toggles the setToggle State with the back button, parent Callback(false) else set to true */}
            {/* Takes Recipe Key and takes the currRecipe toggle */}
            {/* Item Is all the different items 1,2,3,4(the id's) */}
            {/* idx is the index of all the different ingredents */}
            {this.data.RecipeKey[this.props.currRecipe].map((item, idx) => {
                if(idx === 0)
                {
                    return (<h2 className="TitleRecipe"><button className="backButton btn btn-outline-secondary" onClick={() => this.setToggle()}>Back</button> {item.name}</h2>)
                }
                // if item.image is undefined, 
                else if(item.image !== undefined){
                    return (<img className="recipeImg" src = {item.image} alt={item.image}/>)
                }
            })}
            {/* Load the respective recipe ingredients */}
            <h2 className="subHeader">Ingredients</h2>
            <ul class="list-group">
            {this.data.RecipeKey[this.props.currRecipe].map((data, idx) => {
                // Need to skip over the name and image in the list as the ingredients will be blank there 
                const ingredient = data.ingredients
                if(ingredient !== undefined)
                {
                    return (<li className="list-group-item" key={idx}>{ingredient}</li>)
                }
            })}
            </ul>
            </div>
        );
    }
}