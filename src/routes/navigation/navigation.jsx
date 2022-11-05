import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";

import CartIcon from "../../components/cartIcon/cartIcon"
import CartDropdown from "../../components/cartDropdown/cartDropdown";

import { UserContext } from "../../contexts/userContext";
import { CartContext } from "../../contexts/cartContext";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebaseUtils";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles";

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink className="nav-link" to="/shop">
                        SHOP
                    </NavLink>

                    {currentUser ?
                        (<NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                         </NavLink>
                        ) :
                        (
                            <NavLink className="nav-link" to="/auth">
                                SIGN IN
                            </NavLink>
                        )

                    }
                    < CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>

    );
};

export default Navigation;