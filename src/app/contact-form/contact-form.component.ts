import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Contact } from '../contact';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';
import { AddContactService } from '../add-contact.service'; // Import service into the component

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  providers: [AddContactService],
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent implements OnInit {
  title: String;
  contactFormObj: Contact = {}; // Object of the type Contact is created
  public addContactServiceObj: AddContactService;

  constructor(public addContactService: AddContactService) {
    this.addContactServiceObj = addContactService;
  }


  public AddContact(): Contact[]  {
   this.addContactServiceObj.addContacts(this.contactFormObj);
  // console.log(this.addContactServiceObj.contactsArray);

   return this.addContactServiceObj.contactsArray;


  }


  ngOnInit() {

  }
}
