import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/shlokgupta261/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — shlokgupta261
              </a>
            </p>
            <h4>Email</h4>
            <p>
              <a href="mailto:shlokgupta261@gmail.com" data-cursor="disable">
                shlokgupta261@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              M.S. Cybersecurity Engineering, University of Washington —
              2024–2026
            </p>
            <p>
              B.Tech Computer Science (Cybersecurity), Sushant University —
              2018–2022
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ShlokGupta261"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shlokgupta261/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://shlokgupta261.github.io/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shlok Gupta</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
