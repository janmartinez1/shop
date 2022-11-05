import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext"
import { useNavigate } from "react-router-dom";
import Button, { Button_Type_Classes } from "../button/button";
import CartItem from "../cartItem/cartItem"

import { CartDropdownContainer, EmptyMessage, CartItems } from "./cartDropdown-styles";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => { navigate("/checkout") };
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )}
            </CartItems>
            <Button onClick={goToCheckOutHandler}>GoToCheckout</Button>

        </CartDropdownContainer>


    )
}

export default CartDropdown;