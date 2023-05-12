class ShortLink{

    public baseUrl = 'http://localhost:3000/';

    async generate(originUrl: string) {
        const shortUrl = await fetch(this.baseUrl+'short-link', {
            method: 'POST',
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({originUrl})
        });
        return await shortUrl.json();
    }

    async analytics() {
        const shortUrl = await fetch(this.baseUrl+'short-link-analytics');
        return await shortUrl.json();
    }
}
export default new ShortLink();