export default function InformationSideProject(){
    return(<>
        <div className="space-y-6">
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="font-bold mb-3 text-white">مشخصات پروژه</h3>
            <div className="space-y-2 text-gray-300">
              <p><span className="text-gray-400">دسته‌بندی:</span> طراحی وب</p>
              <p><span className="text-gray-400">زمان:</span> 1402</p>
              <p><span className="text-gray-400">مشتری:</span> شرکت نمونه</p>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 cursor-pointer rounded-lg hover:scale-[1.03] duration-300 font-medium transition">
            تماس برای همکاری
          </button>
        </div>
    </>)
} 