import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = ()=>{
    return(
    <>
    <div className="my-5">
        <h1 className="text-center fw-bolder my-5">Our Services</h1>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-5">
                        {Sdata.map((data, index)=>{
                            return <Card key={index} ctitle={data.title} imgsrc={data.imgsrc}/>
                        })}
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Service;