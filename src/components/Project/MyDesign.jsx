import React from 'react'
import "./design.css"
import img1 from "../../assets/images/1.webp"
import img2 from "../../assets/images/2.webp"
import img3 from "../../assets/images/3.webp"
import img4 from "../../assets/images/4.webp"
import img5 from "../../assets/images/5.webp"
import img6 from "../../assets/images/6.webp"
import img7 from "../../assets/images/7.webp"
const MyDesign = () => {
  return (
    <>
      <div className="design_menu">
        <h2>Design</h2>
        <div className="gridDesignImage">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <div className="image">
            <img src={img4} alt="" />
          </div>
          <div className="image">
            <img src={img5} alt="" />
          </div>
          <div className="image">
            <img src={img3} alt="" />
          </div>
          <div className="image">
            <img src={img6} alt="" />
          </div>
          <div className="image">
            <img src={img7} alt="" />
          </div>
          <p className="text-3xl font-bold underline text-lg">Avi Shihora</p>
        </div>
      </div>
    </>
  );
}

export default MyDesign