import styles from "./Header.module.css";
import NavbarItem from "./NavbarItem";
import React,{useState} from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import Contact from "./Contact";

const data = [
    {link:'/Rooms',title:'FAQ',},
    {link:'/Rooms',title:'Оплата и доставка',},
    {link:'/Rooms',title:'Возврат',},
    {link:'/Rooms',title:'Исследования',},
    {link:'/Rooms',title:'Личный кабинет',},
]
function Navbar() {
    const [status, setStatus]=useState(false);
    return(
        <nav className={styles.navbar}>
            <div  onClick={()=>setStatus(!status)} className={styles.mobile__btn}>
                {status ?  <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }
            </div>
            <ul  className={status ?[styles.katigori,styles.active].join(' ') : [styles.katigori]}

            >
                {
                    data.map((item,key)=><NavbarItem className={status} key={key} link={item.link} title={item.title}/>)
                }

                <Contact/>
            </ul>

        </nav>

    )
}
export default Navbar;