'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={`section ${styles.hero}`}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className={styles.badge}>🚀 Aspiring Backend Developer</span>
                <h1 className={styles.title}>
                    Hi, I am <br />
                    <span className={styles.highlight}>Vikash Kushwaha</span>
                </h1>
                <p className={styles.description}>
                    Building scalable, secure, and efficient backend systems. Specialized in Java, Spring Boot, and cloud-driven database solutions.
                </p>
                <div className={styles.buttons}>
                    <Link href="#contact" className={styles.primaryBtn}>
                        Let's Talk <ArrowUpRight size={18} />
                    </Link>
                    <a href="https://drive.google.com/file/d/1rkO-WBe8KNmAfW6ZyDGqaH_UIjbH1IAD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                        View Resume
                    </a>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>8.4</span>
                        <span className={styles.statLabel}>B.Tech CGPA</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>5+</span>
                        <span className={styles.statLabel}>Major Projects</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>4</span>
                        <span className={styles.statLabel}>Certifications</span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className={styles.imageContainer}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                        <img src="/profile.png" alt="Vikash Kushwaha" className={styles.profileImg} />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
