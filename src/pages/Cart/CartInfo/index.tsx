import React, { useCallback } from "react";
import { CartModel } from "~/models/CartModel";
import {
  Bottom,
  Container,
  Fixed,
  Header,
  HeaderItemLg,
  HeaderItemSm,
  Line,
  List,
  Price,
  PriceTitle,
  Row,
} from "./styles";
import CartItemContainer from "./CartItemContainer";
import { useDispatch } from "react-redux";
import { finishOrderCartRequest } from "~/store/redux/cart/actions";
import { useNavigate } from "react-router-dom";
import { CustomButtonRoot } from "./styles";
import { CustomButton } from "~/components/CustomButton";

interface Props {
  cart: CartModel;
}

const CartInfo: React.FC<Props> = ({ cart }: Props) => {
  const { items, total } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const maskedTotalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  const handleFinishOrder = useCallback(() => {
    navigate("/order");
    dispatch(finishOrderCartRequest());
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <HeaderItemLg>Produto</HeaderItemLg>
        <HeaderItemSm>Qtd</HeaderItemSm>
        <HeaderItemSm>Subtotal</HeaderItemSm>
      </Header>
      <List>
        {items.map((item) => (
          <CartItemContainer key={item.movie.id} item={item} />
        ))}
      </List>
      <Fixed>
        <Line />
        <Bottom>
          <CustomButtonRoot onClick={handleFinishOrder}>
            <CustomButton.Content text="Finalizar pedido" />
          </CustomButtonRoot>
          <Row>
            <PriceTitle>total</PriceTitle>
            <Price>{maskedTotalPrice}</Price>
          </Row>
        </Bottom>
      </Fixed>
    </Container>
  );
};

export default CartInfo;
