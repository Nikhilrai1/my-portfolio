import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fetchSocial } from '../utils/fetchSocial'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchProject } from '../utils/fetchProject'
import { fetchSkill } from '../utils/fetchSkill'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkill();
  const socials: Social[] = await fetchSocial();
  const experiences: Experience[] = await fetchExperience();
  const projects: Project[] = await fetchProject();

  return {
    props: {
      pageInfo,
      skills,
      socials,
      experiences,
      projects
    },
    revalidate: 10,
  }
}

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white z-0 h-screen snap-mandatory overflow-scroll snap-y overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Nikhil -Portfolio</title>
        <meta name="description" content="Nikhil Rai" />
        <link rel="icon" href="/me.jpg" />
      </Head>

      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skill' className='snap-start'>
        <Skills skills={skills} />
      </section>
      <section id='project' className='snap-start'>
        <Projects projects={projects} />
      </section>
      <section id='project' className='snap-start'>
        <Contact />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className="flex items-center justify-center">
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="/me.jpg" alt="footer" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

