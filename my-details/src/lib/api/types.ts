export type ApiMeta = Record<string, unknown> | null;

export type ApiSuccessResponse<T> = {
  success: true;
  message: string;
  data: T;
  meta: ApiMeta;
};

export type ApiErrorResponse = {
  success: false;
  message: string;
  errors: string[];
};

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
