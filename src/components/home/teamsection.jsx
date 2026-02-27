// import React from 'react'
// import { motion } from 'framer-motion'
// import { useState } from 'react'

// export default function TeamSection() {
//     const [openCard,setOpenCard] = useState(null);
//     const handleCardClick = (index) =>{
//         setOpenCard(index === openCard? -1 : index)
//     }

//     const cardVariants = {
//         expanded : {
//             width:"400px"

//         },
//         collapsed:{
//             width:"200px"
//         }
//     }

//     const cardImages = [
//         {
//             src:"/images/teams/client1.jpg"
//         },
//         {
//             src:"/images/teams/client2.jpg"
//         },
//         {
//             src:"/images/teams/client3.jpg"
//         },
//         {
//             src:"/images/teams/client4.jpg"
//         },
//     ]

//     const cardDescription =[
//         'frontend developer:  دارای چهار سال سابقه کاری در معتبر ترین شرکت ها',
//         'backend developer:  دارای چهار سال سابقه کاری در معتبر ترین شرکت ها',
//         'UI designer :  دارای چهار سال سابقه کاری در معتبر ترین شرکت ها',
//         ' backend developer:  دارای چهار سال سابقه کاری در معتبر ترین شرکت ها',
//     ]

//     const cardNames =[
//         "علی کمالی",
//         "محمد سهیلی ",
//         "امیر عباسی ",
//         "حسین پور مخبر ",
//     ]
//   return (
//    <section className='py-16 pb-[150px]  rounded-2xl mb-50'>
//     <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
//         <h1 className='text-3xl font-extrabold text-green-500  text-center'> تیم ما</h1>
        
//     </div>
//     <div className='mt-12 flex flex-col  md:flex-row justify-center items-center gap-10 '>
//         {[0,1,2,3].map((index)=>(
//             <motion.div
//             key={index}
//             className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] border border-[#055b12]
//                ${index === openCard ? 'expanded' : ''} `}
//                variants={cardVariants}
//                initial='collapsed'
//                animate={index === openCard ? 'expanded' : 'collapsed'}
//                transition={{duration:0.5}}
//                onClick={()=> handleCardClick(index)}
//                style={{
//                 backgroundImage: `url(${cardImages[index].src})`,
//                }}
//             >
//                 <div className='card-content h-full flex flex-col justify-end'>
//                     <div className='card-footer rounded-b-[20px] bg-[#2d2d2d] bg-opacity min-h-[100px]
//                     flex flex-col items-center justify-center border border-[#1c7d2b] 
//                     '>
//                             <h2 className='text-xl font-semibold text-[#ffffff] text-center'>
//                                 {cardNames[index]}
                                
//                             </h2>
//                             {index === openCard && (
//                                <p className='mt-2 text-white text-center'>{cardDescription[index]}</p> 
//                             )

//                             }
//                     </div>
//                 </div>
//             </motion.div>
//         ))}
//     </div>
//    </section>
//   )
// }


'use client';

import {useState} from "react";
import {motion} from 'framer-motion';



export default function TeamSection(){
const [openCard,setOpenCard] = useState(null);

const handleCardClick = (index)=>{
  setOpenCard(index === openCard ? -1 :index)
}

const cardImages = [
  { id:1,src: "/images/teams/client1.jpg" },
  {id:2, src: "/images/teams/client2.jpg" },
  {id:3, src: "/images/teams/client3.jpg" },
  { id:4,src: "/images/teams/client4.jpg" },
  { id:5 ,src: "/images/teams/client5.jpg" }
]

const cardDescription = [
  "frontend developer: دارای چهار سال سابقه کاری در معتبرترین شرکت‌ها",
  "backend developer: دارای چهار سال سابقه کاری در معتبرترین شرکت‌ها",
  "UI designer: دارای چهار سال سابقه کاری در معتبرترین شرکت‌ها",
  "backend developer: دارای چهار سال سابقه کاری در معتبرترین شرکت‌ها",
  "fullstack developer: دارای چهار سال سابقه کاری در معتبرترین شرکت‌ها",
]

const cardNames = [
  "علی کمالی",
  "محمد سهیلی",
  "امیر عباسی",
  "حسین پور مخبر",
  "رضا احمدی",
]


return(
  <section className="py-15 pb-[15px] rounded-2xl mb-17">
    <div className="max-w-7px mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-green-500 text-right">
         اعضا تیم 
              </h1>
    </div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
      {cardImages.map((card,index)=>(
        <motion.div
        key={cardNames[index]}
        className="cursor-pointer h-[400px] w-full bg-cover bg-center  rounded-[20px] border border-[#055b12]  overflow-hidden flex flex-col"
        animate={{
          scale:index === openCard ? 1.05 : 1,
        }}
        transition={{duration:0.4}}
        onClick={()=>handleCardClick(index)}
        style={{
          backgroundImage : `url(${card.src})`,
        }}
        >
          <div className="mt-auto w-full">
            <div className="rounded-b-[20px] bg-[#2d2d2d]/90 min-h-[100px] flex flex-col items-center justify-center border border-[#1c7d2b] px-2 py-3">
            <h2 className="text-lg font-semibold  text-white text-center">
              {cardNames[index]}
            </h2>
            {index === openCard &&(
              <p className="mt-2 text-sm text-white text-center">
                {cardDescription[index]}
              </p>
            )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

  </section> 
)


}