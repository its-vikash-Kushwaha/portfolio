'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Train, Users, Music, Layout, MessageSquare } from 'lucide-react';
import styles from './Projects.module.css';

const Projects = () => {
    const projects = [
        {
            title: "IRCTC Railway Reservation App",
            problem: "Traditional booking systems often struggle with seat management and concurrent user sessions during peak hours.",
            process: "Designed a relational database schema in MySQL and utilized Spring Boot's JPA to handle complex booking transactions and seat inventory management.",
            result: "A robust full-stack simulation capable of handling user authentication, real-time train searches, and multi-passenger bookings.",
            tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
            icon: <Train size={48} />,
            github: "https://github.com/its-vikash-Kushwaha",
            live: "#"
        },
        {
            title: "Student Attendance Tracker",
            problem: "Manual attendance tracking is prone to errors and lacks real-time visibility for administrators and parents.",
            process: "Implemented role-based access control (RBAC) and developed REST APIs to allow teachers to log attendance while providing analytics to admins.",
            result: "Increased tracking efficiency and provided a centralized dashboard for managing student attendance records and class data.",
            tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
            icon: <Users size={48} />,
            github: "https://github.com/its-vikash-Kushwaha",
            live: "#"
        },
        {
            title: "Simple Music Streaming Backend",
            problem: "Ensuring secure data retrieval and managing user-specific playlists efficiently without performance lag.",
            process: "Leveraged Spring Boot for song retrieval logic and integrated Firebase for secure user authentication and metadata storage.",
            result: "A secured backend that manages thousands of music tracks, metadata, and user-history with low latency.",
            tech: ["Java", "Spring Boot", "MySQL", "Firebase Auth"],
            icon: <Music size={48} />,
            github: "https://github.com/its-vikash-Kushwaha",
            live: "#"
        },
        {
            title: "Smart Result Dashboard",
            problem: "Academic result management is often scattered, making it difficult for students to track performance and admins to analyze data.",
            process: "Developed a Spring Boot backend with a MySQL database to centralize result publishing, using Thymeleaf for interactive dashboards and analytics.",
            result: "An intelligent platform that provides subject-wise breakdowns, performance charts, and a secure student portal for downloading results.",
            tech: ["Spring Boot", "Thymeleaf", "MySQL", "Spring Security"],
            icon: <Layout size={48} />,
            github: "https://github.com/its-vikash-Kushwaha/Smart-Result-Dashboard",
            live: "#"
        },
        {
            title: "Simple Chat Application",
            problem: "Implementing real-time communication without page refreshes requires efficient two-way messaging protocols.",
            process: "Built a real-time messaging system using WebSockets and the STOMP protocol, with SockJS fallback for cross-browser compatibility.",
            result: "A lightweight, interactive chat app demonstrating low-latency bidirectional communication between client and server.",
            tech: ["Spring Boot", "WebSockets", "STOMP", "SockJS", "Thymeleaf"],
            icon: <MessageSquare size={48} />,
            github: "https://github.com/its-vikash-Kushwaha/Simple-Chat-Application",
            live: "#"
        }
    ];

    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <motion.div
                className={styles.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className={styles.subtitle}>My Work</span>
                <h2 className={styles.title}>Featured Projects</h2>
            </motion.div>

            <motion.div
                className={styles.grid}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                    >
                        <div className={styles.image}>
                            {project.icon}
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>

                            <div className={styles.details}>
                                <div className={styles.detailItem}>
                                    <span className={styles.label}>Problem</span>
                                    <p>{project.problem}</p>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.label}>Process</span>
                                    <p>{project.process}</p>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.label}>Result</span>
                                    <p>{project.result}</p>
                                </div>
                            </div>

                            <div className={styles.tags}>
                                {project.tech.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <div className={styles.links}>
                                <a href={project.github} className={styles.link} target="_blank" rel="noopener noreferrer">
                                    <Github size={18} /> Code
                                </a>
                                <a href={project.live} className={styles.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={18} /> Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
