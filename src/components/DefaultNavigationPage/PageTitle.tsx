import React from "react";
import { Title } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

const PageTitle: React.FC<Props> = ({ text, ...rest }) => {
  return <Title {...rest}>{text}</Title>;
};

export default PageTitle;
