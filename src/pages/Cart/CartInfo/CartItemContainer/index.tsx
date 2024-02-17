import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { CartItem as CartItemModel } from "~/models/CartModel";
import { removeCartItemRequest } from "~/store/redux/cart/actions";
import { useResponsiveDimensions } from "~/hooks/useResponsiveDimensions";
import CartItemMobile from "./components/CartItemMobile";
import CartItemDesktop from "./components/CartItemDesktop";

interface Props {
  item: CartItemModel;
}

const CartItemContainer: React.FC<Props> = ({ item }: Props) => {
  const { movie, total } = item;
  const dispatch = useDispatch();
  const {
    dimensions: { width },
  } = useResponsiveDimensions();

  const maskedMoviePrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(movie.price);

  const maskedTotalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  const handleRemove = useCallback(() => {
    dispatch(removeCartItemRequest(movie.id));
  }, [movie]);

  return (
    <React.Fragment>
      {width <= 768 ? (
        <CartItemMobile
          item={item}
          handleRemove={handleRemove}
          maskedMoviePrice={maskedMoviePrice}
          maskedTotalPrice={maskedTotalPrice}
        />
      ) : (
        <CartItemDesktop
          item={item}
          handleRemove={handleRemove}
          maskedMoviePrice={maskedMoviePrice}
          maskedTotalPrice={maskedTotalPrice}
        />
      )}
    </React.Fragment>
  );
};

export default CartItemContainer;
