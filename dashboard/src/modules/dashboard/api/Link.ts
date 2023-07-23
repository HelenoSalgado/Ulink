import { apiUrl } from "@/shared/apiBaseUrl";
import type { CreateLink, UpdateLink } from "../interface/Link";

class Link{

    async getAll(idUser: string): Promise<UpdateLink[]>{
        const links = await fetch(apiUrl.links+'get-all/'+idUser);
        return await links.json();
    }
 
    async get(id: string){
        const link = await fetch(apiUrl.links+id);
        return await link.json();
    }

    async create(data: CreateLink) {
        const link = await fetch(apiUrl.links+'create', {
            method: 'POST',
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        return await link.json();
    }

    async update(data: UpdateLink, id: string) {

        const post = await fetch(apiUrl.links+'update/'+id, {
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
        const link = await fetch(apiUrl.links+'delete/'+id, {
            method: 'DELETE',
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
        });
        return await link.json();
    }
}
export default new Link();