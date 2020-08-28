import { UPDATE_COUNTER } from "../constants/actionType";

export function updateCounter(counterStep) {
  return { type: UPDATE_COUNTER, payload: counterStep };
}

// export function updateComplete(counterStep) {
//   return { type: UPDATE_COMPLETE, payload: counterStep };
// }
