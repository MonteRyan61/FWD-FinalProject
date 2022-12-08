
import './CookingTitles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
export default class CookingTitles extends React.Component {
constructor() {
        super();
        this.state = {
            toggle: true,
            hover: false,
            currentId: -1,
            recipeTitlesAndImages : []
        }

        this.setHover = this.setHover.bind(this);
        this.setToggle = this.setToggle.bind(this);
    }


  // sets a toggle and takes the id which is 0,1,2,3,4,5...8
  setToggle(id){
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

  setHover(statusOfHover, id){

    this.setState(
      {
        hover: statusOfHover,
        currentId: id
      }
    )
  }

    render() {
        
        return (
            <div>
              <div className="Recipe">
                {/* Title and images are calling the item (which is the id) */}
                {/* Kind of weird way to loop through to lists but at this point we are going with it. */}
                {this.props.searchRecipe.map((recipeTitle, index) =>{
                  const recipeImage = this.props.searchImg[index];
                  return (<div className="recipeItem" id={index}>
                      <button className="btn btn-outline-secondary" onClick={() => this.setToggle(index)} onMouseEnter={() => this.setHover(true, index)} onMouseLeave={() => this.setHover(false, index)}>
                      {this.state.hover && (index === this.state.currentId) && <h1 className="recipeTitle" onClick={() => this.setToggle(index)} onMouseEnter={() => this.setHover(true, index)}>{recipeTitle}</h1>}
                      <img className="recipeImg" src= {recipeImage} alt="test"/>
                      </button>
                      </div>)
                })}
              </div>
            </div>
        )
    }
}

// {this.props.searchRecipe.map((item) =>{
//   return (<div className="recipeItem" id="2">
//       <button className="btn btn-outline-secondary" onClick={() => this.setToggle(item.id)} onMouseEnter={() => this.setHover(true, item.id)} onMouseLeave={() => this.setHover(false, item.id)}>
//       {this.state.hover && (item.id === this.state.currentId) && <h1 className="recipeTitle">{item.name}</h1>}
//       <img className="recipeImg" src= {item.img} alt="test"/>
//       </button>
//       </div>)
// })}
