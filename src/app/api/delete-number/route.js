import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const { number } = await request.json();
    const filePath = path.join(process.cwd(), "data", "numbers.json");

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { message: "فایل شماره‌ها یافت نشد." },
        { status: 404 }
      );
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const updated = data.filter((item) => item.number !== number);

    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));

    return NextResponse.json({ message: "✅ شماره حذف شد.", numbers: updated });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "❌ خطا در حذف شماره" }, { status: 500 });
  }
}
