import React from "react";
import IconHand from "assets/IconHand.svg";
import { Button } from "./Button";
import IconEdit from "assets/IconEdit.svg";
import IconTrash from "assets/IconTrash.svg";
import { useCarsContext } from "contexts/CarsContext";
import { ICar, ICarHandlers, typeCarsContext } from "types";

export function Card(info: ICar) {
  const { setIsPanelOpen, setShowModal, showModal } =
    useCarsContext() as typeCarsContext;
  return (
    <div className="bg-white flex flex-col items-center justify-between justify-items-center rounded-md h-72 w-60 border-2 border-Impar-Border">
      <img
        className="mt-4 object-cover size-24 border-2 border-Impar-Border rounded-full bg-Impar-Gray"
        alt="Sem imagem"
        src={info?.photo?.base64}
        onError={(e) => {
          e.currentTarget.src = IconHand;
        }}
      />

      <div className="w-3/5 h-px bg-Impar-Divider" />
      <h3 className="text-center">{info?.name}</h3>
      <footer className="flex shadow-inner w-full items-center justify-between">
        <Button
          onClick={(prev: React.SetStateAction<ICarHandlers>) =>
            setIsPanelOpen({
              ...prev,
              status: true,
              item: info,
              isEditing: true,
            })
          }
          img={IconEdit}
          text={"Editar"}
        />
        <div className="h-3/5 w-px bg-Impar-Gray" />
        <Button
          onClick={() =>
            setShowModal({ status: !showModal?.status, item: info })
          }
          img={IconTrash}
          text={"Excluir"}
        />
      </footer>
    </div>
  );
}
