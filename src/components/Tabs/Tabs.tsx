import { useCallback, useState, useMemo } from 'react';
import styled from 'styled-components';

const TabsWrapper = styled.div`
    font-family: Aeroport Medium;
    display: flex;
    color: #111114;
    width: 100%;
`;

const Tab = styled.div<{ activeTab: boolean }>`
    flex-grow: 1;
    text-align: center;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    transition: border 0.2s ease-in-out;
    cursor: pointer;
    border-bottom: 2px solid ${props => props.activeTab ? '#3332FE' : 'transparent'};
`;

interface TabsProps {
    tabs: string[];
    activeTab?: string;
    onChange?: (tab: string) => void;
    className?: string;
}

const Tabs = ({
    tabs = [],
    activeTab,
    onChange,
    className
}: TabsProps) => {
    const [activeTabInternal, setActiveTabInternal] = useState<string>(tabs?.[0] || '');

    const tabToUse = useMemo(() => activeTab || activeTabInternal, [activeTab, activeTabInternal]);

    const handleTabChange = useCallback((tab: string) => {
        setActiveTabInternal(tab);
        onChange?.(tab);
    }, [onChange]);

    return (
        <TabsWrapper className={className}>
            {tabs.map((tab) => (
                <Tab
                    key={tab}
                    onClick={useCallback(() => handleTabChange(tab), [tab, handleTabChange])}
                    activeTab={tabToUse === tab}
                >
                    {tab}
                </Tab>
            ))}
        </TabsWrapper>
    );
};

export { Tabs };
