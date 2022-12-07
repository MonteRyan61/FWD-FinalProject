import React from "react";

export default class form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: 'Steak'
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
        for(let i = 0; i < data.hits.length; i++)
        {
            for(let j = 0; j < data.hits[i].recipe.ingredientLines.length; j++)
            {
                data.hits[i].recipe.ingredientLines[j] += "*"
                console.log(data.hits[i].recipe.ingredientLines[j])
            }
            console.log(data.hits[i].recipe.label)
            // build.push(`"name" : ${data.hits[i].recipe.label}`)
            let Appender = {"name":`${data.hits[i].recipe.label}`, "img":`${data.hits[i].recipe.image}`, "ingredients": `${data.hits[i].recipe.ingredientLines}`}
            build.push(Appender)
            // build = [...build, [{"name":`${data.hits[i].recipe.label}`, "img":`${data.hits[i].recipe.image}`, "id": `${i}`}]]
        }
        console.log("Build Here" + build[0].ingredients)
        this.props.searchTitleCallback(build)
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value})
    }

    handleSubmit(event){
        alert('Searching for: ' + this.state.name);
        console.log(this.state.recipeTitlesAndImages)
        event.preventDefault();
        console.log(this.state.recipeTitlesAndImages)
        this.sendAPIRequest();
        //after the submit and we have the state changed to the data from the api we want to send that back to the parent so we can send it over to cooking titles to be used
        
    }

    render(){

        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fullName">
                    What are you hungry for?
                </label>
                <br></br>
                <label>
                    
                    <input name="name" id="fullName" type="text" onChange={this.handleChange} value={this.state.name} />
                </label>
                <input type="submit"/>
            </form>
            </div>

        );
    }
}