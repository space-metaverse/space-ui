import styled, { css } from 'styled-components';

import { Dots } from '../../icons';

interface RouteProps {
    disabled?: boolean
}

interface ResponsiveProps {
    show: boolean
}

const Logo = styled.a`
  padding: 1.25rem 1.5rem;
  display: flex;
  border-right: ${({ theme }) => `1px solid ${theme.colors.dark[200]}`};
`;

const Route = styled.a<RouteProps>`
  ${({ theme }) => theme.fonts.size.sm};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.dark['400'] : theme.colors.dark['800'])};
  padding: 0 .75rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  transition: ${({ theme }) => `all .3s ${theme.transitions.ease}`};
  letter-spacing: 2px;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  text-transform: uppercase;
  text-decoration: none;

  ${({ disabled }) => !disabled && css`
    :hover {
      color: ${({ theme }) => theme.colors.blue[400]};
    }
  `}
`;

const Routes = styled.ul`
  gap: 1.5rem;
  display: flex;
  align-items: center;
`;

const Actions = styled.div`
  height: 100%;
  display: flex;
  padding: 0 1.5rem;
  margin-left: auto;
  align-items: center;
  border-left: ${({ theme }) => `1px solid ${theme.colors.dark[200]}`};

  p {
    ${({ theme }) => theme.fonts.size.sm};
    color: ${({ theme }) => theme.colors.dark[800]};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    margin-left: .75rem;
    margin-right: 1.5rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .is-popover + div {
    right: 0;
  }
`;

const Profile = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.dark[200]};

  &,
  img {
    border-radius: 999px;
  }
`;

const Hamburger = styled.div<ResponsiveProps>`
  top: 1.25rem;
  width: 1rem;
  right: 1.25rem;
  height: .875rem;
  cursor: pointer;
  display: none;
  position: absolute;
  flex-direction: column;
  justify-content: center;

  div {
    width: 100%;
    height: 2px;
    position: absolute;
    transition: ${({ theme }) => theme.transitions.ease};
    background-color: ${({ theme }) => theme.colors.dark['800']};
  
    &:last-of-type {
      bottom: 0;
    }

    :nth-of-type(2) {
      left: 0;
      opacity: 1;
    }

    &:first-of-type {
      top: 0;
    }
  }

  ${({ show }) => show && css`
    div {
      &:last-of-type {
        bottom: .375rem;
        transform: rotate(-135deg)
      }

      &:first-of-type {
        top: .375rem;
        transform: rotate(135deg)
      }

      :nth-of-type(2) {
        left: -.75rem;
        opacity: 0;
      }
    } 
  `}
`;

const IconAction = styled(Dots)`
  cursor: pointer;
`;

const Wrapper = styled.nav<ResponsiveProps>`
  top: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  z-index: 99;
  position: fixed;
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.dark[200]}`};
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 1124px) {
    ${Routes} {
      gap: 1rem;
      padding-left: 1.5rem;
    }
  }

  @media screen and (max-width: 1024px) {
    height: ${({ show }) => (show ? '100vh' : '3.5rem')};
    transition: ${({ theme }) => theme.transitions.ease};
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    ${Logo} {
      top: .25rem;
      padding: .75rem 1.25rem;
      position: absolute;
      border-right: transparent
    }

    ${Routes} {
      gap: 2rem;
      align-items: flex-start;
      flex-direction: column;
    }

    ${Routes},
    ${Actions} {
      display: none;
    }

    ${Actions} {
      height: fit-content;
      margin: 2rem 0 0 0;

      .is-popover + div {
        right: inherit;
      }
    }

    ${Hamburger} {
      display: flex;
    }

    ${({ show }) => show && css`
      ${Routes},
      ${Actions} {
        display: flex;
      }
    `}
  }
`;

export default {
    Logo,
    Route,
    Routes,
    Wrapper,
    Actions,
    Profile,
    Hamburger,
    IconAction,
};
