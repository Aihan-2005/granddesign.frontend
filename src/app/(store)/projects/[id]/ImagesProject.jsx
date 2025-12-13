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
        "cofjan (1).jpg",  "cofjnaaaa (6).jpg",
        "cofjnaaaa (8).jpg", "ee (2).jpg", "mstjn (22).jpg", "mstjn (24).jpg"
      ]
    },
    5: {
      basePath: "/akhir/janbazan-kafe kamlia",
      images: [
        "1 (5).jpg","2 (6).jpg","3 (4).jpg","4 (2).jpg","5 (3).jpg","6 (3).jpg","7 (2).jpg",
        "8.jpg"
      ]
    },
    6: {
      basePath: "/akhir/kargare 5, aqa bozorgi(9)",
      images: [
        "enhanced-image (26).jpg","enhanced-image (29).jpg","enhanced-image (32).jpg",
        "enhanced-image (33).jpg","enhanced-image (34).jpg","enhanced-image (35).jpg",
        "z.jpg"
      ]
    },
    7: {
      basePath: "/akhir/kiashar-rahimzade",
      images: [
        "kiashar (11).jpg","kiashar (12).jpg","kiashar (3).jpg","kiashar (4).jpg",
        "kiashar (6).jpg","kiashar (8).jpg","kiashar (9).jpg"
      ]
    },
    8: {
      basePath: "/akhir/nama khararod",
      images: [
        "hsniiiasl (11).jpg","hsniiiasl (12).jpg","hsniiiasl (14).jpg",
        "hsniiiasl (15).jpg","hsniiiasl (2).jpg","hsniiiasl (4).jpg",
        "hsniiiasl (5).jpg","hsniiiasl (8).jpg","hsniiiasl (9).jpg"
      ]
    },
    9: {
      basePath: "/akhir/nilass-lahijan",
      images: [
        "aslia (2).jpg","aslia (5).jpg","aslia (6).jpg","nmjanan (1).jpg",
        "nmjanan (12).jpg","nmjanan (3).jpg"
      ]
    },
    10: {
      basePath: "/akhir/PENT",
      images: [
        "P5.jpg","P6.jpg","p8.jpg","p9.jpg","pt1.jpg","pt2.jpg","pt3.jpg"
      ]
    },
    11: {
      basePath: "/akhir/penttttt-bakhshi",
      images: [
        "b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"
      ]
    },
    12: {
      basePath: "/akhir/sazesh-kargarrr",
      images: [
        "komdpsr (10).jpg","komdpsr (4).jpg","komdpsr (8).jpg","komod azad.jpg",
        "mastar a.jpg","master b.jpg","master1.jpg","mat1.jpg","mtbkh (2).jpg",
        "rrrr (1).jpg"
      ]
    },
    13: {
      basePath: "/akhir/shohani-jangal3000",
      images: [
        "sh1.jpg","sh2.jpg","sh3.jpg","sh4.jpg","sh5.jpg","sh5.jpg","sh6.jpg",
        "sh7.jpg","sh8.jpg"
      ]
    },
    14: {
      basePath: "/akhir/siakal-vila-saeidi",
      images: [
        "saei.jpg","saeidiii (7).jpg","saeidiii (9).jpg","trtrtr (2).jpg","trtrtr (3).jpg",
        "trtrtr (5).jpg"
      ]
    },
    15: {
      basePath: "/akhir/VAHED",
      images: [
        "v2.jpg","v3.jpg","v4.jpg","v6.jpg","v9.jpg","va (1).jpg","va (2).jpg",
        "va (3).jpg","va (5).jpg","vo5.jpg","vo6.jpg"
      ]
    },
    16: {
      basePath: "/akhir/vila jngl2000-mohamadi",
      images: [
       "2.jpg","4.jpg","6.jpg","7.jpg","8.jpg","9.jpg","aa.jpg","bb.jpg"
      ]
    },
    17: {
      basePath: "/akhir/vila-saeidi-siakal",
      images: [
        "saeidiii (1).jpg","saeidiii (15).jpg","saeidiii (16).jpg","saeidiii (2).jpg",
        "saeidiii (3).jpg","saeidiii (4).jpg"
      ]
    },
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
             alt={`تصویر اصلی پروژه ${param}`}
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
                 alt={`تصویر ${index + 1} از پروژه ${param}`}
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
