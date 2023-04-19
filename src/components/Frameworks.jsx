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
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis numquam modi, quae, quis fuga nostrum nam alias rem eligendi voluptate totam aspernatur, eum reiciendis cumque?',
    ref: 'https://legacy.reactjs.org/'
  },
  {
    logo:Angularlogo,
    framework:'AngularJS',
    detail: 'Most Highly used framework TODAY',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed consectetur cumque voluptate, fugiat esse nam natus hic quo vitae?',
    ref: 'https://angular.io/'
  },
  {
    logo:Nextlogo,
    framework:'NextJS',
    detail: 'Most Highly used framework TODAY',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quod ad iure vel, architecto repudiandae aliquam magnam earum ex placeat perferendis, officiis, sint consectetur blanditiis molestias unde vero debitis. Necessitatibus.',
    ref: 'https://nextjs.org/'
  },
  {
    logo:Nodelogo,
    framework:'NodeJS',
    detail: 'Most Highly used framework TODAY',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum nulla molestiae dicta? Corrupti quos doloremque architecto porro impedit cumque magnam commodi eligendi a, nisi delectus quae reprehenderit!',
    ref: 'https://nodejs.org/en'
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
                data.map(({framework, detail, logo, description,ref}, index) => {
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
                              <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>
                                <a href={ref} target='_blank'>Get Started</a>
                              </button>
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