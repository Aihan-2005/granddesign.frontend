import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const { number } = await request.json();

    const phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(number)) {
      return NextResponse.json(
        { message: "❌ شماره واردشده معتبر نیست." },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "data", "numbers.json");

    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]");
    }

    const existing = JSON.parse(fs.readFileSync(filePath, "utf8"));
    existing.push({
      number,
      date: new Date().toLocaleString("fa-IR"),
    });

    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

    return NextResponse.json({ message: "  شماره شما با موفقیت ثبت شد ❤️" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "❌ خطا در ذخیره شماره", error },
      { status: 500 }
    );
  }
}
