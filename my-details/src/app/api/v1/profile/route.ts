import { NextResponse } from "next/server";

import { profileService } from "@/services/profile.service";

export async function GET() {
  const response = await profileService.getProfile();
  return NextResponse.json(response, { status: response.success ? 200 : 500 });
}

export async function PUT(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const response = await profileService.updateProfile(payload);
  return NextResponse.json(response, { status: response.success ? 200 : 400 });
}
