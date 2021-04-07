import React, { Component } from 'react';
//ou import React, { Component } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users.js'
import Search from './components/users/Search'
import axios from 'axios'

class App extends Component{
  state = {
    loading:false,
    users: []
  }
  async componentDidMount(){
    this.setState({loading:true})
    const res = await axios.get('https://api.github.com/users')
    this.setState({loading:false, users:res.data})
  }
  render(){
    return (
      <div className="App">
        < Navbar title = "Github Finder" icon ="icon-github" />
        <div className="conainer">
        < Search />
        < Users loading={this.state.loading} users={this.state.users}/>
        
        </div>
        
      </div>
    );
  }
}

export default App;
