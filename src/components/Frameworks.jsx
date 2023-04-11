import React from 'react'
import Reactlogo from '../assests/Reactlogo.png'
import Angularlogo from '../assests/angularjsllogo.png'

const Frameworks = () => {
  return (
    <section id="frameworks">
      <div className='w-full bg-white py-16 px-4'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              <img src={Reactlogo} alt="" className='w-[200px] mx-auto my-4'/>
              <div className='flex flex-col justify-center'>
                  <p className='text-[#00df9a] font-bold'>ReactJS Framework</p>
                  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Most Highly used framework TODAY</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius architecto, aperiam repellat in, quia ab id commodi beatae rerum eaque dolore modi! Quidem, optio. Vitae.</p>
                  <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Get Started</button>
              </div>
          </div> 

      </div>
    </section>
  )
}

export default Frameworks