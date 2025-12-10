"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AI = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[99999] flex items-center justify-center">
        <button
          onClick={() => setOpen(true)}
          className="relative group cursor-pointer"
        >
          <span className="absolute inset-0 w-full h-full bg-purple-500 rounded-full opacity-75 animate-ping group-hover:opacity-100 duration-1000"></span>

          <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)] border-2 border-white/20 backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]">
            <span
              className="text-white font-black text-xl md:text-2xl tracking-tighter drop-shadow-md"
              style={{ fontFamily: "sans-serif" }}
            >
              AI
            </span>
          </div>

          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-4 bg-black/80 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap border border-white/10 backdrop-blur-md shadow-lg">
            دستیار هوشمند
            <span className="absolute top-1/2 right-full -mt-1 border-4 border-transparent border-r-black/80"></span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 text-center border border-gray-100"
            >
              <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
                 به زودی 
              </h2>
              <p className="text-gray-500 text-lg">
                دستیار هوشمند فوق‌پیشرفته ما   فعال می‌شود 
              </p>

              <button
                onClick={() => setOpen(false)}
                className="mt-6 px-5 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all shadow-md"
              >
                بستن
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AI;
