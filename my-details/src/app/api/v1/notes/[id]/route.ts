import { NextResponse } from "next/server";

import { notesService } from "@/services/notes.service";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const response = await notesService.getNoteById(id);
  return NextResponse.json(response, { status: response.success ? 200 : 404 });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const payload = await request.json().catch(() => ({}));
  const response = await notesService.updateNote(id, payload);
  return NextResponse.json(response, { status: response.success ? 200 : 400 });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const response = await notesService.deleteNote(id);
  return NextResponse.json(response, { status: response.success ? 200 : 400 });
}
