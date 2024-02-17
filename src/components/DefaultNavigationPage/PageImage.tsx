import React, { ElementType } from "react";

interface Props {
  icon: ElementType;
}

const PageImage: React.FC<Props> = ({ icon: Icon }) => {
  return <Icon />;
};

export default PageImage;
