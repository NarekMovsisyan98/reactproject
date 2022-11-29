import React from 'react';
import styles from "./Home.module.css";
import Intro from "./Intro";
import Delivery from "./Delivery";
import Contact from "../../Header/Contact";
import Checkout from "./Checkout";


function Home() {
    return (
        <main>
            <Intro/>
            <Delivery/>
        </main>
    );
}

export default Home;


