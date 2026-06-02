'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Globe, Layers, BookOpen } from 'lucide-react';
import styles from './About.module.css';

const SKILLS = [
    {
        icon: <Code2 size={18} />,
        category: 'Languages',
        tags: ['Java', 'Python', 'JavaScript', 'SQL'],
        color: 'brand',
    },
    {
        icon: <Server size={18} />,
        category: 'Backend & APIs',
        tags: ['Spring Boot', 'REST APIs', 'JWT', 'WebSockets'],
        color: 'accent',
    },
    {
        icon: <Database size={18} />,
        category: 'Databases',
        tags: ['MySQL', 'PostgreSQL'],
        color: 'brand',
    },
    {
        icon: <Globe size={18} />,
        category: 'Frontend & Tools',
        tags: ['React', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'GitHub'],
        color: 'accent',
    },
    {
        icon: <Layers size={18} />,
        category: 'CS Fundamentals',
        tags: ['DSA', 'OOP', 'System Design Basics', 'Linux'],
        color: 'brand',
    },
];

const HIGHLIGHTS = [
    { num: '8.4',  label: 'CGPA',            sub: 'B.Tech CSE — KIET'          },
    { num: '80%',  label: 'Diploma',          sub: 'CSE — Govt. Polytechnic'    },
    { num: '4',    label: 'Certifications',   sub: 'Java, Security'    },
    { num: '5+',   label: 'Projects',         sub: 'Full Stack Backend'    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};
const item = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            {/* Heading */}
            <motion.div
                className={styles.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className={styles.label}>
                    <BookOpen size={13} /> About Me
                </span>
                <h2 className={styles.title}>The Developer Behind the Code</h2>
                <p className={styles.subtitle}>
                    A backend-focused engineer who loves clean architecture, solid data models, and shipping things that work.
                </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
                className={styles.stats}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {HIGHLIGHTS.map(h => (
                    <motion.div key={h.label} className={styles.statCard} variants={item}>
                        <span className={styles.statNum}>{h.num}</span>
                        <span className={styles.statLabel}>{h.label}</span>
                        <span className={styles.statSub}>{h.sub}</span>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bio + Skills */}
            <div className={styles.grid}>
                {/* Bio */}
                <motion.div
                    className={styles.bio}
                    initial={{ opacity: 0, x: -28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.bioCard}>
                        <div className={styles.bioInner}>
                            <p>
                                I&apos;m an <strong>Aspiring Backend Developer</strong> currently pursuing B.Tech in
                                Computer Science at <strong>KIET Group of Institutions</strong>, Delhi-NCR (CGPA 8.4).
                            </p>
                            <p>
                                My core expertise lies in building <strong>RESTful APIs and scalable web
                                applications</strong> with Java and Spring Boot. I&apos;m passionate about designing clean
                                database schemas with MySQL, and implementing robust authentication systems.
                            </p>
                            <p>
                                Outside of backend work, I have hands-on experience with <strong>full-stack Next.js
                                platforms</strong>, and real-time communication using
                                WebSockets. I&apos;m always curious about new tech and love turning complex problems
                                into elegant solutions.
                            </p>
                            <p>
                                I&apos;m actively looking for <strong>internships and full-time opportunities</strong> where
                                I can contribute, grow, and collaborate with great teams.
                            </p>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/vikash-kushwaha-a97775250/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkedinBtn}
                            id="about-linkedin"
                        >
                            View LinkedIn Profile →
                        </a>
                    </div>
                </motion.div>

                {/* Skills */}
                <motion.div
                    className={styles.skills}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {SKILLS.map(s => (
                        <motion.div key={s.category} className={styles.skillGroup} variants={item}>
                            <div className={`${styles.skillHeader} ${styles[`color-${s.color}`]}`}>
                                {s.icon}
                                <span>{s.category}</span>
                            </div>
                            <div className={styles.skillTags}>
                                {s.tags.map(t => (
                                    <span key={t} className={styles.skillTag}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
