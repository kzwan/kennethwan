
import React from 'react';
import Projects from './projects';
import './projects.css'; // Make sure to link the styles correctly
import SectionHeader from '../sectionheader';

const ProjectsContainer = () => {
    const projects = [
        {
          title: "Skid Row Arts Alliance",
          imgSrc: require("../../images/planit.png"),
          code: "https://www.github.com",
          projectLink: "https://elancerz.com/",
          tech: ["React Native", "Node.js", "MongoDB", "AWS S3"],
          description:
            "A iOS/Android app that aims to connect underrepresented artists in Skid Row within their communities and beyond.",
          modalContent: (
            <>
              <p>
                Worked as a senior developer and created dynamic reusable components,
                integrated calendly, messaging, and project management features.
              </p>
              <p>
                The tech stack is based on Next.js with the custom Styled components,
                connected to a Laravel backend, with data stored in MySQL.
              </p>
            </>
          ),
        },
        {
          title: "Itineroo",
          imgSrc: require("../../images/planit.png"),
          code: "https://www.github.com",
          projectLink: "#",
          tech: ["React Native", "Appwrite", "Node.js", "JavaScript"],
          description:
            "👑 1st place at LAHACKS 2023. Itineroo is an itinerary creating and sharing social media app, compatible with iOS and Android.",
          modalContent: (
            <>
              <p>
                Worked as a senior developer for this web application. Integrated
                API&apos;s, Created dynamic and reusable components.
              </p>
              <p>
                I work primarily on the frontend, creating reusable components and
                integrating API.
              </p>
              <p>
                The team in total consists of 3 developers. This is a passion project
                for all of us.
              </p>
            </>
          ),
        },
        {
          title: "Bryft",
          imgSrc: require("../../images/planit.png"),
          code: "https://www.github.com",
          projectLink:
            "https://play.google.com/store/apps/details?id=com.ellinx.lightapps.worshiphim&hl=en&gl=US",
          tech: ["React", "Firebase", "Node.js", "Express.js"],
          description:
            "WorshipHIM is a chord and lyrics app developed to help ease everyone in their worship to God.",
          modalContent: (
            <>
              <p>
                WorshipHIM is a chord and lyrics app developed to help ease everyone
                in their worship to God. So that all may know, from the rising of the
                sun to its setting, That there is none besides God. He is the Lord and
                there&apos;s no other! Praise Him, Worship Him!
              </p>
              <p>This is a very fun project that I made using React Native.</p>
            </>
          ),
        },
        {
          title: "Cohabit",
          imgSrc: require("../../images/planit.png"),
          code: "https://www.github.com",
          projectLink: "https://worshiphim.vercel.app/",
          tech: ["Swift", "PostgreSQL", "Vapor", "Docker"],
          description:
            "Landing Page of WorshipHIM mobile application for showcasing feature-rich and tools of the app.",
          modalContent: (
            <>
              <p>
                This is another self project that I made to showcase our mobile app.
              </p>
              <p>
                I integrated ko-fi donation and uses Template for this Next.js Project.
                I also use a plugin for scrapping data from our Google Play to display
                directly on the landing page.
              </p>
            </>
          ),
        },
      ];

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />
      <div className="projects">
        {projects.map((project) => {
          return <Projects key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsContainer;
