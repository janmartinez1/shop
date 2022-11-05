import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext"

import CheckOutItem from "../../components/checkOutItem/checkOutItem";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkOut-styles";


const CheckOut = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => {

                return (
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                );
            })}
            <Total>Total :  ${cartTotal}</Total>
        </CheckoutContainer>
    );
};

export default CheckOut;