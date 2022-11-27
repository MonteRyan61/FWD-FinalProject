import React from "react";
import './CookingTitles.css';
export default class form extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            Header: 'College Cook',
        };
    }

    render() {
        const data =[{"name":"Chicken Casserole"},{"name":"Chicken Parmesan"}];
        return (
          <div className="Recipe">
          {data.map(function(d, idx){
             return (<li key={idx}>{d.name}</li>)
           })}
          </div>
        );
    }
}
