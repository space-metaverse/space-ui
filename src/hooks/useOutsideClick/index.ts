import { useEffect } from 'react';

import type { AnyEvent, OutsideClickProps } from './types';

const useOutsideClick: OutsideClickProps = (ref, handler) => {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;

      /**
       * Do nothing if clicking ref's
       * element or descendent elements.
       */
      if (! el || el.contains(event.target as Node)) {
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
