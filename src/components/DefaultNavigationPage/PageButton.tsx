import React, { ReactNode } from "react";

interface Props {
  button: ReactNode;
}

const PageButton: React.FC<Props> = ({ button: Button }) => {
  return <React.Fragment>{Button}</React.Fragment>;
};

export default PageButton;
