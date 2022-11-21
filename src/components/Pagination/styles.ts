import styled, { css } from 'styled-components';

import type { BulletProps } from './types';

const List = styled.div`
  gap: .5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Bullet = styled.button.attrs({
    type: 'button',
})<BulletProps>`
  color: ${({ theme, selected }) => (selected ? theme.colors.white : theme.colors.dark['800'])};
  height: 2.5rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: ${({ theme, selected }) => `1px solid ${selected ? theme.colors.blue['400'] : theme.colors.dark['200']}`};
  display: flex;
  min-width: 2.5rem;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.family.body};
  border-radius: ${({ theme }) => theme.radius.full};
  justify-content: center;
  background-color:  ${({ theme, selected }) => (selected ? theme.colors.blue['400'] : 'transparent')};

  &,
  path {
    transition: ${({ theme }) => theme.transitions.ease};
  }

  path {
    stroke: ${({ theme, disabled }) => (disabled ? theme.colors.dark['500'] : theme.colors.dark['800'])};
  }

  ${({ theme, disabled, selected }) => !disabled && !selected && css`
    &:hover {
      color: ${theme.colors.blue['400']};
      border-color: ${theme.colors.dark['300']};
    
      path {
        stroke: ${theme.colors.blue['400']};
      }
    }
  `}
`;

export default {
    List,
    Bullet,
};
