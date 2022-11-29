import React from 'react';
import Navbar from "./Navbar";
import Basket from "./Basket";
import Logo from "./Logo";
import Contact from "./Contact";
import styles from './Header.module.css'

function Index() {
    return (
        <header className={styles.header} >
                <div className={styles.container}>
                    <div className={styles.Header__box}>
                        <Logo/>
                        <Navbar/>
                        <Basket/>
                    </div>
                </div>
        </header>
    )
}

export default Index
