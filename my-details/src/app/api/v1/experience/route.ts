import { NextResponse } from "next/server";

import { experienceService } from "@/services/experience.service";

export async function GET() {
  const response = await experienceService.getExperience();
  return NextResponse.json(response, { status: response.success ? 200 : 500 });
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const response = await experienceService.createExperience(payload);
  return NextResponse.json(response, { status: response.success ? 201 : 400 });
}
