//react snippet
import React from 'react'
import Search from '../users/Search'

const Navbar = ({icon, title}) => {
    return(
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
           
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'icon-github'
}


export default Navbar