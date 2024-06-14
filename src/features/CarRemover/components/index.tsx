import { useRef, useEffect } from "react";
import IconTrash from "assets/IconTrash.svg";
import { PrimaryButton } from "components/PrimaryButton";
import { useCarsContext } from "contexts/CarsContext";
import { ICar, typeCarsContext } from "types";
import { useCarRemover } from "../hooks/useCarRemover";
export function CarRemover() {
  const { showModal, setShowModal } = useCarsContext() as typeCarsContext;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { handleDeleteCar, cardId, carName } = useCarRemover();
  useEffect(() => {
    if (showModal.status && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [showModal.status]);

  if (showModal) {
    return (
      <dialog
        id="my_modal"
        className={`size-[450px] rounded-md ${
          showModal ? "overflow-visible" : "overflow-hidden"
        }`}
        ref={dialogRef}
      >
        <button
          type="button"
          onClick={() => setShowModal({ status: false })}
          className="absolute hover:shadow-md text-white size-10 text-xl top-[-10px] right-[-10px] z-10 rounded-full bg-Impar-Orange"
        >
          X
        </button>

        <div className="modal-box p-8 h-full flex  flex-col items-center justify-between max-w-5xl">
          <div className="flex items-center justify-center size-40 bg-Impar-LOrange rounded-full border-4 border-Impar-Border">
            <img className="size-[68px]" src={IconTrash} />
          </div>
          <div className="text-center flex flex-col gap-3">
            <h3 className="font-bold text-2xl text-Impar-Error">Excluir</h3>
            <p className="text-Impar-Text font-bold text-sm">
              {`CERTEZA QUE DESEJA EXCLUIR: ${carName} ?`}
            </p>
          </div>

          <div className="modal-action">
            <form
              method="dialog"
              onSubmit={(e) => {
                handleDeleteCar(e, cardId);
              }}
            >
              <div className="w-full h-px bg-Impar-Divider" />
              <div className="gap-8 flex justify-between mt-6">
                <PrimaryButton
                  bgColor={"bg-Impar-Error"}
                  type="submit"
                  text="Excluir"
                />
                <PrimaryButton
                  bgColor={"bg-white"}
                  textColor={"!text-Impar-Error"}
                  borderColor={"border-Impar-Error"}
                  onClick={() => setShowModal({ status: false })}
                  type="button"
                  text="Cancelar"
                />
              </div>
            </form>
          </div>
        </div>
      </dialog>
    );
  } else {
    return null;
  }
}
