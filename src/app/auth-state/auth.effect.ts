import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginService } from '../service/login.service';
import { loginstart, loginsuccess } from './auth.action';
import { exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { Post, User } from '../model/user.interface';
import { of } from 'rxjs';
import { updateSpinner } from '../state/user.action';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private login_service: LoginService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginstart),
      exhaustMap((action) =>
        this.login_service.test().pipe(
          map((data) => {
            return loginsuccess({ data });
          })
        )
      )
    )
  );
}
