import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Cybersecurity Consultant</h4>
                <h5>CyForte.ai · Seattle</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Reduced alert fatigue by 70% and triage time from 45 to 12
              minutes by engineering AI-driven detection workflows across
              CrowdStrike and Splunk.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Information Security Analyst</h4>
                <h5>CSG · New Delhi</h5>
              </div>
              <h3>2022–24</h3>
            </div>
            <p>
              Aligned 70+ controls with ISO 27001 and PCI-DSS 4.0, integrated
              CI/CD security checks, and improved control coverage by 40% via
              Python compliance automation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GRC & Threat Intelligence Intern</h4>
                <h5>SAFE Security · New Delhi</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Executed risk assessments and validated 30+ controls against ISO
              27001 and NIST 800-53, improving compliance posture and
              remediation turnaround through actionable threat intelligence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.S. Cybersecurity Engineering</h4>
                <h5>University of Washington</h5>
              </div>
              <h3>2024–26</h3>
            </div>
            <p>
              Graduate focus on cloud security architecture, secure systems, and
              applied cyber defense with hands-on research and technical writing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
