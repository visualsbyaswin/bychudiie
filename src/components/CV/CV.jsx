import React, { useState } from "react";
import "./cv.css";
import { asstets, intrests, macos } from "../../assets/assets";
const CV = () => {
  const [activeTab, setActiveTab] = useState("about");
  const tabs = [
    { id: "about", label: "About me", count: 18 },
    { id: "cv", label: "CV", count: 48 },
    { id: "interests", label: "Interests", count: "∞" },
  ];


  const rendercart = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="rightmain">
            <div className="headright">
              <p>
                Art Director, Graphic Designer, Photographer, and even Stylist
                sometimes, but honestly, I do way more than that... To put it
                simply, I bring ideas to life through visuals and manage
                everything that makes a project come together in the end.
              </p>
              <p>i can do...</p>
            </div>
            <div className="headskills">
              <ul className="skills">
                {[
                  "Anything",
                  "Art Direction",
                  "Creative Direction",
                  "Artwork (album covers, merch, posters, packaging design, video boards)",
                  "Key Visual design (artist, tour, brand, album, festival)",
                  "EP, single covers",
                  "Stage visuals",
                  "Motion Design",
                  "Logotypes",
                  "Photography",
                  "Fonts",
                  "Posters",
                  "Web",
                  "Clothing design",
                  "Social media design",
                  "Indirect collaboration with Spotify",
                  "Event materials and visual design",
                ].map((item) => (
                  <div className="styles">
                    <div key={item} className="bluestyle">
                      <h4>✔️</h4> <p> {item}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        );
      case "cv":
        return (
          <div className="cvcontainer">
            <div className="exp">
              <h1>Expeiences</h1>

              <ul className="tableexp">
                {[
                  "SBM Label - Art Director & Graphic Designer (2023-2025)",
                  "newonce - Graphic & Motion Designer (2023) Albo Albo - Graphic",
                  "Designer (2021-2023) Freelance - random stuff, graphic design,",
                  " painting, art directing (since 2019)",
                ].map((item) => (
                  <div className="bluestyle">
                    <h4>✔️</h4> <p> {item}</p>
                  </div>
                ))}
              </ul>
            </div>
            <div className="worked-with">
              <h1>co-worked with</h1>

              <ul className="worklist">
                {[
                  "Mata",
                  "Białas",
                  "Solar",
                  "Kacperczyk",
                  "Kinny Zimmer",
                  "Fukaj",
                  "Szaran",
                  "Vikoś",
                  "Sobel",
                  "Jacuś",
                  "Michał Anioł",
                  "Młody Korden",
                  "Znowu Tony",
                  "ZIGYIVA",
                  "Effemera",
                  "Michał Skinny",
                  "Maciek Edelman",
                  "SBM Ffestival",
                ].map((item) => (
                  <div className="bluestyle">
                    <h4 style={{ color: "white" }}>✔️</h4> <p> {item}</p>
                  </div>
                ))}
              </ul>
            </div>
            <div className="indirectly">
              <h1>indirctly worked with</h1>
              <ul className="indirectly-colum">
                {[
                  "Netflix",
                  "Pepsi",
                  "Brooklyn",
                  "Old Spice",
                  "Red Bull",
                  "Eska",
                  "Mentos",
                  "ING",
                  "Doritos",
                  "Betclic",
                  "Adidas",
                  "Going.",
                  "eBilet",
                  "Jägermeister",
                  "Oreo",
                  "Wedel",
                  "Samsung",
                  "Apple Music",
                  "Converse",
                  "Marshall",
                  "Męskie Granie",
                ].map((item) => (
                  <div className="bluestyle">
                    <h4 style={{ color: "white" }}>✔️</h4> <p> {item}</p>
                  </div>
                ))}
              </ul>
            </div>

            <div className="education">
              <h1>education</h1>
              <ul className="educol">
                {[
                  "SWPS University - Graphic Design Bachelor (2019-2021)",
                  "English - B2",
                ].map((item) => (
                  <div className="bluestyle">
                    <h4 style={{ color: "white" }}>✔️</h4> <p> {item}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        );case "interests":
        return(
          <div className="boximg">
          {intrests.map((item,i)=>(
          <div className="intrested" key={i}>
            <img src={item.img} alt="" />
          </div>
          ))}
          </div>
        )
    }
  };

  return (
    <div className="resume">
      <div className="cvheader">
        <div className="info-header">
          <div className="colors">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="green"></div>
          </div>
          <div className="inh">
            <h1>Information about:Miłosz Chudy, bychudy@gmail.com</h1>
          </div>
        </div>
        <div className="vara"></div>
      </div>

      <div className="cvalligner">
        <div className="cvleft">
          {tabs.map((tab) => (
            <div
              className={`tab${activeTab === tab.id ? "" : ""}`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <h1>{tab.label}</h1>
              <h1>{tab.count}</h1>
            </div>
          ))}
        </div>
        <div className="line"></div>
        <div className="cvright">{rendercart()}</div>
      </div>
    </div>
  );
};

export default CV;
