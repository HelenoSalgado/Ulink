export interface ShortLink {
    idUser: string;
    originUrl: string;
    title: string;
    description: string;
    urlImg: string;
}
  
export interface ShortLinkUpdate extends Omit<Partial<ShortLink>, 'idUser'>{
    id?: string;
    shortUrl?: string;
}