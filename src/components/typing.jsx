
import React from 'react';
import Typewriter from 'typewriter-effect';
import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";

function Typing() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <div style={{ fontSize: '50px', fontFamily: 'Montserrat' }}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .stop()
                            .typeString("hi! i'm kenny 👋")
                            .pauseFor(1800) // pause after the initial text
                            .deleteAll()
                            .typeString("i'm an <strong>engineer</strong>")
                            .pauseFor(1500) // pause after "I'm an engineer"
                            .deleteChars(11)
                            .pauseFor(500) // pause after "I'm an engineer"
                            .typeString("a <strong>developer</strong>")
                            .pauseFor(1500) // pause after "I'm a developer"
                            .deleteChars(11)
                            .pauseFor(500) // pause after "I'm an engineer"
                            .typeString("an <strong>entrepreneur</strong>")
                            .pauseFor(1500)
                            .deleteAll()
                            .typeString("<strong>Kenny Wan</strong>")
                            .start();
                    }}
                    options={{
                        delay: 72, // Change the delay to set typing speed
                    }}
                />
            </div>
        </div>
    );
}



export default Typing;
