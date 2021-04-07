import React, { Component } from 'react'

export class Search extends Component{
    state = {
        text:''
    }

    onChange = event => this.setState({text: event.target.value})
    onSubmit = event  =>{
        event.preventDefault()
        console.log(this.state.text)
    }  
    render(){
        return(
            <div style={{margin:"20px"}} >
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search