import { MockData } from './mockData';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AddContactService {
  contactsArray: Contact[] = [];
  public contactsUrl = 'api/contacts'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  // mockData: MockData = new MockData(999, 'Mr. Anirudh');
 //  mock = { id: 999, name: 'Mr. Anirudh' };

  constructor(private http: HttpClient) {}

  /* Test Function to make sure the Contact to add is reaching the service
  addContacts(ContactOb: Contact) {
    //console.log(ContactOb);
    this.contactsArray.push(
      new Contact(
        ContactOb.name,
        ContactOb.email,
        ContactOb.phone,
        ContactOb.website,
        ContactOb.address
      )
    );
  }
*/

  /** GET contacts from the server */
  getContacts(): Observable<Contact[]> {
    return this.http
      .get<Response>(this.contactsUrl)
      .map((res: Response) => res.json());
  }

  /** POST: add a new contact to the server */
  addContacts(ContactOb: Contact): Observable<Contact> {
    console.log(ContactOb);
    return this.http
      .post<Contact>(this.contactsUrl, ContactOb, this.httpOptions)
      .pipe(
        tap((contact: Contact) =>
          console.log(`added hero w/ id=${contact.name}`)
        )
        // catchError(this.environment<Contact>())
      );
  }

  ngOnInit() {}
}



