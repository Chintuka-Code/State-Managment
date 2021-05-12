import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { OtpComponent } from './component/otp/otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';
import { UserProfileComponent } from './component/user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent, UserComponent, OtpComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ user: userReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
