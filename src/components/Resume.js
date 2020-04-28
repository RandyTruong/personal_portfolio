import React, { useMemo } from "react";
import "../styles/resume.css";

const educationFactory = eduList =>
  eduList.length > 0
    ? eduList.map(edu => (
        <div key={edu.school}>
          <h3>{edu.school}</h3>
          <p className="info">
            {edu.degree} <span>&bull;</span>
            <em className="date">{edu.graduated}</em>
          </p>
          <p>{edu.description}</p>
        </div>
      ))
    : [];

const worksFactory = works =>
  works.length > 0
    ? works.map(work => (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      ))
    : [];

const skillsFactory = skills =>
  skills.length > 0
    ? skills.map(skills => (
        <li key={skills.name}>
          <span
            style={{ width: skills.level }}
            className={`bar-expand ${skills.name.toLowerCase()}`}
          ></span>
          <em>{skills.name}</em>
        </li>
      ))
    : [];

const Resume = ({
  skillmessage = "skills messages",
  education = [],
  works = [],
  skills = [],
}) => {
   const educationList = useMemo(() => educationFactory(education), [education])
   const worksList = useMemo(() => worksFactory(works), [works])
   const skillsList = useMemo(() => skillsFactory(skills), [skills])

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{educationList}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{worksList}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skillsList}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
