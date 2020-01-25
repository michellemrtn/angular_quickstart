import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts.model';
import { Observable } from 'rxjs';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  displayedColumns = ['vorname', 'name', 'adresse', 'edit', 'delete'];

  constructor(private service: ContactsService) { }

  ngOnInit() {
    this.contacts$ = this.service.getContacts();
    this.service.getContacts().subscribe(contacts => console.log(contacts));
  }

  addContact() {
    console.log('addContact');
  }

}
