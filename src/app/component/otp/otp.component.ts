import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  stateInner: string = 'narrow';
  otp_form: FormGroup;
  @Input() otp: String;
  @Output() sendingOtp = new EventEmitter();

  validation() {
    this.otp_form = this.fb.group({
      otp: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)],
      ],
    });
  }

  get_otp() {
    const data = this.otp_form.getRawValue();
    const check = this.otp == data.otp ? true : false;
    this.sendingOtp.emit({ is_valid_email: check });
  }

  ngOnInit(): void {
    this.validation();
  }
}
