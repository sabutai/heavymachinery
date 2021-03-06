import { React } from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebase.utils';

import { HeaderContainer, LogoContainer, Title, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

import { ReactComponent as Logo } from '../../assets/demolishing.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>
    <Title>
      HEAVY MACHINERY STORE
    </Title>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      {
        currentUser ?
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
          :
          <OptionLink to='/singin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);