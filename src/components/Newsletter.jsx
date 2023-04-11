import React from 'react'

const Newsletter = () => {
  return (
    <section id="newsletter">
        <div className='w-full py-16 text-white px-4'> 
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 '>
                    <h1>Want more news about frameworks?</h1>
                    <p>Sign up for our newsletter now and stay up to date!</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black'>Sign Up</button>
                    </div>
                    <p>Join us in learning new information about frameworks everyday!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter