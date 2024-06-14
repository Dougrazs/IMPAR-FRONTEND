import { forwardRef } from "react";
export const PrimaryButton = forwardRef<HTMLButtonElement, any>(
  ({ bgColor, borderColor, textColor, text, ...rest }, ref) => {
    return (
      <button
        className={`bg-Impar-Orange border p-3 rounded-md font-semibold text-white w-40 hover:shadow-lg transition ease-in-out duration-300 active:opacity-70 
          ${bgColor}   ${borderColor}  ${textColor}`}
        {...rest}
        ref={ref}
      >
        {text}
      </button>
    );
  }
);
