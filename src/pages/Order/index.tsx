import React, { useCallback } from "react";
import { CustomButtonRoot, OrderImage } from "./styles";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "~/components/CustomButton";
import { DefaultNavigationPage } from "~/components/DefaultNavigationPage";

const Order: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <DefaultNavigationPage.Root>
      <DefaultNavigationPage.Title text="Compra realizada com sucesso!" />
      <DefaultNavigationPage.Image icon={OrderImage} />
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

export default Order;
