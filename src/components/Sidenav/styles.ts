import styled, { css } from 'styled-components';

import { DropDown } from '../../icons';
import type { OptionStylesProps, OptionsStylesProps, WrapperStylesProps } from './types';

export const Content = styled.div`
  gap: .75rem;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.dark['200']}`};
`;

export const BackIconButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  outline: none;
  background-color: transparent;

  path {
    stroke: ${({ theme }) => theme.colors.dark['500']};
    transition: ${({ theme }) => theme.transitions.ease};
  }

  &:hover path {
    stroke: ${({ theme }) => theme.colors.dark['700']};
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.size.xl};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Options = styled.ul<OptionsStylesProps>`
  margin: 0;
  padding: .5rem 1.25rem;
  display: flex;
  transition: ${({ theme }) => theme.transitions.ease};
  flex-direction: column;
  text-transform: uppercase;

  ${({ show, animate }) => animate && css`
    opacity: ${show ? 1 : 0};
    position: ${show ? 'relative' : 'absolute'};
    transform: ${show ? 'translateY(0)' : 'translateY(-.5rem)'};
    pointer-events: ${show ? 'auto' : 'none'};
  `}
`;

export const OptionWrapper = styled.li`
  padding: 1rem 0;
  position: relative;

  &:not(:first-of-type) {
    border-top: ${({ theme }) => `1px solid ${theme.colors.dark['200']}`};
  }
`;

export const IconDropDown = styled(DropDown)`
  position: relative;
  transition: ${({ theme }) => theme.transitions.ease};
  margin-left: auto;

  path {
    stroke: ${({ theme }) => theme.colors.dark['500']} !important;
    stroke-width: 1.5px !important;
  }
`;

export const Option = styled.div<OptionStylesProps>`
  gap: .75rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  user-select: none;
  align-items: center;
  text-transform: uppercase;

  p {
    ${({ theme }) => theme.fonts.size.sm};
    color: ${({ theme, disabled }) => (disabled ? theme.colors.dark['400'] : theme.colors.dark['800'])};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    letter-spacing: 1px;
  }

  path {
    stroke: ${({ theme, disabled }) => (disabled ? theme.colors.dark['400'] : theme.colors.dark['800'])};
    stroke-width: 2px;
  }

  ${({ child = false }) => child && css`
    padding: .625rem 0;
    margin-left: .5rem;
  `};

  ${({ selected = false }) => selected && css`
    p {
      color: ${({ theme }) => theme.colors.blue['400']};
    }

    svg path {
      stroke: ${({ theme }) => theme.colors.blue['400']};
    }
  `}

  ${({ animate = false }) => css`
    ${IconDropDown} {
      transform: ${animate ? 'rotate(180deg)' : 'rotate(0)'};
    }
  `}
`;

export const Preview = styled.div`
  display: none;
  padding: 1rem;
`;

export const Wrapper = styled.div<WrapperStylesProps>`
  width: 100%;
  height: fit-content;
  display: flex;
  position: relative;
  max-width: 19.5rem;
  border-radius: ${({ theme }) => theme.radius['2xl']};
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.dark['100']};

  @media screen and (max-width: 1024px) {
    height: 3.5rem;
    max-width: 100%;

    ${Content} {
      display: none;
    }

    ${Preview} {
      display: flex;
    }

    & > ${Options} {
      top: 3.5rem;
      width: 100%;
      opacity: 0;
      position: absolute;
      border-radius: ${({ theme }) => theme.radius['2xl']};
      pointer-events: none;
      background-color: ${({ theme }) => theme.colors.dark['100']};
    }

    ${({ dropdown }) => dropdown && css`
      & > ${Options} {
        top: 4.5rem;
        opacity: 1;
        pointer-events: auto;
      }
    `}
  }
`;
