import type { HTMLAttributes } from 'react';

export interface StyledTabProps {
    activeTab: boolean;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    tabs: string[];
    onChange?: (tab: string) => void;
    activeTab?: string;
}
