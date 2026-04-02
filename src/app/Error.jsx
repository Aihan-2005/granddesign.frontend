
export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgba(49,49,49,0.901)] px-4">
      <div className="text-center text-white space-y-6 animate-fade-in">
        <h1 className="text-4xl font-bold">خطا رخ داده است</h1>
        <p className="text-lg text-gray-300">متاسفیم! صفحه مورد نظر یافت نشد.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition"
        >
          بازگشت به خانه
        </a>
      </div>
    </div>
  );
}
