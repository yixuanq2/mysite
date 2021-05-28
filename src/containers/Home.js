import React from "react";
import NavBar from "../components/NavBar/NavBar";
import MainBody from "../components/Main/MainBody";
import About from "../components/About/About";
import Summary from "../components/Summary/Summary";
import PortfolioBody from"../components/Portfolio/PortfolioBody"
import ContactBody from "../components/Contact/ContactBody";
import Footer from "../components/Footer/Footer";
export default function Home(){

    return(
        <>
            <NavBar></NavBar>
            <MainBody></MainBody>
            <About></About>
            <Summary></Summary>
            <PortfolioBody></PortfolioBody>
            <ContactBody></ContactBody>
            <Footer></Footer>

        </>
    )
}