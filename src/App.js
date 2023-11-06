import React, { useRef} from "react";
import Typing from "./components/typing";
import CircleText from "./components/circleText";
import Icons from "./components/icons"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import "./App.css"


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

function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10 });

  return (
      <main ref={scrollRef}>
        <section>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: "absolute", width: "100vw", marginBottom: "30vh"}}>
              <Typing/>
          </div>
          <div style={{display: "flex", marginTop: "4vh"}}>
            <Icons/>
          </div>
        </section>
        <section style={{backgroundColor: "blue"}}>
          {/* <div style={{ position: 'absolute', marginTop: '50vh' }}>
              <CircleText/>
          </div> */}
            <p>section 2</p>
        </section>
        <section style={{backgroundColor: "red"}}>
          {/* <div style={{ position: 'absolute', marginTop: '50vh' }}>
              <CircleText/>
          </div> */}
            <p>section 3</p>
        </section>
        <section style={{backgroundColor: "green"}}>
            <p>section 4</p>
        </section>
      </main>
  );
}



export default App;
