'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Globe, Github } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <>
            <section id="contact" className={`section ${styles.contact}`}>
                <motion.div
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.subtitle}>Get In Touch</span>
                    <h2 className={styles.title}>Let's Work Together</h2>
                </motion.div>

                <div className={styles.grid}>
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.infoItem}>
                            <div className={styles.icon}><Mail size={24} /></div>
                            <div className={styles.infoContent}>
                                <h4>Email</h4>
                                <p>vikashkus7309@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.icon}><Linkedin size={24} /></div>
                            <div className={styles.infoContent}>
                                <h4>LinkedIn</h4>
                                <p>linkedin.com/in/vikash-kushwaha-a97775250</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.icon}><Globe size={24} /></div>
                            <div className={styles.infoContent}>
                                <h4>LeetCode</h4>
                                <p>leetcode.com/u/its_vikash_kushwaha</p>
                            </div>
                        </div>

                        <div className={styles.socials}>
                            <a href="https://github.com/its-vikash-Kushwaha" className={styles.socialLink} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/vikash-kushwaha-a97775250/" className={styles.socialLink} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                            <a href="mailto:vikashkus7309@gmail.com" className={styles.socialLink}><Mail size={20} /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.formContainer}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formGroup}>
                                <label>Name</label>
                                <input type="text" placeholder="John Doe" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Email</label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Message</label>
                                <textarea rows="5" placeholder="Your Message..." required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerLogo}>VK.</div>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Vikash Kushwaha. Built with Next.js & Framer Motion.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Contact;
