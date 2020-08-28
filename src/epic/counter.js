import { UPDATE_COUNTER, UPDATE_COMPLETE }  from '../constants/actionType'
import { ofType } from 'redux-observable'
import { delay, map } from 'rxjs/operators'

export const counterEpic = action$ => action$.pipe(
    ofType(UPDATE_COUNTER),
    delay(1000),
    map(action=>(
        {
            type: UPDATE_COMPLETE,
            payload: action.payload
        }
    ))
)