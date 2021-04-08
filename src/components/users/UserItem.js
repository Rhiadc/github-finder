import React from 'react';
import { Link } from 'react-router-dom'

const UserItem = ({user: {login, avatar_url, html_url}}) => {
    return(
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{width: '80px'}}/>
            <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">Visitar Github</a>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1"> Ver info </Link>
            </div>
        </div>
    )
    
}

export default UserItem;