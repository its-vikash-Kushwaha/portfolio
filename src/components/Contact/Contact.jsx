'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail, Linkedin, Globe, Github,
    Send, CheckCircle, Phone, MapPin, MessageSquare
} from 'lucide-react';
import styles from './Contact.module.css';

const CONTACT_ITEMS = [
    {
        icon: <Mail size={20} />,
        label: 'Email',
        value: 'vikashkus7309@gmail.com',
        href: 'mailto:vikashkus7309@gmail.com',
    },
    {
        icon: <Linkedin size={20} />,
        label: 'LinkedIn',
        value: 'linkedin.com/in/vikash-kushwaha',
        href: 'https://www.linkedin.com/in/vikash-kushwaha-a97775250/',
    },
    {
        icon: <Globe size={20} />,
        label: 'LeetCode',
        value: 'leetcode.com/u/its_vikash_kushwaha',
        href: 'https://leetcode.com/u/its_vikash_kushwaha',
    },
    {
        icon: <Phone size={20} />,
        label: 'Phone',
        value: '+91 6307532939',
        href: 'tel:+916307532939',
    },
    {
        icon: <MapPin size={20} />,
        label: 'Location',
        value: 'Muradnagar, Delhi NCR, India',
        href: null,
    },
];

export default function Contact() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        const formData = new FormData(e.target);
        formData.append('access_key', 'b620be6f-97bf-49eb-997c-1892e0404108');
        try {
            const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('idle');
                alert('Something went wrong. Please try again.');
            }
        } catch {
            setStatus('idle');
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <>
            <section id="contact" className={`section ${styles.contact}`}>
                {/* Heading */}
                <motion.div
                    className={styles.heading}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.label}>
                        <MessageSquare size={13} /> Get In Touch
                    </span>
                    <h2 className={styles.title}>Let&apos;s Work Together</h2>
                    <p className={styles.subtitle}>
                        I&apos;m actively seeking internships and full-time roles. Whether you have an opportunity or just want to say hi — my inbox is always open.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {/* Left info panel */}
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.infoCard}>
                            <p className={styles.infoIntro}>
                                I&apos;m Vikash Kushwaha — a backend-focused developer from Delhi NCR who loves building things that scale. If you have a job opportunity, project, or collaboration in mind, let&apos;s connect!
                            </p>

                            <div className={styles.contactList}>
                                {CONTACT_ITEMS.map(item => (
                                    <div key={item.label} className={styles.contactRow}>
                                        <div className={styles.contactIcon}>{item.icon}</div>
                                        <div className={styles.contactText}>
                                            <span className={styles.contactLabel}>{item.label}</span>
                                            {item.href ? (
                                                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                                                    rel="noopener noreferrer" className={styles.contactValue}>
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className={styles.contactValue}>{item.value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.socials}>
                                <a href="https://github.com/its-vikash-Kushwaha" target="_blank"
                                    rel="noopener noreferrer" className={styles.social} id="contact-github" aria-label="GitHub">
                                    <Github size={19} />
                                </a>
                                <a href="https://www.linkedin.com/in/vikash-kushwaha-a97775250/" target="_blank"
                                    rel="noopener noreferrer" className={styles.social} id="contact-linkedin" aria-label="LinkedIn">
                                    <Linkedin size={19} />
                                </a>
                                <a href="mailto:vikashkus7309@gmail.com" className={styles.social} id="contact-email" aria-label="Email">
                                    <Mail size={19} />
                                </a>
                                <a href="tel:+916307532939" className={styles.social} id="contact-phone" aria-label="Phone">
                                    <Phone size={19} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right form */}
                    <motion.div
                        className={styles.formWrap}
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    className={styles.success}
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.92 }}
                                >
                                    <CheckCircle size={52} color="var(--accent)" />
                                    <h3>Message Received!</h3>
                                    <p>Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                                    <button onClick={() => setStatus('idle')} className={styles.backBtn}>
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    className={styles.form}
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className={styles.formRow}>
                                        <div className={styles.field}>
                                            <label htmlFor="cf-name">Full Name</label>
                                            <input
                                                id="cf-name"
                                                type="text"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                disabled={status === 'sending'}
                                            />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="cf-email">Email Address</label>
                                            <input
                                                id="cf-email"
                                                type="email"
                                                name="email"
                                                placeholder="john@company.com"
                                                required
                                                disabled={status === 'sending'}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="cf-subject">Subject</label>
                                        <input
                                            id="cf-subject"
                                            type="text"
                                            name="subject"
                                            placeholder="Job Opportunity / Collaboration"
                                            disabled={status === 'sending'}
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="cf-message">Message</label>
                                        <textarea
                                            id="cf-message"
                                            name="message"
                                            rows="5"
                                            placeholder="Tell me about the opportunity or project..."
                                            required
                                            disabled={status === 'sending'}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={status === 'sending'}
                                        id="contact-submit"
                                    >
                                        {status === 'sending' ? (
                                            <><span className={styles.spinner} /> Sending...</>
                                        ) : (
                                            <>Send Message <Send size={17} /></>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerInner}>
                    <span className={styles.footerLogo}>
                        <span>&lt;</span>VK<span>/&gt;</span>
                    </span>
                    <p className={styles.footerText}>
                        © {new Date().getFullYear()} Vikash Kushwaha · Built with Next.js &amp; Framer Motion
                    </p>
                    <div className={styles.footerLinks}>
                        <a href="https://github.com/its-vikash-Kushwaha" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/vikash-kushwaha-a97775250/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:vikashkus7309@gmail.com">Email</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
