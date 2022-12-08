import React from "react";
import './MainContainer.css';

export default class form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            exists: "Type in the name of a Food or Beverage"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendAPIRequest = this.sendAPIRequest.bind(this);
        this.useApiData = this.useApiData.bind(this);
    }


    async sendAPIRequest(){
        //First we need to clear our the previous data if we are making a new search
        this.setState({
            recipeTitlesAndImages : []
        })
        //some dumb logic to only run the fetch when the props value is changed I am sure there is a better way but for now this works
        let response = await fetch(`https://api.edamam.com/search?app_id=9d02317d&app_key=27ce4a3c40493cb7a8d90edce113ce78&q=${this.state.name}`);
        this.props.searchTitleCallback(response)
        let data = await response.json()
        console.log(data)
        this.useApiData(data)
    }
    

    //We want to populate our list that populates cooking titles here. This will just be parsing the info we get back from the request
    useApiData(data){
        //We need to populate the new data for each of the hits in the API
        let build = []
        //check to make sure we got some data if we got none back from the search then we want to change the state of the output message
        if(data.hits.length === 0)
        {
            if(this.state.name === "")
            {
                this.setState({
                    exists: "Please Type in a Food or Beverage Category"
                })
                return
            }
            console.log("Doesn't Exist")
            this.setState({
                exists: "No Results For: "
            })
            return
        }
        //Reset the message as we know have data for a search
        this.setState({
            exists: "Showing Results For: "
        })
        for(let i = 0; i < data.hits.length; i++)
        {
            for(let j = 0; j < data.hits[i].recipe.ingredientLines.length; j++)
            {
                data.hits[i].recipe.ingredientLines[j] += "*"
            }
            console.log("URL FOR " + i + " " + data.hits[i].recipe.url)
            let appenderObject = {"name":`${data.hits[i].recipe.label}`, "img":`${data.hits[i].recipe.image}`, "ingredients": `${data.hits[i].recipe.ingredientLines}`, "source": `${data.hits[i].recipe.url}`}
            build.push(appenderObject)
        }
        this.props.searchTitleCallback(build)
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.sendAPIRequest();
        //after the submit and we have the state changed to the data from the api we want to send that back to the parent so we can send it over to cooking titles to be used
        this.props.showing(this.state.name)
    }

    render(){

        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fullName" className="second-header">
                    Hungry or Thirsty?
                </label>
                <br></br>
                <label>
                    <input name="name" id="fullName" type="text" onChange={this.handleChange} value={this.state.name} />
                </label>
                <input type="submit" value="Search"/>
            </form>
            <h2 className="third-header">{this.state.exists} {this.props.lastSearch}</h2>
            </div>

        );
    }
}