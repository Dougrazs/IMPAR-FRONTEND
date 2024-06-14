import { zodResolver } from "@hookform/resolvers/zod";
import { useCarsContext } from "contexts/CarsContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "stores/schemas";
import { SchemaProps, typeCarsContext } from "types";
import { PostCar } from "../api/post";
import { UpdateCar } from "../api/update";

export const useCarForm = () => {
  const [base64Image, setBase64Image] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const { isPanelOpen, setIsPanelOpen } = useCarsContext() as typeCarsContext;
  const isOpen = isPanelOpen?.status;
  const text = isPanelOpen?.isEditing ? "Editar Card" : "Criar Card";
  const carId = isPanelOpen?.item?.id
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<SchemaProps>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });


  const convert2base64 = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result as string);
      setFileName(file?.name);
      setValue("photo.base64", reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      convert2base64(file);
    }
  };

  const onSubmit = async (data: SchemaProps) => {
    if (base64Image) {
      data.photo.base64 = base64Image;
    }
    await PostCar(data)
    setIsPanelOpen({ status: false });
    reset()
  };

  const onSubmitUpdate = async (data: SchemaProps) => {
    if (base64Image) {
      data.photo.base64 = base64Image;
    }
    await UpdateCar(data, carId)
    setIsPanelOpen({ status: false, item: undefined });
    reset()
  }

  return {
    handleFileChange,
    onSubmit,
    onSubmitUpdate,
    register,
    handleSubmit,
    fileName,
    isOpen,
    text,
    errors
  }
}