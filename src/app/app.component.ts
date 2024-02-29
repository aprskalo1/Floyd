import { Component } from '@angular/core';
import { EntityService, RhetosRest } from '@ngx-floyd/rhetos';
import { Observable } from 'rxjs';
import { Bookstore } from './rhetos-model';
import { newGuid } from '@ngx-floyd/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  persons$: Observable<Bookstore.Person[]>;
  entityService = this.rhetosRest.forEntity(Bookstore.PersonInfo);

  constructor(private rhetosRest: RhetosRest) {
    const newPerson: Bookstore.Person = {
      ID: newGuid(),
      Name: 'John Doe',
      VATNumber: newGuid(),
    };

    this.entityService.insert(newPerson).subscribe();
    this.persons$ = this.rhetosRest.forEntity<Bookstore.Person>(Bookstore.PersonInfo).all();
  }
}
