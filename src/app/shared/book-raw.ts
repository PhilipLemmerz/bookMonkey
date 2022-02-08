export interface BookRaw {

  title: string;
  authors: string[];
  isbn: string;
  published: string;
  subtitle?: string;
  rating?: number;
  thumbnails?: ThumbnailRaw[];
  description?: string;
}

export interface ThumbnailRaw {
  url: string;
  title?: string;
}

