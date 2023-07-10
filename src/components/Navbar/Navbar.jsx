import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo/logo1.png" 
import { navbar } from "../../utils/utils"


export default function Navbar() {
  return (
    <>
        <nav>
            <div className="image_logo">
                <img src={logo} alt="" className="logo"/>
            </div>

            <ul>

              {navbar?.map(({path, id, name}) => {
                return(
                  <React.Fragment key={id}>
                    <Link to={path}><li className="list_item">{name}</li></Link>
                  </React.Fragment>
                )
              })}
              


            </ul>

            <div className="btn">
                <button className="btnClick">Manage Booking </button>
            </div>

        </nav>
    </>
  )
}
