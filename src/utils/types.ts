
// type of Aticle

export interface Article {
    id: number | undefined;
    title: string | undefined;
    image: string | undefined;
    category?: string | undefined;
    author?: string | undefined;
    authorPic?: string | undefined;
    published_date?: string | undefined;
    reading_time?: string | undefined;
    content?: string | undefined;
    tags?: string[] | undefined; // Array of strings
  }