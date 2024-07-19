
export interface Contact{
  id:number;
  email:string;
  first_name:string;
  last_name:string;
  avatar:string;
  liked:boolean;
}
export interface ContactResponse{
  data: Contact;
  support: {
    url: string;
    text: string;
  };
}

export interface ContactsResponse{
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Contact[];
  support: {
    url: string;
    text: string;
  };
}