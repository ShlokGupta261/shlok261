import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaLinkedin, FaShieldAlt } from "react-icons/fa";
import HeroScene from "./components/HeroScene";
import {
  certifications,
  education,
  experiences,
  focusAreas,
  impactMetrics,
  profile,
  publications,
  skillGroups,
} from "./data/profile";
import "./App.css";

const containerMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function App() {
  return (
    <main className="app-shell">
      <section className="hero-section">
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            variants={containerMotion}
            initial="hidden"
            animate="visible"
          >
            <div className="eyebrow">
              <FaShieldAlt aria-hidden="true" />
              Security Engineering Portfolio
            </div>
            <h1>{profile.name}</h1>
            <h2>{profile.role}</h2>
            <p>{profile.summary}</p>
            <p className="objective">{profile.objective}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <FaEnvelope aria-hidden="true" />
                Contact Me
              </a>
              <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
            </div>
            <div className="meta-row">
              <span>{profile.location}</span>
              <span>{profile.phone}</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <HeroScene />
          </motion.div>
        </div>
      </section>

      <section className="card-section impact-section">
        <SectionHeading
          title="Security Impact"
          subtitle="Quantifiable outcomes from compliance engineering, threat modeling, and detection strategy."
        />
        <div className="impact-grid">
          {impactMetrics.map((metric) => (
            <motion.article
              key={metric.label}
              className="impact-card"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
            >
              <p className="impact-value">{metric.value}</p>
              <p className="impact-label">{metric.label}</p>
              <p className="impact-detail">{metric.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="card-section">
        <SectionHeading
          title="Core Focus Areas"
          subtitle="Domains where I deliver immediate value in modern security teams."
        />
        <div className="tag-list">
          {focusAreas.map((item) => (
            <motion.span
              key={item}
              className="tag"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="card-section">
        <SectionHeading
          title="Professional Experience"
          subtitle="Built for scale, compliance, and measurable risk reduction."
        />
        <div className="timeline">
          {experiences.map((entry) => (
            <motion.article
              key={`${entry.company}-${entry.role}`}
              className="timeline-card"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4 }}
            >
              <header>
                <h3>{entry.role}</h3>
                <p className="timeline-meta">
                  <strong>{entry.company}</strong> · {entry.location}
                </p>
                <p className="timeline-period">{entry.period}</p>
              </header>
              <ul>
                {entry.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="card-section two-column">
        <div>
          <SectionHeading title="Education" subtitle="Academic foundation in cybersecurity engineering." />
          <div className="stack-list">
            {education.map((item) => (
              <article key={`${item.school}-${item.degree}`} className="stack-card">
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <p className="muted">
                  {item.period} · {item.location}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading title="Certifications" subtitle="Validated credentials in security and privacy auditing." />
          <ul className="list-clean">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card-section two-column">
        <div>
          <SectionHeading title="Technical Skills" subtitle="Hands-on security, compliance, and engineering stack." />
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="chip-wrap">
                  {group.skills.map((skill) => (
                    <span key={`${group.title}-${skill}`} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading title="Publications" subtitle="Security research and practical vulnerability analysis." />
          <div className="stack-list">
            {publications.map((paper) => (
              <article key={paper.title} className="stack-card">
                <h3>{paper.title}</h3>
                <p className="muted">{paper.year}</p>
                <p>{paper.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="card-section contact-section">
        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55 }}
        >
          <h2>Let&apos;s build secure systems that scale.</h2>
          <p>
            I partner with engineering and leadership teams to strengthen cloud security, accelerate secure delivery,
            and operationalize security intelligence.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Start a conversation
              <FaArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn-secondary" href={profile.website} target="_blank" rel="noreferrer">
              View existing website
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <header className="section-heading">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </header>
  );
}

export default App;
