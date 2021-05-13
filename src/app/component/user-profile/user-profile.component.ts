import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginstart } from 'src/app/auth-state/auth.action';
import { User } from 'src/app/model/user.interface';
import { getUser } from 'src/app/state/user.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  // getting particular data from state
  constructor(private store: Store) {}

  user_Profile$: Observable<User>;

  get_data() {
    // this.user_Profile$ = this.store.select(getUser);
    // this.user_Profile$.subscribe((Res) => {
    //   console.log(Res);
    // });
  }

  ngOnInit(): void {
    this.get_data();
  }
}
