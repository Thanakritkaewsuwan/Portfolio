import { NextResponse } from "next/server";

import { educationService } from "@/services/education.service";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const payload = await request.json().catch(() => ({}));
  const response = await educationService.updateEducation(id, payload);
  return NextResponse.json(response, { status: response.success ? 200 : 400 });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const response = await educationService.deleteEducation(id);
  return NextResponse.json(response, { status: response.success ? 200 : 400 });
}
