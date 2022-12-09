import { useRef, useState, useEffect } from 'react';

import { useOutsideClick } from '../../hooks';
import PopoverStyles from './styles';
import type { PopoverProps, ElementInfo } from './types';

const Popover = ({
    show,
    onShow,
    options,
    onHover,
    children,
    position,
    keepOpenOnClick,
    ...rest
}: PopoverProps) => {
    const [toggle, onToggle] = useState(show ?? false);
    const [childInfo, onChildInfo] = useState<ElementInfo>({
        width: 0,
        height: 0,
    });
    const [popoverInfo, onPopoverInfo] = useState<ElementInfo>({
        width: 0,
        height: 0,
    });

    const changeToggle = () => {
        onToggle(prev => !prev);

        if (onShow) onShow(prev => !prev);
    };

    const ref = useRef<HTMLDivElement>(null);
    const refChild = useRef<HTMLDivElement>(null);
    const refPopover = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => {
        onToggle(false);

        if (onShow) onShow(false);
    });

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
        onMouseEnter: () => (onHover ? onToggle(true) : null),
        onMouseLeave: () => (onHover ? onToggle(false) : null),
    };

    return (
        <div ref={ref}>
            <PopoverStyles.Wrapper
                {...rest}
                {...mouseActions}
                ref={refChild}
                role="presentation"
                onClick={() => (!onHover ? changeToggle() : null)}
            >
                {children}
            </PopoverStyles.Wrapper>

            <PopoverStyles.Box
                ref={refPopover}
                show={toggle}
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
                                if (!keepOpenOnClick) changeToggle();
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
