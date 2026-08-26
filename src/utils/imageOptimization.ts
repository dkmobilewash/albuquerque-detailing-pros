const SUPABASE_STORAGE_MARKER = '/storage/v1/object/public/';
const SUPABASE_RENDER_MARKER = '/storage/v1/render/image/public/';

interface OptimizeOptions {
  width?: number;
  quality?: number;
}

export function optimizeImageUrl(url: string, options: OptimizeOptions = {}): string {
  if (!url) return url;

  const { width = 800, quality = 75 } = options;

  if (!url.includes(SUPABASE_STORAGE_MARKER)) {
    return url;
  }

  const renderUrl = url.replace(SUPABASE_STORAGE_MARKER, SUPABASE_RENDER_MARKER);
  const separator = renderUrl.includes('?') ? '&' : '?';
  return `${renderUrl}${separator}width=${width}&quality=${quality}`;
}
