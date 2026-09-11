import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Send,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  profile,
  education,
  experience,
  projects,
  additionalProjects,
  skillGroups,
  certificates,
  activities,
  marqueeWords,
} from "./data";

import "./styles.css";


const iconMap = {
  globe: Globe2,
  bot: Bot,
  smartphone: Smartphone,
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const nav = [
    "About",
    "Journey",
    "Projects",
    "Skills",
    "Certificates",
    "Contact",
  ];

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  return (
    <div className="app">
      <AmbientBackground />

      <div className="noise" />

      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        nav={nav}
        scrollTo={scrollTo}
      />

      <main>

        <Hero scrollTo={scrollTo} />

        <Marquee />

        <About />

        <Journey />

        <Projects onOpen={setActiveProject} />

        <Skills />

        <Certificates />

        <Education />

        <Contact />

      </main>

      <Footer />

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

    </div>
  );
}


function AmbientBackground() {
  return (
    <div
      className="ambient-background"
      aria-hidden="true"
    >
      <div className="ambient-grid" />
      <div className="ambient-line line-1" />
      <div className="ambient-line line-2" />
      <div className="ambient-line line-3" />
      <div className="ambient-line line-4" />
      <div className="ambient-line line-5" />
      <div className="ambient-line line-6" />

      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />

    </div>
  );
}


function Navbar({
  menuOpen,
  setMenuOpen,
  nav,
  scrollTo,
}) {
  return (
    <header className="navbar">

      <div className="container nav-inner">

        <button
          className="brand"
          onClick={() => scrollTo("home")}
          aria-label="Go home"
        >

          <span className="brand-mark">
            P.G...
          </span>

          <span>
            <i><b>Pankaj</b></i>Ghosh<i>.</i>
          </span>

        </button>


        <nav
          className={
            menuOpen
              ? "nav-links open"
              : "nav-links"
          }
        >

          {nav.map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollTo(item.toLowerCase())
              }
            >
              {item}
            </button>
          ))}


          <a
            className="nav-cta"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <Download size={15} />
          </a>

        </nav>


        <button
          className="menu-btn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle menu"
        >

          {menuOpen ? (
            <X />
          ) : (
            <Menu />
          )}

        </button>

      </div>

    </header>
  );
}



function Hero({ scrollTo }) {
  return (
    <section
      id="home"
      className="hero section"
    >

      <div className="container hero-grid">

        <motion.div
          className="hero-copy"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="eyebrow">

            <span className="pulse" />

            Open to opportunities

          </div>


          <h1>
            I design, build &amp;

            <span className="gradient-text">
              {" "}ship{" "}
            </span>

            useful digital products.
          </h1>


          <p className="hero-sub">

            I’m <strong>{profile.name}</strong>, a{" "}
            {profile.role} working across web,
            mobile, backend APIs and practical
            AI-powered experiences.

          </p>


          <div className="hero-actions">

            <button
              className="btn primary"
              onClick={() =>
                scrollTo("projects")
              }
            >
              Explore projects
              <ArrowUpRight size={18} />
            </button>


            <button
              className="btn ghost"
              onClick={() =>
                scrollTo("contact")
              }
            >
              Start a conversation
              <Send size={16} />
            </button>

          </div>


          <div className="quick-links">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
              GitHub
            </a>


            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>


            <a
              href={`mailto:${profile.email}`}
            >
              <Mail size={17} />
              Email
            </a>

          </div>

        </motion.div>


        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.12,
          }}
        >

          <div className="hero-glow glow-one" />

          <div className="hero-glow glow-two" />


          <div className="developer-card">

            <div className="window-bar">

              <span />
              <span />
              <span />

              <small>
                pankaj.build
              </small>

            </div>


            <div className="code-lines">

              <CodeLine
                n="01"
                code={
                  <>
                    <i>const</i> profile = {"{"}
                  </>
                }
              />


              <CodeLine
                n="02"
                code={
                  <>
                    focus: <b>"Full Stack"</b>,
                  </>
                }
              />


              <CodeLine
                n="03"
                code={
                  <>
                    web: [
                    <b>"React"</b>,{" "}
                    <b>"Node"</b>,{" "}
                    <b>"MongoDB"</b>],
                  </>
                }
              />


              <CodeLine
                n="04"
                code={
                  <>
                    mobile: [
                    <b>"React Native"</b>,{" "}
                    <b>"Android"</b>],
                  </>
                }
              />


              <CodeLine
                n="05"
                code={
                  <>
                    ai: [
                    <b>"Gemini"</b>,{" "}
                    <b>"Groq"</b>],
                  </>
                }
              />


              <CodeLine
                n="06"
                code={
                  <>
                    mindset:{" "}
                    <b>
                      "Build → Learn → Improve"
                    </b>
                  </>
                }
              />


              <CodeLine
                n="07"
                code={
                  <>
                    {"}"};
                  </>
                }
              />


              <div className="terminal-line">

                <span>›</span>

                npm run create

                <CheckCircle2 size={15} />

              </div>

            </div>

          </div>


          <div className="floating-chip chip-one">
            <Sparkles size={15} />
            AI + Product
          </div>


          <div className="floating-chip chip-two">
            <Smartphone size={15} />
            Web → Mobile
          </div>

        </motion.div>

      </div>


      <div className="scroll-hint">

        Scroll to explore

        <ChevronDown size={15} />

      </div>

    </section>
  );
}


