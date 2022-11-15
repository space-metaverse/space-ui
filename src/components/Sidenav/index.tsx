import { useRef, useState, useEffect } from 'react';

import { useOutsideClick } from '../../hooks';
import { ArrowLeft } from '../../icons';
import * as Styled from './styles';
import type { SideNavProps, SimpleOptionProps, OptionComponentProps } from './types';

const Option: React.FC<OptionComponentProps> = ({
    show,
    Icon,
    route,
    label,
    select,
    disabled,
    selected,
    children,
    toggleState,
}) => (
    <Styled.OptionWrapper>
        <Styled.Option
            onClick={() => {
                if (!disabled) {
                    if (!children) select({ label, Icon }, route);
                    toggleState();
                }
            }}
            animate={show}
            disabled={disabled}
            selected={label === selected && !children}
        >
            <Icon width={24} height={24} />
            <p>{label}</p>
            {children && <Styled.IconDropDown />}
        </Styled.Option>

        {children && (
            <Styled.Options show={show} animate>
                {children.map(item => (
                    <Styled.Option
                        key={item.label}
                        child
                        onClick={() => {
                            if (!item.disabled) {
                                select({
                                    Icon: item.Icon,
                                    label: item.label,
                                }, item.route);
                            }
                        }}
                        selected={selected === item.label}
                        disabled={item.disabled}
                    >
                        <item.Icon width={24} height={24} />
                        <p>{item.label}</p>
                    </Styled.Option>
                ))}
            </Styled.Options>
        )}
    </Styled.OptionWrapper>
);

const Sidenav: React.FC<SideNavProps> = ({
    title,
    routes,
    goBack,
}) => {
    const [show, setShow] = useState(-1);
    const [dropdown, setDropdown] = useState(false);
    const [optionSelected, setOptionSelected] = useState<SimpleOptionProps | null>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const navigate = (option: SimpleOptionProps, route: string | null): void => {
        setOptionSelected(option);

        setDropdown(false);

        if (route) window.location.href = route;
    };

    useEffect(() => {
        const {
            pathname,
        } = window.location;

        routes.forEach(({
            Icon,
            route,
            label,
            children,
        }, index) => {
            if (route) {
                const path = pathname.includes(route);

                if (path) setOptionSelected({ Icon, label });
            }

            if (children) {
                children.forEach(child => {
                    const path = pathname.includes(child.route);

                    if (path) {
                        setOptionSelected({ Icon: child.Icon, label: child.label });

                        setShow(index);
                    }
                });
            }

            return false;
        });
    }, [routes]);

    useOutsideClick(dropdownRef, () => setDropdown(false));

    return (
        <Styled.Wrapper
            ref={dropdownRef}
            dropdown={dropdown}
        >
            <Styled.Preview
                as={Styled.Option}
                animate={dropdown}
                onClick={() => setDropdown(prev => !prev)}
            >
                {optionSelected?.Icon && <Styled.Title as={optionSelected?.Icon} />}

                <p>{optionSelected?.label}</p>

                <Styled.IconDropDown />
            </Styled.Preview>

            <Styled.Content>
                {goBack && (
                    <Styled.BackIconButton onClick={goBack}>
                        <ArrowLeft />
                    </Styled.BackIconButton>
                )}
                <Styled.Title>{title}</Styled.Title>
            </Styled.Content>

            <Styled.Options animate={false}>
                {routes.map((props, index) => (
                    <Option
                        {...props}
                        key={props.label}
                        show={show === index}
                        select={navigate}
                        selected={optionSelected?.label}
                        toggleState={() => setShow(prev => (prev !== index ? index : -1))}
                    >
                        {props.children}
                    </Option>
                ))}
            </Styled.Options>
        </Styled.Wrapper>
    );
};

export default Sidenav;
