import React from "react";
import './MainContainer.css';
import Search from "./Search";
import CookingTitles from "./CookingTitles";
export default class form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Header: 'College Cook',
        };
    }

    render(){
        return(
            <div className="Main-header">
                <h1>{this.state.Header}</h1>
                <Search />
                <CookingTitles />
            </div>
        );
    }
}