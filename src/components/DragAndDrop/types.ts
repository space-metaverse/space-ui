import type { Dispatch, SetStateAction, InputHTMLAttributes } from 'react';

import type { SVGProps } from '../../icons';

export interface DragAndDropProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: (props: SVGProps) => JSX.Element;
    label?: string;
    files?: File[];
    title?: string;
    onFiles: Dispatch<SetStateAction<File[]>>;
}

export interface DragAndDropStylesProps {
    disabled?: boolean;
}

export interface DragAndDropStylesBoxProps {
    dragging: boolean;
}
