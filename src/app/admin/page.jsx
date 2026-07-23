"use client";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const [numbers, setNumbers] = useState([]);
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState(false);
  const [message, setMessage] = useState("");

  async function fetchNumbers() {
    try {
      const res = await fetch("/api/get-numbers");
      const data = await res.json();
      setNumbers(data);
    } catch {
      setMessage("❌ خطا در دریافت لیست شماره‌ها");
    }
  }

  async function deleteNumber(number) {
    try {
      const res = await fetch("/api/delete-number", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number }),
      });
      const data = await res.json();
      setNumbers(data.numbers);
    } catch {
      alert("خطا در حذف شماره");
    }
  }

  useEffect(() => {
    if (access) fetchNumbers();
  }, [access]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      {!access ? (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold text-green-400">
            ورود مدیر گرند دیزاین 👑
          </h2>
          <input
            type="password"
            placeholder="رمز ورود"
            className="bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-gray-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-green-600 rounded-md px-4 py-2 font-semibold hover:bg-green-700 transition"
            onClick={() => {
              if (password === "granddesign1404") setAccess(true);
              else alert("❌ رمز اشتباه است");
            }}
          >
            ورود
          </button>
        </div>
      ) : (
        <div className="w-full max-w-lg">
          <h2 className="text-2xl mb-5 text-green-400 font-bold text-center">
            لیست شماره‌های کاربران
          </h2>

          {message && <p className="text-red-400 mb-3">{message}</p>}

          <ul className="space-y-2">
            {numbers.length === 0 ? (
              <p className="text-gray-400 text-center">هیچ شماره‌ای ثبت نشده </p>
            ) : (
              numbers.map((item, i) => (
                <li
                  key={i}
                  className="bg-gray-800 px-4 py-2 rounded-md flex justify-between items-center"
                >
                  <div>
                    <span>{item.number}</span>
                    <span className="text-sm text-gray-400 block">{item.date}</span>
                  </div>
                  <button
                    onClick={() => deleteNumber(item.number)}
                    className="text-red-500 hover:text-red-600 font-bold text-lg transition"
                    title="حذف شماره"
                  >
                    ❌
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
