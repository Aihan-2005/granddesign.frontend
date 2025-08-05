"use client";

import { useLoginStore } from "@/zustand/loginStore";
import { X } from "lucide-react";
import { useRef, useState } from "react";

export default function LoginModal() {
  const modalRef = useRef();

  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const { isLoginOpen, closeLogin } = useLoginStore();

  if (!isLoginOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      closeLogin();
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phone || !formData.password) {
      alert("شماره تماس و رمز عبور الزامی است");
      return;
    }

    if (isRegister) {
      if (!formData.password !== formData.confirmPassword) {
        alert("رمز عبور و تکرار آن باید یکسان باشند");
        return;
      }
      alert("ثبت نام موفق");
    } else {
      alert("ورود ناموفق");
    }

    closeLogin();
  };
 return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative">
        <button
          className="absolute top-3 left-3 text-gray-600 hover:text-black"
          onClick={closeLogin}
          aria-label="بستن"
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">
          {isRegister ? "ثبت نام" : "ورود به حساب کاربری"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="نام" 
                className="w-full text-right p-3 border rounded-lg outline-none focus:ring-2 focus:ring-emerald-400 transition"
                required={isRegister}
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="نام خانوادگی"
                className="w-full p-3 text-right border rounded-lg outline-none focus:ring-2 focus:ring-emerald-400 transition"
                required={isRegister}
              />
            </>
          )}

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="شماره تماس"
            className="w-full p-3 border text-right rounded-lg outline-none focus:ring-2 focus:ring-emerald-400 transition"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="رمز عبور"
            className="w-full p-3 border  text-right rounded-lg outline-none focus:ring-2 focus:ring-emerald-400 transition"
            required
          />

          {isRegister && (
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="تکرار رمز عبور"
              className="w-full p-3 border text-right  rounded-lg outline-none focus:ring-2 focus:ring-emerald-400 transition"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            {isRegister ? "ثبت نام" : "ورود"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          {isRegister ? "قبلا ثبت نام کرده‌اید؟" : "حساب کاربری ندارید؟"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-emerald-600 font-semibold hover:underline"
          >
            {isRegister ? "ورود" : "ثبت نام"}
          </button>
        </p>
      </div>
    </div>
  );
}
