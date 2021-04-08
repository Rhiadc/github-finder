import React, { Component } from 'react'

export class Search extends Component{
    state = {
        text:''
    }
    
    onChange = event => this.setState({text: event.target.value})
    onSubmit = event  =>{
        event.preventDefault()
        if(this.state.text === ''){
            this.props.setAlert(' Favor digitar algo', 'danger')
        }else{
            this.props.searchUsers(this.state.text)
            this.setState({text: ''})
        }    
    }  
    render(){
        const {showClear, clearUsers} = this.props
        return(
            <div style={{margin:"20px"}} >
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Pesquisar usuário..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Pesquisar" className="btn btn-dark btn-block"/>
                    
                </form>
                {showClear && (<button onClick={clearUsers} className="btn btn-light btn-block">Limpar página</button>) }
            </div>
        )
    }
}

export default Search