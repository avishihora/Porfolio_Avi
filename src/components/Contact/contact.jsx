import React, { useEffect, useRef, useState } from "react";
import "./contact.scss";
import { Form } from "react-router-dom";
import emailjs from "@emailjs/browser";

const contact = React.forwardRef((props,ref) => {
  const emailRef = useRef(<HTMLInputElement />);
  const nameRef = useRef(<HTMLInputElement />);
  const mobileNum = useRef(<HTMLInputElement />);
  const msg = useRef(<HTMLInputElement />);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("diydXg7MBJF7lCUUm");
  }, []);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "portfolioEnquiryEmail";
    const templateId = "template_portfolio";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        mobile:mobileNum.current.value,
        message:msg.current.value,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

     <div
      className={` ${
        props.inView ? "active fade-left" : "reveal"
      }`}
      ref={ref}
    >
      <h4 className="heading" id="Contact_id">
        Contact Me
      </h4>
      <div className="ContactForm">
        <form method="post" ref={form} onSubmit={handleSubmit}>
          {/* <label htmlFor="">Name :</label> */}
          <div className="form">
            {" "}
            <input type="text" ref={nameRef} name="Name" placeholder="Name" />
          </div>

          {/* <label htmlFor="">Email ID :</label> */}
          <div className="form">
            {" "}
            <input type="email" ref={emailRef} placeholder="Email Id" />
          </div>
          {/* <label htmlFor="">Phone Number</label> */}
          <div className="form">
            {" "}
            <input type="text" ref={mobileNum} placeholder="Mobile Number" />
          </div>
          {/* <label htmlFor="">Message</label> */}
          <div className="form">
            {" "}
            <textarea type="text" ref={msg} placeholder="Message" rows="3" />
          </div>
          <button className="btnSubmit" disabled={loading}>
            Submit
          </button>
        </form>
      </div>
      </div>
    </>
  );
});

export default contact;
