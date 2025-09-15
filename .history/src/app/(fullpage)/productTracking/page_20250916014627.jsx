import Header from "@/components/store/Headers";

export default function ProductTracking() {
    return (
        <div className="min-h-screen bg-gray-500 relative overflow-hidden" >
            <Header />
            
            <div className="flex items-center justify-center min-h-screen pt-16">
                <div className="w-full max-w-sm p-4 bg-[#69b190] border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 ">
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                            لطفا جهت پیگیری سفارش شماره موبایل خود را وارد نمایید
                        </h5>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
                                شماره موبایل
                            </label>
                            <input 
                                type="tel" 
                                name="phone" 
                                id="phone" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white text-right"
                                placeholder="09xxxxxxxxx" 
                                required 
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-full text-white bg-[] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            پیگیری سفارش
                        </button>
                        
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                            ثبت نام نکرده‌اید؟{" "}
                            <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                                ایجاد حساب کاربری
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}