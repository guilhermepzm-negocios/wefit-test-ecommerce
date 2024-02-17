import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { CartItem as CartItemModel } from "~/models/CartModel";
import { ReactComponent as Add } from "~/assets/svg/icons/add.svg";
import { ReactComponent as Subtract } from "~/assets/svg/icons/subtract.svg";
import { Input, QuantityContainer } from "./styles";
import { updateCartItemRequest } from "~/store/redux/cart/actions";

interface Props {
  item: CartItemModel;
}

const QuantityInput: React.FC<Props> = ({ item }: Props) => {
  const { movie, quantity } = item;
  const dispatch = useDispatch();

  const handleQuantity = useCallback(
    (value: number) => {
      if (value < 1) return;
      dispatch(updateCartItemRequest(movie.id, value));
    },
    [movie]
  );

  return (
    <QuantityContainer>
      <Subtract onClick={() => handleQuantity(quantity - 1)} />
      <Input
        size="small"
        value={quantity}
        onChange={(val) => handleQuantity(Number(val))}
      />
      <Add onClick={() => handleQuantity(quantity + 1)} />
    </QuantityContainer>
  );
};

export default QuantityInput;
