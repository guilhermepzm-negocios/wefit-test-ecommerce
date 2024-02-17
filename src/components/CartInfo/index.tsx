import React, { useCallback } from "react";
import { CartModel } from "~/models/CartModel";
import {
  Bottom,
  Button,
  Container,
  Header,
  HeaderItemLg,
  HeaderItemSm,
  Line,
  Price,
  PriceTitle,
  Row,
} from "./styles";
import CartItem from "./components/CartItem";
import { useDispatch } from "react-redux";
import { finishOrderCartRequest } from "~/store/redux/cart/actions";
import { useNavigate } from "react-router-dom";

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
      {items.map((item) => (
        <CartItem key={item.movie.id} item={item} />
      ))}
      <Line />
      <Bottom>
        <Button onClick={handleFinishOrder}>Finalizar pedido</Button>
        <Row>
          <PriceTitle>total</PriceTitle>
          <Price>{maskedTotalPrice}</Price>
        </Row>
      </Bottom>
    </Container>
  );
};

export default CartInfo;
