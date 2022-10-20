import type { RefObject } from 'react';

export type AnyEvent = MouseEvent | TouchEvent;

export type OutsideClickProps = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: AnyEvent) => void,
) => void;
