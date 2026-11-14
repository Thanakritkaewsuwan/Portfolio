import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "API v1 is available.",
    data: {
      version: "v1",
      endpoints: [
        "/api/v1/profile",
        "/api/v1/education",
        "/api/v1/experience",
        "/api/v1/notes",
        "/api/v1/categories",
      ],
    },
    meta: null,
  });
}
