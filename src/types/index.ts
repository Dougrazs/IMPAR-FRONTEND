import type { Dispatch, SetStateAction } from "react";
import { schema } from "stores/schemas"
import { z } from "zod";
export type typeCarsContext = {
  isPanelOpen: ICarHandlers;
  setIsPanelOpen: Dispatch<SetStateAction<ICarHandlers>>;
  showModal: ICarHandlers;
  setShowModal: Dispatch<SetStateAction<ICarHandlers>>;
};

type Photo = {
  id: number;
  base64: string;
}
export type ICar = {
  name: string;
  id: number;
  photoId: number;
  photo?: Photo;
}
export type SchemaProps = z.infer<typeof schema>;

export type ICarHandlers = {
  status: boolean;
  item?: ICar;
  isEditing?: boolean;
  func?: any;
}