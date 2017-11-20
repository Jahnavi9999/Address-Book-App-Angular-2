export class Contact {
         name ?: string; // ? to check null
         email ?: string;
         phone ?: number;
         website ?: string;
         address ?: string;

         constructor(name: string, email: string, phone: number, website: string, address: string) {
           this.name = name;
           this.email = email;
           this.phone = phone;
           this.website = website;
           this.address = address;
         }
       }
