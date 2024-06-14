import { CustomInputProps } from "features/CarForm/types/IPanel";
import React, { forwardRef, useId } from "react";

export const Input = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ text, helperText, label, ...rest }, ref) => {
    const Id = useId();

    const isFile = rest?.type === "file";
    const hasText = Boolean(text);
    const hasError = Boolean(helperText);
    console.log({ hasError });
    if (!isFile) {
      return (
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor={Id}
            className="flex flex-col gap-[10px] text-[14px] font-bold text-Impar-Text"
          >
            {label}
          </label>
          <input
            className={`outline-none border rounded-md p-2 ${
              hasError ? "border-Impar-Error" : "border-Impar-Border"
            }`}
            id={Id}
            {...rest}
            ref={ref}
          />
          {hasError && <span className="text-Impar-Error">{helperText}</span>}
        </div>
      );
    } else {
      return (
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor={Id}
            className="flex flex-col gap-[10px] text-[14px] font-bold text-Impar-Text"
          >
            {label}
          </label>
          <div className="w-full">
            <div className="p-1 mb-5 w-full h-11 rounded-md border border-gray-300 justify-between items-center inline-flex">
              <h2
                className={` ${
                  hasText ? "text-Impar-text" : "text-Impar-Text/20"
                } font-normal leading-snug pl-4`}
              >
                {text ? text : "Nenhum arquivo escolhido"}
              </h2>
              <input {...rest} id={Id} ref={ref} type="file" hidden />
              <label
                htmlFor={Id}
                className={`flex w-2/5 h-9 px-2 flex-col bg-white text-Impar-Orange border border-Impar-Orange rounded-md shadow text-xs font-semibold leading-4 
                 items-center justify-center cursor-pointer focus:outline-none ${
                   hasError ? "border-Impar-Error" : "border-Impar-Border"
                 }`}
              >
                {rest.placeholder}
              </label>
            </div>
            {hasError && (
              <span className="text-Impar-Error">TÁ COM ERRO{helperText}</span>
            )}
          </div>
        </div>
      );
    }
  }
);
