import React from "react"
import Logo from "../reactjs-icon.svg"

export default function Navbar(){
    return(
       <nav>
        <img className="img" src={Logo} />
        <h3 className="page-heading">React Facts</h3>
        <p className="page-title">React Course - Project 1</p>
       </nav>
    )
}