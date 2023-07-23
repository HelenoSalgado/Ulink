export interface CreateLink {
    idUser: string;
    originUrl: string;
    title: string;
    description: string;
    urlImg: string;
}
  
export interface UpdateLink extends Omit<Partial<CreateLink>, 'idUser'>{
    idUrl: string;
    shortUrl?: string;
}