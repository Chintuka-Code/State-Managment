import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  // getting particular data from state
  constructor(private store: Store<{ user: User }>) {}

  user_Profile$: Observable<User>;

  get_data() {
    this.user_Profile$ = this.store.select('user');
  }

  ngOnInit(): void {
    this.get_data();
  }
}
