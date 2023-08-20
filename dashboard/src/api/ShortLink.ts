import { useAuth } from '@/stores/auth';
import axiosInstance from './http';
import type { ShortLink } from '@/types/ShortLink';

class Link {

  private http: any;
  private auth: any;

  constructor(auth: any = useAuth, http: any = axiosInstance){
    this.http = axiosInstance;
    this.auth = auth;
  }


  public async create(shortLink: ShortLink){
    return this.http.post('links/create', shortLink);
  }

  public async update(id: string, shortLink: ShortLink){
    return this.http.put('links/update/'+id);
  }

  public async delete(id: string){
    return this.http.delete('links/delete/'+id);
  }

  public async get(id: string){
    return this.http.get('links/'+id);
  }

  public async getAll(){
    return this.http.get('links/all/'+this.auth().user?.id);
  }

  public async getLinksRecents(){
    return this.http.get('links/recents/'+this.auth().user?.id);
  }
}

export default new Link;