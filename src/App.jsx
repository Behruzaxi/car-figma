import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { navbar } from "././utils/utils";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
      <Routes>
        {navbar?.map(({ path, element, id }) => {
          return (
            <React.Fragment key={id}>
              <Route path={path} element={element} />
            </React.Fragment>
          )
        })}
      </Routes>
    </div>
  )
}