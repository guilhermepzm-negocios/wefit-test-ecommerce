import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

const ButtonContent: React.FC<Props> = ({ text, ...rest }) => {
  return <div {...rest}>{text}</div>;
};

export default ButtonContent;
