import React, { useRef} from "react";
import Typing from "./components/typing";
import CircleText from "./components/circleText";
import Icons from "./components/icons"
// import Project from "./components/project/projects";
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

import Projects from "./components/project/projectscontainer";
import About from "./components/about/about";
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut, Animator } from "react-scroll-motion";
import SectionHeader from "./components/sectionheader";
import Contact from "./components/contact/contact";

function App() {
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
      <main>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <section style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: "absolute", width: "100vw", marginBottom: "30vh", marginTop: "8vh"}}>
                    <Typing/>
                </div>
                <div style={{display: "flex", marginTop: "12vh"}}>
                  <Icons/>
                </div>
                <div class="arrow arrow-first"></div>
                <div class="arrow arrow-second"></div>
              </section>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <section style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "solid", borderColor: "gray", backgroundColor: "#FFFEFC", width: "100vw", borderTopLeftRadius: "47px", borderTopRightRadius: "47px"}}>
              <About/>
            </section>
          </ScrollPage>
        <div style={{}}>
          <Projects />
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{ position: 'absolute', marginTop: '-45vh', marginBottom: "10vh" }}>
              <CircleText/>
          </div>
          <Contact/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        </ScrollContainer>
      </main>
  );
}



export default App;
