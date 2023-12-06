import React, { useRef } from "react";
import "./Project.scss";
import "../../index.css";
import { useEffect, useState } from "react";
import SandL from "../../assets/images/Snake&Ladder.webp";
import CPSN from "../../assets/images/CPSN.webp";
import Book from "../../assets/images/Book.webp";
import profilePic from "../../assets/images/profile-removebg.webp";
import portfolioWeb from "../../assets/images/PortfoioWeb.webp";
import airplaneDataBase from "../../assets/images/airplanedatabase.webp";
import Adobeillustrator from "../../assets/images/Adobeillustrator.webp";
import { Link } from "react-router-dom";

const project = React.forwardRef((props,ref) => {
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <>
  //       <div className="Loading" style={{ margin: "0rem auto", width: "50%" }}>
  //         <img src={profilePhoto} alt="" />
  //       </div>
  //       <div className="LoadingCursor"></div>
  //     </>
  //   );
  // }
  return (
    <div id="Project_id">
      <div
        className={`Project project-container ${
          props.inView ? "active fade-right" : "reveal"
        }`}
        ref={ref}
      >
        <div
          className="heading"
          style={{ marginTop: "2rem", marginBottom: "0rem" }}
        >
          Project
        </div>

        <div className="ProjectWork sm:grid sm:grid-cols-1">
          <div className="nft">
            <div className="main">
              <Link
                to="https://github.com/avishihora/BookReader.com"
                style={{ margin: " 0 auto" }}
              >
                <img className="tokenImage" src={Book} alt="Book Web App" />
              </Link>
              <h2>Book Management Web App</h2>
              <div className="description">
                <div className="tag">HTML</div>
                <div className="tag">CSS</div>
                <div className="tag">JS</div>
                <div className="tag">React</div>
                <div className="tag">NodeJs</div>
                <div className="tag">MongoDB</div>
              </div>
              <hr />
              <div className="creator">
                <div className="wrapper">
                  <img
                    src={profilePic}
                    alt="Creator"
                    style={{ backgroundSize: "contain" }}
                  />
                </div>
                <p>
                  <ins>Created by</ins>{" "}
                  <a href="https://github.com/avishihora/Project1">
                    Avi Shihora
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="nft">
            <div className="main">
              <a href="http://localhost:5173/">
                <img className="tokenImage" src={portfolioWeb} alt="NFT" />
              </a>
              <h2>PortFolio Website</h2>
              <div className="description">
                <div className="tag">HTML</div>
                <div className="tag">CSS</div>
                <div className="tag">JavaScript</div>
                <div className="tag">React</div>
              </div>
              <hr />
              <div className="creator">
                <div className="wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                    alt="Creator"
                  />
                </div>
                <p>
                  <ins>Created By</ins> Avi Shihora
                </p>
              </div>
            </div>
          </div>
          <div className="nft">
            <div className="main">
              <img className="tokenImage" src={CPSN} alt="NFT" />
              <h2>CPSN Project</h2>
              <div className="description">
                <div className="tag">HTML</div>
                <div className="tag">CSS</div>
                <div className="tag">JS</div>
                <div className="tag">React</div>
                <div className="tag">NodeJs</div>
                <div className="tag">MongoDB</div>{" "}
              </div>

              <hr />
              <div className="creator">
                <div className="wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                    alt="Creator"
                  />
                </div>
                <p>
                  <ins>Created By</ins> Avi Shihora and Prasanna Patel
                </p>
              </div>
            </div>
          </div>
          <div className="nft">
            <div className="main">
              <img
                className="tokenImage"
                src={SandL}
                alt="Snake&Ladder"
                width="fit-content"
              />
              <h2>Snake and Ladder Project</h2>
              <div className="description">
                <div className="tag">JAVA</div>
              </div>

              <hr />
              <div className="creator">
                <div className="wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                    alt="Creator"
                  />
                </div>
                <p>
                  <ins>Created By</ins> Avi Shihora
                </p>
              </div>
            </div>
          </div>
          <div className="nft">
            <div className="main">
              <img className="tokenImage" src={airplaneDataBase} alt="NFT" />
              <h2>Airline Management Project</h2>
              <div className="description">
                <div className="tag">MySQL</div>
                {/* <div className="tag">MySQL</div>
              <div className="tag">MySQL</div> */}
              </div>

              <hr />
              <div className="creator">
                <div className="wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                    alt="Creator"
                  />
                </div>
                <p>
                  <ins>Created By</ins> Avi Shihora - Chailcy Patel - Dinisha
                  Soni
                </p>
              </div>
            </div>
          </div>

          <div className="nft">
            <div className="main">
              <Link to="/project/images">
                <img className="tokenImage" src={Adobeillustrator} alt="NFT" />
              </Link>
              <h2>Design</h2>
              <div className="description">
                <div className="tag">Adobe illustrartor</div>
                <div className="tag">Canva</div>
              </div>

              <hr />
              <div className="creator">
                <div className="wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                    alt="Creator"
                  />
                </div>
                <p>
                  <ins>Created By</ins> Avi Shihora
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default project;
