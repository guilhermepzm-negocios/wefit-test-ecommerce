import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "~/store/types";
import { EmptyImage, CustomButtonRoot } from "./styles";
import { useNavigate } from "react-router-dom";
import CartInfo from "./CartInfo";
import { CustomButton } from "~/components/CustomButton";
import { DefaultNavigationPage } from "~/components/DefaultNavigationPage";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: ApplicationState) => state.cart.data);

  const isEmpty = useMemo(() => cart.items.length === 0, [cart]);

  const handleNavigate = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <React.Fragment>
      {isEmpty ? (
        <DefaultNavigationPage.Root>
          <DefaultNavigationPage.Title text="Parece que não há nada por aqui :(" />
          <DefaultNavigationPage.Image icon={EmptyImage} />
          <DefaultNavigationPage.Button
            button={
              <CustomButtonRoot onClick={handleNavigate}>
                <CustomButton.Content text="Voltar" />
              </CustomButtonRoot>
            }
          />
        </DefaultNavigationPage.Root>
      ) : (
        <CartInfo cart={cart} />
      )}
    </React.Fragment>
  );
};

export default Cart;
