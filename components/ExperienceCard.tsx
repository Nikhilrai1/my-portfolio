import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex snap-center flex-col rounded-lg items-center space-y-7 bg-[#292929] flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] opacity-40 hover:opacity-100 transition-opacity cursor-pointer duration-200 overflow-hidden '>
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full object-cover object-top xl:w-[200px] xl:h-[200px]'
        src={urlFor(experience.companyImage.asset._ref).url()}
        alt="experience" />
      <div className="px=0 md:px-10">
        <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience.company}</p>
        <div className="flex space-x-2 my-1">
          {experience.technologies.map(technology => (
            <img
              key={technology._id}
              className='h-10 w-10 rounded-full'
              src={urlFor(technology.image.asset._ref).url()}
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()}- {" "} {experience.isCurrentlyWorkingHere ? "present" : new Date(experience.dateEnded).toDateString()}</p>

        <ul className='list-disc space-y-4 ml-5 text-lg overflow-y-scroll max-h-96 pr-5'>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard