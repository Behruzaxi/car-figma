import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { navbar } from "./utils/utils";

export default function App() {
  return (
    <>
      <div>
        <Navbar/>

          <Routes>
            {navbar?.map(({path, element, id}) => {
            return(
              <React.Fragment key={id}>
                <Route path={path} element={element}/>
              </React.Fragment>
            )
            })}
          </Routes>
      </div>
    </>
  )
}
