'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, MapPin, Calendar, Trophy } from 'lucide-react';
import styles from './Experience.module.css';

const EDUCATION = [
    {
        title: 'Bachelor of Technology — Computer Science',
        org: 'KIET Group of Institutions, Delhi-NCR',
        date: '2024 – 2027',
        location: 'Ghaziabad, UP',
        score: 'CGPA: 8.4 / 10',
        desc: 'Specializing in backend systems, scalable architecture, data structures, and algorithms. Active contributor to tech projects and open-source communities.',
        current: true,
    },
    {
        title: 'Diploma in Computer Science Engineering',
        org: 'Government Polytechnic, Mau',
        date: '2021 – 2024',
        location: 'Mau, UP',
        score: '80%',
        desc: 'Solid foundation in programming, operating systems, computer networks, and core computing concepts.',
        current: false,
    },
    {
        title: 'High School (10th)',
        org: 'Janta High School, Ghazipur',
        date: '2021',
        location: 'Ghazipur, UP',
        score: '82%',
        desc: 'Strong foundation in Mathematics and Science.',
        current: false,
    },
];

const CERTIFICATIONS = [
    {
        title: 'Cybersecurity Analyst Job Simulation',
        org: 'Forage',
        date: 'Aug 2025',
        desc: 'Hands-on tasks in IAM fundamentals, threat analysis, and platform security integration.',
        tag: 'Cybersecurity',
    },
    {
        title: 'Learn Programming with Java',
        org: 'Wingspan',
        date: 'Jun 2025',
        desc: 'Practical Java programming, OOP principles, collections, and exception handling.',
        tag: 'Java',
    },
    {
        title: 'Cybersecurity Foundation',
        org: 'Palo Alto Networks Academy',
        date: 'May 2025',
        desc: 'Core cybersecurity principles, threat prevention strategies, and network security fundamentals.',
        tag: 'Cybersecurity',
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
});

export default function Experience() {
    return (
        <section id="experience" className={`section ${styles.experience}`}>

            {/* ── Heading ── */}
            <motion.div className={styles.heading} {...fadeUp()}>
                <span className={styles.label}>
                    <BookOpen size={13} /> Pathway
                </span>
                <h2 className={styles.title}>Education &amp; Certifications</h2>
                <p className={styles.subtitle}>
                    My academic journey and professional development milestones.
                </p>
            </motion.div>

            {/* ── Two‑column layout ── */}
            <div className={styles.columns}>

                {/* ── Left: Education ── */}
                <div className={styles.col}>
                    <motion.div className={styles.colHeader} {...fadeUp(0.1)}>
                        <div className={styles.colIcon}>
                            <GraduationCap size={20} />
                        </div>
                        <div>
                            <h3 className={styles.colTitle}>Education</h3>
                            <p className={styles.colSub}>{EDUCATION.length} degrees &amp; diplomas</p>
                        </div>
                    </motion.div>

                    <div className={styles.track}>
                        {EDUCATION.map((edu, i) => (
                            <motion.div key={i} className={styles.item} {...fadeUp(0.15 + i * 0.1)}>
                                {/* Timeline node */}
                                <div className={styles.node}>
                                    <div className={`${styles.nodeDot} ${edu.current ? styles.nodeDotActive : ''}`} />
                                    {i < EDUCATION.length - 1 && <div className={styles.nodeBar} />}
                                </div>

                                {/* Card */}
                                <div className={`${styles.card} ${edu.current ? styles.cardActive : ''}`}>
                                    {edu.current && (
                                        <span className={styles.currentBadge}>Current</span>
                                    )}
                                    <div className={styles.cardMeta}>
                                        <span className={styles.cardDate}>
                                            <Calendar size={12} /> {edu.date}
                                        </span>
                                        <span className={styles.scoreChip}>
                                            <Trophy size={11} /> {edu.score}
                                        </span>
                                    </div>
                                    <h4 className={styles.cardTitle}>{edu.title}</h4>
                                    <p className={styles.cardOrg}>
                                        <MapPin size={12} /> {edu.org}
                                    </p>
                                    <p className={styles.cardDesc}>{edu.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Right: Certifications ── */}
                <div className={styles.col}>
                    <motion.div className={styles.colHeader} {...fadeUp(0.1)}>
                        <div className={`${styles.colIcon} ${styles.colIconAccent}`}>
                            <Award size={20} />
                        </div>
                        <div>
                            <h3 className={styles.colTitle}>Certifications</h3>
                            <p className={styles.colSub}>{CERTIFICATIONS.length} professional certificates</p>
                        </div>
                    </motion.div>

                    <div className={styles.track}>
                        {CERTIFICATIONS.map((cert, i) => (
                            <motion.div key={i} className={styles.item} {...fadeUp(0.15 + i * 0.1)}>
                                {/* Timeline node */}
                                <div className={styles.node}>
                                    <div className={`${styles.nodeDot} ${styles.nodeDotAccent}`} />
                                    {i < CERTIFICATIONS.length - 1 && (
                                        <div className={`${styles.nodeBar} ${styles.nodeBarAccent}`} />
                                    )}
                                </div>

                                {/* Card */}
                                <div className={`${styles.card} ${styles.cardCert}`}>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.cardDate}>
                                            <Calendar size={12} /> {cert.date}
                                        </span>
                                        <span className={`${styles.tagChip}`}>{cert.tag}</span>
                                    </div>
                                    <h4 className={styles.cardTitle}>{cert.title}</h4>
                                    <p className={styles.cardOrg}>
                                        <Award size={12} /> {cert.org}
                                    </p>
                                    <p className={styles.cardDesc}>{cert.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
