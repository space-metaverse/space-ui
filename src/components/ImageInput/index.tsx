import { useRef, useState } from 'react';

import dummyAvatar from '../../stories/assets/avatar.png';
import Styled from './styles';
import { ImageInputProps } from './types';

const ImageInput = ({
    file,
    width,
    header,
    onFile,
    button,
    showDummyAvatar,
    changeLabelWhenFileSelected,
}: ImageInputProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [avatar, setAvatar] = useState<string | null>(showDummyAvatar ? dummyAvatar : null);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.files?.[0];

        if (target) {
            onFile(target);
            setAvatar(URL.createObjectURL(target));
        } else {
            onFile(null);
            setAvatar(showDummyAvatar ? dummyAvatar : null);
        }
    };

    return (
        <Styled.Backdrop width={width}>
            <Styled.Avatar avatar={avatar} />

            <Styled.Text>
                {changeLabelWhenFileSelected && file?.name
                    ? file?.name
                    : header}
            </Styled.Text>

            {file && file?.name && (
                <Styled.IconDelete
                    onClick={() => {
                        ref.current?.value && (ref.current.value = '');
                        onFile(null);
                        setAvatar(showDummyAvatar ? dummyAvatar : null);
                    }}
                />
            )}

            <Styled.Input
                ref={ref}
                name="file"
                type="file"
                accept={'image/*'}
                onChange={handleFile}
            />

            <Styled.Action
                {...button}
                size={button.size || 'small'}
                onClick={() => ref.current?.click()}
            />
        </Styled.Backdrop>
    );
};

export { ImageInput };
