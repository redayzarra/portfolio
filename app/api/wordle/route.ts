import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {

    // Error handling
  } catch (error) {
    console.log("[WORDLE_ERROR]", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}
