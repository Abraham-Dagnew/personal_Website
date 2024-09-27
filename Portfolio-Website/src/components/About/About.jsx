import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer
              </h3>
              <p>
              I develop complete web applications, handling both front-end interfaces and back-end systems to ensure smooth user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity Enthusiast</h3>
              <p>
              With experience as a Windows and Unix specialist, I focus on building secure systems and protecting applications from vulnerabilities.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>
              Problem Solver
             </h3>
              <p>
              I enjoy tackling complex challenges and finding efficient solutions, whether it's through coding, debugging, or optimizing workflows.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
