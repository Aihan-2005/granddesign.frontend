"use client";
import { motion } from "framer-motion";


const suggestedProducts = new Array(15).fill(0).map((_,i)=>({
    id: i+1,
    title: `پارکت${i+1}`,
    description: "پارکت عالی ضد آب و مقاوم در برابر خش و ضربه",
    image: `/images/products/garniz1.svg`,
}));


export default function Allproducts(){
    return(
        <section className="w-full bg-teal-900 py-30 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-right text-white mb-8">
                    محصولات ما
                </h2>
                <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
                    {suggestedProducts.map((product,index)=>(
                        <motion.div
                            key={product.id}
                            initial={{opacity:0,y:30}}
                            whileInView={{opacity:1,y:0}}
                            viewport={{once:true}}
                            transition={{delay:index*0.05}}
                            className="relative group min-w-[250px] h-[300px] rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                                    style={{backgroundImage:`url(${product.image})`}}
                                    ></div> 
                                    <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <div className="absolute bottom-0 w-full translate-y-full group-hover:translate-y-0   transition-transform duration-300 bg-white/90 text-gray-800 text-center py-2 font-bold backdrop-blur-sm">
                                    {product.title}
                                    </div>
                            </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}