import type { Profile } from "@/types/profile";

export function validateProfilePayload(payload: Partial<Profile>) {
  const errors: string[] = [];

  if (payload.name !== undefined && (!payload.name || typeof payload.name !== "string")) {
    errors.push("Profile name is required and must be a string.");
  }

  if (payload.title !== undefined && (!payload.title || typeof payload.title !== "string")) {
    errors.push("Profile title is required and must be a string.");
  }

  if (payload.location !== undefined && (!payload.location || typeof payload.location !== "string")) {
    errors.push("Profile location is required and must be a string.");
  }

  if (payload.email !== undefined && (!payload.email || typeof payload.email !== "string")) {
    errors.push("Profile email is required and must be a string.");
  }

  if (payload.summary !== undefined && (!payload.summary || typeof payload.summary !== "string")) {
    errors.push("Profile summary is required and must be a string.");
  }

  return errors;
}
