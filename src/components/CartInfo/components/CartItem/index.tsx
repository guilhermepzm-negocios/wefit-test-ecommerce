import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { CartItem as CartItemModel } from "~/models/CartModel";
import { ReactComponent as Trash } from "~/assets/svg/icons/trash.svg";
import { ReactComponent as Add } from "~/assets/svg/icons/add.svg";
import { ReactComponent as Subtract } from "~/assets/svg/icons/subtract.svg";
import {
  Container,
  Content,
  ContentItemLg,
  ContentItemSm,
  Image,
  Input,
  Price,
  QuantityContainer,
  Title,
} from "./styles";
import {
  removeCartItemRequest,
  updateCartItemRequest,
} from "~/store/redux/cart/actions";

interface Props {
  item: CartItemModel;
}

const CartItem: React.FC<Props> = ({ item }: Props) => {
  const { movie, quantity, total } = item;
  const dispatch = useDispatch();

  const maskedMoviePrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(movie.price);

  const maskedTotalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  const handleQuantity = useCallback(
    (value: number) => {
      if (value < 1) return;
      dispatch(updateCartItemRequest(movie.id, value));
    },
    [movie]
  );

  const handleRemove = useCallback(() => {
    dispatch(removeCartItemRequest(movie.id));
  }, [movie]);

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
          <QuantityContainer>
            <Subtract onClick={() => handleQuantity(quantity - 1)} />
            <Input
              size="small"
              value={quantity}
              onChange={(val) => handleQuantity(Number(val))}
            />
            <Add onClick={() => handleQuantity(quantity + 1)} />
          </QuantityContainer>
        </ContentItemSm>
        <ContentItemSm>
          <Price>{maskedTotalPrice}</Price>
          <Trash onClick={handleRemove} />
        </ContentItemSm>
      </Content>
    </Container>
  );
};

export default CartItem;
