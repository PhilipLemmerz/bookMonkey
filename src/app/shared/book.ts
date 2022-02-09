export interface Book {
  title: string;
  authors: string[];
  isbn: string;
  published: Date;
  subtitle?: string; // ? heißt das das die angabe der property bei einem Objekt vom Typ Book optional ist
  rating?: number;
  thumbnails: Thumbnail[];
  description?: string;
}

export interface Thumbnail {
  url: string;
  title?: string;
}
