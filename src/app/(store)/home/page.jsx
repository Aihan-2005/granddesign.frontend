import Image from "next/image";
import BackgroundImage from "../../../components/home/backgroundImage";
import BackgroundeAboutUs from "../../../components/home/backgoroundAboutUs";
import SliderProjects from "../../../components/home/sliderProjects";
import VideoPlayerHome from "@/components/home/videoHome";
import WeblogHome from "@/components/home/weblog";
import NewProjectsHome from "@/components/home/newProjects";
import Team from "@/components/home/team";
export default function HomePage(){
    return (
        <>
<BackgroundImage/>
<div className="px-[50px]">
<BackgroundeAboutUs/>
<NewProjectsHome/>
<SliderProjects />

</div>
<div>
    <Team/>
</div>
<div className="px-[150px]">
    <VideoPlayerHome />
</div>
<div className="px-[50px]">
    <WeblogHome/>
</div>
         </>
    )
}