import type { Dispatch, SetStateAction, HTMLAttributes } from 'react';

export interface StyledTabProps {
    activeTab: boolean;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    tabs: string[];
    onChange?: Dispatch<SetStateAction<string>>;
    activeTab?: string;
}
