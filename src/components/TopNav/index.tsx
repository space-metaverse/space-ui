import { useState } from 'react';

import { Logout as IconLogout } from '../../icons';
import { Popover, type PopoverProps } from '../Popover';
import { logo } from './logo';
import TopNavStyles from './styles';

type UserProps = {
    name: string
    avatar: string | null
};

type RouteProps = {
    route: string
    label: string
    disabled?: boolean
    isExternal?: boolean
};

type TopNavProps = {
    user?: UserProps
    routes: RouteProps[]
    options?: PopoverProps['options']
    className?: string
    signInRoute?: string
};

const TopNav: React.FC<TopNavProps> = ({
    user,
    routes,
    options,
    className,
    signInRoute,
}) => {
    const [responsive, setResponsive] = useState(false);

    return (
        <TopNavStyles.Wrapper
            show={responsive}
            className={className}
        >
            <TopNavStyles.Logo href="/">
                <img
                    src={logo}
                    alt="Logo space"
                    width={58}
                    height={24}
                />
            </TopNavStyles.Logo>

            <TopNavStyles.Routes>
                {routes.map(({
                    route,
                    label,
                    disabled,
                    isExternal,
                }) => (
                    <li key={route}>
                        <TopNavStyles.Route
                            href={route}
                            target={isExternal ? '_blank' : '_self'}
                            disabled={disabled}
                        >
                            {label}
                        </TopNavStyles.Route>
                    </li>
                ))}
            </TopNavStyles.Routes>

            {signInRoute && (
                <TopNavStyles.Actions
                    as="a"
                    href={signInRoute}
                    className="is-sign"
                >
                    <IconLogout />

                    <p>SIGN IN</p>
                </TopNavStyles.Actions>
            )}

            {!signInRoute && (
                <TopNavStyles.Actions>
                    {user && (
                        <>
                            <TopNavStyles.Profile>
                                {user.avatar && (
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        width={32}
                                        height={32}
                                    />
                                )}
                            </TopNavStyles.Profile>

                            <p>{user.name}</p>
                        </>
                    )}

                    {options && (
                        <Popover
                            options={options}
                            className="is-popover"
                        >
                            <TopNavStyles.IconAction />
                        </Popover>
                    )}
                </TopNavStyles.Actions>
            )}

            <TopNavStyles.Hamburger
                show={responsive}
                onClick={() => setResponsive(prev => !prev)}
            >
                <div />
                <div />
                <div />
            </TopNavStyles.Hamburger>
        </TopNavStyles.Wrapper>
    );
};

export {
    TopNav,
    TopNavStyles,
    type TopNavProps,
};
