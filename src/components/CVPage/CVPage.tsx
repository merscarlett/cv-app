import CommentsSidebar from "../CommentsSidebar/CommentsSidebar";
import "./CVPage.scss";

const CVPage: React.FC = () => {
  return (
    <div className="cv-page">
      <div className="cv">
        <header className="cv__header">
          <h1 className="cv__name">Claudette Lening</h1>

          <div className="cv__contacts">
            <div className="cv__contact">
              CareerOS Academy – Barcelona, Spain
            </div>

            <a
              className="cv__contact cv__contact--link"
              href="mailto:claudette.lening@cosacademy.edu"
            >
              claudette.lening@cosacademy.edu
            </a>

            <a
              className="cv__contact cv__contact--link"
              href="tel:+34612345678"
            >
              +34 612 345 678
            </a>

            <a
              className="cv__contact cv__contact--link"
              href="https://linkedin.com/in/claudette-lening"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/claudette-lening
            </a>
          </div>
        </header>

        <main className="cv__content">
          <section className="cv__section">
            <h2 className="cv__section-title">RELEVANT EXPERIENCE</h2>

            <div className="cv__row">
              <time className="cv__date">10.24 – 02.25</time>
              <article className="cv__job">
                <div className="cv__job-header">
                  <h3 className="cv__job-title">CyberFort Solutions</h3>
                  <span className="cv__job-place">Barcelona, Spain</span>
                </div>

                <p className="cv__job-role">Project Coordinator</p>

                <ul className="cv__job-list">
                  <li>
                    Oversaw scheduling, documentation, and progress tracking for
                    internal IT infrastructure upgrades.
                  </li>
                  <li>
                    Worked alongside security analysts to identify workflow
                    bottlenecks and recommend process improvements.
                  </li>
                  <li>
                    Assisted in communication between vendors and reviewed
                    contracts for third-party software providers.
                  </li>
                </ul>
              </article>
            </div>

            <div className="cv__row">
              <time className="cv__date">05.24 – 08.24</time>
              <article className="cv__job">
                <div className="cv__job-header">
                  <h3 className="cv__job-title">BrightWave Digital</h3>
                  <span className="cv__job-place">Barcelona, Spain</span>
                </div>

                <p className="cv__job-role">Summer Project Management Intern</p>

                <ul className="cv__job-list">
                  <li>
                    Coordinated deadlines and deliverables for a
                    cross-functional team handling client advertising campaigns.
                  </li>
                  <li>
                    Curated internal status reports summarizing campaign
                    metrics, budget usage, and upcoming project milestones.
                  </li>
                  <li>
                    Developed foundational practices in agile project management
                    tools and team collaboration platforms.
                  </li>
                </ul>
              </article>
            </div>

            <div className="cv__row">
              <time className="cv__date">06.23 – 08.23</time>
              <article className="cv__job">
                <div className="cv__job-header">
                  <h3 className="cv__job-title">DeltaNova Technologies</h3>
                  <span className="cv__job-place">Madrid, Spain</span>
                </div>

                <p className="cv__job-role">
                  Summer Business Operations Intern
                </p>

                <ul className="cv__job-list">
                  <li>
                    Streamlined project documentation and meeting records to
                    support efficient product launch execution.
                  </li>
                  <li>
                    Engaged in client update calls, providing project status
                    recaps and next-step outlines.
                  </li>
                  <li>
                    Prepared post-project reviews that uncovered a 15% increase
                    in team efficiency opportunities and documented best
                    practices.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section className="cv__section">
            <h2 className="cv__section-title">EDUCATION</h2>

            <div className="cv__row">
              <time className="cv__date">09.23 – 05.24</time>
              <article className="cv__job">
                <div className="cv__job-header">
                  <h3 className="cv__job-title">CareerOS Academy</h3>
                  <span className="cv__job-place">Barcelona, Spain</span>
                </div>

                <p className="cv__job-role">MSc in Project Management</p>

                <ul className="cv__job-list">
                  <li>
                    Engaged in comprehensive coursework on Agile methodologies,
                    risk management, and stakeholder analysis; led a capstone
                    project simulating a cross-functional product launch.
                  </li>
                </ul>
              </article>
            </div>

            <div className="cv__row">
              <time className="cv__date">09.19 – 05.22</time>
              <article className="cv__job">
                <div className="cv__job-header">
                  <h3 className="cv__job-title">CareerOS Academy</h3>
                  <span className="cv__job-place">Barcelona, Spain</span>
                </div>

                <p className="cv__job-role">BA in Business Administration</p>

                <ul className="cv__job-list">
                  <li>
                    Completed coursework in corporate finance, marketing
                    strategy, and organizational behavior; collaborated on a
                    consulting project for a local startup to optimize
                    operations.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section className="cv__section">
            <h2 className="cv__section-title">EXTRACURRICULAR & AWARDS</h2>
            <div className="cv__row">
              <time className="cv__date">09.21 – 05.21</time>
              <div className="cv__position">
                President of the Data Analytics Club at CareerOS Academy
              </div>
            </div>
          </section>

          <section className="cv__section">
            <h2 className="cv__section-title">
              ADDITIONAL INFORMATION & SKILLS
            </h2>

            <div className="cv__row">
              <div className="cv__label">Languages:</div>
              <div className="cv__value">
                Spanish (Native), English (Fluent), Italian (Intermediate)
              </div>
            </div>

            <div className="cv__row">
              <div className="cv__label">Additional Skills:</div>
              <div className="cv__value">
                NIST Cybersecurity Framework, Microsoft Office, Kali Linux,
                Incident Response Planning, Firewall Configuration, AWS
                Security, AES Encryption
              </div>
            </div>
          </section>
        </main>
      </div>
      <CommentsSidebar />
    </div>
  );
};

export default CVPage;
