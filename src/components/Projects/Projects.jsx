'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ExternalLink, Github, Star, GitFork,
    Code2, Calendar, GitBranch, Sparkles
} from 'lucide-react';
import styles from './Projects.module.css';

const LANG_COLORS = {
    JavaScript: '#f1e05a',
    Java:       '#b07219',
    Python:     '#3572A5',
};

/* ─── Own Projects (FarmXChain original removed) ─────────────── */
const MY_PROJECTS = [
    {
        name: 'college-discovery',
        display: 'College Discovery Platform',
        description:
            'Production-grade Next.js MVP for a College Discovery, Compare, and Watchlist platform with PostgreSQL, edge-compatible secure JWT cookies, transaction-safe average rating calculations, and dynamic paginated filtering.',
        language: 'JavaScript',
        stars: 0,
        forks: 0,
        github: 'https://github.com/its-vikash-Kushwaha/college-discovery',
        live: 'https://college-discovery-three.vercel.app',
        topics: ['nextjs', 'postgresql', 'jwt'],
        category: 'Full Stack',
        updated: '2026-05-28',
    },
    {
        name: 'Online-Quiz-Assessment',
        display: 'Online Quiz Assessment Platform',
        description:
            'Comprehensive online quiz and assessment platform with real-time question banks, timed tests, automated grading, and detailed performance analytics for students and administrators.',
        language: 'JavaScript',
        stars: 0,
        forks: 0,
        github: 'https://github.com/its-vikash-Kushwaha/Online-Quiz-Assessment-Platform',
        live: null,
        topics: ['quiz', 'assessment', 'education'],
        category: 'Full Stack',
        updated: '2026-05-31',
    },
    {
        name: 'IRCTC-Railways',
        display: 'IRCTC Railway Reservation',
        description:
            'Full-stack railway reservation simulation with user authentication, real-time train searches, multi-passenger bookings, and robust seat inventory management using Spring Boot JPA and MySQL.',
        language: 'Java',
        stars: 0,
        forks: 0,
        github: 'https://github.com/its-vikash-Kushwaha/IRCTC-Railways',
        live: null,
        topics: ['spring-boot', 'mysql', 'java', 'rest-api'],
        category: 'Backend',
        updated: '2026-05-25',
    },
];

/* ─── Open Source Contributions ──────────────────────────────── */
const CONTRIBUTIONS = [
    {
        name: 'Eventra',
        display: 'Eventra — Event Management System',
        description:
            'Comprehensive event management system empowering organizers to create, manage, and track events. Built with React frontend and Spring Boot backend — contributed features, bug fixes, and UI improvements across the platform.',
        language: 'JavaScript',
        stars: 0,
        forks: 0,
        github: 'https://github.com/its-vikash-Kushwaha/Eventra',
        live: 'https://eventra.sandeepvashishtha.in',
        topics: ['react', 'spring-boot', 'event-management'],
        role: 'Contributor',
        updated: '2026-05-30',
    },
    {
        name: 'leet-journal',
        display: 'LeetJournal — Coding Tracker',
        description:
            'The Leetcode Journal — a solution for students focused on interview preparation and enterprises alike. Track coding journeys, organize solutions by topic, and measure progress across DSA categories.',
        language: 'Java',
        stars: 0,
        forks: 0,
        github: 'https://github.com/its-vikash-Kushwaha/leet-journal',
        live: null,
        topics: ['leetcode', 'interview-prep', 'java', 'dsa'],
        role: 'Contributor',
        updated: '2026-05-25',
    },
];

const CATS = ['All', 'Full Stack', 'Backend'];

const card = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.42, ease: 'easeOut' } },
    exit:   { opacity: 0, y: -16, scale: 0.96, transition: { duration: 0.22 } },
};

