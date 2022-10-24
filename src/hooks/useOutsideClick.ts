import { useEffect } from 'react';
import type { RefObject } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

type OutsideClickProps = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: AnyEvent) => void,
) => void;

const useOutsideClick: OutsideClickProps = (ref, handler) => {
    useEffect(() => {
        const listener = (event: AnyEvent) => {
            const el = ref?.current;

            /**
             * Do nothing if clicking ref's
             * element or descendent elements.
             */
            if (!el || el.contains(event.target as Node)) {
                return;
            }

            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
};

export default useOutsideClick;
