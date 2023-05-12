import type { Post as PostCreate, UpdatePost } from "@/interfaces";

class Post{

    public baseUrl = 'http://localhost:3001/posts/';

    async getAll(){
        const post = await fetch(this.baseUrl);
        return await post.json();
    }
 
    async get(id: string | string[]){
        const post = await fetch(this.baseUrl+id);
        return await post.json();
    }

    async create(data: PostCreate) {
        const post = await fetch(this.baseUrl+'create/', {
            method: 'POST',
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

    async update(data: UpdatePost, id: string) {

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
export default new Post;