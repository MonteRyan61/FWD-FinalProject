import React from "react";

export default class form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Header: 'College Cook',
        };
    }

    render(){
        return(
            <p>Recipes will be here</p>
        );
    }
}