export default function BackgroundImage(){
    return (
        <>
         <div className="w-full h-screen mt-0 relative flex justify-center items-end my-3 overflow-hidden">
            <img src="images/homepage.png" alt=""  className="w-full h-full object-cover"/>
            <div className="absolute top-[43%] md:top-[50%] right-[10%] text-right  w-[90%] md:w-[90%] h-[60%] md:h-[50%]  flex justify-end items-start p-0 md:p-1 ">
                <div>
                <p className="text-xl sm:text-3xl md:text-5xl my-1 text-[white] font-bold ">طراحی مدرن خانه </p>
                <p className="text-sm sm:text-base md:text-lg   my-1 text-[#e4e4e4]">تجربه ای متفات و خاص با تیم با تجربه ما</p>
                <button className="w-[150px] text-sm  cursor-pointer my-2 text-[14px] py-3 bg-[green] text-white rounded-lg transation duration-200 hover:scale-[1.1] ">همین اکنون شروع کنید </button>
           </div>
            </div>
         </div>
        </>
    )
}