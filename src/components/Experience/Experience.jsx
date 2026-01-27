'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const Experience = () => {
    const data = [
        {
            type: "Certification",
            title: "Cybersecurity Analyst Job Simulation",
            org: "Forage",
            date: "Aug 2025",
            desc: "Completed hands-on tasks in IAM fundamentals and platform integration."
        },
        {
            type: "Certification",
            title: "Getting Started with MongoDB Atlas",
            org: "MongoDB University",
            date: "Aug 2025",
            desc: "Acquired skills in database deployment and query optimization."
        },
        {
            type: "Education",
            title: "Bachelor of Technology in CSE",
            org: "KIET Group of Institutions, Delhi-NCR",
            date: "2024 - 2027",
            desc: "CGPA: 8.4 / 10. Focused on advanced backend systems and scalable architecture."
        },
        {
            type: "Certification",
            title: "Learn Programming with Java",
            org: "Wingspan",
            date: "Jun 2025",
            desc: "Gained practical experience in Java programming and OOP concepts."
        },
        {
            type: "Certification",
            title: "Cybersecurity Foundation",
            org: "Palo Alto Networks Academy",
            date: "May 2025",
            desc: "Learned core cybersecurity principles and threat prevention strategies."
        },
        {
            type: "Education",
            title: "Diploma in CSE",
            org: "Government Polytechnic, Mau",
            date: "2021 - 2024",
            desc: "80%. Build a solid foundation in programming and core computing concepts."
        },
        {
            type: "Education",
            title: "High School",
            org: "Janta High School, Ghazipur",
            date: "2021",
            desc: "82%. Key focus on Mathematics and Science."
        }
    ];

    return (
        <section id="experience" className={`section ${styles.experience}`}>
            <motion.div
                className={styles.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className={styles.subtitle}>Pathway</span>
                <h2 className={styles.title}>Education & Certifications</h2>
            </motion.div>

            <div className={styles.timeline}>
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`${styles.item} ${index % 2 !== 0 ? styles.itemLeft : ''}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                    >
                        <div className={styles.dot}></div>
                        <div className={styles.card}>
                            <span className={styles.date}>{item.date}</span>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                            <span className={styles.org}>{item.org}</span>
                            <p className={styles.desc}>{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
