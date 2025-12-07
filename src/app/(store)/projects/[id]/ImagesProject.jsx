"use client"
import Image from "next/image"
import { useState } from "react"

export default function ImagesProject({ param }) {
  
  const projects = {
    1: {
      basePath: "/akhir/amlak-golstan",
      images: [
        "w1.jpg", "w10.jpg", "w11.jpg",
        "w3.jpg", "w4.jpg", "w5.jpg",
        "w7.jpg", "w8.jpg"
      ]
    },
    2: {
      basePath: "/akhir/areshga-jfri",
      images: ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg", "hh.jpg"]
    },
    3: {
      basePath: "/akhir/daftar froosh-astane-amozade",
      images: [
        "brnjj (2).jpg", "brnjj (3).jpg", "brnjj (4).jpg",
        "brnjj (5).jpg", "brnjj (6).jpg", "brnjj (7).jpg",
        "brnjj (8).jpg", "brnjj (9).jpg", "brnjj.jpg"
      ]
    },
    4: {
      basePath: "/akhir/jana-jafarpoor",
      images: [
        "1(1).jpg", "11(1).jpg", "3(1).jpg", "5(1).jpg", "8(1).jpg",
        "cofjan (1).jpg", "cofjan(1).jpg", "cofjnaaaa (6).jpg",
        "cofjnaaaa (8).jpg", "ee (2).jpg", "mstjn (22).jpg", "mstjn (24).jpg"
      ]
    }
  }

 
  const project = projects[param]
  const [imageBig, setImageBig] = useState(project.images[0]) 

  if (!project) {
    return <p className="text-red-500">پروژه‌ای با این شناسه پیدا نشد.</p>
  }

  return (
    <>
      {/* عکس اصلی */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
        <div className="h-96 bg-gradient-to-r from-blue-700 to-purple-800 flex items-center justify-center">
          <Image
            src={`${project.basePath}/${imageBig}`}
            alt="image"
            width={1200}
            height={800}
            sizes="100vw"
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* گالری کوچک‌ها */}
      <div className="mb-12">
        <div className="changeScroll flex space-x-3 pb-4 overflow-x-auto ">
          {project.images.map((img, index) => (
            <div
              onClick={() => setImageBig(img)}
              key={index}
              className="flex-shrink-0 w-32 h-24 bg-gray-800 rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center border border-gray-700"
            >
              <Image
                src={`${project.basePath}/${img}`}
                alt="image"
                width={200}
                height={150}
                sizes="128px"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
