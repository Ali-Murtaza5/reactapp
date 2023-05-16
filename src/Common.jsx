import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props)=>{
    return(
    <>
        <section id="header" className="d-flex align-items-center my-5">
        <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-1 d-flex justify-content-center flex-column">
            <h1>
                {props.name}<br/>
                <strong className="brand-name"> Ali Murtaza</strong>
            </h1>
            <h2 className="my-3">
                We are team of talented developers making websites
            </h2>
            <div className="mt-3">
            <NavLink to={props.navigate}>
            <button className="btn btn-outline-primary">{props.btnName}</button>
            </NavLink>
            </div>
            </div>

            <div className="col-lg-6 order-1 order-2  header-img">
            <img src={props.img} className="img-fluid animated" alt="pageSvg"/>
            </div>
        </div>
        </div>
        </div>
        </div>
        </section>
    </>
    );
}

export default Common;