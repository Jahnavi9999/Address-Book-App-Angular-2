import { Component, OnInit, Input, Injectable } from '@angular/core'; // Adding Input to tell contact-list gets input from contact-form
import { Contact } from '../contact';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { AddContactService } from '../add-contact.service';





@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  providers: [AddContactService],
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  @Input() contactListObject: Contact; // To notify that the component receives an object
  addContactServiceObj: AddContactService;
  contactListArray: Contact[]; // Array to store objects of type Contact.

  constructor(public addContactService: AddContactService) {
    this.addContactServiceObj = addContactService;
  }

getContacts(): void {
  /*this.addContactServiceObj.getContacts()
      .subscribe(contacts => this.contactListArray = contacts);
      console.log(this.contactListArray);
*/
    this.addContactServiceObj.getContacts()
      .subscribe(contacts => (console.log(contacts)));

}

  ngOnInit() {
    this.getContacts();

  }
}
