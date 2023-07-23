export interface CreateLink {
    idUser: string;
    originUrl: string;
    title: string;
    description: string;
}
  
export interface UpdateLink extends Omit<Partial<CreateLink>, 'idUser'>{

}