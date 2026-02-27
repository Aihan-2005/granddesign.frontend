import Image from "next/image";
import InformationMainProject from "./informationMain";
import InformationSideProject from "./informationSide";
import ImagesProject from "./ImagesProject";

export default async function ProjectPage({params}) {
  if(params) {
      const {id} = params;
      return (
        <div className="max-w-6xl mx-auto px-4 py-12  text-gray-100 mt-10">
          {/* تصویر اصلی پروژه */}

    <ImagesProject param={id}/>
          {/* اطلاعات پروژه */}
          <div className="grid md:grid-cols-3 gap-8 " dir="rtl">
            {/* بخش اصلی */}
    <InformationMainProject param={id} />

            {/* اطلاعات جانبی */}
    <InformationSideProject param={id} />
          </div>
        </div>
      );
  }  
  return <p className="text-white text-center mt-12">صفحه پیدا نشد</p>
}