import styles from "./Home.module.css";
import React from 'react';

function Intro() {
    return (

            <section className={styles.intro} style={{backgroundImage: "url('img/bg.png')"}}>
                <div className={styles.container}>
                    <div className={styles.introjsx}>
                    <div className={styles.intro__box}>
                        <h1 className={styles.intro__title}>АКТИВИРУЙ
                            ИММУНИТЕТ!</h1>
                        <div className={styles.intro__content}>Всего пять секунд в день помогут укрепить иммунитет
                            и повысить защитные силы организма
                        </div>
                        <div className={styles.info}>
                            <div className={styles.info__elem1}>NOOTRIS ПОМОГАЕТ</div>
                            <div className={styles.info__elem2}>Вашему организму во время пандемии и сезонных простуд
                            </div>
                        </div>
                    </div>
                        <div className={styles.intro__img}>
                            <img className={styles.img__1} src='img/ginger.png' alt={''}/>
                            <img className={styles.img__2} src='img/Lemon.png' alt={''}/>
                            <img className={styles.img__3} src='img/nootris.png' alt={''}/>
                        </div>
                    </div>
                </div>

            </section>

    );
}

export default Intro;
