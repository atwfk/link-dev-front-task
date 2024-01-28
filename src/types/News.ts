export interface News {
  id: string;
  title: string;
  content: string;
  categoryID: string;
  urlToImage: string;
  description: string;
  publishedDate: string;
  showOnHomepage: boolean;
  category?: string;
}

export interface Category {
  id: string;
  name: string;
}
