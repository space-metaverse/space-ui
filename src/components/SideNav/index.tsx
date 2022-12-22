import { useRef, useState, useEffect } from 'react';

import { useOutsideClick } from '../../hooks';
import { ArrowLeft } from '../../icons';
import * as SideNavStyles from './styles';
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
    activeField,
    toggleState,
}) => (
    <SideNavStyles.OptionWrapper>
        <SideNavStyles.Option
            onClick={() => {
                if (!disabled) {
                    if (!children) select({ label, Icon }, route);
                    toggleState();
                }
            }}
            animate={show}
            disabled={disabled}
            selected={(selected || (label === activeField)) && !children}
        >
            <Icon width={24} height={24} />
            <p>{label}</p>
            {children && <SideNavStyles.IconDropDown />}
        </SideNavStyles.Option>

        {children && (
            <SideNavStyles.Options show={show} animate>
                {children.map(item => (
                    <SideNavStyles.Option
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
                        selected={activeField === item.label}
                        disabled={item.disabled}
                    >
                        <item.Icon width={24} height={24} />
                        <p>{item.label}</p>
                    </SideNavStyles.Option>
                ))}
            </SideNavStyles.Options>
        )}
    </SideNavStyles.OptionWrapper>
);

const SideNav: React.FC<SideNavProps> = ({
    title,
    routes,
    goBack,
    onNavigate,
}) => {
    const [show, setShow] = useState(-1);
    const [dropdown, setDropdown] = useState(false);
    const [optionSelected, setOptionSelected] = useState<SimpleOptionProps | null>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const navigate = (option: SimpleOptionProps, route: string | null): void => {
        setOptionSelected(option);

        setDropdown(false);

        if (route) {
            if (onNavigate) {
                onNavigate(route);
            } else {
                window.location.href = route;
            }
        }
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
        <SideNavStyles.Wrapper
            ref={dropdownRef}
            dropdown={dropdown}
        >
            <SideNavStyles.Preview
                as={SideNavStyles.Option}
                animate={dropdown}
                onClick={() => setDropdown(prev => !prev)}
            >
                {optionSelected?.Icon && <SideNavStyles.Title as={optionSelected?.Icon} />}

                <p>{optionSelected?.label}</p>

                <SideNavStyles.IconDropDown />
            </SideNavStyles.Preview>

            {title && (
                <SideNavStyles.Content>
                    {goBack && (
                        <SideNavStyles.BackIconButton onClick={goBack}>
                            <ArrowLeft />
                        </SideNavStyles.BackIconButton>
                    )}
                    <SideNavStyles.Title>{title}</SideNavStyles.Title>
                </SideNavStyles.Content>
            )}

            <SideNavStyles.Options animate={false}>
                {routes.map((props, index) => (
                    <Option
                        {...props}
                        key={props.label}
                        show={show === index}
                        select={navigate}
                        activeField={optionSelected?.label}
                        toggleState={() => setShow(prev => (prev !== index ? index : -1))}
                    >
                        {props.children}
                    </Option>
                ))}
            </SideNavStyles.Options>
        </SideNavStyles.Wrapper>
    );
};

export {
    SideNav,
    SideNavStyles,
    type SideNavProps,
};
