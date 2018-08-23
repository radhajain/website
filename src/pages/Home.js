import React, { Component } from "react";
import HabitlabIcon from "../assets/habitlab-icon.png";
import SpotOnIcon from "../assets/spoton-icon.png";
import WandbIcon from "../assets/wandb-icon.png";
import WebDesignImg from "../assets/web-design-img.png";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="body" style={{ paddingBottom: 60 }}>
          <svg
            className="header"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 
                    L0, 75
                    Q 25, 68 50, 75
                    T 100, 75
                    L 100, 0
                    Z"
              fill="url(#heavyGradient)"
            />
            <defs>
              <linearGradient id="heavyGradient">
                <stop offset="5%" stop-color="#C51E54" />
                <stop offset="95%" stop-color="#F9A639" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMaxYMax slice"
            className="backgroundWave"
          >
            <path
              d="M0,0 
                    L0, 75
                    Q 25, 70 50, 75
                    T 100, 75
                    L 100, 0
                    Z"
              fill="url(#lightGradient)"
            />
            <defs>
              <linearGradient id="lightGradient">
                <stop offset="5%" stop-color="#FAEBF1" />
                <stop offset="95%" stop-color="#FBE2CE" />
              </linearGradient>
            </defs>
          </svg>
          <div className="allHeader">
            <div className="headerInfo">
              <p className="hiTitle">Hi, I'm Radha.</p>
              <p className="subtitle">UI/UX designer and Software Engineer</p>
              <p className="stanfordTitle">
                B.S. Computer Science & B.A. Economics, Stanford '19
              </p>
              <div style={{ marginTop: "1.7em" }}>
                <button type="button" className="headerButtons">
                  View my work
                </button>
                <button type="button" className="headerButtons">
                  Contact
                </button>
              </div>
            </div>
            <div className="graphic">
              <img
                src={WebDesignImg}
                alt="Design to code graphic"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div
            className="allContent"
            style={{
              marginTop: 400,
              width: "90%",
              marginLeft: "5%",
              marginRight: "5%"
            }}
          >
            <p
              style={{
                fontFamily: "MoolBoran",
                paddingTop: 0,
                color: "#625F5F",
                fontSize: 50,
                margin: 0
              }}
            >
              {" "}
              About Me{" "}
            </p>
            <p
              style={{
                fontFamily: "Glacial Indifference",
                lineHeight: "1.7em",
                color: "#625F5F"
              }}
            >
              I am currently in my final year at Stanford, majoring in Computer
              Science and Economics. I am passionate about making technology
              better with technology - from shaping delightful user experiences
              to increasing explainability of machine learning models. I am luck
              to have been a part of a few amazing teams, including{" "}
              <a
                href="wandb.com"
                style={{ color: "#CE364F", textDecoration: "none" }}
              >
                Weights & Biases
              </a>{" "}
              and{" "}
              <a
                href="massdrop.com"
                style={{ color: "#CE364F", textDecoration: "none" }}
              >
                Massdrop
              </a>
              , and Stanford’s Human Computer Interaction Research labs where I
              designed, developed and deployed a{" "}
              <a
                style={{ color: "#CE364F", textDecoration: "none" }}
                href="https://play.google.com/store/apps/details?id=com.stanfordhci.habitlab&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              >
                habit-changing Android app
              </a>
              .
            </p>
            <p
              style={{
                fontFamily: "Glacial Indifference",
                lineHeight: "1.7em",
                color: "#625F5F"
              }}
            >
              At Stanford, I was fortunate to be one of twelve students accepted
              into the{" "}
              <a
                href="https://stvp.stanford.edu/mayfield-fellows-program"
                style={{ color: "#CE364F", textDecoration: "none" }}
              >
                Mayfield Fellows Program
              </a>
              . The program is an immersive work-study program centered around a
              comprehensive entrepreneurship education in the key principles of
              leadership, innovation, strategy and creativity.
            </p>
            <div className="work" style={{ marginTop: 150 }}>
              <p
                style={{
                  fontFamily: "MoolBoran",
                  paddingTop: 0,
                  color: "#625F5F",
                  fontSize: 50,
                  margin: 0
                }}
              >
                Work
              </p>
              <div
                className="workContainer"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <div
                  style={{
                    padding: 20,
                    minWidth: 252,
                    flex: "1 1 0",
                    maxWidth: 350,
                    flexShrink: 2
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(#ECA388, #CF8569)",
                      height: 500,
                      position: "relative"
                    }}
                  >
                    <div
                      style={{
                        height: "calc(100% - 121px)",
                        textAlign: "center",
                        overflowY: "hidden"
                      }}
                    >
                      <img
                        src={SpotOnIcon}
                        style={{
                          height: "85%",
                          marginTop: "18%"
                        }}
                        alt="Screenshot of Spot On interface"
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        padding: 10,
                        background: "rgba(0,0,0,0.1)",
                        height: 101,
                        width: "calc(100% - 20px)"
                      }}
                    >
                      <p
                        style={{
                          color: "white",
                          fontFamily: "Glacial Indifference",
                          fontSize: 18,
                          marginBottom: 5
                        }}
                      >
                        SpotOn IOS App
                      </p>
                      <p
                        style={{
                          color: "white",
                          fontFamily: "Glacial Indifference",
                          fontSize: 14,
                          marginTop: 0,
                          lineHeight: "1.5em"
                        }}
                      >
                        An elegant health app made for women, by women.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    padding: 20,
                    minWidth: 252,
                    flex: "1 1 0",
                    maxWidth: 350
                  }}
                  v
                >
                  <div
                    style={{
                      background: "linear-gradient(#FFDC49, #ED727E)",
                      height: 500,
                      position: "relative",
                      flexShrink: 2
                    }}
                  >
                    <div
                      style={{
                        height: "calc(100% - 121px)",
                        textAlign: "center",
                        overflowY: "hidden",
                        overflowX: "hidden"
                      }}
                    >
                      <img
                        src={WandbIcon}
                        style={{
                          height: "80%",
                          marginTop: "25%"
                        }}
                        alt="Screenshot of Weights & Biases website"
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        padding: 10,
                        height: 101,
                        background: "rgba(0,0,0,0.1)",
                        width: "calc(100% - 20px)"
                      }}
                    >
                      <p
                        style={{
                          color: "white",
                          fontFamily: "Glacial Indifference",
                          fontSize: 18,
                          marginBottom: 5
                        }}
                      >
                        Weights & Biases
                      </p>

                      <p
                        style={{
                          color: "white",
                          fontFamily: "Glacial Indifference",
                          fontSize: 14,
                          marginTop: 0,
                          lineHeight: "1.5em"
                        }}
                      >
                        Visualizing Machine Learning performance at scale.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    padding: 20,
                    minWidth: 252,
                    flex: "1 1 0",
                    maxWidth: 350
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(#F08391, #961929)",
                      height: 500,
                      position: "relative",
                      flexShrink: 2
                    }}
                  >
                    <div
                      style={{
                        height: "calc(100% - 121px)",
                        textAlign: "center",
                        overflowY: "hidden"
                      }}
                    >
                      <img
                        src={HabitlabIcon}
                        style={{
                          height: "85%",
                          marginTop: "18%"
                        }}
                        alt="Screenshot of the HabitLab Mobile interface"
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        padding: 10,
                        background: "rgba(0,0,0,0.1)",
                        height: 101,
                        width: "calc(100% - 20px)"
                      }}
                    >
                      <p
                        style={{
                          color: "white",
                          fontFamily: "Glacial Indifference",
                          fontSize: 18,
                          marginBottom: 5
                        }}
                      >
                        Habitlab Android App
                      </p>
                      <p
                        style={{
                          color: "white",
                          fontFamily: "Glacial Indifference",
                          fontSize: 14,
                          marginTop: 0,
                          lineHeight: "1.5em"
                        }}
                      >
                        Youtube holes and Facebook scrolling: Designing better
                        mobile habits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience" style={{ marginTop: 150 }}>
                <p
                  style={{
                    fontFamily: "MoolBoran",
                    paddingTop: 0,
                    color: "#625F5F",
                    fontSize: 50,
                    margin: 0
                  }}
                >
                  Experience
                </p>
                <div className="experienceContainer">
                  <div className="flexCol">
                    <div className="flexRow">
                      <p
                        style={{
                          fontFamily: "Glacial Indifference",
                          color: "#625F5F",
                          marginLeft: "1em"
                        }}
                      >
                        CODING
                      </p>
                      <ul
                        style={{
                          fontFamily: "Glacial Indifference",
                          color: "#625F5F",
                          lineHeight: "1.7em"
                        }}
                      >
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>C++</li>
                        <li>C</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Nativescript</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flexCol">
                    <div className="flexRow">
                      <p
                        style={{
                          fontFamily: "Glacial Indifference",
                          color: "#625F5F",
                          marginLeft: "1em"
                        }}
                      >
                        DESIGN
                      </p>
                      <ul
                        style={{
                          fontFamily: "Glacial Indifference",
                          color: "#625F5F",
                          lineHeight: "1.7em"
                        }}
                      >
                        <li>Website & app design</li>
                        <li>Posters & Slides</li>
                        <li>Adobe XD</li>
                        <li>Sketch</li>
                        <li>Illustrator</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flexCol">
                    <div className="flexRow">
                      <p
                        style={{
                          fontFamily: "Glacial Indifference",
                          color: "#625F5F",
                          marginLeft: "1em"
                        }}
                      >
                        STRATEGY
                      </p>
                      <ul
                        style={{
                          fontFamily: "Glacial Indifference",
                          color: "#625F5F",
                          lineHeight: "1.7em"
                        }}
                      >
                        <li>
                          Search Marketing: <br /> SEO & PPC
                        </li>
                        <li>
                          Conversion rate <br />
                          optimization
                        </li>
                        <li>Competitive Analysis</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flexCol">
                    <div className="flexRow">
                      <p
                        style={{
                          fontFamily: "Glacial Indifference",
                          color: "#625F5F",
                          marginLeft: "1em"
                        }}
                      >
                        OTHER
                      </p>
                      <ul
                        style={{
                          fontFamily: "Glacial Indifference",
                          color: "#625F5F",
                          lineHeight: "1.7em"
                        }}
                      >
                        <li>Public Speaking</li>
                        <li>Hiking & Camping</li>
                        <li>Chess</li>
                        <li>Scuba Diving</li>
                        <li>Pretending to understand American sports</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="contact"
                style={{ marginTop: 250, marginBottom: 200 }}
              >
                <p
                  style={{
                    fontFamily: "MoolBoran",
                    paddingTop: 0,
                    color: "#625F5F",
                    fontSize: 50,
                    margin: 0
                  }}
                >
                  I'd love to hear from you.
                </p>
                <p
                  style={{
                    fontFamily: "Glacial Indifference",
                    color: "#625F5F",
                    lineHeight: "1.7em"
                  }}
                >
                  Let's make it happen. If you'd like to collaborate, please
                  leave me a note and I'll get back to you.
                </p>
                <div className="formContainer">
                  <form id="messageForm">
                    <div style={{ margin: "20px 0px" }}>
                      <p
                        style={{
                          display: "inline",
                          fontFamily: "Glacial Indifference",
                          color: "#625F5F"
                        }}
                      >
                        NAME
                      </p>
                      <input
                        type="text"
                        name="name"
                        style={{
                          float: "right",
                          width: "80%",
                          height: 25,
                          border: "1px solid #B1ADAD"
                        }}
                      />
                    </div>
                    <div style={{ margin: "20px 0px" }}>
                      <p
                        style={{
                          display: "inline",
                          fontFamily: "Glacial Indifference",
                          color: "#625F5F"
                        }}
                      >
                        EMAIL
                      </p>
                      <input
                        type="text"
                        name="email"
                        style={{
                          float: "right",
                          width: "80%",
                          height: 25,
                          border: "1px solid #B1ADAD"
                        }}
                      />
                    </div>
                    <div style={{ margin: "20px 0px" }}>
                      <p
                        style={{
                          display: "inline",
                          fontFamily: "Glacial Indifference",
                          color: "#625F5F"
                        }}
                      >
                        NOTE
                      </p>
                      <textarea
                        name="message"
                        form="messageForm"
                        style={{
                          float: "right",
                          width: "80%",
                          height: 50,
                          border: "1px solid #B1ADAD"
                        }}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <input
                        type="submit"
                        value="SEND"
                        style={{
                          float: "right",
                          marginTop: 30,
                          padding: "10px 20px",
                          background: "linear-gradient(#C51E54, #F9A639)",
                          borderRadius: 20,
                          border: "none",
                          color: "white",
                          position: "relative"
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer"
          style={{
            width: "100vw",
            height: 60,
            backgroundColor: "#C72452",
            position: "absolute",
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Glacial Indifference"
            }}
          >
            Created by Radha Jain in ReactJS
          </p>
        </div>
      </div>
    );
  }
}
