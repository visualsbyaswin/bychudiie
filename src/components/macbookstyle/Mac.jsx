import React, { useState } from "react";
import "./mac.css";
import { asstets,  macos, recycle, snippets } from "../../assets/assets";
import Info from "../Info/Info";
import ErrorLog from "../error/Error";
import ProfileInfo from "../profileinfo/Profile";
import CV from "../CV/CV";

const MacbookPro = () => {
  
  const [activeItem, setActiveItem] = useState(null);
  const [dupItem, dupActiveItem] = useState(null);
  const [onedupItem, onedupActiveItem] = useState(null);
  const [secdupItem, secdupActiveItem] = useState(null);
  const [thdupItem, thdupActiveItem] = useState(null);
  const [upstate, setupstate] = useState(null);

  const icons = [
    {
      src: macos.ae,
      type: "ae",
      name: "After Effects",
      desc: "Powerful motion graphics and compositing tool used for visual effects.",
    },
    {
      src: macos.ps,
      name: "Photoshop",
      type: "ps",
      desc: "Industry-leading photo editing and digital art creation software.",
    },
    {
      src: macos.ai,
      type: "ai",
      name: "Illustrator",
      desc: "Vector graphics editor for creating logos, icons, and illustrations.",
    },
    {
      src: macos.error,
      name: "Error Logs",
      type: "danger",
      desc: "Project debugging and crash reports.",
    },
  ];

  const icons2 = [
    {
      src: macos.cv,
      name: "Resume / CV",
      type: "cv",
      desc: "My professional CV and work experiences.",
    },
    {
      src: macos.gallery,
      name: "Gallery",
      type: "popup",

      sub:"Lowkey documentation",
      
      desc: "A curated collection of design and visual works.",
      imgs:snippets
    },
    {
      src: macos.inst,
      name: "Instagram",
      type: "link",
      link: "https://www.instagram.com/madeby.aswin/",
    },
    {
      src: macos.ml,
      name: "Mail",
      type: "link",
      link: "mailto:aswinv672@gmail.com",
    },
    {
      src: macos.bin,
      name: "Recycle Bin",
      sub:"Unrelated yet cool selection",
      type: "popup",
   imgs:recycle,
      desc: "Deleted or archived items.",

    },
  ];

  const handleClick = (item) => {
    if (item.type === "link") {
      // open link in new tab
      window.open(item.link, "_blank");
    } else if (item.type === "popup") {
      // toggle popup
      setActiveItem(activeItem?.name === item.name ? null : item);
    } else if (item.type === "danger") {
      dupActiveItem(dupItem?.name === item.name ? null : item);
    } else if (item.type === "gallery") {
      dupActiveItem(dupItem?.name === item.name ? null : item);
    } else if (item.type === "ps") {
      onedupActiveItem(onedupItem?.name === item.name ? null : item);
    } else if (item.type === "ae") {
      secdupActiveItem(secdupItem?.name === item.name ? null : item);
    } else if (item.type === "ai") {
      thdupActiveItem(thdupItem?.name === item.name ? null : item);
    } else if (item.type === "cv") {
      setupstate(upstate?.name === item.name ? null : item);
    }
  };

  return (
    <div className="macbook">
      <div className="maccenter">
        <div className="mcol">
          {icons.map((icon, index) => (
            <div
              className="icon-box"
              key={index}
              onClick={() => handleClick(icon)}
            >
              <img src={icon.src} alt={icon.name} />
              <p className="icon-label">{icon.name}</p>
            </div>
          ))}
        </div>

        <div className="line"></div>

        <div className="m2col">
          {icons2.map((icon, index) => (
            <div
              key={index}
              className="icon-box"
              onClick={() => handleClick(icon)}
            >
              <img src={icon.src} alt={icon.name} />
              <p className="icon-label">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Display */}
      {activeItem && (
        <div className="popup">
          <Info title={activeItem.name} image={activeItem.src} co={activeItem.imgs} subhading={activeItem.sub} />
          
        </div>
      )}

      {dupItem && (
        <ErrorLog
          title="Adobe Error"
          buttonText="Give up and go cry"
          image={dupItem.src}
          message="Graphic designer just lost his mind. Shame he didn't have a hard
                drive copy."
        />
      )}
      {onedupItem && (
        <ErrorLog
          title="Adobe Photoshop"
          buttonText="Start from scratch"
          image={onedupItem.src}
          message="I won't save this file, because there's not enough memory, even though you cleaned it up before starting to work. No auto-save? Pity…"
        />
      )}
      {secdupItem && (
        <ErrorLog
          title="After effects"
          buttonText="this is toomuch"
          image={secdupItem.src}
          message="Cleaned up your footage folder? Too bad there's no way to connect all those Photoshop layers and videos!"
        />
      )}
      {thdupItem && (
        <ErrorLog
          title="Adobe illustator"
          buttonText="Pled for mercy"
          image={thdupItem.src}
          message="No, I will not connect these shapes in the way you want, and neither will I explain why!"
        />
      )}

      {upstate && <CV />}
    </div>
  );
};

export default MacbookPro;
