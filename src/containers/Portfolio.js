import React from "react";
import NavBar from "../components/NavBar/NavBar";
import PortfolioBody from "../components/Portfolio/PortfolioBody";
import Footer from "../components/Footer/Footer";

export default function Portfolio(){
    return(
        <>
            <NavBar></NavBar>
            <PortfolioBody></PortfolioBody>
            <Footer></Footer>
        </>
    )
}