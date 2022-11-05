import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";


import { CategoriesContext } from "../../contexts/categoriesContext"
import ProductCard from "../productCard/productCard"

import { CategoryContainer, CategoryTitle } from "./category-styles";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle className="category-title">{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;