import { profile } from "@/data/profile";
import { createErrorResponse, createSuccessResponse } from "@/lib/api/response";
import type { ApiResponse } from "@/lib/api/types";
import type { EducationEntry } from "@/types/profile";

function buildEducationId() {
  return `edu-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

export async function getEducationData(): Promise<EducationEntry[]> {
  return structuredClone(profile.education);
}

export const educationService = {
  async getEducation(): Promise<ApiResponse<EducationEntry[]>> {
    try {
      return createSuccessResponse(await getEducationData(), "Education records retrieved successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return createErrorResponse("Unable to load education records", [message]);
    }
  },

  async createEducation(entry: Partial<EducationEntry>): Promise<ApiResponse<EducationEntry[]>> {
    const nextEntry = {
      id: entry.id ?? buildEducationId(),
      degree: entry.degree ?? "",
      institution: entry.institution ?? "",
      period: entry.period ?? "",
      detail: entry.detail ?? "",
    };

    const nextEducation = [...profile.education, nextEntry];
    profile.education = nextEducation;

    return createSuccessResponse(nextEducation, "Education record created successfully");
  },

  async updateEducation(id: string, updates: Partial<EducationEntry>): Promise<ApiResponse<EducationEntry[]>> {
    const nextEducation = profile.education.map((item) =>
      item.id === id ? { ...item, ...updates, id } : item,
    );

    const exists = nextEducation.some((item) => item.id === id);

    if (!exists) {
      return createErrorResponse("Education record not found", [`Record ${id} was not found.`]);
    }

    profile.education = nextEducation;
    return createSuccessResponse(nextEducation, "Education record updated successfully");
  },

  async deleteEducation(id: string): Promise<ApiResponse<EducationEntry[]>> {
    const nextEducation = profile.education.filter((item) => item.id !== id);

    if (nextEducation.length === profile.education.length) {
      return createErrorResponse("Education record not found", [`Record ${id} was not found.`]);
    }

    profile.education = nextEducation;
    return createSuccessResponse(nextEducation, "Education record deleted successfully");
  },
};
