import React from "react";

import ButtonTable from "./ButtonTable";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {

  font-family: 'Roboto', sans-serif;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <ButtonTable />
    </>
  );
}
