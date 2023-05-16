import React from "react";
import web from "../src/images/aboutpage.svg";
import Common from "./Common";

const About = ()=>{
    return(
    <>
    <Common name="Welcome to About Page" img={web} btnName="Contact Us" navigate="/contact"/>
    </>
    );
}

export default About;