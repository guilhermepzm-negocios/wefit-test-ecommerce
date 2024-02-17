import React from "react";
import { Count } from "./styles";
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  count: string | number;
}

const ButtonIconCount: React.FC<Props> = ({ count, ...rest }) => {
  return <Count {...rest}>{count}</Count>;
};

export default ButtonIconCount;
