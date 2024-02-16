import React, { useCallback, useMemo } from "react";
import { Button, DefaultCard, Image, Count, Title, Subtitle } from "./styles";
import { MovieModel } from "~/models/MovieModel";
import { ReactComponent as CartIcon } from "~/assets/svg/icons/cart-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { addCartItemRequest } from "~/store/redux/cart/actions";
import { ApplicationState } from "~/store/types";

interface Props {
  movie: MovieModel;
}

const MovieCard: React.FC<Props> = ({ movie }: Props) => {
  const { id, image, price, title } = movie;
  const dispatch = useDispatch();

  const cartItemDetails = useSelector((state: ApplicationState) =>
    state.cart.data.items.find((item) => item.movie.id === id)
  );

  const hasInCart = useMemo(() => {
    return !!cartItemDetails;
  }, [cartItemDetails]);

  const cartItemQuantity = useMemo(() => {
    return cartItemDetails?.quantity ?? 0;
  }, [cartItemDetails]);

  const buttonText = useMemo(() => {
    return hasInCart ? "Item Adicionado" : "Adicionar ao Carrinho";
  }, [hasInCart]);

  const maskedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  const handleSelect = useCallback(() => {
    dispatch(addCartItemRequest(movie));
  }, [movie]);

  return (
    <DefaultCard>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Subtitle>{maskedPrice}</Subtitle>
      <Button
        $hasInCart={hasInCart}
        onClick={hasInCart ? undefined : handleSelect}
      >
        <CartIcon /> <Count>{cartItemQuantity}</Count> {buttonText}
      </Button>
    </DefaultCard>
  );
};

export default MovieCard;
