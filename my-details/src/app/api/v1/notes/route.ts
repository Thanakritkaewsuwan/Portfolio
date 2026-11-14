import { NextResponse } from "next/server";

import { notesService } from "@/services/notes.service";

export async function GET() {
  const response = await notesService.getNotes();
  return NextResponse.json(response, { status: response.success ? 200 : 500 });
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const response = await notesService.createNote(payload);
  return NextResponse.json(response, { status: response.success ? 201 : 400 });
}
