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

const paddingSizer = ({ size }) => {
  if (size == "medium") {
    return `.625rem .875rem`;
  } else if (size == "large") {
    return `.875rem 1rem`;
  }
};
const fontSizer = ({ size }) => {
  if (size == "medium") {
    return `.875rem`;
  } else if (size == "large") {
    return `1rem`;
  }
};
const ButtonStyles = styled.button`
  padding: 0.5rem 0.5rem;
  text-transform: uppercase;
  border-radius: 3px;
  box-shadow: none;
  font-size: 0.875rem;
`;

const ButtonFill = styled(ButtonStyles)`
  background: ${COLORS.primary};
  color: ${COLORS.white};
  border-color: transparent;
  padding: ${paddingSizer};
  font-size: ${fontSizer};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const ButtonOutline = styled(ButtonStyles)`
  background: ${COLORS.white};
  color: ${COLORS.primary};
  border-color: ${COLORS.primary};
  padding: ${paddingSizer};
  font-size: ${fontSizer};

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const ButtonGhost = styled(ButtonStyles)`
  background: none;
  color: ${COLORS.transparentGray75};
  border-color: transparent;
  padding: ${paddingSizer};
  font-size: ${fontSizer};

  &:focus {
    border-color: ${COLORS.transparentGray75};
  }

  &:hover {
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

const Button = ({ variant, size, children }) => {
  if (variant === "fill") {
    return <ButtonFill size={size}>{children}</ButtonFill>;
  } else if (variant === "outline") {
    return <ButtonOutline size={size}>{children}</ButtonOutline>;
  } else if (variant === "ghost") {
    return <ButtonGhost size={size}>{children}</ButtonGhost>;
  }

  return null;
};

export default Button;
