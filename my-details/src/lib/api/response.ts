import type { ApiErrorResponse, ApiResponse, ApiSuccessResponse } from "@/lib/api/types";

export function createSuccessResponse<T>(
  data: T,
  message = "Data retrieved successfully",
  meta = null,
): ApiSuccessResponse<T> {
  return {
    success: true,
    message,
    data,
    meta,
  };
}

export function createErrorResponse(
  message = "Something went wrong",
  errors: string[] = [],
): ApiErrorResponse {
  return {
    success: false,
    message,
    errors,
  };
}

export function isSuccessResponse<T>(response: ApiResponse<T>): response is ApiSuccessResponse<T> {
  return response.success;
}
