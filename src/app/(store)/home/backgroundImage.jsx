export default function BackgroundImage(){
    return (
        <>
         <div className="w-[100%] h-[100vh] relative flex justify-center items-end py-3">
            <img src="images/homepage.png" alt=""  className="w-[100%] h-[100%]"/>
            <div className="absolute w-[80%] h-[50%]  flex justify-end items-start">
                <div>
                <p className="text-[40px] my-1 text-[white] font-bold">طراحی مدرن خانه </p>
                <p className="text-[16px]  my-1 text-[#e4e4e4]">تجربه ای متفات و خاص با تیم با تجربه ما</p>
                <button className="w-[150px] cursor-pointer my-2 text-[14px] py-3 bg-[green] text-white rounded-lg transation duration-200 hover:scale-[1.1] ">همین اکنون شروع کنید </button>
           </div>
            </div>
         </div>
        </>
    )
}