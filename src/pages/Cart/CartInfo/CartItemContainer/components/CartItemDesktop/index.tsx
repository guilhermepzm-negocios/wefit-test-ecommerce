import React from "react";
import { CartItem as CartItemModel } from "~/models/CartModel";
import { ReactComponent as Trash } from "~/assets/svg/icons/trash.svg";
import {
  Container,
  Content,
  ContentItemLg,
  ContentItemSm,
  Image,
  Price,
  Title,
} from "./styles";
import QuantityInput from "../QuantityInput";

interface Props {
  item: CartItemModel;
  maskedMoviePrice: string;
  maskedTotalPrice: string;
  handleRemove: () => void;
}

const CartItemDesktop: React.FC<Props> = ({
  item,
  handleRemove,
  maskedMoviePrice,
  maskedTotalPrice,
}: Props) => {
  const { movie } = item;
  return (
    <Container>
      <Content>
        <ContentItemLg>
          <Image src={movie.image} alt={movie.title} />
          <div>
            <Title>{movie.title}</Title>
            <Price>{maskedMoviePrice}</Price>
          </div>
        </ContentItemLg>
        <ContentItemSm>
          <QuantityInput item={item} />
        </ContentItemSm>
        <ContentItemSm>
          <Price>{maskedTotalPrice}</Price>
          <Trash onClick={handleRemove} />
        </ContentItemSm>
      </Content>
    </Container>
  );
};

export default CartItemDesktop;
