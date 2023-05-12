export interface CommentCreate {
    id: string;
    content: string;
    profile: {
        name: string;
        avatar?: string;
    };
    likes?: number;
}
  
export type UpdateComment = Omit<Partial<Comment>, 'likes' | 'postId'>