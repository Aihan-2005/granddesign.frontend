import Image from "next/image";

export default function NewProjectsHome() {
  const data = [
    {
      title: "طراحی واحد های مسکونی",
      text: "متفاوت ترین ایده ها با ما ممکن میشود",
      icon: "1",
    },
    {
      title: "طراحی واحد های مسکونی",
      text: "متفاوت ترین ایده ها با ما ممکن میشود",
      icon: "2",
    },
    {
      title: "طراحی واحد های مسکونی",
      text: "متفاوت ترین ایده ها با ما ممکن میشود",
      icon: "3",
    },
    {
      title: "طراحی واحد های مسکونی",
      text: "متفاوت ترین ایده ها با ما ممکن میشود",
      icon: "4",
    },
    {
      title: "طراحی واحد های مسکونی",
      text: "متفاوت ترین ایده ها با ما ممکن میشود",
      icon: "5",
    },
    {
      title: "طراحی واحد های مسکونی",
      text: "متفاوت ترین ایده ها با ما ممکن میشود",
      icon: "6",
    },
  ];

  return (
    <div className="w-full  text-white my-8" dir="rtl">
      <div className="my-6 text-center">
        <p className="text-3xl font-bold text-white">خدمات ما</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 cursor-pointer items-center justify-between bg-[#8c8c8c74] rounded-2xl p-6 mx-4 my-3 hover:bg-[#2a2a2a] hover:shadow-lg transition-all duration-300  border-2 "
          >
               <Image
              src={`/images/newprojects/se-icon${item.icon}.png`}
              alt={item.title}
              width={70}
              height={50}
              className="object-contain"

            />   
              <div className="flex flex-col gap-2">
              <p className="text-white text-xl font-semibold">{item.title}</p>
              <p className="text-white text-base opacity-80">{item.text}</p>
            </div>
    
          </div>
        ))}
      </div>
    </div>
  );
}