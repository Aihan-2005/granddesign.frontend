export default function InformationSideProject({ param }) {
  
  const projects = {
    1: {
      category: "   ",
      time: "",
      client: "  ",
      location:" "
    },
    2: {
      category: "سالن زیبایی  ",
      time: "1402",
      client: "آقای جفری",
      location:"لاهیجان"
    },
    3: {
      category: "طراحی داخلی و خارجی  ",
      time: "1398",
      client: "مهندس بخشی پور  ",
      location: "لاهیجان"
    },
    4: {
      category: "طراحی داخلی  ",
      time: "1399",
      client: "جناب جعفرپور",
      location: "لاهیجان،میدان آبشار،روبروی استخر لاهیجان"
    },
    5: {
      category: "طراحی داخلی ",
      time: "1403",
      client: "آقای عاشوری ",
      location:"لاهیجان، خیابان خلیل زاده"
    },
    6: {
      category: "طراحی داخلی  ",
      time: "1403",
      client: " جناب آقابزرگی ",
      location: "لاهیجان، خیابان کارگر،کارگر3"
    },
    7: {
      category: "طراحی نما و محوطه سازی ",
      time: "1400",
      client: "جناب رحیم‌زاده",
      location: "کیاشهر"
    },
    8: {
      category: "طراحی نما و محوطه سازی  ",
      time: "1401",
      client: "جناب حسنی ",
      location: "خرارود"
    },
    9: {
      category: "طراحی نما ",
      time: "1399",
      client: "جناب جعفرپور ",
      location: "لاهیجان،میدان آبشار، روبروی استخر لاهیجان"
    },
    10: {
      category: "طراحی داخلی و خارجی  ",
      time: "1402",
      client: " جناب عبداللهی",
      location: "لاهیجان،خیابان هدایت"
    },
    11: {
      category: "طراحی خارجی و محوطه سازی  ",
      time: "1404",
      client: "مهندس بخشی پور  ",
      location: "لاهیجان،بلوار امام رضا"
    },
    12: {
      category: "طراحی داخلی  ",
      time: "1397",
      client: "مهندس سازش حسنی ",
      location:"خیابان کارگر،کارگر10"
    },
    13: {
      category: "طراحی نما و محوطه سازی  ",
      time: "1401",
      client: "مهندس شوهانی  ",
      location: "جنگل های2000"
    },
    14: {
      category: "طراحی نما و محوطه سازی ",
      time: "1397",
      client: "مهندس سعیدی  ",
      location: "سیاهکل"
    },
    15: {
      category: "طراحی داخلی ",
      time: "1402",
      client: "جناب عبداللهی ",
      location: "لاهیجان،خیابان هدایت"
    },
    16: {
      category: "طراحی نما و محوطه سازی ",
      time: "1402",
      client: "جناب محمدی",
      location: "جنگل های3000"
    },
    17: {
      category: " طراحی داخلی",
      time: "1397",
      client: "مهندس سعیدی ",
      location: "سیاهکل"
    }
  }

  const project = projects[param]

  if (!project) {
    return (
      <div className="space-y-6">
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <p className="text-red-500">پروژه‌ای با شناسه {param} پیدا نشد.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-6">
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <h3 className="font-bold mb-3 text-white">مشخصات پروژه</h3>
          <div className="space-y-2 text-gray-300">
            <p><span className="text-gray-400">دسته‌بندی:</span> {project.category}</p>
            <p><span className="text-gray-400">زمان:</span> {project.time}</p>
            <p><span className="text-gray-400">مشتری:</span> {project.client}</p>
            <p><span className="text-gray-400">موقعیت:</span> {project.location}</p>
            
          </div>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 cursor-pointer rounded-lg hover:scale-[1.03] duration-300 font-medium transition">
          تماس برای همکاری
        </button>
      </div>
    </>
  )
}