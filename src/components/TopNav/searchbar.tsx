import { useRef } from 'react';

import { Search, Selector } from '../../icons';
import { Button } from '../Button';
import Styles from './styles';
import type { SearchBarProps } from './types';

const SearchBar: React.FC<SearchBarProps> = ({
    options,
    onSubmit,
    onOption,
    ...rest
}) => {
    const select = useRef<HTMLSelectElement>(null);

    return (
        <Styles.SearchBar.Input>
            {options && options.length > 0 && (
                <Styles.SearchBar.Select onClick={() => select.current?.focus()}>
                    <select
                        ref={select}
                        onChange={({ target }) => {
                            if (onOption) onOption(target.value);
                        }}
                    >
                        {options.map(option => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>

                    <Selector width={20} height={20} />
                </Styles.SearchBar.Select>
            )}

            <Styles.SearchBar.Target {...rest} />

            <Button
                size="medium"
                color="blue"
                label={<Search />}
                onClick={onSubmit}
            />
        </Styles.SearchBar.Input>
    );
};

export default SearchBar;
