import React from "react";
import "./icons.css"
// import { Link } from 'react-scroll';
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import { ReactComponent as Avatar } from '../images/avatar.svg';
import { ReactComponent as LinkedIn } from '../images/linkedin.svg'
import { ReactComponent as Github } from '../images/github.svg'
import { ReactComponent as Resume } from '../images/resume.svg'
import { ReactComponent as Spotify } from '../images/spotify.svg'


function Icons() {
    return (
        <div style={{display: 'flex', flexDirection: "row", fontFamily: "Poppins", fontSize: "0.8em", fontWeight: "bold", width: "35vw", justifyContent: "space-between"}}>
            <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}} className="icon-hover">
                <Resume
                    className="resume"
                />
                <p style={{marginTop: "3px"}}>Resume</p>
            </div>
            <a href="https://www.linkedin.com/in/kennethzwan/" target="_blank" rel="noopener noreferrer">
                <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}} className="icon-hover">
                    <LinkedIn
                        className="linkedin"
                    />
                    <p style={{marginTop: "3px"}}>LinkedIn</p>
                </div>
            </a>
            <a href="https://github.com/kzwan" target="_blank" rel="noopener noreferrer">
                <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}} className="icon-hover">
                    <Github
                        className="github"
                    />
                    <p style={{marginTop: "3px"}}>GitHub</p>
                </div>
            </a>
            <a href="https://open.spotify.com/user/imkennywan" target="_blank" rel="noopener noreferrer">
                <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}} className="icon-hover">
                    <Spotify
                        className="spotify"
                    />
                    <p style={{marginTop: "3px"}}>Spotify</p>
                </div>
            </a>
        </div>
    );
}

export default Icons;
