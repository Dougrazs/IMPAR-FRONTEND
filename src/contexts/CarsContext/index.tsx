import { zodResolver } from "@hookform/resolvers/zod";
import type { Dispatch, SetStateAction } from "react";
import { createContext, ReactNode, useState, useContext } from "react";
import { ICarHandlers, typeCarsContext } from "types";

import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  useForm,
} from "react-hook-form";

interface IProps {
  children: ReactNode;
}
export const CarsContext = createContext<typeCarsContext | undefined>(
  undefined
);

export default function CarsContextProvider({ children }: IProps) {
  const [isPanelOpen, setIsPanelOpen] = useState<ICarHandlers>({
    status: false,
    item: undefined,
    isEditing: undefined,
    func: undefined,
  });
  const [showModal, setShowModal] = useState<ICarHandlers>({
    status: false,
    item: undefined,
  });

  return (
    <CarsContext.Provider
      value={{ isPanelOpen, setIsPanelOpen, showModal, setShowModal }}
    >
      {children}
    </CarsContext.Provider>
  );
}

export const useCarsContext = () => {
  const context = useContext(CarsContext);
  return context;
};
