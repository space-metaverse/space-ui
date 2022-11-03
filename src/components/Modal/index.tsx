import {
    memo,
    useRef,
    useState,
    forwardRef,
    useImperativeHandle,
} from 'react';

import { useOutsideClick } from '../../hooks';
import { Close as CloseIcon } from '../../icons';
import { Button } from '../Button';
import Styled from './styles';
import type { ModalProps, ModalBaseProps } from './types';

const Component: React.ForwardRefRenderFunction<ModalProps, ModalBaseProps> = ({
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
        <Styled.Base
            {...rest}
            show={show}
            role="dialog"
            aria-modal={show}
            aria-hidden={!show}
            aria-labelledby="dialog"
        >
            <Styled.Wrapper ref={wrapper}>
                {(close || title) && (
                    <Styled.Head shadow={shadow}>
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
                        {!!actions.secondary && (
                            <Button
                                {...actions.secondary}
                                size={actions.secondary.size || 'medium'}
                                color={actions.secondary.color || 'grey'}
                            />
                        )}

                        {!!actions.primary && (
                            <Button
                                {...actions.primary}
                                size={actions.primary.size || 'medium'}
                                color={actions.primary.color || 'blue'}
                            />
                        )}
                    </Styled.Footer>
                )}
            </Styled.Wrapper>
        </Styled.Base>
    );
};

const Modal = memo(forwardRef(Component));

export {
    Modal,
    type ModalProps,
};
