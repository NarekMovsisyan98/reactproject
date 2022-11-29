import {Link} from "react-router-dom";
import React from 'react';
import styles from "./Header.module.css";




function Basket() {
    return(
        <div className={styles.basket}>
            <Link to='/'>
                <img src='img/Vector1.svg' alt='logo'/>
            </Link>
        </div>
    )
}

export default Basket;
