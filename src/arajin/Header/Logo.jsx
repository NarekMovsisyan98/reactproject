import React from 'react';
import {Link} from 'react-router-dom'
function Logo(props) {
    return (
        <Link to='/'>
            <img src='img/Vector.svg' alt='logo'/>
            </Link>
            );
}

export default Logo;