import {
    memo,
    useRef,
    useState,
    forwardRef,
    useCallback,
    useImperativeHandle,
    type ForwardRefRenderFunction,
} from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import type { ModalProps, ModalBaseProps } from './types';

const Modal: ForwardRefRenderFunction<ModalProps, ModalBaseProps> = ({
    children,
}) => (
    <AnimatePresence initial={false}>
        <motion.div>
            {children}
        </motion.div>
    </AnimatePresence>
);

export default memo(forwardRef(Modal));
