import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }
    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    }
    
    
    render(){
        const {
            name,
            blog,
            login,
            location,
            avatar_url,
            html_url,
            bio,
            company,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user
        
        if(this.props.loading){
            
            return <Spinner />
        } 
            return(
            <>
               <Link to={`/`} className="btn btn-dark btn-sm my-1"> Voltar </Link>
               
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" alt="" style={{width:'150px'}} />
                    <h1>{name}</h1>
                    <p>Localização: {location}</p>
                </div>
                <div>
                    {bio && (<> 
                        <h3>Bio: </h3>
                        <p>{bio}</p>
                        </>
                    )}
                    <a href={html_url} className = "btn btn-dark my-1">Ver Github</a>
                    <ul>
                        <li>
                            {login && (
                                <>
                                    <strong>Username: </strong> {login}
                                </>
                            )}
                            
                        </li>
                        <li>
                        <strong>Disponível : </strong>
                            {hireable ? (<i className='icon-check text-success' /> ) : (<i className='icon-check text-danger' /> )}  
                        </li>
                        <li>
                            {company && (
                                <>
                                    <strong>Empresa: </strong> {company}
                                </>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <>
                                    <strong>Blog: </strong> {blog}
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="card text-center">
                <div className="badge badge-primary">Seguidores: {followers}</div>
                <div className="badge badge-success">Seguindo: {following}</div>
                <div className="badge badge-success">Repositórios públicos: {public_repos}</div>
                <div className="badge badge-dark">Gists públicos: {public_gists}</div>

            </div>
            </>
        )   
    }   
}

export default User