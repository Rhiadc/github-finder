import React, { Component } from 'react';
//ou import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users.js'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import axios from 'axios'

class App extends Component{
  state = {
    loading:false,
    users: [],
    user:{},
    alert: null
  }
   async componentDidMount(){
    this.setState({loading:true})
    const res = await axios.get('https://api.github.com/users')
    console.log(res.data)
    this.setState({loading:false, users:res.data})
  } 

  searchUsers = async text =>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    this.setState({loading:false, users:res.data.items})
  }

  getUser = async username =>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}`)
    this.setState({user : res.data, loading:false})
  }

  clearUsers = () =>{
    this.setState({users:[]})
  }

  setAlert = (msg, type) =>{
    this.setState({alert:{msg: msg, type:type}})
    setTimeout(() => this.setState({alert:null}), 5000);
  }

  render(){
    const {loading, users} = this.state
    return (
      <Router>
        <div className="App">
          < Navbar title = "Github Finder" icon ="icon-github" />
          <Alert alert={this.state.alert} />
          <div className="container">
            <Switch>
              <Route exact path='/' render={props=>(
                <>
              <Search 
                searchUsers = {this.searchUsers} 
                clearUsers = {this.clearUsers}  
                showClear = {users.length > 0 ? true : false}
                setAlert = {this.setAlert}
                />
              
              < Users loading={loading} users={users}/>
                </>
              )}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' render={props=>(
                <User {...props} getUser = {this.getUser} user = {this.state.user} loading={this.state.loading} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    
    );
  }
}

export default App;
