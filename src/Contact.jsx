import React, { useState } from "react";

const Contact = ()=>{
    const [data, setData] = useState({
        fullname:"",
        email:"",
        phone:"",
        subject:"",
        msg:""
    });

    const typedData = (e)=>{
         const {name, value} = e.target;
        // const name = e.target.name;
        // const value = e.target.value;
        setData((preValue)=>{
            return{
                ...preValue,
                [name] : value,
            };
        });
    }

    const formSubmit = (event)=>{
        event.preventDefault();
        alert(`My name is ${data.fullname}. My email address is ${data.email}. My Mobile no. is ${data.phone}. My subject for contact is ${data.subject}. My message is ${data.msg}`);
    }

    return(
    <>
    <div className="my-5">
        <h1 className="text-center fw-bolder">Contact Us</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
<form onSubmit={formSubmit}>
    <div className="mb-3">
    <label for="fullname" className="form-label">Full Name:</label>
    <input type="text" className="form-control" id="fullname" name="fullname" defaultValue={data.fullname} onChange={typedData} required/>
  </div>
  <div className="mb-3">
    <label for="useremail" className="form-label">Email address:</label>
    <input type="email" className="form-control" id="useremail" name="email" defaultValue={data.email} onChange={typedData} required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="phone" className="form-label">Mobile:</label>
    <input type="number" className="form-control" id="phone" name="phone" defaultValue={data.phone} onChange={typedData} required/>
  </div>
  <div className="mb-3">
    <label for="subject" className="form-label">Subject:</label>
    <input type="text" className="form-control" id="subject" name="subject" defaultValue={data.subject} onChange={typedData} required/>
  </div>
  <div className="mb-3">
    <label for="message" className="form-label">Message:</label>
    <textarea rows="5" className="form-control" id="message" name="msg" defaultValue={data.msg} onChange={typedData} required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Contact;