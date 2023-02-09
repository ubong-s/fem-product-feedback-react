import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles';
import HeaderIntro from './HeaderIntro';
import HeaderNav from './HeaderNav';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderWrap>
      <HeaderIntro menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <HeaderNav menuOpen={menuOpen} />
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  display: grid;
  overflow: hidden;

  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 2fr;
    gap: 0.5rem;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
