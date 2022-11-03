import { useEffect, useState } from 'react';

import * as Styled from './styles';
import { } from './types';

const Toggle = ({ checked }: { checked: boolean }) => {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    return (
        <Styled.Switch>
            <Styled.InvisibleInput type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <Styled.Slider checked={isChecked} />
        </Styled.Switch>
    );
};

export { Toggle };
