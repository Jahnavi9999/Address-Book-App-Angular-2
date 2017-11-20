import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AddContactService } from './add-contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppRoutingModule } from './/app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule


    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
  //  HttpClientInMemoryWebApiModule.forRoot(
   // InMemoryDataService, { dataEncapsulation: false }
//),
  ],
  declarations: [AppComponent, ContactsListComponent, ContactFormComponent],
  providers: [AddContactService], // Add the service to providers list
  bootstrap: [AppComponent]
})
export class AppModule {}
