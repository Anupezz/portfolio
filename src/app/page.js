"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Layers3, Download, Sparkles, GraduationCap, ExternalLink, FileText, MapPin, Send } from "lucide-react";

const skills = ["Java", "JavaScript", "Python", "C", "C++", "HTML", "CSS", "React", "Next.js", "Node.js", "MongoDB", "Git & GitHub"];
const projects = [
  { n: "01", title: "Dhwani", type: "Civic-tech platform", desc: "A digital platform concept that helps citizens report local issues and make their voices heard.", stack: ["React", "JavaScript", "CSS"], link: "#", code: "#" },
  { n: "02", title: "Smart Lost & Found", type: "Intelligent matching system", desc: "A lost-and-found platform concept that compares item details to surface likely matches.", stack: ["React", "Node.js", "MongoDB"], link: "#", code: "#" },
  { n: "03", title: "Expense Manager", type: "Personal finance app", desc: "A simple interface for recording expenses, reviewing spending and keeping budgets organised.", stack: ["HTML", "CSS", "JavaScript"], link: "#", code: "#" }
];
const reveal = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .65, ease: "easeOut" } } };

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <div className="grain" />
      <header className="header wrap">
        <a className="brand" href="#home" onClick={closeMenu}>ANUP<span>.</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Skills", "Projects", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="mailto:anupsalian777@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero wrap" id="home">
        <motion.div className="hero-copy" initial="hidden" animate="show" variants={reveal}>
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
          <h1>Building digital<br /><span className="outline-text">experiences</span><br />that matter<span className="accent">.</span></h1>
          <p className="hero-desc">I&apos;m <strong>ANUP</strong>, a Computer Science Engineering student focused on building clean, useful and thoughtful web experiences.</p>
          <div className="hero-actions"><a className="button button-fill" href="#projects">Explore my work <ArrowUpRight size={17} /></a><a className="text-link" href="#contact">Get in touch <ArrowDownRight size={16} /></a></div>
        </motion.div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .9, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .15 }}>
          <div className="art-ring ring-one" /><div className="art-ring ring-two" />
          <div className="lanyard"><span className="lanyard-loop" /><span className="lanyard-strap" /><span className="lanyard-clip" /><div className="id-card"><div className="id-card-top"><span>CEC • STUDENT ID</span><span className="id-chip">A</span></div><div className="id-avatar"><span>A</span></div><div className="id-card-name">ANUP</div><div className="id-card-role">COMPUTER SCIENCE & ENGINEERING</div><div className="id-card-rule" /><div className="id-card-info"><span>INSTITUTION</span><strong>CANARA ENGINEERING COLLEGE</strong><span>DEPARTMENT</span><strong>COMPUTER SCIENCE</strong></div><div className="id-card-foot"><span>BUILD • LEARN • CREATE</span><Code2 size={19} /></div></div></div>
          <div className="floating-tag tag-top"><Sparkles size={14} /> CURIOUS BY DEFAULT</div><div className="floating-tag tag-bottom">MANGALURU, INDIA ↗</div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <div className="ticker" aria-label="Areas of interest"><div className="ticker-track">{Array(2).fill(["FRONTEND DEVELOPMENT", "UI / UX", "PROBLEM SOLVING", "CREATIVE TECHNOLOGY"]).flat().map((x, i) => <span key={i}>{x}<b>✳</b></span>)}</div></div>

      <section className="section wrap" id="about">
        <motion.div className="section-head" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><span className="section-index">01 / ABOUT</span><h2>A little about<br /><em>what I do.</em></h2></motion.div>
        <motion.div className="about-content" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="about-lead">I enjoy turning ideas into <span>functional digital products.</span></p>
          <p className="body-copy">I&apos;m pursuing a B.Tech in Computer Science Engineering at Canara Engineering College. I&apos;m interested in full-stack development, intuitive interfaces and solving real-world problems through technology. I value continuous learning, practical experimentation and writing maintainable code.</p>
          <div className="education-cards"><div className="education-card"><span className="edu-icon"><GraduationCap size={20}/></span><div><span>UNDERGRADUATE</span><strong>Canara Engineering College</strong><small>B.Tech · Computer Science & Engineering</small><small className="edu-year">Expected graduation: 2028</small></div><ArrowUpRight size={16}/></div><div className="education-card"><span className="edu-icon"><Layers3 size={19}/></span><div><span>PRE-UNIVERSITY</span><strong>Canara PU College</strong><small>Pre-University Course (PUC)</small></div><ArrowUpRight size={16}/></div></div><div className="about-meta"><div><span>FOCUS</span><strong>Frontend & Full-Stack Development</strong></div><div><span>BASED IN</span><strong>Mangaluru, India</strong></div><div><span>DEPARTMENT</span><strong>CSE</strong></div></div>
        </motion.div>
      </section>

      <section className="section skills-section" id="skills"><div className="wrap">
        <motion.div className="section-head" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><span className="section-index">02 / TOOLKIT</span><h2>Tools of<br /><em>the trade.</em></h2></motion.div>
        <div className="skills-layout"><div className="skills-intro"><Layers3 size={30} /><p className="body-copy">A growing toolkit for building responsive interfaces and reliable applications. Always learning, always improving.</p></div><motion.div className="skill-grid" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>{skills.map((skill, i) => <div className="skill-chip" key={skill}><span>0{i + 1}</span>{skill}<ArrowUpRight size={15} /></div>)}</motion.div></div>
      </div></section>

      <section className="section wrap" id="projects">
        <motion.div className="section-head projects-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><span className="section-index">03 / SELECTED WORK</span><h2>Ideas into<br /><em>reality.</em></h2><p className="body-copy">A selection of projects and concepts I&apos;ve been working on. More experiments are on the way.</p></motion.div>
        <div className="project-list">{projects.map((p) => <motion.article className="project-row" key={p.n} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><div className="project-number">{p.n}</div><div className="project-main"><span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="project-tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div></div><div className="project-links"><a href={p.link} aria-label={`${p.title} live demo`}><ArrowUpRight /></a><a href={p.code} aria-label={`${p.title} source code`}><Github /></a></div></motion.article>)}</div>
      </section>

      <section className="contact-section" id="contact"><div className="wrap contact-inner"><motion.div className="contact-main" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><span className="section-index">04 / GET IN TOUCH</span><h2>Let&apos;s make<br />something<br /><em>meaningful.</em></h2><p className="contact-intro">Have an idea, an opportunity, or just want to connect? My inbox is always open.</p><a className="contact-email" href="mailto:anupsalian777@gmail.com">anupsalian777@gmail.com <ArrowUpRight /></a><div className="contact-socials"><a href="https://github.com/Anupezz" target="_blank" rel="noreferrer"><Github/> <span><small>CODE & PROJECTS</small>GitHub</span><ExternalLink size={15}/></a><a href="https://www.linkedin.com/in/anup-590477345/" target="_blank" rel="noreferrer"><Linkedin/> <span><small>LET&apos;S CONNECT</small>LinkedIn</span><ExternalLink size={15}/></a></div></motion.div><motion.div className="contact-panel" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><div className="contact-panel-head"><span>HAVE A PROJECT IN MIND?</span><span className="contact-live"><i/> OPEN TO OPPORTUNITIES</span></div><h3>Let&apos;s start a<br/>conversation.</h3><p>For internships, collaborations, project discussions or anything interesting in tech.</p><a className="contact-action" href="mailto:anupsalian777@gmail.com?subject=Hello%20Anup">Get in touch <Send size={17}/></a><a className="resume-download" href="/anup-resume.pdf" download><FileText size={17}/> Download my resume <Download size={15}/></a><div className="contact-location"><MapPin size={15}/> Mangaluru, Karnataka, India</div></motion.div></div></section>
      <footer className="footer wrap"><a className="brand" href="#home">ANUP<span>.</span></a><span>DESIGNED & BUILT BY ANUP © 2026</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
