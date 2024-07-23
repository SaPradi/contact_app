
export interface Contact{
  id:number;
  email:string;
  first_name:string;
  last_name:string;
  avatar:string | null;
  liked:boolean;
};

export interface ContactData{
  email:string;
  first_name:string;
  last_name:string;
  liked:boolean
  [key: string]: any;
}

export interface ContactErrorsData{
  [key: string]: any; 
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



