import Image from "next/image";
import BackgroundImage from "./backgroundImage";
import BackgroundeAboutUs from "./backgoroundAboutUs";
import SliderProjects from "./sliderProjects";

export default function HomePage(){
    return (
        <>
<BackgroundImage/>
<div className="px-[50px]">
<BackgroundeAboutUs/>
<SliderProjects />
</div>
         </>
    )
}