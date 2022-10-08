import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='flex relative justify-center items-center -mt-24'>
        <div className='border absolute border-[#333333] h-[150px] w-[150px] rounded-full animate-ping'/>
        <div className='border absolute border-[#333333] h-[200px] w-[200px] rounded-full'/>
        <div className='border absolute border-[#333333] h-[250px] w-[250px] rounded-full'/>
        <div className='border border-[#F7AB0A] h-[300px] w-[300px] rounded-full animate-pulse '/>
        <div className='border absolute border-[#333333] h-[400px] w-[400px] rounded-full'/>
    </div>
  )
}

export default BackgroundCircles