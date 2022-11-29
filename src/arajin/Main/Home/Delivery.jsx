import styles from "./Home.module.css";
import React from 'react';
import Checkout from "./Checkout";


function Delivery() {
    return (

        <section className={styles.delivery}>
        <div className={styles.container}>
            <div className={styles.delivery__box}>
                <h2 className={styles.delivery__title}>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
                    <span>СО СКИДКОЙ -15% ПЕРВЫМ!</span></h2>
                <div className={styles.price}>
                    <div className={styles.price__old}>750₽</div>
                    <div className={styles.price__new}>690₽</div>
                </div>
                <div className={styles.delivery__block}>
                    <div className={styles.delivery__elem}>
                        <img className={styles.delivery__1} src='img/ginger1.png' alt={''}/>
                            <div className={styles.delivery__info}>Содержит
                                <span>имбирь</span>
                            </div>
                    </div>
                    <div className={styles.delivery__elem}>
                        <img className={styles.delivery__2} src='img/nootris1.png' alt={''}/>
                            <div className={styles.delivery__info2}>+ Бесплатная доставка
                                <span>Специальная цена</span></div>
                    </div>
                    <div className={styles.delivery__elem}>
                        <img className={styles.delivery__3} src='img/vorus.png' alt={''}/>
                            <div className={styles.delivery__info}>Нейтрализует
                                <span>вирусы </span></div>
                    </div>

                </div>
                <Checkout/>

            </div>
        </div>
    </section>

);}


export default Delivery;