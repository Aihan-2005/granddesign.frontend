export default function BackgroundeAboutUs(){
    return (
        <>
<div    className="w-full  h-auto my-5 relative flex flex-col md:flex-row justify-center items-end  " dir="rtl">

      <img
    src="images/aboutimage.png"
    alt="About Us"
    className="w-full md:w-[40%] h-full  object-cover"
  />
  <div className="w-full md:w-[60-%] h-full flex justify-between items-center">
    <div className="w-full text-right  px-5 relative mb-40 ">
<p className="text-xl sm:text-2xl md:text-3xl  my-1 text-green-500 font-bold py-3 drop-shadow-[2px_2px_0px_#fff]">
  درباره ما
</p>      <p className="text-4xl my-1 text-[#e4e4e4] py-3">چرا ما متفاوت هستیم</p>
      <p className="text-white text-base sm:text-lg md:text-xl w-[100%]  pl-[19%] py-3 border-r-[2px] px-2 border-[#e31e1e]">
        تجربه‌ای خاص و متفاوت با تیم درجه یک و با تجربه، به کمک بروزترین ابزارهای دنیا بهترین خانه‌ها را با ما تجربه کنید.
      </p>
      <p className="text-white  text-base sm:text-lg md:text-xl w-[100%]  pl-[19%] py-3 px-2">
      حس خانه ای مدرن با کمک ابزار بروز دنیا همچون هوشمصنوعی خانه هایی خاص خوتهیم ساخت مه در ایران نمییتوانید ببینید
      </p>
      <p className="text-white  text-base sm:text-lg md:text-xl w-[100%]  pl-[19%] py-3 px-2">
       حس ها جدید و دل انگیز با کمک خانه های مدرن و ایده های ما برای هرچه زیبا تر کردن زندگی شما ، مارا انتخاب کنید همچون یک دوست
      </p>
      {/* <button className="w-[150px] cursor-pointer my-2  text-sm py-3 bg-green-600 text-white rounded-lg transition duration-200 hover:scale-110">
   بیشتر از ما بدانید
      </button> */}
    </div>
  </div>

</div>

         
        </>
    )
}