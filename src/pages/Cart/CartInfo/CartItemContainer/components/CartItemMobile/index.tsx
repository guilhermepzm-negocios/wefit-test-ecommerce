import React from "react";
import { CartItem as CartItemModel } from "~/models/CartModel";
import { ReactComponent as Trash } from "~/assets/svg/icons/trash.svg";
import {
  Container,
  Content,
  Image,
  Price,
  PriceTitle,
  Row,
  Title,
} from "./styles";
import QuantityInput from "../QuantityInput";

interface Props {
  item: CartItemModel;
  maskedMoviePrice: string;
  maskedTotalPrice: string;
  handleRemove: () => void;
}

const CartItemMobile: React.FC<Props> = ({
  item,
  handleRemove,
  maskedMoviePrice,
  maskedTotalPrice,
}: Props) => {
  const { movie } = item;
  return (
    <Container>
      <Image src={movie.image} alt={movie.title} />
      <Content>
        <Row>
          <Title>{movie.title}</Title>
          <Row>
            <Price>{maskedMoviePrice}</Price>
            <Trash onClick={handleRemove} />
          </Row>
        </Row>
        <Row>
          <QuantityInput item={item} />
          <div>
            <PriceTitle>Subtotal</PriceTitle>
            <Price>{maskedTotalPrice}</Price>
          </div>
        </Row>
      </Content>
    </Container>
  );
};

export default CartItemMobile;
