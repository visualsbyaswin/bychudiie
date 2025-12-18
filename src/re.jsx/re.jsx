import React, { useState } from "react";
import "./mac.css";
import { macos } from "../../assets/assets";

const MacbookPro = () => {
  const [activeItem, setActiveItem] = useState(null);

  const icons = [
    { src: macos.ae, name: "After Effects", desc: "Powerful motion graphics and compositing tool used for visual effects." },
    { src: macos.ps, name: "Photoshop", desc: "Industry-leading photo editing and digital art creation software." },
    { src: macos.ai, name: "Illustrator", desc: "Vector graphics editor for creating logos, icons, and illustrations." },
    { src: macos.error, name: "Error Logs", desc: "Project debugging and crash reports." },
  ];

  const icons2 = [
    { src: macos.cv, name: "Resume / CV", desc: "My professional CV and work experiences." },
    { src: macos.gallery, name: "Gallery", desc: "A curated collection of design and visual works." },
    { src: macos.inst, name: "Instagram", desc: "Social media handle showcasing my creative journey." },
    { src: macos.ml, name: "Mail", desc: "Contact and communication portal." },
    { src: macos.bin, name: "Recycle Bin", desc: "Deleted or archived items." },
  ];

  const handleClick = (item) => {
    setActiveItem(activeItem?.name === item.name ? null : item);
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
              className="icon-box"
              key={index}
              onClick={() => handleClick(icon)}
            >
              <img src={icon.src} alt={icon.name} />
              <p className="icon-label">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Details Panel */}
      {activeItem && (
        <div className="info-panel" onClick={() => setActiveItem(null)}>
          <div className="info-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeItem.src} alt={activeItem.name} />
            <h2>{activeItem.name}</h2>
            <p>{activeItem.desc}</p>
            <button className="close-btn" onClick={() => setActiveItem(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MacbookPro;
{/* <style>
    .macbook {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 100vh;
  position: relative;
}

.maccenter {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.mcol, .m2col {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
}

.icon-box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.icon-box img {
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease;
}

.icon-box:hover img {
  transform: scale(1.15);
}

.icon-label {
  position: absolute;
  bottom: -25px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 6px;
  opacity: 0;
  transform: translateY(5px);
  pointer-events: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.icon-box:hover .icon-label {
  opacity: 1;
  transform: translateY(0);
}

.info-panel {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
  z-index: 10;
}

.info-content {
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.4s ease;
}

.info-content img {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
}

.info-content h2 {
  margin-bottom: 10px;
  font-size: 20px;
  color: #333;
}

.info-content p {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}

.close-btn {
  background: #000;
  color: #fff;
  padding: 6px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.close-btn:hover {
  background: #444;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

</style> */}