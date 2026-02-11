import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AI from "@/components/home/AI"; 


export default function LayoutHome({children}){
    return (
        <>
  
            <Navbar />  
             {children}
             <AI/>
             <Footer />
         

        
        </>
    )
}