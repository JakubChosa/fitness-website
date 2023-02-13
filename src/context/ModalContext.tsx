import { useReducer, createContext, useContext } from "react";
import modalReducer from "./modalReducer";
import { ActionKind, ServiceOptions, ServiceTimeChoice, State } from "./types";

type ProviderProps = {
  children: React.ReactNode;
};

type ModalContextProps = {
  state: State;
  toggleModal: () => void;
  handleChange: (e: React.ChangeEvent) => void;
  handlePlanOptions: (e: React.MouseEvent) => void;
  confirmPlan: () => void;
};

const initialState: State = {
  modalOn: false,
  formData: {
    fullName: "",
    email: "",
    phone: "",
  },
  service: ServiceOptions.GYM,
  serviceTime: ServiceTimeChoice.SHORT,
};

const ModalContext = createContext<ModalContextProps | null>(null);
const ModalProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const toggleModal = () => {
    dispatch({ type: ActionKind.TOGGLE_MODAL });
  };

  const handleChange = (e: React.ChangeEvent) => {
    const { name } = e.target as HTMLInputElement;
    let { value } = e.target as HTMLInputElement;

    dispatch({ type: ActionKind.HANDLE_CHANGE, payload: { name, value } });
  };
  const handlePlanOptions = (e: React.MouseEvent) => {
    const { name } = e.target as HTMLInputElement;
    let { value } = e.target as HTMLInputElement;

    dispatch({
      type: ActionKind.HANDLE_PLAN_OPTIONS,
      payload: { name, value },
    });
  };
  const confirmPlan = () => {
    dispatch({
      type: ActionKind.CONFIRM_PLAN,
    });
  };
  return (
    <ModalContext.Provider
      value={{
        state,
        toggleModal,
        handleChange,
        handlePlanOptions,
        confirmPlan,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
const useModalContext = () => {
  return useContext(ModalContext);
};
export { ModalProvider, initialState, useModalContext };
