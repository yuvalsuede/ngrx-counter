import {Action} from '@ngrx/store';


/*
 *  general action creator
 *
 * */

export function createAction(type, payload?): Action {
  return { type, payload };
}
