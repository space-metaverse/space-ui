import { useState } from 'react';

import { Logout as IconLogout, Search as IconSearch } from '../../icons';
import { Popover } from '../Popover';
import { logo } from './logo';
import SearchBar from './searchbar';
import TopNavStyles from './styles';
import type { TopNavProps } from './types';

const TopNav: React.FC<TopNavProps> = ({
    user,
    routes,
    options,
    className,
    searchBar,
    logoRoute,
    signInRoute,
}) => {
    const [search, setSearch] = useState(false);
    const [responsive, setResponsive] = useState(false);

    return (
        <TopNavStyles.Wrapper
            show={responsive}
            search={search}
            className={className}
        >
            <TopNavStyles.Logo href={logoRoute || '/'}>
                <img
                    src={logo}
                    alt="Logo space"
                    width={58}
                    height={24}
                />
            </TopNavStyles.Logo>

            {searchBar && (
                <SearchBar
                    {...searchBar}
                    onClose={() => setSearch(false)}
                />
            )}

            {!searchBar && (
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
            )}

            {searchBar && (
                <TopNavStyles.SearchButton onClick={() => setSearch(true)}>
                    <IconSearch />
                </TopNavStyles.SearchButton>
            )}

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
