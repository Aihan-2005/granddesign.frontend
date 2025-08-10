export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <div className="relative w-24 h-24 mb-8">
        {/* Main spinner */}
        <div className="absolute inset-0 border-4 border-transparent border-t-emerald-400 border-r-emerald-400 rounded-full animate-spin"></div>
        
        {/* Secondary spinner (reverse direction) */}
        <div className="absolute inset-2 border-4 border-transparent border-b-amber-300 border-l-amber-300 rounded-full animate-spin-reverse"></div>
        
        {/* Inner pulse effect */}
        <div className="absolute inset-4 border-2 border-white/10 rounded-full animate-pulse"></div>
        
        {/* Logo or center element */}
        <div className="absolute inset-6 flex items-center justify-center">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
        </div>
      </div>
      
      <p className="text-white text-xl font-medium mt-6 tracking-wider relative">
        <span className="animate-pulse">در حال بارگذاری</span>
        <span className="inline-block ml-2 animate-bounce">
          <span className="inline-block delay-100">.</span>
          <span className="inline-block delay-200">.</span>
          <span className="inline-block delay-300">.</span>
        </span>
      </p>
      
      <div className="mt-8 w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-emerald-400 to-amber-300 rounded-full animate-progress"></div>
      </div>
    </div>
  );
}