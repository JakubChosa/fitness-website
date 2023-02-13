import { initialState } from "./ModalContext";
import { ActionKind, Action, State } from "./types";

function reducer(state: State, action: Action) {
  const { type, payload } = action;
  if (type === ActionKind.TOGGLE_MODAL) {
    return { ...state, modalOn: !state.modalOn };
  }
  if (type === ActionKind.HANDLE_CHANGE) {
    if (!payload) return state;
    const { name, value } = payload;
    return { ...state, formData: { ...state.formData, [name]: value } };
  }
  if (type === ActionKind.HANDLE_PLAN_OPTIONS) {
    if (!payload) return state;
    const { name, value } = payload;
    return { ...state, [name]: value };
  }
  if (type === ActionKind.CONFIRM_PLAN) {
    return { ...initialState };
  }
  return { ...state };
}

export default reducer;
