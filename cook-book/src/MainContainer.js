import React from "react";
import './MainContainer.css';
import Search from "./Search";
import CookingTitles from "./CookingTitles";
import Ingredents from "./ingredents";


export default class MainContainer extends React.Component{
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
                <CookingTitles/>
                <Ingredents/>

                {/* <div className= "Gallery">
                    <flexbox/>
                
                </div> */}
            </div>
        );
    }
}