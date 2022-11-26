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
            <div className="Main-header">
                <h1>{this.state.Header}</h1>
                <Search />
            </div>
        );
    }
}