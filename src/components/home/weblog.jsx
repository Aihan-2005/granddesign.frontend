import Image from "next/image";
import Link from "next/link";



export default function WeblogHome() {
  const Weblogs = [
    { id:1,
      definition: "نما و محوطه",
      image: "1",
    },
    { id:2,
      definition: "تجاری و اداری"  ,
      image: "2",
    },
    { id:3,
      definition: "داخلی و دکوراسیون",
      image: "3",
    },
  ];

    return(
      <div className="w-full flex flex-col py-[40px] text-white" dir='rtl' id='blog' >
        <div className="w-full py-2 flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 px-4">
          <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-right gap-4 px-4">
            <p className="text-green-600 text-2xl sm:text-3xl w-full">رزمه ما</p>
            <p className="text-black text-xl sm:text-3xl font-bold w-full sm:w-auto">با ما بیشتر اشنا شوید</p>
          </div>
        </div>
        <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-4">
          {Weblogs.map((item)=>(
            <Link key={item.id} href={`/resume/${item.id}`}>
              <div className="w-full flex flex-col items-center cursor-pointer">
                <Image
                  src={`/images/weblogs/image${item.image}.jpg`}
                  alt={item.definition}
                  width={300}
                  height={200}
                  className="object-cover rounded-lg w-[100%] h-auto"
                  />
                  <div className="mt-2" dir="rtl">
                    <p className="text-white text-sm sm:text-base">{item.definition}</p>
                  </div>
              </div>
            </Link>
          )
          )}
        </div>
      </div>
    )
}
