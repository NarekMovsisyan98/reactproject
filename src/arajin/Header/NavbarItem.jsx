import {Link} from "react-router-dom";
import React,{useState} from "react";

function NavbarItem({title, link}) {

    return (
        <li><Link to={link}>{title}</Link></li>
    )
}

export default NavbarItem;