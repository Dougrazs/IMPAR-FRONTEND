import React, { forwardRef } from "react";
export const Button = forwardRef<HTMLButtonElement, any>(
  ({ img, text, ...rest }, ref) => {
    return (
      <button
        className="text-Impar-Text flex justify-center justify-items-center items-center gap-3 p-2 w-full"
        {...rest}
        ref={ref}
      >
        <img className="opacity-100" alt="Botão de ação" src={img} />
        <p className="opacity-50 transition ease-in-out duration-300 hover:opacity-100 hover:text-Impar-Orange active:opacity-50">
          {text}
        </p>
      </button>
    );
  }
);
