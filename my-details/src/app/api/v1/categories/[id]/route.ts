import { NextResponse } from "next/server";

import { categoriesService } from "@/services/categories.service";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const payload = await request.json().catch(() => ({}));
  const response = await categoriesService.updateCategory(id, payload);
  return NextResponse.json(response, { status: response.success ? 200 : 400 });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const response = await categoriesService.deleteCategory(id);
  return NextResponse.json(response, { status: response.success ? 200 : 400 });
}
