import React from 'react';
import './stats.css';
import { AiFillCode, AiFillSmile } from 'react-icons/ai';

const Stats = () => {
  return (
    <div className="stats">
        <div className="statColumn">
            <div style={{marginBottom: "20px", display: "flex", alignItems:"center"}}>
                <AiFillCode size="1.7rem" color="var(--brand)" />
                <span style={{fontSize:"22px", fontWeight: "bold"}}>Languages</span>
            </div>
            <div className="statGrid">
                <span className="chip">JavaScript</span>
                <span className="chip">Python</span>
                <span className="chip">C/C++</span>
                <span className="chip">TypeScript</span>
                <span className="chip">Swift</span>
                <span className="chip">SQL</span>
                <span className="chip">Objective-C</span>
                <span className="chip">HTML/CSS</span>
            {/* Include other chip elements */}
            </div>
        </div>
        <div className="statColumn">
            <div style={{marginBottom: "20px", display: "flex", alignItems:"center", marginTop: "-6vh"}}>
                <AiFillSmile size="1.7rem" color="var(--brand)" />
                <span style={{fontSize:"22px", fontWeight: "bold"}}>Tools/Frameworks</span>
            </div>
          <div className="statGrid">
            <span className="chip">React.js</span>
            <span className="chip">React Native</span>
            <span className="chip">Git</span>
            <span className="chip">Docker</span>
            <span className="chip">Vapor</span>
            <span className="chip">Vue.js</span>
            <span className="chip">Node.js</span>
            <span className="chip">Express.js</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">Linux</span>
            <span className="chip">Bash</span>
            <span className="chip">TensorFlow</span>
            <span className="chip">MongoDB</span> 
            <span className="chip">AWS S3</span>
            <span className="chip">GraphQL</span>
            {/* Include other chip elements */}
          </div>
        </div>
    </div>
  );
};

export default Stats;
