'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Globe, Github, Send, CheckCircle, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target);
        formData.append("access_key", "b620be6f-97bf-49eb-997c-1892e0404108");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                e.target.reset();
                // Reset after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error("Error", data);
                setStatus('idle');
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error", error);
            setStatus('idle');
            alert("Something went wrong. Please try again.");
        }
    };
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
                        <div className={styles.infoItem}>
                            <div className={styles.icon}><Phone size={24} /></div>
                            <div className={styles.infoContent}>
                                <h4>Phone</h4>
                                <p>+91 6307532939</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.icon}><MapPin size={24} /></div>
                            <div className={styles.infoContent}>
                                <h4>Location</h4>
                                <p>Muradnagar, Ghaziabad, Delhi NCR</p>
                            </div>
                        </div>

                        <div className={styles.socials}>
                            <a href="https://github.com/its-vikash-Kushwaha" className={styles.socialLink} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/vikash-kushwaha-a97775250/" className={styles.socialLink} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                            <a href="mailto:vikashkus7309@gmail.com" className={styles.socialLink}><Mail size={20} /></a>
                            <a href="tel:6307532939" className={styles.socialLink}><Phone size={20} /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.formContainer}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    className={styles.successMessage}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    key="success"
                                >
                                    <CheckCircle size={60} color="var(--primary)" />
                                    <h3>Message Received!</h3>
                                    <p>Thank you for reaching out. I'll get back to you shortly.</p>
                                    <button onClick={() => setStatus('idle')} className={styles.backBtn}>
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    className={styles.form}
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key="form"
                                >
                                    <div className={styles.formGroup}>
                                        <label>Name</label>
                                        <input type="text" name="name" placeholder="John Doe" required disabled={status === 'sending'} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Email</label>
                                        <input type="email" name="email" placeholder="john@example.com" required disabled={status === 'sending'} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Message</label>
                                        <textarea name="message" rows="5" placeholder="Your Message..." required disabled={status === 'sending'}></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={status === 'sending'}
                                    >
                                        {status === 'sending' ? (
                                            <>Sending...</>
                                        ) : (
                                            <>
                                                Send Message <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
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
