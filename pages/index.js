import Wrapper from '../components/wraper'
import '@hackclub/theme/fonts/reg.css'
import {
  BaseStyles,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  Link,
  NavLink,
  Radio,
  Select,
  Slider,
  Text,
  Textarea
} from 'theme-ui'
import styles from '../styles/IDT.module.css'


function HomePage() {
  return (
    <Wrapper>
      <Box as="header" sx={{ bg: 'sheet', color: 'text' }}>
        <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
          <Heading as="h1" variant="title" color="red">
            IDT Project
        </Heading>
          <Text as="p" variant="subtitle" mt={3}>
            Raleigh's IDT project about careers, written in next.js with theme-ui. (Press the circle for dark mode!) <br />
            The code is on <Link href="https://github.com/l3gacyb3ta/IDTProject">GitHub</Link>.
        </Text>
        </Container>
      </Box >

      <Container>
        <Card as={BaseStyles} sx={{ mt: [3, 4], p: { fontSize: 2 } }}>
          <Heading variant="headline">Career related to Programming: <Link href="https://en.wikipedia.org/wiki/Database_administrator">Database administrator</Link>.</Heading>
          <img className={styles.image} src="https://dv-website.s3.amazonaws.com/uploads/2020/04/kf_sywtbdba_04092020.jpg" />
          <p>
            A database administrator is a person who manages databases. <br />
            <Text variant="subheadline">
              Duties:
            </Text>
            <ul>
              <li>Installing and upgrading the database server and application tool</li>
              <li>Enrolling users and maintaining system security</li>
              <li>Backing up and restoring databases</li>
            </ul>

            <Text variant="subheadline">
              Main skills:
            </Text>
            <ul>
              <li>Patience</li>
              <li>Meticulous attention to detail</li>
              <li>A logical approach to work</li>
            </ul>

            <Text variant="subheadline">
              Average Salary: $75k/year
            </Text>
            <br />
            <Text variant="subheadline">
              Education required: Bachelor's degree
            </Text>
            <br />
          </p>
        </Card>
      </Container>

      <Container>
        <Card as={BaseStyles} sx={{ mt: [3, 4], p: { fontSize: 2 } }}>
          <Heading variant="headline">Career related to Cyber Security: <Link href="https://en.wikipedia.org/wiki/Information_security_analyst">Information Security Analyst</Link>.</Heading>
          <img className={styles.image} src="https://www.cyberdegrees.org/app/uploads/2020/10/GettyImages-1093461000.jpg" />
          <p>
            Monitor their organization's networks for security breaches and investigate a violation when one occurs. <br />
            <Text variant="subheadline">
              Duties:
            </Text>
            <ul>
              <li>Installing and upgrading the antivirus software on company devices</li>
              <li>Conducting Autdits on the company's security</li>
            </ul>

            <Text variant="subheadline">
              Main skills:
            </Text>
            <ul>
              <li>Analytical</li>
              <li>Communication</li>
              <li>Detail-Oriented</li>
            </ul>

            <Text variant="subheadline">
              Average Salary: $100k/year
            </Text>
            <br />
            <Text variant="subheadline">
              Education required: Bachelor's degree
            </Text>
            <br />
          </p>
        </Card>
      </Container>

      <Container>
        <Card as={BaseStyles} sx={{ mt: [3, 4], p: { fontSize: 2 } }}>
          <Heading variant="headline">Career related to Game Design: <Link href="https://www.cgspectrum.com/career-pathways/game-artist">Game Artist</Link>.</Heading>
          <img className={styles.image} src="https://www.nyfa.edu/student-resources/wp-content/uploads/2016/04/bak_sshot057-jpg-1024x576.jpg" />
          <p>
            A games artist is someone who creates 2D and 3D art for the visual elements of a video game. <br />
            <Text variant="subheadline">
              Duties:
            </Text>
            <ul>
              <li>Design characters</li>
              <li>Create sound effects</li>
              <li>Design backgrounds</li>
            </ul>

            <Text variant="subheadline">
              Main skills:
            </Text>
            <ul>
              <li>Knoledge of art</li>
              <li>Visual storytelling</li>
              <li>Ability to work under pressure</li>
            </ul>

            <Text variant="subheadline">
              Average Salary: $60k/year
            </Text>
            <br />
            <Text variant="subheadline">
              Education required: Bachelor's degree
            </Text>
            <br />
          </p>
        </Card>
      </Container>

      <Container>
        <Card as={BaseStyles} sx={{ mt: [3, 4], p: { fontSize: 2 } }}>
          <Heading variant="headline">Career related to Web Development: <Link href="https://www.cgspectrum.com/career-pathways/game-artist">Front-end Developer</Link>.</Heading>
          <img className={styles.image} src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png" />
          <p>
            Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data. <br />
            <Text variant="subheadline">
              Duties:
            </Text>
            <ul>
              <li>Design UI elements</li>
              <li>Design animations</li>
              <li>Create web interfaces</li>
            </ul>

            <Text variant="subheadline">
              Main skills:
            </Text>
            <ul>
              <li>Ability to use git</li>
              <li>Knoledge of HTML/CSS/JS</li>
              <li>Problem Solving</li>
            </ul>

            <Text variant="subheadline">
              Average Salary: $70k/year
            </Text>
            <br />
            <Text variant="subheadline">
              Education required: Bachelor's degree
            </Text>
            <br />
          </p>
        </Card>
      </Container>

      <Container>
        <Card as={BaseStyles} sx={{ mt: [3, 4], p: { fontSize: 2 } }}>
          <Heading variant="headline">Another cool job: <Link href="https://en.wikipedia.org/wiki/Health_informatics">Health Information Specialist</Link>.</Heading>
          <img className={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F._%D0%A4%D0%A6%D0%9D_%28%D0%A2%D1%8E%D0%BC%D0%B5%D0%BD%D1%8C%29_01.JPG/205px-%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F._%D0%A4%D0%A6%D0%9D_%28%D0%A2%D1%8E%D0%BC%D0%B5%D0%BD%D1%8C%29_01.JPG" />
          <p>
            Healthcare informatics or biomedical informatics is the branch of science and engineering that apply informatics fields to medicine. <br />
            Health Information Specialists manage the flow and storage of medical data. <br/ >
            <Text variant="subheadline">
              Duties:
            </Text>
            <ul>
              <li>Manage patient records</li>
              <li>Design new data schemas</li>
              <li>Migrate old data</li>
            </ul>

            <Text variant="subheadline">
              Main skills:
            </Text>
            <ul>
              <li>Ability to think logically</li>
              <li>Knoledge of data systems</li>
              <li>Spatial Reasoning skills</li>
            </ul>

            <Text variant="subheadline">
              Average Salary: $45k/year
            </Text>
            <br />
            <Text variant="subheadline">
              Education required: Postsecondary Nondegree Award
            </Text>
            <br />
          </p>
        </Card>
      </Container>

    </Wrapper >
  )

}

export default HomePage