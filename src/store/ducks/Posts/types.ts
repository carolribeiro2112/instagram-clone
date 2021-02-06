export enum PostsTypes{
  GET_POSTS = '@GET_POSTS'
}

export interface PostsItem {
  id: number,
  user: string,
  userPicture: string,
  postPicture: string,
  description: string,
  location:string,
  likes: number
}

export interface Posts {
  arrayPosts: PostsItem[]
}

export interface PostsState {
  posts: Posts
}