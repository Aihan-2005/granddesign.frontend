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




import React, { useState } from "react"
import { motion } from "framer-motion"

export default function TeamSection() {
  const [openCard, setOpenCard] = useState(null)

  const handleCardClick = (index) => {
    setOpenCard(index === openCard ? -1 : index)
  }

  const cardImages = [
    { src: "/images/teams/client1.jpg" },
    { src: "/images/teams/client2.jpg" },
    { src: "/images/teams/client3.jpg" },
    { src: "/images/teams/client4.jpg" },
  ]

  const cardDescription = [
    "frontend developer: دارای چهار سال سابقه کاری در معتبر ترین شرکت ها",
    "backend developer: دارای چهار سال سابقه کاری در معتبر ترین شرکت ها",
    "UI designer: دارای چهار سال سابقه کاری در معتبر ترین شرکت ها",
    "backend developer: دارای چهار سال سابقه کاری در معتبر ترین شرکت ها",
  ]

  const cardNames = [
    "علی کمالی",
    "محمد سهیلی ",
    "امیر عباسی ",
    "حسین پور مخبر ",
  ]

  return (
    <section className="py-16 pb-[150px] rounded-2xl mb-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-green-500 text-center">
          تیم ما
        </h1>
      </div>

      {/* اینجا flex-wrap باعث میشه تو موبایل بتونه بره خط بعد */}
      <div className="mt-12 flex flex-wrap gap-6 justify-center">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="card cursor-pointer h-[400px] bg-cover bg-center rounded-[20px] border border-[#055b12] flex-shrink-0 overflow-hidden"
            animate={{
              flexGrow: index === openCard ? 2 : 1,
              flexBasis: "45%", // موبایل → دو تا دو تا
            }}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${cardImages[index].src})`,
            }}
          >
            <div className="h-full flex flex-col justify-end w-full">
              <div className="rounded-b-[20px] bg-[#2d2d2d] bg-opacity min-h-[100px]
                              flex flex-col items-center justify-center border border-[#1c7d2b]">
                <h2 className="text-xl font-semibold text-[#ffffff] text-center">
                  {cardNames[index]}
                </h2>
                {index === openCard && (
                  <p className="mt-2 text-white text-center">
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




