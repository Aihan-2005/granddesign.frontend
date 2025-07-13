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
  ];

  return (
    <div className="w-full flex flex-col py-[40px] text-white " dir="rtl">
      {/* title */}
      <div className="w-full py-2 flex justify-between items-center px-4">
        <div>
          <p className="text-white text-lg">وبلاگ</p>
          <p className="text-white text-3xl">وبلاگ و دید ما</p>
        </div>
        <button className="text-white bg-green-500 rounded-lg hover:scale-110 duration-300 cursor-pointer h-12 px-5">
          جدیدترین اخبار درموردما
        </button>
      </div>

      <div className="w-[100%] flex justify-between items-center gap-[20px] ">
        {Weblogs.map((item, index) => (
          <div key={index} className="w-full flex flex-col  items-center">
            <Image
              src={`/images/weblogs/image${item.image}.jpg`} // Added file extension
              alt={item.definition}
              width={300} // Added required width
              height={200} // Added required height
              className="object-cover rounded-lg w-[100%] "
            />
            <div className="mt-2" dir="rtl">
              <p className="text-white">{item.definition}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}