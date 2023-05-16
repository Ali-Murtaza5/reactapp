import React from "react";
import web from "../src/images/image1.avif";
import Common from "./Common";

const Home = ()=>{
    return(
    <>
    <Common name="Grow Your business With" img={web} btnName="Get Started" navigate="/service"/>
    </>
    );
}

export default Home;