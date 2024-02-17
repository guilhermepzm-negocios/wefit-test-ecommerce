import React, { ReactNode } from "react";
import { CustomButton } from "./styles";
import { ButtonProps } from "antd";

interface Props extends ButtonProps {
  children: ReactNode;
}

const ButtonRoot: React.FC<Props> = ({ children, ...rest }) => {
  return <CustomButton {...rest}>{children}</CustomButton>;
};

export default ButtonRoot;
