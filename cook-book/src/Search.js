import React from "react";

export default class form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            default: 'Ryan',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value})
    }

    handleSubmit(event){
        alert('Searching for: ' + this.state.name);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fullName">
                    Search
                </label>
                <label>
                    <input name="name" id="fullName" type="text" onChange={this.handleChange} value={this.state.name} />
                </label>
                <input type="submit"/>
            </form>

        );
    }
}