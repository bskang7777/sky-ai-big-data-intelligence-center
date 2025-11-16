/**
 * Builds a runtime-safe URL for files inside /public/images that respects
 * Vite's base path (e.g., GitHub Pages subdirectories).
 */
export const publicImage = (fileName: string) => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base.endsWith("/") ? base : `${base}/`}images/${fileName}`;
};
