import IconCreate from "../assets/IconCreate.svg";
import { Input } from "./Input";
import { PrimaryButton } from "components/PrimaryButton";
import type { typeCarsContext } from "types";
import { useCarsContext } from "contexts/CarsContext";
import { useCarForm } from "../hooks/useCarForm";

export function PanelForm() {
  const { isPanelOpen, setIsPanelOpen } = useCarsContext() as typeCarsContext;
  const carInfo = isPanelOpen?.item;
  const isEditing = isPanelOpen?.isEditing;
  const {
    handleFileChange,
    onSubmit,
    onSubmitUpdate,
    register,
    handleSubmit,
    isOpen,
    text,
    errors,
    fileName,
  } = useCarForm();

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            onClick={() => setIsPanelOpen({ status: false, item: undefined })}
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            style={{
              transition: "opacity 300ms ease-out",
              opacity: isOpen ? "1" : "0",
            }}
          ></div>
          <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
            <div
              className="w-[642px]"
              style={{
                transition: "transform 300ms ease-out",
                transform: isOpen ? "translateX(0)" : "translateX(100%)",
              }}
            >
              <div className="h-full flex items-center flex-col py-6 bg-white shadow-xl">
                <div className="flex w-full flex-col gap-5 items-center justify-between px-4">
                  <div className="self-start flex items-center gap-6">
                    <img src={IconCreate} alt="Icon Create" />
                    <h1 className="text-3xl text-left font-bold text-Impar-Purple">
                      {text}
                    </h1>
                  </div>
                  <div className="w-full h-px bg-Impar-Divider" />
                </div>

                <form
                  onSubmit={
                    isEditing
                      ? handleSubmit(onSubmitUpdate)
                      : handleSubmit(onSubmit)
                  }
                  className="mt-4 px-4 w-full flex flex-col items-center justify-center content-center"
                >
                  <div className="w-full flex flex-col gap-9">
                    <Input
                      {...register("name")}
                      helperText={errors?.name?.message}
                      label={"DIGITE UM NOME PARA O CARD"}
                      placeholder={
                        carInfo?.name ? carInfo?.name : "Digite o título"
                      }
                    />

                    <Input
                      text={fileName}
                      helperText={errors?.photo?.base64?.message}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      label={"INCLUA UMA IMAGEM PARA APARECER NO CARD"}
                      placeholder={"Escolher arquivo"}
                    />
                  </div>
                  <div className="w-full h-px bg-Impar-Divider" />

                  <div className="self-end mt-4">
                    <PrimaryButton type="submit" text={text} />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
