export default function InformationMainProject(){
    return(<>
        {/* بخش اصلی */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4 text-white">نام پروژه</h1>
          <div className="prose prose-invert">
            <p className="text-gray-300 mb-4">
                      این پروژه با هدف ایجاد یک پلتفرم جامع برای مدیریت کسب‌وکارها توسعه داده شده است. 
                      سیستم با استفاده از جدیدترین تکنولوژی‌های روز دنیا پیاده‌سازی شده و قابلیت‌های منحصر‌به‌فردی 
                      مانند تحلیل داده‌های لحظه‌ای، گزارش‌گیری پیشرفته و مدیریت چند‌سکویی را ارائه می‌دهد. 
                      رابط کاربری هوشمند و واکنش‌گرا تجربه کاربری بی‌نظیری برای مشتریان فراهم کرده است. 
           </p>
            <h3 className="text-xl font-semibold mb-3 text-white">ویژگی‌های کلیدی</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-300">
              <li>ویژگی شماره یک پروژه</li>
              <li>مزیت خاص شماره دو</li>
              <li>نکته برجسته شماره سه</li>
            </ul>
          </div>
        </div>
    </>)
} 