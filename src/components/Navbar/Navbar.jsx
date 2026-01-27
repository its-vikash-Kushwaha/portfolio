'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`${styles.navContainer} ${scrolled ? styles.containerScrolled : ''}`}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className={styles.logo}>
                        VK<span>.</span>
                    </Link>
                </motion.div>

                {/* Desktop Links */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={link.href} className={styles.navLink}>
                                {link.name}
                                <span className={styles.navIndicator}></span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                <div className={styles.actions}>
                    <motion.button
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>

                    <div className={styles.desktopActions}>
                        <a href="https://drive.google.com/file/d/1rkO-WBe8KNmAfW6ZyDGqaH_UIjbH1IAD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.cvBtn}>
                            CV
                        </a>
                        <Link href="#contact" className={styles.hireBtn}>
                            Hire Me
                        </Link>
                    </div>

                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className={styles.mobileNavLinks}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={styles.mobileNavLink}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name} <ArrowRight size={16} />
                                    </Link>
                                </li>
                            ))}
                            <li className={styles.mobileActions}>
                                <a href="https://drive.google.com/file/d/1rkO-WBe8KNmAfW6ZyDGqaH_UIjbH1IAD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.cvBtn}>
                                    CV
                                </a>
                                <Link href="#contact" className={styles.hireBtn} onClick={() => setMobileMenuOpen(false)}>
                                    Hire Me
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
