import React from "react";
export default class form extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
                RecipeName: '',
                Image:'',
                ingred:'',
        };
        // changeRecipe = () => {
        //     this.setState({RecipeName: "Chicken Cassorle"});

        //   }
    }
    render() {
        const data =[{"ingredents":"4 skinless, boneless chicken breast halves"},{"ingredents":"1 (10.5 ounce) can condensed cream of chicken soup"},{"ingredents":"1 cup sour cream"},{"ingredents":"¼ cup chopped mushrooms"},{"ingredents":"¼ cup chopped onion"},{"ingredents":"32 buttery round crackers, crumbled"}];
        const img =[{"image":"ChickenParm573x322.png"}];
        return (
            <div className="Ingredients-Header">
            {img.map(function(d, idx){
               return (<li key={idx}>{d.image}</li>)
             })}
            {data.map(function(d, idx){
               return (<li key={idx}>{d.ingredents}</li>)
             })}
            </div>
        );
    }
}