import { useRef, useState, useEffect } from 'react';

import { useOutsideClick } from '../../hooks';
import PopoverStyles from './styles';
import type { PopoverProps, ElementInfo } from './types';

const Popover = ({
    options,
    onHover,
    children,
    position,
    keepOpenOnClick,
    ...rest
}: PopoverProps) => {
    const [show, onShow] = useState(false);
    const [childInfo, onChildInfo] = useState<ElementInfo>({
        width: 0,
        height: 0,
    });
    const [popoverInfo, onPopoverInfo] = useState<ElementInfo>({
        width: 0,
        height: 0,
    });

    const toggle = () => onShow(!show);

    const ref = useRef<HTMLDivElement>(null);
    const refChild = useRef<HTMLDivElement>(null);
    const refPopover = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => onShow(false));

    useEffect(() => {
        if (refPopover.current) {
            const { height, width } = refPopover.current.getBoundingClientRect();

            onPopoverInfo({ height, width });
        }

        if (refChild.current) {
            const { height, width } = refChild.current.getBoundingClientRect();

            onChildInfo({ height, width });
        }
    }, [refPopover, refChild]);

    const mouseActions = {
        onMouseEnter: () => (onHover ? onShow(true) : null),
        onMouseLeave: () => (onHover ? onShow(false) : null),
    };

    return (
        <div ref={ref}>
            <PopoverStyles.Wrapper
                {...rest}
                {...mouseActions}
                ref={refChild}
                role="presentation"
                onClick={() => (!onHover ? toggle() : null)}
            >
                {children}
            </PopoverStyles.Wrapper>

            <PopoverStyles.Box
                ref={refPopover}
                show={show}
                {...mouseActions}
                position={position}
                childInfo={childInfo}
                popoverInfo={popoverInfo}
            >
                {options
                    && options.map(({ icon: Icon, label, callback }) => (
                        <PopoverStyles.Button
                            key={label}
                            type="button"
                            onClick={e => {
                                e.preventDefault();
                                if (!keepOpenOnClick) toggle();
                                if (callback) callback();
                            }}
                        >
                            {Icon && <Icon />}
                            {label}
                        </PopoverStyles.Button>
                    ))}
            </PopoverStyles.Box>
        </div>
    );
};

export {
    Popover,
    PopoverStyles,
    type PopoverProps,
};
