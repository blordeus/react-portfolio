import React from "react";

import styles from "./Ex.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>
      <div>
        {skills.map((skill) => (
          <div key={skill.title}>
            <div>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
      <ul>
        {history.map((historyItem) => {
          return (
            <li key={history.title}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organization} Logo`}
              />
              <div>
                <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience) => (
                    <li key={experience}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Experience;
