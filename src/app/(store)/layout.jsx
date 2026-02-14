import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function LayoutHome({children}){
    return (
        <>
  
            <Navbar />  
             {children}
             <Footer />
         

        
        </>
    )
}