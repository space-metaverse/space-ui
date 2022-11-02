import { useCallback, useState, useMemo } from 'react';

import Styled from './styles';
import { TabsProps } from './types';

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
        <Styled.Wrapper {...rest}>
            {tabs.map(tab => (
                <Styled.Tab
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    activeTab={tabToUse === tab}
                >
                    {tab}
                </Styled.Tab>
            ))}
        </Styled.Wrapper>
    );
};

export { Tabs };
