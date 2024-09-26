"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
      setMenuOpen(!menuOpen);
  }
  
  return (
    <>
      <header>
        <a href="#" className="logo-holder">
        <div className="logo">C</div>
        <div className="logo-text">Portfolio Website</div>
      </a>
      <nav>
        <ul id="menu" className={menuOpen ? "active" : ""}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="mailto:caleebbuth@gmail.com" className="button black">Contact Me</a>
          </li>
        </ul>
        <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
          </svg>

        </a>

      </nav>
    </header >
      <main>
        <section className="hero container">
          <div className="hero-white">
            <div>
              <h1><small>Hi! I'm</small>
                Caleb Buth
              </h1>
              <p>
                I am a Developer in training, I'm working towards my degree in computer science and teaching
                myself how to build day in and day out.
                <span>I'm interested in many different topics in computer science including: machine learning,
                  quantum computing, robotics, and web development!</span>
              </p>
              <div className="call-to-action">
                <a href="./PersonalResume.pdf" className="button">
                  View Resume
                </a>
                <a href="mailto:caleebbuth@gmail.com" className="button">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/CaleebButh">
                  <img src="images/github.png" alt="Github Link" width="46" />
                </a>
                <a href="https://www.linkedin.com/in/caleb-buth-b878062a1/">
                  <img src="images/linkdin.png" alt="LinkedIn" width="46" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-green">
            <img src="./images/calebpic.png" alt="Caleb Buth" width="'100%" />

          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./images/logos/html.png" alt="HTML" width="128" />
              <img src="./images/logos/node.png" alt="HTML" width="128" />
              <img src="./images/logos/python.png" alt="HTML" width="100" />
              <img src="./images/logos/javascript.png" alt="HTML" width="128" />
              <img src="./images/logos/vscode.png" alt="HTML" width="110" />
              <img src="./images/logos/react.png" alt="HTML" width="128" />
              <img src="./images/logos/mongo.png" alt="HTML" width="128" />
              <img src="./images/logos/html.png" alt="HTML" width="128" />
              <img src="./images/logos/node.png" alt="HTML" width="128" />
              <img src="./images/logos/python.png" alt="HTML" width="100" />
              <img src="./images/logos/javascript.png" alt="HTML" width="128" />
              <img src="./images/logos/vscode.png" alt="HTML" width="110" />
              <img src="./images/logos/react.png" alt="HTML" width="128" />
              <img src="./images/logos/mongo.png" alt="HTML" width="128" />
              <img src="./images/logos/html.png" alt="HTML" width="128" />
              <img src="./images/logos/node.png" alt="HTML" width="128" />
              <img src="./images/logos/python.png" alt="HTML" width="100" />
              <img src="./images/logos/javascript.png" alt="HTML" width="128" />
              <img src="./images/logos/vscode.png" alt="HTML" width="110" />
              <img src="./images/logos/react.png" alt="HTML" width="128" />
              <img src="./images/logos/mongo.png" alt="HTML" width="128" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About me</small>
            Skills
          </h2>
          <div className="holder-green">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Angular</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>python</li>
                <li>Java</li>
              </ul>
              <h3>People</h3>
              <ul>
                <li>Customer service</li>
                <li>Collaborative mindset</li>
                <li>Communication</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>About me</h3>
              <p>Hey, I'm Caleb! When I'm not programming, you'll find me out on the trails mountain biking,
                hiking, or fishing. I'm a big believer in balancing tech with nature,
                so I soak up as much outdoor adventure as I can.
                Whether it's gaming with friends or catching fresh air in the wild,
                I'm always seeking ways to keep life balanced and exciting. In July of 2017, i've been working
                for Walmart. Since I've started
                I've gained experience in various roles at Walmart, starting in stocking, moving through the
                garden center, managing the eCommerce department,
                and working in sporting goods before returning to eCommerce as an associate. I am currently
                taking advantage of their "Live better U" program,
                A program that pays for Walmart associates' education so long as they work for the company. All
                this aside, I am eager to get a start in
                the tech field and make use of my education and strong work ethic to land a job im passionate
                about.
              </p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2 className="header">
            <small>recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./images/logos/walmart.png" alt="WalmartLogo" width="50%" />
                  <figcaption>
                    Store #1543
                  </figcaption>
                </div>
              </figure>
              <h3>Cap 2 stocking</h3>
              <div>2017-2018</div>
              <p><strong>Skills: </strong>Inventory, customer service, teamwork</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./images/logos/walmart.png" alt="WalmartLogo" width="50%" />
                  <figcaption>
                    Store #1543
                  </figcaption>
                </div>
              </figure>
              <h3>Garden center</h3>
              <div>2018-2019</div>
              <p><strong>Skills: </strong> knowledge, Time management, Collaboration</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./images/logos/walmart.png" alt="WalmartLogo" width="50%" />
                  <figcaption>
                    Store #1543
                  </figcaption>
                </div>
              </figure>
              <h3>eCommerce department manager</h3>
              <div>2019-2021</div>
              <p><strong>Skills: </strong>Team management, Project planning, Leadership</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./images/logos/walmart.png" alt="WalmartLogo" width="50%" />
                  <figcaption>
                    Store #1543
                  </figcaption>
                </div>
              </figure>
              <h3>Sporting goods</h3>
              <div>2021-2022</div>
              <p><strong>Skills: </strong> Sales, Organization, Availability</p>
            </article>

            <article>
              <figure>
                <div>
                  <img src="./images/logos/walmart.png" alt="WalmartLogo" width="50%" />
                  <figcaption>
                    Store #4352
                  </figcaption>
                </div>
              </figure>
              <h3>eCommerce associate</h3>
              <div>2022-Present</div>
              <p><strong>Skills: </strong>Customer service, Order fulfillment, Quality control</p>
            </article>
          </div>




        </section>
        <section id="projects" class="bento container">
          <h2>
            <small>
              Previous
            </small>
            Completed Projects
          </h2>
          <div class="bento-grid">
            <a href="#" class="bento-item">
              1
            </a>
            <a href="#" class="bento-item">
              2
            </a>
            <a href="#" class="bento-item">
              3
            </a>
            <a href="#" class="bento-item">
              4
            </a>
            <a href="#" class="bento-item">
              5
            </a>
            <a href="#" class="bento-item">
              6
            </a>
          </div>
        </section>
        <section class="chatbot container">
          <h2>
            <small>
              Talk to me
            </small>
            Chatbot
          </h2>
          <div class="chatbot-top">
            <div class="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>This is an AI chatbot which knows all my skills, hobbies,
                Work experience and has a copy of my resume.
                You can use it to ask questions about me to get a better
                idea of who I am and what I've done.
              </p>
              <p>You can also check out my resume here if you want to look at it.
                I am currently seeking an internship/part time job until I finish
                school. Please get in touch if you think I'd make a good addition to your team!
              </p>
              <a href="./PersonalResume.pdf" class="button">View Resume</a>
            </div>
            <div class="chat-box">
              <div class="scroll-area">
                <ul id="chat-log">
                  <li>
                    <span class="avatar bot">AI</span>
                    <div class="messages">Hi, I'm a fiendly chatbot that lets you interact with this portfolio!</div>
                  </li>
                  <li>
                    <span class="avatar user">AI</span>
                    <div class="messages">I have a question to ask about this resume!</div>
                  </li>
               
                </ul>
                <div class="chat-message">
                  <input type="text" placeholder="Hey Caleb, What are some of your skills?" />
                  <button className="button">Send</button>
                </div>
              </div>
            </div>
            </div>


        </section>



      </main>
    </>
  );
}
