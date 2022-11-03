import { useCallback, useState, useMemo } from 'react';

import TabsStyles from './styles';
import type { TabsProps } from './types';

const Tabs = ({
    tabs = [],
    onChange,
    activeTab,
    ...rest
}: TabsProps) => {
    const [activeTabInternal, setActiveTabInternal] = useState<string>(tabs?.[0] || '');

    const tabToUse = useMemo(() => activeTab || activeTabInternal, [activeTab, activeTabInternal]);

    const handleTabChange = useCallback((tab: string) => {
        setActiveTabInternal(tab);
        onChange?.(tab);
    }, [onChange]);

    return (
        <TabsStyles.Wrapper {...rest}>
            {tabs.map(tab => (
                <TabsStyles.Tab
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    activeTab={tabToUse === tab}
                >
                    {tab}
                </TabsStyles.Tab>
            ))}
        </TabsStyles.Wrapper>
    );
};

export {
    Tabs,
    TabsStyles,
    type TabsProps,
};
