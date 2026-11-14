import { profile } from "@/data/profile";
import { createErrorResponse, createSuccessResponse } from "@/lib/api/response";
import type { ApiResponse } from "@/lib/api/types";
import { validateProfilePayload } from "@/schemas/profile.schema";
import type { Profile } from "@/types/profile";

export async function getProfileData(): Promise<Profile> {
  return structuredClone(profile);
}

export const profileService = {
  async getProfile(): Promise<ApiResponse<Profile>> {
    try {
      return createSuccessResponse(await getProfileData(), "Profile retrieved successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return createErrorResponse("Unable to load profile", [message]);
    }
  },

  async updateProfile(payload: Partial<Profile>): Promise<ApiResponse<Profile>> {
    const errors = validateProfilePayload(payload);

    if (errors.length > 0) {
      return createErrorResponse("Invalid profile payload", errors);
    }

    const nextProfile = {
      ...profile,
      ...payload,
      stats: payload.stats ?? profile.stats,
      education: payload.education ?? profile.education,
      experience: payload.experience ?? profile.experience,
      skills: payload.skills ?? profile.skills,
      projects: payload.projects ?? profile.projects,
      milestones: payload.milestones ?? profile.milestones,
      interests: payload.interests ?? profile.interests,
      notes: payload.notes ?? profile.notes,
      goals: payload.goals ?? profile.goals,
    };

    return createSuccessResponse(nextProfile, "Profile updated successfully");
  },
};
