import React from "react";
import { connect } from "react-redux"; 
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector"
import { createStructuredSelector } from "reselect";
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'
// import { ReactComponent as Logo } from "../../assets.crown.svg";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        {/* <Logo className="logo" /> */} COLLEGEMALL.EE
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contacts">
          CONTACTS
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
  </ HeaderContainer> );
};

const mapStateToProps =  createStructuredSelector ({

  hidden : selectCartHidden
});

export default connect(mapStateToProps)(Header);
