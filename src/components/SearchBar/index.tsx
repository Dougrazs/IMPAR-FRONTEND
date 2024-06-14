import React, { forwardRef } from "react";
import IconGlass from "assets/IconGlass.svg";

export const SearchBar = forwardRef<HTMLInputElement, any>(
  ({ ...rest }, ref) => {
    return (
      <div>
        <div className="w-full h-[190px] flex flex-col items-center justify-center bg-[url('../assets/HeaderBg.png')] bg-no-repeat bg-cover">
          <div className=" mx-auto w-3/5 h-20 ">
            <div className="relative flex items-center w-full h-full rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <input
                className="peer px-5 size-full
           outline-none text-xl text-gray-700 pr-10"
                type="text"
                id="search"
                placeholder="Digite aqui sua busca..."
                ref={ref}
              />
              <div
                className="select-none grid place-items-center h-full w-12
           text-gray-300"
              >
                <img className="size-7" alt="Lupa" src={IconGlass} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