function CodeLine({ n, code }) {
  return (
    <div className="code-line">

      <span className="line-no">
        {n}
      </span>

      <span>
        {code}
      </span>

    </div>
  );
}

function Marquee() {

  const items = [
    ...marqueeWords,
    ...marqueeWords,
    ...marqueeWords,
  ];

  return (
    <div
      className="marquee"
      aria-label="Skills highlights"
    >

      <div className="marquee-track">

        {items.map((word, i) => (
          <span key={i}>
            {word}
            <b>✦</b>
          </span>
        ))}

      </div>

    </div>
  );
}


function SectionHeading({
  kicker,
  title,
  text,
}) {
  return (
    <div className="section-heading">

      <span className="section-kicker">
        {kicker}
      </span>

      <h2>
        {title}
      </h2>

      {text && (
        <p>
          {text}
        </p>
      )}

    </div>
  );
}


function About() {
  return (
    <section
      id="about"
      className="section"
    >

      <div className="container">

        <SectionHeading
          kicker="01 / Profile"
          title="A builder with a product mindset."
          text="I like moving between interface, API, database and mobile layers—understanding enough of the whole system to make the pieces work together."
        />


        <div className="about-grid">

          <div className="about-story glass-card">

            <div className="quote-mark">
              “
            </div>

            <p>
              Full Stack Developer with
              hands-on experience across
              responsive web applications,
              cross-platform mobile apps,
              REST APIs and AI integrations.
              My strongest projects combine
              a practical user experience with
              a backend that actually supports it.
            </p>


            <div className="about-location">

              <MapPin size={16} />

              {profile.location}

            </div>

          </div>


          <div className="stats-grid">

            <Stat
              value="9.31"
              label="B.Tech CGPA"
            />

            <Stat
              value="4"
              label="Project / training tracks"
            />

            <Stat
              value="MERN"
              label="Primary web stack"
            />

            <Stat
              value="AI + Android"
              label="Recent learning"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

function Stat({
  value,
  label,
}) {
  return (
    <div className="stat-card glass-card">

      <strong>
        {value}
      </strong>

      <span>
        {label}
      </span>

    </div>
  );
}

function Journey() {
  return (
    <section
      id="journey"
      className="section alt"
    >

      <div className="container">

        <SectionHeading
          kicker="02 / Journey"
          title="From web development to AI-powered mobile experiences."
          text="A timeline of internships and real-world project exposure, presented as capabilities rather than copied resume headings."
        />


        <div className="timeline">

          {experience.map((item, i) => (

            <motion.article
              className="timeline-item"
              key={`${item.company}-${item.role}`}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.08,
              }}
            >

              <div className="timeline-dot" />


              <div className="timeline-card glass-card">

                <div className="experience-icon">

                  {i === 1 ? (
                    <Smartphone size={20} />
                  ) : i === 3 ? (
                    <Bot size={20} />
                  ) : (
                    <BriefcaseBusiness size={20} />
                  )}

                </div>


                <div>

                  <span className="muted">
                    {item.period}
                  </span>

                  <h3>
                    {item.role}
                  </h3>

                  <h4>
                    {item.company}
                  </h4>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        <div className="achievement-strip glass-card">

          <Award size={25} />

          <div>

            <strong>
              Beyond the classroom
            </strong>

            <p>
              {activities.join("  •  ")}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

function Projects({ onOpen }) {

  return (
    <section
      id="projects"
      className="section"
    >

      <div className="container">

        <SectionHeading
          kicker="03 / Selected Work"
          title="Projects built to solve different kinds of problems."
          text="Social interaction, conversational AI and mobile service discovery—three different product directions built with modern development tools."
        />


        <div className="projects-grid">

          {projects.map((project, i) => {

            const Icon =
              iconMap[project.icon] ||
              Globe2;

            return (

              <motion.article
                className="project-card"
                key={project.name}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.1,
                }}
              >

                <div className="project-top">

                  <div className="project-icon">

                    <Icon size={23} />

                  </div>


                  <div className="project-links">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} GitHub`}
                    >
                      <Github size={18} />
                    </a>


                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} live`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}

                  </div>

                </div>


                <span className="project-number">
                  0{i + 1}
                </span>


                <h3>
                  {project.name}
                </h3>


                <h4>
                  {project.subtitle}
                </h4>


                <p>
                  {project.description}
                </p>


                <div className="tag-list">

                  {project.tags
                    .slice(0, 6)
                    .map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                </div>


                <button
                  className="text-btn"
                  onClick={() =>
                    onOpen(project)
                  }
                >
                  See build notes
                  <ArrowUpRight size={16} />
                </button>

              </motion.article>

            );
          })}

        </div>


        <MoreProjects />

      </div>

    </section>
  );
}

function MoreProjects() {

  const [active, setActive] =
    useState(0);


  const next = () => {

    setActive(
      (prev) =>
        (prev + 1) %
        additionalProjects.length
    );

  };


  const previous = () => {

    setActive(
      (prev) =>
        (prev -
          1 +
          additionalProjects.length) %
        additionalProjects.length
    );

  };


  return (
    <div className="more-projects">


      <div className="more-projects-top">

        <div>

          <span className="section-kicker">
            MORE BUILDS
          </span>


          <h3>

            Beyond the core.

            <br />

            <span>
              More things I've built.
            </span>

          </h3>

        </div>


        <div className="carousel-controls">

          <button
            onClick={previous}
            aria-label="Previous project"
          >
            <ArrowLeft size={17} />
          </button>


          <button
            onClick={next}
            aria-label="Next project"
          >
            <ArrowRight size={17} />
          </button>

        </div>

      </div>


      <div className="more-project-window">

        {additionalProjects.map(
          (project, index) => {

            const isActive =
              index === active;

            return (

              <motion.article
                key={project.name}
                className={
                  isActive
                    ? "extra-project active"
                    : "extra-project"
                }

                initial={{
                  opacity: 0,
                  x: 50,
                }}

                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : 50,
                  scale: isActive ? 1 : 0.97,
                }}

                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}

                style={{
                  pointerEvents: isActive
                    ? "auto"
                    : "none",
                }}
              >


                <div className="extra-project-header">

                  <span className="extra-project-number">
                    0{index + 1} / 0
                    {additionalProjects.length}
                  </span>


                  <span className="extra-project-type">
                    {project.tags[0]}
                  </span>

                </div>


                <div className="extra-project-main">


                  <div className="extra-project-content">

                    <span className="extra-project-subtitle">
                      {project.subtitle}
                    </span>


                    <h4>
                      {project.name}
                    </h4>


                    <p>
                      {project.description}
                    </p>


                    <div className="extra-project-tags">

                      {project.tags.map(
                        (tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        )
                      )}

                    </div>


                    <div className="extra-project-actions">

                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn ghost"
                        >
                          <Github size={15} />
                          Source
                        </a>
                      )}


                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="btn primary"
                        >
                          Live
                          <ArrowUpRight
                            size={15}
                          />
                        </a>
                      )}

                    </div>

                  </div>


                  <div className="extra-project-visual">

                    <div className="visual-grid" />

                    <div className="visual-circle" />

                    <div className="visual-text">
                      0{index + 1}
                    </div>

                  </div>

                </div>

              </motion.article>
            );
          }
        )}

      </div>


      <div className="carousel-footer">

        <div className="carousel-dots">

          {additionalProjects.map(
            (project, index) => (

              <button
                key={project.name}
                className={
                  index === active
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActive(index)
                }
                aria-label={`Show ${project.name}`}
              />

            )
          )}

        </div>


        <span className="carousel-label">
          {additionalProjects[active].name}
        </span>

      </div>

    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}) {

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >

      <motion.div
        className="modal glass-card"
        onClick={(e) =>
          e.stopPropagation()
        }
        initial={{
          opacity: 0,
          y: 25,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
      >

        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X />
        </button>


        <span className="section-kicker">
          Build notes
        </span>


        <h2>
          {project.name}
        </h2>


        <h4>
          {project.subtitle}
        </h4>


        <p>
          {project.description}
        </p>


        <ul>

          {project.bullets.map(
            (bullet) => (
              <li key={bullet}>
                {bullet}
              </li>
            )
          )}

        </ul>


        <div className="tag-list modal-tags">

          {project.tags.map(
            (tag) => (
              <span key={tag}>
                {tag}
              </span>
            )
          )}

        </div>


        <div className="modal-actions">

          <a
            className="btn primary"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} />
            Source
          </a>


          {project.live !== "#" && (
            <a
              className="btn ghost"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={17} />
              Live
            </a>
          )}

        </div>

      </motion.div>

    </div>
  );
}

