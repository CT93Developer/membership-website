import React from 'react'
import Reactlogo from '../assests/Reactlogo.png'
import Angularlogo from '../assests/angularjsllogo.png'
import Nodelogo from '../assests//nodejslogo.png'
import Nextlogo from '../assests/nextjslogo.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    logo:Reactlogo,
    framework:'ReactJS',
    detail: 'Most Highly used framework TODAY',
    description:'test'
  },
  {
    logo:Angularlogo,
    framework:'AngularJS',
    detail: 'Most Highly used framework TODAY',
    description:'test'
  },
  {
    logo:Nextlogo,
    framework:'NextJS',
    detail: 'Most Highly used framework TODAY',
    description:'test'
  },
  {
    logo:Nodelogo,
    framework:'NodeJS',
    detail: 'Most Highly used framework TODAY',
    description:'test'
  }
]

const Frameworks = () => {
  return (
    <section id="frameworks">
      <Swiper className="w-full bg-white py-16 px-4"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
            {
                data.map(({framework, detail, logo, description}, index) => {
                    return (
                      <SwiperSlide className='w-full mx-auto grid md:grid-cols-2 p-4'>
                        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                          <div className='lg:col-span-1'>
                            <img src={logo} alt="" className='w-[200px] mx-auto my-4'/>
                          </div>
                          <div className='flex flex-col justify-center lg:col-span-2'>
                              <p className='text-[#00df9a] font-bold'>{framework}</p>
                              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>{detail}</h1>
                              <p>{description}</p>
                              <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Get Started</button>
                          </div>
                        </div>
                      </SwiperSlide> 
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Frameworks