import { useEffect } from 'react'

import styles from '../styles/Resume.module.scss'
import Main from '../layouts/main/Main'
import Button from '../components/button/Button'

function Resume() {

  useEffect(() => {
    document.getElementById('__next').classList.add('height-auto')
  })

  return (
    <Main>
      <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.text1}>Ui / Ux <span className={styles.color}>Designer</span></span>
          <span className={styles.titleText}>Ui / Ux designer</span>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={require('../public/group215.png')} />
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <span className={styles.logoText}>Skills</span>
            <div className={styles.logo}>
              <img className={styles.colorLogo} src={require('../public/color-swatch.svg')} />
            </div>
          </div>
          <div className={styles.headerContent}>
            <span className={styles.boldText}>Elham Parvizi</span>
            <span className={styles.titleText}>Ui / Ux Designer And Psychologist</span>
            <Button href='/about' title='About Me' />
          </div>
        </div>
        <div className={styles.skillContainer}>
          <div className={styles.leftSection}>
            <div>
              <span>Figma</span>
            </div>
            <div>
              <span>Html And Css</span>
            </div>
            <div>
              <span>User Experience Testing</span>
            </div>
            <div>
              <span>User Research</span>
            </div>
            <div>
              <span>Graphical Models</span>
            </div>
            <div>
              <span>Rapid Prototyping</span>
            </div>
            <div>
              <span>Design Theory</span>
            </div>
            <div>
              <span>Data Visualization</span>
            </div>
            <div>
              <span>Evaluation of burnout</span>
            </div>
            <div>
              <span>Personality tests</span>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.chartContainer}>
              <div className={styles.chart1}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.chartContainer}>
              <div className={styles.chart2}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.chartContainer}>
              <div className={styles.chart3}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.chartContainer}>
              <div className={styles.chart4}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.chartContainer}>
              <div className={styles.chart5}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.chartContainer}>
              <div className={styles.chart6}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.chartContainer}>
              <div className={styles.chart7}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.chartContainer}>
              <div className={styles.chart8}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.chartContainer}>
              <div className={styles.chart9}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.chartContainer}>
              <div className={styles.chart10}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <span className={styles.logoText}>Experiences</span>
            <div className={styles.logo}>
              <img className={styles.academicLogo} src={require('../public/briefcase.svg')} />
            </div>
          </div>
        </div>
        <div className={styles.resume}>
          <div className={styles.resumeItem}>
            <span className={styles.boldText}>Discord</span>
            <span className={styles.titleText}>UX/UI Designer</span>
            <span>Information Architecture</span>
            <span>User Experience Strategy </span>
            <span>Knowledge and information organization</span>
            <span>Productive Solutions</span>
            <span className={styles.titleText}>Interior Designer </span>
            <span className={styles.width}>
              Took the lead in designing the projects with
              creative solutions to meet the client's demands
            </span>
            <span className={styles.width}>
              Worked remotely in the BIM system with the
              architecture department and achieved
              the project's goals on budget and on time</span>
            <span className={styles.width}>
              Developed master plans and urban design
              concepts in large-scale national
              projects supported with 3d Models
            </span>
          </div>
          <div className={styles.resumeItem}>
            <span className={styles.boldText}>Freelancer</span>
            <span className={styles.titleText}>UI designer</span>
            <span className={styles.width}>
              Graphic Design project for Small
              Businesses like Logo Design,
              Brand Guidance, Social Media Content Visual
            </span>
            <span className={styles.width}>
              Design and User interface Design
              For Mobile Applications and Websites
            </span>
            <span className={styles.boldText}>Pixels and Code  </span>
            <span className={styles.titleText}>Human Resource Manager  </span>
            <span>Hiring </span>
            <span>Conducting psychological tests based on job position </span>
            <span>Teaching behavioral patterns in the organization</span>
            <span>Teamwork training</span>
          </div>
          <div className={styles.resumeItem}>
            <span className={styles.boldText}>Subway Organization </span>
            <span className={styles.titleText}>Researcher </span>
            <span className={styles.width}>
              Sensitive and dangerous job
              positions research project
            </span>
            <span className={styles.width}>
              Research on sensitive job positions
              in the Tehran subway organization
              such as train routes and platform guards
            </span>
            <span className={styles.width}>
              Examine their flexibility in terms of what
              decisions they make in critical situations
              and who should be employed in such
              positions through cognitive flexibility testing
            </span>
            <span className={styles.width}>
              The evolution of cognitive flexibility
              and memory from youth to old age
              (psychological ISI - submitted and in correspondence)</span>
          </div>
          <div className={styles.resumeItem}>
            <span className={styles.boldText}>Tehran Water and Sewerage </span>
            <span className={styles.titleText}>
              Industrial and organizational psychologist
            </span>
            <span className={styles.width}>
              Satellite job evaluation project
            </span>
            <span className={styles.width}>
              Investigation of psychological injuries
              inflicted on the personnel of
              Tehran Water and - Sewerage Organization </span>
            <span className={styles.width}>
              Investigate job stress and provide
              treatment strategies - Job analysis,
              job design </span>
            <span className={styles.width}>
              Psychological interviews and selection
              based on a variety of job and personality
            </span>
            <span className={styles.width}>
              The evolution of cognitive flexibility and
              memory from youth to old age (psychological ISI
              - submitted and in correspondence</span>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <span className={styles.logoText}>Education</span>
            <div className={styles.logo}>
              <img className={styles.academicLogo} src={require('../public/academic-cap.svg')} />
            </div>
          </div>
        </div>
        <div className={styles.education}>
          <div className={styles.educationItem}>
            <span className={styles.boldText}>Islamic Azad University</span>
            <span className={styles.titleText}>Bachelor, Psychology </span>
            <span>Graduated with a GPA of 17</span>
          </div>
          <div className={styles.educationItem}>
            <span className={styles.boldText}>Islamic Azad University</span>
            <span className={styles.titleText}>Masters, Psychology</span>
            <span>Graduated with a GPA of 19.30</span>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button href='/contact' title='Contact Me' />
        </div>
      </div>
    </Main >
  )
}

export default Resume
