import type { Dispatch, HTMLAttributes, SetStateAction } from 'react';

import type { ButtonProps } from '../Button';

export interface ImageInputProps extends HTMLAttributes<HTMLDivElement> {
    file: File | null;
    width?: number;
    header: string;
    button: ButtonProps;
    onFile: Dispatch<SetStateAction<File | null>>;
    showDummyAvatar?: boolean;
    changeLabelWhenFileSelected?: boolean;
}

export interface StyledImageProps {
    avatar: string | null;
}
