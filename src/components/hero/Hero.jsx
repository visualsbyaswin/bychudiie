import React from 'react'
import "./hero.css"
import { asstets } from '../../assets/assets'
const Hero = () => {
  return (
<section className="hero">
    <div className="heroimg">
        <img src={asstets.hero} alt="" />
    </div>
</section>
  )
}

export default Hero




// import React from "react";
// import "./mac.css";
// import { macos } from "../../assets/assets";

// const MacbookPro = () => {
//   const icons = [
//     { src: macos.ae, name: "After Effects" },
//     { src: macos.ps, name: "Photoshop" },
//     { src: macos.ai, name: "Illustrator" },
//     { src: macos.error, name: "Error Logs" },
//   ];

//   const icons2 = [
//     { src: macos.cv, name: "Resume / CV" },
//     { src: macos.gallery, name: "Gallery" },
//     { src: macos.inst, name: "Instagram" },
//     { src: macos.ml, name: "Mail" },
//     { src: macos.bin, name: "Recycle Bin" },
//   ];

//   return (
//     <div className="macbook">
//       <div className="maccenter">
//         <div className="mcol">
//           {icons.map((icon, index) => (
//             <div className="icon-box" key={index}>
//               <img src={icon.src} alt={icon.name} />
//               <p className="icon-label">{icon.name}</p>
//             </div>
//           ))}
//         </div>

//         <div className="line"></div>

//         <div className="m2col">
//           {icons2.map((icon, index) => (
//             <div className="icon-box" key={index}>
//               <img src={icon.src} alt={icon.name} />
//               <p className="icon-label">{icon.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MacbookPro;
// .macbook {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: #fff;
// }

// .maccenter {
//   display: flex;
//   gap: 40px;
//   align-items: flex-start;
// }

// .mcol, .m2col {
//   display: flex;
//   flex-direction: column;
//   gap: 25px;
//   align-items: center;
// }

// .icon-box {
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   transition: transform 0.2s ease;
// }

// .icon-box img {
//   width: 60px;
//   height: 60px;
//   cursor: pointer;
//   transition: transform 0.3s ease;
// }

// .icon-box:hover img {
//   transform: scale(1.15);
// }

// .icon-label {
//   position: absolute;
//   bottom: -25px;
//   background: rgba(0, 0, 0, 0.7);
//   color: #fff;
//   font-size: 12px;
//   padding: 3px 8px;
//   border-radius: 6px;
//   opacity: 0;
//   transform: translateY(5px);
//   pointer-events: none;
//   transition: all 0.3s ease;
//   white-space: nowrap;
// }

// .icon-box:hover .icon-label {
//   opacity: 1;
//   transform: translateY(0);
// }
