import { NextResponse } from "next/server";

import { categoriesService } from "@/services/categories.service";

export async function GET() {
  const response = await categoriesService.getCategories();
  return NextResponse.json(response, { status: response.success ? 200 : 500 });
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const response = await categoriesService.createCategory(payload);
  return NextResponse.json(response, { status: response.success ? 201 : 400 });
}
