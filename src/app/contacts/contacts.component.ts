import { Component, OnInit } from '@angular/core';
import { Contact, testdata } from './contacts.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public displayedColumns = ['vorname', 'name', 'adresse', 'delete'];
  public dataSource: Contact[] = testdata;

  constructor() { }

  ngOnInit() {
  }

  addContact() {
    console.log('addContact');
  }

}
