import { profile } from "@/data/profile";
import { createErrorResponse, createSuccessResponse } from "@/lib/api/response";
import type { ApiResponse } from "@/lib/api/types";
import type { CareerEntry } from "@/types/profile";

function buildExperienceId() {
  return `exp-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

export async function getExperienceData(): Promise<CareerEntry[]> {
  return structuredClone(profile.experience);
}

export const experienceService = {
  async getExperience(): Promise<ApiResponse<CareerEntry[]>> {
    try {
      return createSuccessResponse(await getExperienceData(), "Experience records retrieved successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return createErrorResponse("Unable to load experience records", [message]);
    }
  },

  async createExperience(entry: Partial<CareerEntry>): Promise<ApiResponse<CareerEntry[]>> {
    const nextEntry = {
      id: entry.id ?? buildExperienceId(),
      role: entry.role ?? "",
      company: entry.company ?? "",
      period: entry.period ?? "",
      summary: entry.summary ?? "",
      highlights: entry.highlights ?? [],
    };

    const nextExperience = [...profile.experience, nextEntry];
    profile.experience = nextExperience;

    return createSuccessResponse(nextExperience, "Experience record created successfully");
  },

  async updateExperience(id: string, updates: Partial<CareerEntry>): Promise<ApiResponse<CareerEntry[]>> {
    const nextExperience = profile.experience.map((item) =>
      item.id === id ? { ...item, ...updates, id } : item,
    );

    const exists = nextExperience.some((item) => item.id === id);

    if (!exists) {
      return createErrorResponse("Experience record not found", [`Record ${id} was not found.`]);
    }

    profile.experience = nextExperience;
    return createSuccessResponse(nextExperience, "Experience record updated successfully");
  },

  async deleteExperience(id: string): Promise<ApiResponse<CareerEntry[]>> {
    const nextExperience = profile.experience.filter((item) => item.id !== id);

    if (nextExperience.length === profile.experience.length) {
      return createErrorResponse("Experience record not found", [`Record ${id} was not found.`]);
    }

    profile.experience = nextExperience;
    return createSuccessResponse(nextExperience, "Experience record deleted successfully");
  },
};
