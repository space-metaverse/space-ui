import {
    memo,
    useRef,
    useState,
    forwardRef,
    useImperativeHandle,
} from 'react';

import { AnimatePresence } from 'framer-motion';

import { useOutsideClick } from '../../hooks';
import { Close as CloseIcon } from '../../icons';
import { Button } from '../Button/Button';
import Styled from './styles';
import type { ModalProps, ModalBaseProps } from './types';
import variants from './variants';

const Component: React.ForwardRefRenderFunction<ModalProps, ModalBaseProps> = ({
    size = 'sm',
    clear,
    close = true,
    title,
    shadow = true,
    actions,
    children,
    initialValue = false,
    outsideClick = true,
    ...rest
}, ref) => {
    const [show, onShow] = useState(initialValue);

    const wrapper = useRef<HTMLDivElement>(null);

    const opened = () => onShow(true);

    const closed = () => onShow(false);

    const outside = () => {
        closed();

        if (clear) clear();
    };

    useImperativeHandle(ref, () => ({
        opened,
        closed,
    }));

    useOutsideClick(wrapper, () => outsideClick && outside());

    return (
        <AnimatePresence initial={false}>
            <Styled.Base
                {...rest}
                exit={variants.base.closed}
                role="dialog"
                animate={show ? 'open' : 'closed'}
                variants={variants.base}
                aria-modal={show}
                aria-hidden={! show}
                aria-labelledby="dialog"
            >
                <Styled.Wrapper
                    ref={wrapper}
                    exit={variants.wrapper.closed}
                    animate={show ? 'open' : 'closed'}
                    variants={variants.wrapper}
                    transition={{ type: 'spring' }}
                >
                    {(close || title) && (
                        <Styled.Head>
                            {title && (
                                <Styled.Title>
                                    {title}
                                </Styled.Title>
                            )}

                            {close && <CloseIcon onClick={closed} />}
                        </Styled.Head>
                    )}

                    <Styled.Body>
                        {children}
                    </Styled.Body>

                    {actions && (
                        <Styled.Footer>
                            {!! actions.secondary && (
                                <Button
                                    {...actions.secondary}
                                    size={actions.secondary.size || 'md'}
                                    label={actions.secondary.label || 'Cancel'}
                                />
                            )}

                            {!! actions.primary && (
                                <Button
                                    {...actions.primary}
                                    size={actions.primary.size || 'md'}
                                />
                            )}
                        </Styled.Footer>
                    )}
                </Styled.Wrapper>
            </Styled.Base>
        </AnimatePresence>
    );
};

const Modal = memo(forwardRef(Component));

export {
    Modal,
};

export type {
    ModalProps,
};
