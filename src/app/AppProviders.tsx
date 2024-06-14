import React from "react";
import QueryProvider from "lib/queryProvider";
import CarsContextProvider from "contexts/CarsContext";
function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <CarsContextProvider>
      <QueryProvider>{children}</QueryProvider>
    </CarsContextProvider>
  );
}

export default AppProviders;
