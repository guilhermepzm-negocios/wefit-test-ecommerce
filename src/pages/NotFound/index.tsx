import React, { useCallback } from "react";
import { CustomButtonRoot, Image } from "./styles";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "~/components/CustomButton";
import { DefaultNavigationPage } from "~/components/DefaultNavigationPage";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <DefaultNavigationPage.Root>
      <DefaultNavigationPage.Title text="Ops, Página não encontrada!" />
      <DefaultNavigationPage.Image icon={Image} />
      <DefaultNavigationPage.Button
        button={
          <CustomButtonRoot onClick={handleNavigate}>
            <CustomButton.Content text="Voltar" />
          </CustomButtonRoot>
        }
      />
    </DefaultNavigationPage.Root>
  );
};

export default NotFound;
