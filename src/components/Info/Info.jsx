import React from "react";
import { asstets } from "../../assets/assets";

const Info = ({title,image,co,subhading}) => {
  return (
    <div className="info-contents">
        <div className="info-header">
            <div className="colors">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="green"></div>
            </div>
            <div className="inh">
              <h1>Information about: {title}</h1>
            </div>
          </div>
          <div className="vara"></div>
      <div className="info-profile">
        <div className="primg">
          <img src={image} alt="" />
        </div>
        <div className="prcon">
          <h1>{title}</h1>
          <h1>{subhading}</h1>
        </div>
      </div>
    <div className="out">
        <h1>Preview:</h1>
    </div>
      <div className="images">
             {co && Array.isArray(co) &&(
              <div className="info-gallery">
                {co.map((imgobj,i)=>(
                  <img src={imgobj.img} key={i} alt={`img-${i}`} />
                ))}
              </div>
             )}
      </div>
    </div>
  );
};

export default Info;
