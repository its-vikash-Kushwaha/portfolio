'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
    { label: 'About',      href: '#about'      },
    { label: 'Projects',   href: '#projects'   },
    { label: 'Timeline',   href: '#experience' },
    { label: 'Contact',    href: '#contact'    },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled]       = useState(false);
    const [menuOpen, setMenuOpen]       = useState(false);
    const [active, setActive]           = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <div className={styles.inner}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo} id="nav-logo">
                        <span className={styles.logoBracket}>&lt;</span>
                        VK
                        <span className={styles.logoBracket}>/&gt;</span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className={styles.links} role="navigation" aria-label="Main navigation">
                        {NAV_LINKS.map((l, i) => (
                            <motion.li key={l.label}
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.07 }}
                            >
                                <Link
                                    href={l.href}
                                    className={`${styles.link} ${active === l.href ? styles.linkActive : ''}`}
                                    onClick={() => setActive(l.href)}
                                    id={`nav-${l.label.toLowerCase()}`}
                                >
                                    {l.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Right actions */}
                    <div className={styles.actions}>
                        <button
                            className={styles.themeBtn}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            id="nav-theme-toggle"
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={theme}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                                </motion.span>
                            </AnimatePresence>
                        </button>

                        <a
                            href="https://drive.google.com/file/d/10ZGCzoxxjd0WrNBYwH23lhrqnAX7rUot/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.resumeBtn}
                            id="nav-resume"
                        >
                            <Download size={15} />
                            Resume
                        </a>

                        <Link href="#contact" className={styles.hireBtn} id="nav-hire">
                            Hire Me
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            className={styles.hamburger}
                            onClick={() => setMenuOpen(o => !o)}
                            aria-label="Toggle mobile menu"
                            id="nav-mobile-toggle"
                        >
                            {menuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={styles.drawer}
                        initial={{ opacity: 0, y: -12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                    >
                        <ul className={styles.drawerLinks}>
                            {NAV_LINKS.map(l => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className={styles.drawerLink}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.drawerBottom}>
                            <a
                                href="https://drive.google.com/file/d/10ZGCzoxxjd0WrNBYwH23lhrqnAX7rUot/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.resumeBtn}
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                <Download size={15} /> Resume
                            </a>
                            <Link
                                href="#contact"
                                className={styles.hireBtn}
                                onClick={() => setMenuOpen(false)}
                                style={{ textAlign: 'center' }}
                            >
                                Hire Me
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
