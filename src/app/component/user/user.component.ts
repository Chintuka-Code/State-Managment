import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/user.interface';
import { saveUser } from 'src/app/state/user.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  show_otp: boolean = false;
  user_form: FormGroup;
  otp: number = 12345;
  constructor(private fb: FormBuilder, private store: Store) {}

  validation() {
    this.user_form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  create_user(otp_check) {
    const user_data: User = this.user_form.getRawValue();
    this.show_otp = false;
    if (!otp_check.is_valid_email) {
      return;
    }
    this.store.dispatch(saveUser({ user_data: user_data }));
    this.user_form.reset();
  }

  ngOnInit(): void {
    this.validation();
  }
}
