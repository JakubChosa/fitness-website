export enum ActionKind {
  TOGGLE_MODAL = "TOGGLE_MODAL",
  HANDLE_CHANGE = "HANDLE_CHANGE",
  HANDLE_PLAN_OPTIONS = "HANDLE_PLAN_OPTIONS",
  CONFIRM_PLAN = "CONFIRM_PLAN",
}

export enum ServiceOptions {
  GYM = "Gym",
  DIET = "Catering",
  CLASSES = "Classes",
}

export enum ServiceTimeChoice {
  SHORT = "Month-49$",
  MEDIUM = "3 Months-129$",
  LONG = "Year-489$",
}

export type Action = {
  type: ActionKind;
  payload?: { name: string; value: string };
};

export type State = {
  modalOn: boolean;
  formData: {
    fullName: string;
    email: string;
    phone: string;
  };
  service: ServiceOptions;
  serviceTime: ServiceTimeChoice;
};
