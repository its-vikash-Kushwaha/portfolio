'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import styles from './Hero.module.css';

const TECH_STACK = ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'React', 'Next.js', 'MongoDB'];

export default function Hero() {
    return (
        <section className={`section ${styles.hero}`} id="home">
            {/* Ambient grid */}
            <div className={styles.gridBg} aria-hidden="true" />
            {/* Gradient orbs */}
            <div className={styles.orb1} aria-hidden="true" />
            <div className={styles.orb2} aria-hidden="true" />

            <div className={styles.layout}>
                {/* Left — content */}
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                >
                    {/* Status badge */}
                    <div className={styles.statusBadge}>
                        <span className={styles.statusDot} />
                        Available for Opportunities
                    </div>

                    <h1 className={styles.name}>
                        Hi, I&apos;m{' '}
                        <span className={styles.nameHighlight}>Vikash Kushwaha</span>
                    </h1>

                    <p className={styles.role}>
                        <span className={styles.roleLabel}>Aspiring</span>{' '}
                        Backend Developer
                    </p>

                    <p className={styles.bio}>
                        Building scalable, secure, and efficient backend systems.
                        Specialised in <strong>Java &amp; Spring Boot</strong>, passionate about{' '}
                        <strong>Data Structures &amp; Algorithms</strong> and cloud-driven solutions.
                    </p>

                    {/* Location */}
                    <div className={styles.location}>
                        <MapPin size={14} />
                        Muradnagar, Delhi NCR, India
                    </div>

                    {/* CTA buttons */}
                    <div className={styles.ctas}>
                        <Link href="#contact" className={styles.primaryCta} id="hero-cta-contact">
                            Let&apos;s Talk
                            <ArrowRight size={17} />
                        </Link>
                        <a
                            href="https://drive.google.com/file/d/10ZGCzoxxjd0WrNBYwH23lhrqnAX7rUot/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryCta}
                            id="hero-cta-resume"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>
                    </div>

                    {/* Social links */}
                    <div className={styles.socials}>
                        <a
                            href="https://github.com/its-vikash-Kushwaha"
                            target="_blank" rel="noopener noreferrer"
                            className={styles.socialIcon}
                            id="hero-github"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vikash-kushwaha-a97775250/"
                            target="_blank" rel="noopener noreferrer"
                            className={styles.socialIcon}
                            id="hero-linkedin"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>

                    {/* Stats row */}
                    <div className={styles.statsRow}>
                        <div className={styles.stat}>
                            <span className={styles.statNum}>8.4</span>
                            <span className={styles.statLab}>CGPA</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>5+</span>
                            <span className={styles.statLab}>Projects Built</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>4</span>
                            <span className={styles.statLab}>Certifications</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right — profile card */}
                <motion.div
                    className={styles.profileCol}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                >
                    <div className={styles.profileCard}>
                        {/* Avatar */}
                        <div className={styles.avatarRing}>
                            <div className={styles.avatar}>
                                <img src="/profile.png" alt="Vikash Kushwaha" className={styles.avatarImg} />
                            </div>
                        </div>

                        {/* Tech stack */}
                        <div className={styles.techStack}>
                            <p className={styles.techLabel}>Tech Stack</p>
                            <div className={styles.techTags}>
                                {TECH_STACK.map(t => (
                                    <span key={t} className={styles.techTag}>{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* Floating chips */}
                        <motion.div
                            className={`${styles.chip} ${styles.chipTop}`}
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        >
                            🎓 B.Tech CSE
                        </motion.div>
                        <motion.div
                            className={`${styles.chip} ${styles.chipBottom}`}
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                        >
                            ⚡ Open to Work
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className={styles.scrollHint}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <motion.div
                    className={styles.scrollDot}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                />
            </motion.div>
        </section>
    );
}
