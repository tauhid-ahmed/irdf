export const createSlug = (slug: string) =>
  slug
    .replace(/[\s&/]+/g, "-") // Replaces spaces, '&', and '/' with '-'
    .toLowerCase();
