import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "numbers.json");
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "❌ خطا در خواندن شماره‌ها" },
      { status: 500 }
    );
  }
}
