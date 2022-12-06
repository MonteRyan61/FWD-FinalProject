
import './CookingTitles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
export default class CookingTitles extends React.Component {
constructor() {
        super();
        this.state = {
            toggle: true,
        }
        this.data = {
          recipeTitlesAndImages : [
            {"name":"Chicken Casserole", "img":"Images/ChickenCasserole573x318.png", "id": "0"},
            {"name":"Chicken Parmesan", "img":"Images/ChickenParm573x322.png", "id": "1"},
            {"name":"Chicken Pie", "img":"Images/chickenpie.jpg", "id": "2"},
            {"name":"Bacon Breakfast Pizza", "img":"Images/BaconPizza.jpg", "id": "3"},
            {"name":"Chicken Provolone", "img":"Images/ChickenProv.jpg", "id": "4"},
            {"name":"Mac & Cheese", "img":"Images/Mac&Cheese.jpg", "id": "5"},
            {"name":"Salsa Steak Garlic Toast", "img":"Images/SalsaSteak.jpg", "id": "6"},
            {"name":"Waffle-Iron Pizzas", "img":"Images/WaffleIronPizza.jpg", "id": "7"},
            {"name":"Carolina-Style Vinegar BBQ Chicken", "img":"Images/BBQChicken.jpg", "id": "8"},
            ]

        }

        this.setToggle = this.setToggle.bind(this);
    }
  // sets a toggle and takes the id which is 0,1,2,3,4,5...8
  setToggle(id){
      console.log(this.state.toggle)
      console.log(id)
      // If the state is true then toggle make the state when toggled false, then when this setstate is toggled again (else statement becomes true)
      if (this.state.toggle === true) {
        this.setState({
          toggle: false,
        })
        // toggle false and makes parent false 
        // toggle false and shows id of CurrentRecipecallback
        this.props.parentCallback(false);
        this.props.currRecipeCallback(id);
        // 
    } else {
        this.setState(
            {
              toggle: true,
            }
        )
        this.props.parentCallback(true);
      }
    }

    render() {
        return (
            <div>
              <div className="Recipe">
                {/* Title and images are calling the item (which is the id) */}
                {this.data.recipeTitlesAndImages.map((item) =>{
                  return (<div className="recipeItem" id={item.id}>
                      <h1 className="recipeTitle">{item.name}</h1>
                      <button className="btn btn-link" onClick={() => this.setToggle(item.id)}>
                        <img className="recipeImg" src= {item.img} alt="test"/>
                      </button>
                      </div>)
                })}
              </div>
            </div>
            
        )
    }
}


// //{/* Overlay of Text */}
// <div className='ImgOverlay'>
// <div className='recipeItem' id={item.id}>
// {/* Title Name */}
// </div>
// </div>