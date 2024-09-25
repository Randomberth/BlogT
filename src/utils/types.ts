
// interface of Aticle

export interface InterfaceArticleBlog {
  "id": number,
  "title": string,
  "image": string,
  "category": string,
  "author": string,
  "authorPic": string,
  "published_date": Date,
  "reading_time": string,
  "content": string,
  "tags": string[],
}