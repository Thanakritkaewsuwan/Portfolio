import { profile } from "@/data/profile";
import { createErrorResponse, createSuccessResponse } from "@/lib/api/response";
import type { ApiResponse } from "@/lib/api/types";
import type { NoteItem } from "@/types/profile";

function buildNoteId() {
  return `note-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

export async function getNotesData(): Promise<NoteItem[]> {
  return structuredClone(profile.notes);
}

export const notesService = {
  async getNotes(): Promise<ApiResponse<NoteItem[]>> {
    try {
      return createSuccessResponse(await getNotesData(), "Notes retrieved successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return createErrorResponse("Unable to load notes", [message]);
    }
  },

  async getNoteById(id: string): Promise<ApiResponse<NoteItem | null>> {
    const note = profile.notes.find((item) => item.id === id) ?? null;

    if (!note) {
      return createErrorResponse("Note not found", [`Note ${id} was not found.`]);
    }

    return createSuccessResponse(note, "Note retrieved successfully");
  },

  async createNote(entry: Partial<NoteItem>): Promise<ApiResponse<NoteItem[]>> {
    const nextEntry = {
      id: entry.id ?? buildNoteId(),
      title: entry.title ?? "Untitled note",
      detail: entry.detail ?? "",
    };

    const nextNotes = [...profile.notes, nextEntry];
    profile.notes = nextNotes;

    return createSuccessResponse(nextNotes, "Note created successfully");
  },

  async updateNote(id: string, updates: Partial<NoteItem>): Promise<ApiResponse<NoteItem[]>> {
    const nextNotes = profile.notes.map((item) =>
      item.id === id ? { ...item, ...updates, id } : item,
    );

    const exists = nextNotes.some((item) => item.id === id);

    if (!exists) {
      return createErrorResponse("Note not found", [`Note ${id} was not found.`]);
    }

    profile.notes = nextNotes;
    return createSuccessResponse(nextNotes, "Note updated successfully");
  },

  async deleteNote(id: string): Promise<ApiResponse<NoteItem[]>> {
    const nextNotes = profile.notes.filter((item) => item.id !== id);

    if (nextNotes.length === profile.notes.length) {
      return createErrorResponse("Note not found", [`Note ${id} was not found.`]);
    }

    profile.notes = nextNotes;
    return createSuccessResponse(nextNotes, "Note deleted successfully");
  },
};
