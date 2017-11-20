import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

 const routes: Routes = [{ path: 'contacts', component: ContactsListComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {


}
