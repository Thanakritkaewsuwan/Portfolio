export const API_VERSION = "v1";
export const API_BASE_PATH = `/api/${API_VERSION}`;

export const DEFAULT_API_HEADERS = {
  "Content-Type": "application/json",
} as const;

export function buildApiPath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_PATH}${normalizedPath}`;
}
