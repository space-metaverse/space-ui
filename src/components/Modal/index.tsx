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
import ModalStyles from './styles';
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
        <ModalStyles.Base
            {...rest}
            show={show}
            role="dialog"
            aria-modal={show}
            aria-hidden={!show}
            aria-labelledby="dialog"
        >
            <ModalStyles.Wrapper ref={wrapper}>
                {(close || title) && (
                    <ModalStyles.Head shadow={shadow}>
                        {title && (
                            <ModalStyles.Title>
                                {title}
                            </ModalStyles.Title>
                        )}

                        {close && <CloseIcon onClick={closed} />}
                    </ModalStyles.Head>
                )}

                <ModalStyles.Body>
                    {children}
                </ModalStyles.Body>

                {actions && (
                    <ModalStyles.Footer twoActions={!!actions.secondary && !!actions.primary ? true : false}>
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
                    </ModalStyles.Footer>
                )}
            </ModalStyles.Wrapper>
        </ModalStyles.Base>
    );
};

const Modal = memo(forwardRef(Component));

export {
    Modal,
    ModalStyles,
    type ModalProps,
};
