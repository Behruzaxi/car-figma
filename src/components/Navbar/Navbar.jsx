import React from "react";
import "./stylenav.css"
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo1.png";
import { navbar } from "../../utils/utils";
import Button from "../Buttons/Button";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="image_logo">
          <img src={logo} alt="" className="logo" />
        </div>

        <div className="boxRightnavbar">
          <ul>
            {navbar?.map(({ path, id, name }) => {
              return (
                <React.Fragment key={id}>
                  <Link to={path}>
                    <li className="list_item">{name}</li>
                  </Link>
                </React.Fragment>
              );
            })}
          </ul>

          <div className="btn">
            <Button className={"orange"} name={"Manage Booking"} />
          </div>
        </div>
      </nav>
    </>
  );
}
