// app/home/layout.jsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function LayoutHome({ children }) {
  return (
    <>
      <Navbar />    {/* هدر */}
      {children}    {/* محتوای صفحه */}
      <Footer />    {/* فوتر */}
    </>
  );
}
