import React, { ElementType } from "react";

interface Props {
  icon: ElementType;
}

const ButtonIcon: React.FC<Props> = ({ icon: Icon }) => {
  return <Icon />;
};

export default ButtonIcon;
