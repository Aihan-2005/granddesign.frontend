import Image from "next/image";

export default function WeblogHome() {
  const Weblogs = [
    {
      definition: "مشاهده مکان های طراحی شده با ما",
      image: "1",
    },
    {
      definition: "مشاهده مکان های طراحی شده با ما",
      image: "2",
    },
    {
      definition: "مشاهده مکان های طراحی شده با ما",
      image: "3",
    },
    {
      definition: "مشاهده مکان های طراحی شده با ما",
      image: "3",
    },
  ];

  return (
    <div className="w-full flex flex-col py-[40px] text-white  " dir="rtl">
      {/* title */}
      <div className="w-full py-2 flex flex-col sm:flex-row justify-between items-start
       sm:items-center gap-4 px-4">
        <div>
          <p className="text-white text-base sm:text-3xl ">وبلاگ</p>
          <p className="text-white text-2xl sm:text-3xl font-bold">وبلاگ و دید ما</p>
        </div>
        {/* <button className="text-white bg-green-500 rounded-lg hover:scale-110 duration-300 cursor-pointer h-11 px-4
        text-sm sm:text-base">
          جدیدترین اخبار درموردما
        </button> */}
      </div>

      <div className="w-[100%] grid grid-cols-1
      sm:grid-cols-2 lg:grid-cols-4  justify-between items-center gap-6 px-4 mt-4 ">
        {Weblogs.map((item, index) => (
          <div key={index} className="w-full flex flex-col  items-center">
            <Image
              src={`/images/weblogs/image${item.image}.jpg`} // Added file extension
              alt={item.definition}
              width={300} // Added required width
              height={200} // Added required height
              className="object-cover rounded-lg w-[100%] h-auto "
            />
            <div className="mt-2 " dir="rtl">
              <p className="text-white text-sm sm:text-base">{item.definition}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}