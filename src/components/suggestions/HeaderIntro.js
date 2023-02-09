import styled from 'styled-components';
import { breakpoints, misc } from '../../styles';

const HeaderIntro = ({ menuOpen, toggleMenu }) => {
  return (
    <HeaderIntroWrap>
      <HeaderIntroInner>
        <div>
          <h1>Frontend Mentor</h1>
          <p>Feedback board</p>
        </div>
        <HamburgerIcon title="menu-button" type="button" onClick={toggleMenu}>
          {menuOpen ? (
            <svg
              width="18"
              height="17"
              xmlns="http://www.w3.org/2000/svg"
              title="close"
            >
              <path
                d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
                fill="#FFF"
                fillRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="17"
              xmlns="http://www.w3.org/2000/svg"
              title="bars"
            >
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
              </g>
            </svg>
          )}
        </HamburgerIcon>
      </HeaderIntroInner>
    </HeaderIntroWrap>
  );
};

export default HeaderIntro;

const HeaderIntroWrap = styled.div`
  padding: 0 1.5rem;
  background: ${(props) => props.theme.radial_gradient};

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
    border-radius: ${misc.rounded.sm};
    display: flex;
    align-items: flex-end;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    min-height: 150px;
  }
`;

const HeaderIntroInner = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.white};

  h1 {
    font-size: 1rem;
    margin-bottom: 0.25rem;
    color: ${(props) => props.theme.white};
  }

  p {
    margin: 0;
    color: ${(props) => props.theme.grey_light};
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    height: unset;

    h1 {
      font-size: 1.25rem;
    }
  }
`;

const HamburgerIcon = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
