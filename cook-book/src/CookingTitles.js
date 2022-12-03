
import './CookingTitles.css';
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
            {"name":"Chicken Parmesan1", "img":"Images/ChickenParm573x322.png", "id": "1"},
            {"name":"Chicken Pie", "img":"Images/chickenpie.jpg", "id": "2"},
            {"name":"Chicken Parmesan3", "img":"Images/ChickenParm573x322.png", "id": "3"},
            {"name":"Chicken Parmesan4", "img":"Images/ChickenParm573x322.png", "id": "4"},
            {"name":"Chicken Parmesan5", "img":"Images/ChickenParm573x322.png", "id": "5"},
            {"name":"Chicken Parmesan6", "img":"Images/ChickenParm573x322.png", "id": "6"},
            {"name":"Chicken Parmesan7", "img":"Images/ChickenParm573x322.png", "id": "7"},
            {"name":"Chicken Parmesan8", "img":"Images/ChickenParm573x322.png", "id": "8"},
            ]

        }

        this.setToggle = this.setToggle.bind(this);
    }
  
  setToggle(id){
      console.log(this.state.toggle)
      console.log(id)
      if (this.state.toggle === true) {
        this.setState({
          toggle: false,
        })
        this.props.parentCallback(false);
        this.props.currRecipeCallback(id);
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
                {this.data.recipeTitlesAndImages.map((item) =>{
                  return (<div className="recipeItem" id={item.id}>
                      <h1 className="recipeTitle">{item.name}</h1> 
                      <button onClick={() => this.setToggle(item.id)}><img className="recipeImg" src= {item.img} alt="test"/></button>
                      </div>)
                })}
              </div>
            </div>
            
        )
    }
}