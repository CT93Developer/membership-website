import React from 'react'
import Single from '../assests/singleperson.png'
import Double from '../assests/doublepeople.jpg'
import Triple from '../assests/triplepeople.png'

const data = [
    {
        price: 149,
        tier: 'First Tier',
        img: Single,
        benefit1:'Free access to class',
        benefit2:'Free access to forums',
        benefit3:'Free access to videos',
        style:'bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 py-3 text-black',
        classStyle:'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'
    },
    {
        price: 249,
        tier: 'Second Tier',
        img: Double,
        benefit1:'All the benefits of first tier',
        benefit2:'5 - One on One QA sessions',
        benefit3:'One on One message system with other students',
        style: 'bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 py-3',
        classStyle:'w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'
    },
    {
        price: 349,
        tier: 'Third Tier',
        img: Triple,
        benefit1:'All the benefits of previous tiers',
        benefit2:'One on One class with teacher',
        benefit3:'Professional personnel on project',
        style:'bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 py-3 text-black',
        classStyle:'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'
    }
]

const Cards = () => {
  return (
    <section id="cards">
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                {
                    data.map(({price, img, benefit1, benefit2, benefit3,style, classStyle, tier}, index) => {
                        return (
                            <div className={classStyle}>
                                <img src={img} alt="" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                                <h2>{tier}</h2>
                                <p className='text-center text-4xl font-bold'>{price}</p>
                                <div className='text-center font-medium'>
                                    <p className='py-2 border-b mx-8 mt-8'>{benefit1}</p>
                                    <p className='py-2 border-b mx-8'>{benefit2}</p>
                                    <p className='py-2 border-b mx-8'>{benefit3}</p>
                                </div>
                                <button className={style}>Start Trial</button>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </section>
  )
}

export default Cards