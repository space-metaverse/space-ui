import { useRef } from 'react';

import { Search, Selector } from '../../icons';
import { Button } from '../Button';
import Styles from './styles';
import type { SearchBarProps } from './types';

const SearchBar: React.FC<SearchBarProps> = ({
    options,
    onClose,
    onSubmit,
    onOption,
    ...rest
}) => {
    const input = useRef<HTMLInputElement>(null);
    const select = useRef<HTMLSelectElement>(null);

    return (
        <Styles.SearchBar.Search>
            <Styles.SearchBar.IconChevron
                width={20}
                height={20}
                onClick={onClose}
            />

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

                <Styles.SearchBar.Target
                    {...rest}
                    ref={input}
                />

                <Button
                    size="medium"
                    color="blue"
                    label={<Search />}
                    onClick={() => {
                        const value = input.current?.value;

                        if (value) onSubmit(value);
                    }}
                />
            </Styles.SearchBar.Input>
        </Styles.SearchBar.Search>
    );
};

export default SearchBar;
