export interface LinkCreate {
    idUser: string;
    originUrl: string;
    title: string;
    description: string;
}
  
export interface UpdateLink extends Omit<Partial<LinkCreate>, 'idUser'>{
    id: string;
}