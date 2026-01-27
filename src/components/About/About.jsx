'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Globe } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
    const skills = [
        {
            category: "Programming Languages",
            icon: <Code2 size={20} />,
            items: ["Java", "Python"]
        },
        {
            category: "Backend & APIs",
            icon: <Server size={20} />,
            items: ["Spring Boot", "REST APIs", "Firebase Authentication", "Backend Development"]
        },
        {
            category: "Databases",
            icon: <Database size={20} />,
            items: ["MySQL", "SQLite", "Room Database", "Firebase Realtime Database", "MongoDB Atlas"]
        },
        {
            category: "Web & Tooling",
            icon: <Globe size={20} />,
            items: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Git/GitHub", "Linux"]
        },
        {
            category: "Additional Skills",
            icon: <Code2 size={20} />,
            items: ["DSA", "OOP Concepts", "UI/UX Design", "XML Layouts"]
        }
    ];

    return (
        <section id="about" className={`section ${styles.about}`}>
            <motion.div
                className={styles.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className={styles.subtitle}>My Journey</span>
                <h2 className={styles.title}>About Me</h2>
            </motion.div>

            <div className={styles.grid}>
                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.text}>
                        <p>
                            I am an <span className={styles.highlightText}>Aspiring Backend Developer</span> with hands-on experience in Java and Spring Boot for building RESTful APIs and scalable web applications. Currently pursuing B.Tech at KIET Group of Institutions.
                        </p>
                        <br />
                        <p>
                            Skilled in <span className={styles.highlightText}>MySQL, Firebase, and backend integration</span> with secure user authentication. I am proficient in designing database-driven solutions and implementing efficient backend services for real-world projects.
                        </p>
                        <br />
                        <p>
                            My passion lies in <span className={styles.highlightText}>Data Structures & Algorithms</span> and architecting systems that are both performant and scalable. I am always eager to learn new technologies and contribute to innovative tech solutions.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.skillsArea}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.skillCategory}>
                            <h3>{skill.icon} {skill.category}</h3>
                            <div className={styles.skillTags}>
                                {skill.items.map((item, i) => (
                                    <span key={i} className={styles.skillTag}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
