import React from "react";
import web from "../src/images/error-404.jpg";
import { NavLink } from "react-router-dom";
const Error = ()=>{
    return(
    <>
    <div className="my-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <img src={web} alt="page_error" className="img-fluid animated"/>
                    <div className="text-center">
                    <NavLink to="/">
            <button className="btn btn-outline-primary mt-5">Go Home</button>
            </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Error;