export default function Projects() {
    const [tab, setCat] = useState('own');
    const [cat, setFilter] = useState('All');

    const shown = cat === 'All' ? MY_PROJECTS : MY_PROJECTS.filter(p => p.category === cat);

    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <div className={styles.blob1} aria-hidden="true" />
            <div className={styles.blob2} aria-hidden="true" />

            {/* Heading */}
            <motion.div
                className={styles.heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className={styles.label}>
                    <Code2 size={13} /> GitHub Work
                </span>
                <h2 className={styles.title}>Projects &amp; Contributions</h2>
                <p className={styles.desc}>
                    Things I&apos;ve built from scratch, and open-source repos I&apos;ve contributed to.
                </p>
            </motion.div>

            {/* Tab bar */}
            <motion.div
                className={styles.tabBar}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
            >
                <button
                    className={`${styles.tab} ${tab === 'own' ? styles.tabActive : ''}`}
                    onClick={() => { setCat('own'); setFilter('All'); }}
                    id="projects-tab-own"
                >
                    <Sparkles size={14} />
                    My Projects
                    <span className={styles.tabBadge}>{MY_PROJECTS.length}</span>
                </button>
                <button
                    className={`${styles.tab} ${tab === 'oss' ? styles.tabActive : ''}`}
                    onClick={() => setCat('oss')}
                    id="projects-tab-oss"
                >
                    <GitBranch size={14} />
                    Open Source
                    <span className={styles.tabBadge}>{CONTRIBUTIONS.length}</span>
                </button>
            </motion.div>

            <AnimatePresence mode="wait">
                {/* ── Own Projects ── */}
                {tab === 'own' && (
                    <motion.div key="own"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Category pills */}
                        <div className={styles.pills}>
                            {CATS.map(c => (
                                <button
                                    key={c}
                                    className={`${styles.pill} ${cat === c ? styles.pillActive : ''}`}
                                    onClick={() => setFilter(c)}
                                >
                                    {c}
                                    <span className={styles.pillCount}>
                                        {c === 'All' ? MY_PROJECTS.length : MY_PROJECTS.filter(p => p.category === c).length}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <motion.div className={styles.grid} layout>
                            <AnimatePresence mode="popLayout">
                                {shown.map(p => <Card key={p.name} project={p} type="own" />)}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                )}

                {/* ── Contributions ── */}
                {tab === 'oss' && (
                    <motion.div key="oss"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.ossNote}>
                            <GitBranch size={15} />
                            These are open-source repos I forked and contributed to — features, bug fixes, and improvements.
                        </div>
                        <motion.div className={styles.grid} layout>
                            <AnimatePresence mode="popLayout">
                                {CONTRIBUTIONS.map(p => <Card key={p.name} project={p} type="oss" />)}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* GitHub CTA */}
            <motion.div
                className={styles.cta}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <a
                    href="https://github.com/its-vikash-Kushwaha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaBtn}
                    id="projects-github-all"
                >
                    <Github size={18} />
                    View all repositories on GitHub
                    <ExternalLink size={14} />
                </a>
            </motion.div>
        </section>
    );
}

/* ─── Card ──────────────────────────────────────────────────── */
function Card({ project, type }) {
    const dotColor = LANG_COLORS[project.language] || '#8b949e';
    return (
        <motion.article
            layout
            className={`${styles.card} ${type === 'oss' ? styles.cardOSS : ''}`}
            variants={card}
            initial="hidden"
            animate="show"
            exit="exit"
            whileHover={{ y: -6 }}
        >
            <div className={styles.cardBar} />

            {/* Top row */}
            <div className={styles.cardTop}>
                <div className={styles.badges}>
                    {type === 'oss' ? (
                        <span className={`${styles.badge} ${styles.badgeOSS}`}>
                            <GitBranch size={10} /> {project.role}
                        </span>
                    ) : (
                        <span className={`${styles.badge} ${styles.badgeOwn}`}>
                            {project.category}
                        </span>
                    )}
                    {project.stars > 0 && (
                        <span className={styles.statChip}>
                            <Star size={11} fill="currentColor" /> {project.stars}
                        </span>
                    )}
                    {project.forks > 0 && (
                        <span className={styles.statChip}>
                            <GitFork size={11} /> {project.forks}
                        </span>
                    )}
                </div>
                <div className={styles.iconBtns}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className={styles.iconBtn} aria-label="GitHub repo" title="View on GitHub">
                        <Github size={16} />
                    </a>
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className={`${styles.iconBtn} ${styles.iconBtnLive}`} aria-label="Live demo">
                            <ExternalLink size={16} />
                        </a>
                    )}
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                <h3 className={styles.cardTitle}>{project.display}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
            </div>

            {/* Topics */}
            <div className={styles.topics}>
                {project.topics.slice(0, 4).map(t => (
                    <span key={t} className={styles.topic}>#{t}</span>
                ))}
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                <div className={styles.lang}>
                    <span className={styles.langDot} style={{ background: dotColor }} />
                    {project.language}
                </div>
                <div className={styles.updated}>
                    <Calendar size={11} />
                    {new Date(project.updated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </div>
            </div>
        </motion.article>
    );
}