function Skills() {

  return (
    <section
      id="skills"
      className="section alt"
    >

      <div className="container">

        <SectionHeading
          kicker="04 / Toolkit"
          title="A stack that covers interface, server, mobile and AI."
        />


        <div className="skills-grid">

          {skillGroups.map(
            (group, i) => (

              <motion.div
                className="skill-card glass-card"
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.05,
                }}
              >

                <div className="skill-heading">

                  <span>
                    {String(i + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <h3>
                    {group.title}
                  </h3>

                </div>


                <div className="skill-pills">

                  {group.skills.map(
                    (skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    )
                  )}

                </div>

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>
  );
}

function Certificates() {

  const [index, setIndex] =
    useState(0);

  const [paused, setPaused] =
    useState(false);


  useEffect(() => {

    if (paused) return;

    const id = setInterval(
      () =>
        setIndex(
          (v) =>
            (v + 1) %
            certificates.length
        ),
      3200
    );

    return () =>
      clearInterval(id);

  }, [paused]);


  return (
    <section
      id="certificates"
      className="section"
    >

      <div className="container">

        <SectionHeading
          kicker="05 / Credentials"
          title="Proof of learning, not just a list of technologies."
          text="The certificates are shown as a visual carousel so recruiters can inspect the actual documents."
        />


        <div
          className="certificate-showcase"
          onMouseEnter={() =>
            setPaused(true)
          }
          onMouseLeave={() =>
            setPaused(false)
          }
        >

          <button
            className="cert-arrow left"
            onClick={() =>
              setIndex(
                (index -
                  1 +
                  certificates.length) %
                  certificates.length
              )
            }
            aria-label="Previous certificate"
          >
            ‹
          </button>


          <div className="certificate-stage">

            <motion.div
              key={
                certificates[index].image
              }
              className="certificate-frame"
              initial={{
                opacity: 0,
                x: 40,
                rotate: 1,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 0,
              }}
              transition={{
                duration: 0.45,
              }}
            >

              <img
                src={
                  certificates[index].image
                }
                alt={`${certificates[index].title} certificate`}
              />

            </motion.div>


            <div className="certificate-info">

              <span className="section-kicker">
                0{index + 1} / 04
              </span>


              <h3>
                {certificates[index].title}
              </h3>


              <p>
                {certificates[index].issuer}
              </p>


              <small>
                {certificates[index].note}
                {" · "}
                {certificates[index].date}
              </small>


              <div className="certificate-dots">

                {certificates.map(
                  (certificate, i) => (

                    <button
                      key={certificate.title}
                      className={
                        i === index
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setIndex(i)
                      }
                      aria-label={`Show ${certificate.title}`}
                    />

                  )
                )}

              </div>

            </div>

          </div>


          <button
            className="cert-arrow right"
            onClick={() =>
              setIndex(
                (index + 1) %
                certificates.length
              )
            }
            aria-label="Next certificate"
          >
            ›
          </button>

        </div>

      </div>

    </section>
  );
}

function Education() {

  return (
    <section
      className="section"
      id="education"
    >

      <div className="container">

        <SectionHeading
          kicker="06 / Education"
          title="Academic foundation."
        />


        <div className="education-list">

          {education.map(
            (item) => (

              <div
                className="education-card glass-card"
                key={item.school}
              >

                <div className="education-icon">

                  <GraduationCap />

                </div>


                <div className="education-main">

                  <span className="muted">

                    {item.year}
                    {" · "}
                    {item.location}

                  </span>


                  <h3>
                    {item.title}
                  </h3>


                  <p>
                    {item.school}
                  </p>


                  <strong>
                    {item.meta}
                  </strong>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}

function Contact() {

  const [sent, setSent] =
    useState(false);


  const submit = (e) => {

    e.preventDefault();

    const form =
      new FormData(
        e.currentTarget
      );


    const subject =
      encodeURIComponent(
        `Portfolio contact: ${form.get(
          "name"
        )}`
      );


    const body =
      encodeURIComponent(
        `${form.get(
          "message"
        )}\n\nReply to: ${form.get(
          "email"
        )}`
      );


    window.location.href =
      `mailto:${profile.email}?subject=${subject}&body=${body}`;


    setSent(true);

  };


  return (
    <section
      id="contact"
      className="section contact-section"
    >

      <div className="container">

        <div className="contact-card">

          <div className="contact-copy">

            <span className="section-kicker">
              07 / Contact
            </span>


            <h2>
              Let’s turn an idea into
              something people can use.
            </h2>


            <p>
              For internships, software
              development opportunities,
              collaborations or a project
              discussion, send a message.
            </p>


            <div className="contact-mini">

              <MapPin size={15} />

              {profile.location}

            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={submit}
          >

            <label>

              Your name

              <input
                name="name"
                required
                placeholder="Your name"
              />

            </label>


            <label>

              Your email

              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
              />

            </label>


            <label>

              What are we building?

              <textarea
                name="message"
                required
                placeholder="Tell me a little about it..."
                rows="5"
              />

            </label>


            <button
              className="btn primary"
              type="submit"
            >
              <Send size={16} />
              Send message
            </button>


            {sent && (
              <span className="form-note">
                Your email app should open
                with the message prepared.
              </span>
            )}

          </form>

        </div>


        <div className="contact-bar">

          <a
            href={`mailto:${profile.email}`}
          >
            <Mail size={17} />
            {profile.email}
          </a>


          <a
            href={`tel:${profile.phone}`}
          >
            <Phone size={17} />
            {profile.phone}
          </a>


          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={17} />
            LinkedIn
          </a>


          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} />
            GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

function Footer() {

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  return (
    <footer className="site-footer">

      <div className="container">

        <div className="footer-main">


          <div className="footer-brand">

            <button
              className="footer-logo"
              onClick={scrollTop}
              aria-label="Back to top"
            >
              PG
            </button>


            <div>

              <h3>
                Pankaj Ghosh.
              </h3>

              <p>
                Full Stack Developer building
                useful digital experiences.
              </p>

            </div>

          </div>


          <div className="footer-status">

            <span className="footer-status-dot" />

            <span>
              Available for opportunities
            </span>

          </div>

        </div>


        <div className="footer-line" />


        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()}{" "}
            Pankaj Ghosh
          </span>


          <span className="footer-built">

            Built with

            <b>
              React
            </b>

            <span className="footer-separator">
              ·
            </span>

            Designed with intention

            <Sparkles size={13} />

          </span>


          <button
            className="back-top"
            onClick={scrollTop}
          >

            Back to top

            <ArrowUpRight
              size={14}
            />

          </button>

        </div>

      </div>

    </footer>
  );
}

createRoot(
  document.getElementById("root")
).render(
  <App />
);