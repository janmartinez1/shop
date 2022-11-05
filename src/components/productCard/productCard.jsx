import { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";

import { ProductCardContainer, ImgStyle, Footer, Name, Price } from "./productCard-styles";
import Button, { Button_Type_Classes } from "../button/button"

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    return (
        <ProductCardContainer>
            <ImgStyle src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>

            </Footer>
            <Button buttonType={Button_Type_Classes.inverted} onClick={addProductToCart}>
                Add to cart
            </Button>
        </ProductCardContainer>

    );
};

export default ProductCard;