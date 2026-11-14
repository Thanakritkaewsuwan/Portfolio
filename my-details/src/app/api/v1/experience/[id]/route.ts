import { NextResponse } from "next/server";

import { experienceService } from "@/services/experience.service";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const payload = await request.json().catch(() => ({}));
  const response = await experienceService.updateExperience(id, payload);
  return NextResponse.json(response, { status: response.success ? 200 : 400 });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const response = await experienceService.deleteExperience(id);
  return NextResponse.json(response, { status: response.success ? 200 : 400 });
}
