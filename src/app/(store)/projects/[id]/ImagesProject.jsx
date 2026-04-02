"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function ImagesProject({param}){
    const [imageBig , setImageBig]=useState(param)

 useEffect(()=>{console.log(imageBig)},[imageBig])

    return (<>
    <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
      <div className="h-96 bg-gradient-to-r from-blue-700 to-purple-800 flex items-center justify-center">
        <Image src={`/images/projectsImage/protfolio-img0${imageBig}.png`}  alt="image" width={3000} height={3000} className="w-[100%] h-[100%]"/>
      </div>
    </div>
    
    {/* گالری تصاویر کوچک با اسکرول افقی */}
    <div className="mb-12">
      <div className="changeScroll flex space-x-3 pb-4 overflow-x-auto ">
        {Array.from({length: 15}).map((image, index) => (
          <div 
          onClick={()=>{setImageBig(index+1)}
          }
            key={index}
            className="flex-shrink-0 w-32 h-24 bg-gray-800 rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center border border-gray-700"
          >
           
              <Image src={`/images/projectsImage/protfolio-img0${index+1}.png`}  alt="image" width={3000} height={3000} className="w-[100%] h-[100%]"/>

          </div>
        ))}
      </div>
    </div>
    </>)

}