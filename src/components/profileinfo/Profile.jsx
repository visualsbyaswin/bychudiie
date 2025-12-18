import React, { useState } from "react";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About me", count: 18 },
    { id: "cv", label: "CV", count: 48 },
    { id: "interests", label: "Interests", count: "∞" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="content">
            <h3>About me</h3>
            <p>
              Art Director, Graphic Designer, Photographer, and even Stylist sometimes, 
              but honestly, I do way more than that... To put it simply, 
              I bring ideas to life through visuals and manage everything 
              that makes a project come together in the end.
            </p>
            <p><strong>I can do...</strong></p>
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
                <li key={item}>✔️ {item}</li>
              ))}
            </ul>
          </div>
        );
      case "cv":
        return (
          <div className="content">
            <h3>CV</h3>
            <p>Experience, achievements, and career highlights go here...</p>
          </div>
        );
      case "interests":
        return (
          <div className="content">
            <h3>Interests</h3>
            <p>Photography, Motion graphics, Music visuals, Design experiments...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <div className="sidebar">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.label}</span>
            <span className="count">{tab.count}</span>
          </div>
        ))}
      </div>

      <div className="main-content">{renderContent()}</div>
    </div>
  );
};

export default ProfileInfo;
