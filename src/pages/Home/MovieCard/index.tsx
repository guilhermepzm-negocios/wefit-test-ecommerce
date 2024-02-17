import React, { useCallback, useMemo } from "react";
import {
  CustomButtonRoot,
  DefaultCard,
  Image,
  Title,
  Subtitle,
} from "./styles";
import { MovieModel } from "~/models/MovieModel";
import { ReactComponent as CartIcon } from "~/assets/svg/icons/cart-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { addCartItemRequest } from "~/store/redux/cart/actions";
import { ApplicationState } from "~/store/types";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "~/components/CustomButton";

interface Props {
  movie: MovieModel;
}

const MovieCard: React.FC<Props> = ({ movie }: Props) => {
  const { id, image, price, title } = movie;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItemDetails = useSelector((state: ApplicationState) =>
    state.cart.data.items.find((item) => item.movie.id === id)
  );

  const handleNavigate = useCallback(() => {
    navigate(`/cart/${id}`);
  }, [navigate, id]);

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
      <CustomButtonRoot
        $hasInCart={hasInCart}
        onClick={hasInCart ? handleNavigate : handleSelect}
      >
        <CustomButton.Icon icon={CartIcon} />
        <CustomButton.IconCount count={cartItemQuantity} />
        <CustomButton.Content text={buttonText} />
      </CustomButtonRoot>
    </DefaultCard>
  );
};

export default MovieCard;
