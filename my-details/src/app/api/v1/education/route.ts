import { NextResponse } from "next/server";

import { educationService } from "@/services/education.service";

export async function GET() {
  const response = await educationService.getEducation();
  return NextResponse.json(response, { status: response.success ? 200 : 500 });
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const response = await educationService.createEducation(payload);
  return NextResponse.json(response, { status: response.success ? 201 : 400 });
}
