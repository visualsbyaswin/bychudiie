import React, { useState, useRef, useEffect } from "react";
import "./position.css";
import { imageData } from "../../assets/assets";

const Absolutly = () => {
  const containerRef = useRef(null);

  const initialPositions = imageData.map(() => ({
    x: Math.random() * 70 + 10,
    y: Math.random() * 70 + 10,
  }));

  const [position, setPosition] = useState(initialPositions);
  const [activeId, setActiveId] = useState(null);
  const [dragging, setDragging] = useState(null);

  const handleMouseDown = (e, index) => {
    e.preventDefault();
    setDragging({ index, startX: e.clientX, startY: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (dragging !== null && containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const dx = e.clientX - dragging.startX;
      const dy = e.clientY - dragging.startY;

      setPosition((prev) =>
        prev.map((pos, i) =>
          i === dragging.index
            ? {
                x: Math.min(100, Math.max(0, pos.x + (dx / width) * 100)),
                y: Math.min(100, Math.max(0, pos.y + (dy / height) * 100)),
              }
            : pos
        )
      );

      setDragging((prev) => ({
        ...prev,
        startX: e.clientX,
        startY: e.clientY,
      }));
    }
  };

  const handleMouseUp = () => setDragging(null);

  const handleClick = (id) => {
    if (!dragging) setActiveId(activeId === id ? null : id);
  };

  const activeItem = imageData.find((i) => i.id === activeId);
const panelRef = useRef(null);
useEffect(() => {
  if (panelRef.current) {
    // quick test: jump to bottom to see if scrolling works
    panelRef.current.scrollTop = panelRef.current.scrollHeight;
  }
}, [activeItem]);
  return (
    <section
      ref={containerRef}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="Absolutly"
    >
      {imageData.map((item, i) => (
        <div
          className="dragmain"
          key={item.id}
          style={{
            position: "absolute",
            top: `${position[i].y}%`,
            left: `${position[i].x}%`,
            cursor:dragging?"grabbing":"grab",
            zIndex:activeId===item.id?10:1,
            width:"10vw",
            maxWidth:"120px",
            transition:dragging?"none":"all 0.2s ease",
          }}
             onMouseDown={(e) => handleMouseDown(e,i)}
          onClick={() => handleClick(item.id)}
        >
          <div className="dragimg"><img src={item.img} alt="" /></div>
          <div className="dragp"><p>{item.title}</p></div>
        </div>
      ))}
      {activeItem && (
        <div class="overlay">
              <div className="info-panell">
          <div className="info-header">
            <div className="colors">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="green"></div>
            </div>
            <div className="inh">
              <h1>Information about: {activeItem.title}</h1>
            </div>
          </div>
          <div className="vara"></div>
          <div className="info-contents">
            <div className="info-profile">
              <div className="primg">
                <img src={activeItem.img} alt="" />
              </div>
              <div className="prcon">
                <h1> {activeItem.title}</h1>
                <h1>mtody cordon</h1>
              </div>
            </div>

            <div className="secchapter">
              <p>
                Collaboration on the graphic design for Młody Korden’s album{" "}
                <em>Pierwszy Swag w Polsce</em> (yeah, again with Michulec).
                <br />
                For this project, I was mainly responsible for creating a custom
                typeface inspired by Arabic lettering, which became one of the
                key visual elements of the release. I also designed a fan-style
                scarf as part of the merch — playing off pop-cultural clichés
                and ironic visual language, in tune with the album’s tone.
              </p>
              <p>
                Beyond that, I was actively involved in developing the physical
                packaging — working closely with Michulec, who led the final
                layout and execution. Together we built a cohesive,
                tongue-in-cheek visual system that ties the whole release
                together.
              </p>
            </div>
            <div className="thirdchapter">
              <div className="one">
                {" "}
                <h1>Details</h1>
              </div>
              <div className="two">
                <h1>Type:</h1>{" "}
                <h1>Graphic Design &gt; Typography &gt; Merch</h1>
              </div>
              <div className="three">
                <p>Preview:</p>
              </div>
            </div>
            <div className="fourthchapter">
              <div className="imgs">
                <img src={activeItem.img} alt="" />
              </div>
            </div>
          </div>
        </div>
        </div>
    
      )}
    </section>
  );
};

export default Absolutly;
