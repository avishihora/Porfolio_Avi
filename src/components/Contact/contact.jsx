import React, { useEffect, useRef, useState } from "react";
import "./contact.scss";
import { Form } from "react-router-dom";
import emailjs from "@emailjs/browser";

const contact = React.forwardRef((props, ref) => {
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
        mobile: mobileNum.current.value,
        message: msg.current.value,
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
      <div id="Contact_id " className="sm:mb-6 3xl:mb-10 ">
        <div
          className={` ${props.inView ? "active fade-left" : "reveal"}`}
          ref={ref}
        >
          <h4 className="headingtext-[2.4rem] w-[35%] mx-auto sm:mx-auto  sm:mt-2 sm:text-[1.4rem] text-center sm:tracking-[2px] bg-slate-200 text-[#262626] sm:mx-8 sm:font-medium sm:py-2 md:text-[2rem] mx:text-[2rem]  xl:text-[2rem] 2xl:text-[2rem] 3xl:text-[2rem] 3xl:mb-10">
            CONTACT ME
          </h4>
          <div className="ContactForm  ">
            <form
              method="post"
              className="sm:w-[60%] sm:text-[16px] sm:mx-auto sm:my-0 md:w-[60%] mx:w-[60%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%] md:text-[18px] mx:text-[20px] lg:w-[50%] lg:text-[20px] xl:text-[20px]  xl:text-[20px] 3xl:text-[22px]"
              ref={form}
              onSubmit={handleSubmit}
            >
              {/* <label htmlFor="">Name :</label> */}
              <div className="form ">
                {" "}
                <input
                  type="text"
                  ref={nameRef}
                  name="Name"
                  placeholder="Name"
                  required
                />
              </div>

              {/* <label htmlFor="">Email ID :</label> */}
              <div className="form ">
                {" "}
                <input
                  type="email"
                  ref={emailRef}
                  placeholder="Email Id"
                  required
                />
              </div>
              {/* <label htmlFor="">Phone Number</label> */}
              <div className="form ">
                {" "}
                <input
                  type="text"
                  ref={mobileNum}
                  placeholder="Mobile Number"
                />
              </div>
              {/* <label htmlFor="">Message</label> */}
              <div className="form ">
                {" "}
                <textarea
                  type="text"
                  ref={msg}
                  placeholder="Message"
                  rows="3"
                  required
                />
              </div>
              <button
                className="btnSubmit bg-white text-[#262626] sm:hover:text-white sm:hover:bg-[#262626] sm:hover:border-white     
                mb-8
                sm:border-[1px] sm:text-[16px] sm:px-3 sm:py-2 md:px-3 md:py-2 md:text-[16px]  mx:px-3 mx:py-2 mx:text-[16px] lg:px-3 lg:py-2 lg:text-[20px] xl:px-3 xl:py-2 xl:text-[20px] 2xl:px-3 2xl:py-2 2xl:text-[20px] 3xl:px-3 3xl:py-2 3xl:text-[20px]"
                disabled={loading}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
});

export default contact;
