import { apiUrl } from "@/shared/apiBaseUrl";

export const likeAdd = async(id: string, likes: number) => {
    console.log(likes)
    const l = await fetch(apiUrl.like, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            id, 
            likes 
        })
    });
    return await l.json();
}