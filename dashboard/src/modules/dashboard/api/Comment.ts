import type { CommentCreate, UpdateComment } from "../interface/Comment";


class Comment{

    public baseUrl = 'http://localhost:3001/comments/';

    async getAll(id: string): Promise<CommentCreate[]>{
        const post = await fetch(this.baseUrl+'post/'+id);
        return await post.json();
    }
 
    async get(id: string | string[]){
        const post = await fetch(this.baseUrl+id);
        return await post.json();
    }

    async create(data: CommentCreate) {
        const comment = await fetch(this.baseUrl+'create/', {
            method: 'POST',
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        return await comment.json();
    }

    async update(data: UpdateComment, id: string) {

        const post = await fetch(this.baseUrl + 'update/' + id, {
            method: 'PUT',
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        return await post.json();

    }

    async delete(id: string) {
        const post = await fetch(this.baseUrl+'delete/'+id, {
            method: 'DELETE',
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
        });
        return await post.json();
    }
}
export default new Comment();