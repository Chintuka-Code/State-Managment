import { createFeatureSelector, createSelector } from '@ngrx/store';

const userState = createFeatureSelector<any>('user');

export const getUser = createSelector(userState, (state) => state.user);
export const getText = createSelector(userState, (state) => state.text);
