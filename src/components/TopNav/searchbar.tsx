import { Search } from '../../icons';
import { Button } from '../Button';
import Styles from './styles';
import type { SearchBarProps } from './types';

const SearchBar: React.FC<SearchBarProps> = ({
    options,
}) => {
    const x = 0;

    return (
        <Styles.SearchBar.Input>
            {options && options.length > 0 && (
                <Styles.SearchBar.Select>
                    {options.map(option => (
                        <option key={option}>{option}</option>
                    ))}
                </Styles.SearchBar.Select>
            )}

            <Styles.SearchBar.Target />

            <Button
                size="medium"
                color="blue"
                label={<Search />}
            />
        </Styles.SearchBar.Input>
    );
};

export default SearchBar;
