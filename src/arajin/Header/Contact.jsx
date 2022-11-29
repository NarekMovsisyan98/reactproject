import {Link} from "react-router-dom";
import React from 'react';
import styles from "./Header.module.css";




function Contact() {
    return(
        <div className={styles.contact}>
            <Link  to={'/Contact'}>8 8 (800) 600-09-90</Link>
        </div>
    )
}

export default Contact;
