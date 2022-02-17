import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

// {
//   primary: "hsl(240deg 100% 60%)",
//   primaryLight: "hsl(235deg 100% 62%)",
//   white: "hsl(0deg 0% 100%)",
//   offwhite: "hsl(235deg 85% 97%)",
//   gray: "hsl(240deg 10% 50%)",
//   transparentGray15: "hsl(240deg 10% 50% / 0.15)",
//   transparentGray75: "hsl(240deg 10% 50% / 0.75)",
//   black: "hsl(0deg 0% 0%)"
// };

const ButtonStyles = styled.button`
  padding: 10px 15px;
  text-transform: uppercase;
  font-weight: bold;
`;

const ButtonFill = styled(ButtonStyles)`
  background: ${COLORS.primary};
`;

const Button = ({ variant, size, children }) => {
  if (variant === "fill") {
    return <ButtonFill>{children}</ButtonFill>;
  } else if (variant === "outline") {
    return <ButtonStyles>{children}</ButtonStyles>;
  } else if (variant === "ghost") {
    return <ButtonStyles>{children}</ButtonStyles>;
  }

  return null;
};

export default Button;
