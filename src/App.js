import React, { useRef} from "react";
import Typing from "./components/typing";
import CircleText from "./components/circleText";
import Icons from "./components/icons"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import "./App.css"
import "@fontsource/poppins";


// function App() {
//   const ref = useRef(null);

//   const options = {
//     smooth: true,
//     multiplier: 1,
//   } 

//   return (
//     <LocomotiveScrollProvider options={options} containerRef={ref}>
//       <div data-scroll-container ref={ref}>
//         <section data-scroll data-scroll-section="1">
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: "absolute", width: "100vw", marginBottom: "30vh"}}>
//               <Typing/>
//           </div>
//           <div style={{display: "flex", marginTop: "4vh"}}>
//             <Icons/>
//           </div>
//         </section>
//         <section data-scroll data-scroll-section="2" style={{backgroundColor: "blue"}}>
//           {/* <div style={{ position: 'absolute', marginTop: '50vh' }}>
//               <CircleText/>
//           </div> */}
//             <p>section 2</p>
//         </section>
//         <section data-scroll data-scroll-section="3" style={{backgroundColor: "red"}}>
//           {/* <div style={{ position: 'absolute', marginTop: '50vh' }}>
//               <CircleText/>
//           </div> */}
//             <p>section 3</p>
//         </section>
//         <section data-scroll data-scroll-section="4" style={{backgroundColor: "green"}}>
//             <p>section 4</p>
//         </section>
//       </div>
//     </LocomotiveScrollProvider>
//   );
// }

import useScrollSnap from "react-use-scroll-snap";
import Projects from "./components/projects";

function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 500, isDirectionEnabled: false });

  return (
      <main ref={scrollRef}>
        <section className="section1">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: "absolute", width: "100vw", marginBottom: "30vh", marginTop: "8vh"}}>
              <Typing/>
          </div>
          <div style={{display: "flex", marginTop: "12vh"}}>
            <Icons/>
          </div>
          <div class="arrow arrow-first"></div>
          <div class="arrow arrow-second"></div>
        </section>
        <section style={{}}>
          <div style={{ position: 'absolute', marginTop: '-60vh' }}>
              <CircleText/>
          </div>
          <div style={{display: "flex", width: "53vw", fontFamily: "Poppins", fontSize: "21px", lineHeight: "35px", textAlign: "center", marginTop: "33vh"}}>
            WELCOME!! My name is Kenny and I'm currently a junior studying computer science at UCLA! I'm currently looking for internships during Winter/Spring/Summer 2024 in software engineering and fullstack web/mobile development.
            <br />
            <br />
            Outside of boring career stuff, I'm a big fan of outdoor activities like hiking, coding for social good, and listening to music.
          </div>
        </section>
        <section style={{}}>
          <Projects />
        </section>
        <section style={{backgroundColor: "green"}}>
            <p>section 4</p>
        </section>
      </main>
  );
}



export default App;
