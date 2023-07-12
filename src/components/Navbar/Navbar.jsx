


import { Link } from "react-router-dom"
import logo from "../../assets/logo/logo1.png"
import { navbar } from "../../utils/utils"
import React from "react"
import Button from "../Buttons/Button"
import "./stylenav.css"

export default function Navbar() {
    return (
        <nav>
            <div className="imagelogo">
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="boxRightNavbar">
                <ul className="list">
                    {navbar?.map(({ path, id, name }) => {
                        return (
                            <React.Fragment key={id}>
                                <Link to={path}><li className="list_item">{name}</li></Link>
                            </React.Fragment>
                        )
                    })}
                </ul>
                <div className="btn">
                    <Button className={"orange"} name={"Manage Booking"} />
                </div>
            </div>
        </nav>
    )
}