import React from 'react'
import { BsTelephoneFill, BsEnvelope } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
}

type Props = {}

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const submitForm: SubmitHandler<Inputs> = (formData) => window.location.href = `mailto:nrai9027@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`;

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

      <div className="flex flex-col space-y-10">

        <h4 className="text-4xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50"> I have got just what you neew. {" "}  Lets Talks</span></h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <BsTelephoneFill className="text-[#F7AB0A] h-7 animate-pulse" />
            <p className='text-2xl'>+9779813590938</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <BsEnvelope className="text-[#F7AB0A] h-7 animate-pulse" />
            <p className='text-2xl'>nrai9027@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MdLocationOn className="text-[#F7AB0A] h-7 animate-pulse" />
            <p className='text-2xl'>Tokha, Kathmandu</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="space-x-2">
            <input {...register("name")} className="contactInput" placeholder="Full Name" type="text" />
            <input  {...register("email")} className="contactInput" placeholder="Email" type="email" />
          </div>
          <input  {...register("subject")} className="contactInput" placeholder="Subject" type="text" />
          <textarea {...register("message")} className="contactInput" placeholder="Message" />
          <button type="submit" className="bg-[#F7AB0A] py-5 rounded-md text-black font-bold text-lg">submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact