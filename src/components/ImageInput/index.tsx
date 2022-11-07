import { useRef, useState } from 'react';

import dummyAvatar from '../../assets/avatar.png';
import ImageInputStyles from './styles';
import type { ImageInputProps } from './types';

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
        <ImageInputStyles.Backdrop width={width}>
            <ImageInputStyles.Avatar>
                {avatar && (
                    <img
                        alt=""
                        src={avatar}
                    />
                )}
            </ImageInputStyles.Avatar>

            <ImageInputStyles.Text>
                {changeLabelWhenFileSelected && file?.name
                    ? file?.name
                    : header}
            </ImageInputStyles.Text>

            {file && file?.name && (
                <ImageInputStyles.IconDelete
                    onClick={() => {
                        onFile(null);
                        setAvatar(showDummyAvatar ? dummyAvatar : null);
                    }}
                />
            )}

            <ImageInputStyles.Input
                ref={ref}
                name="file"
                type="file"
                accept={'image/*'}
                onChange={handleFile}
            />

            <ImageInputStyles.Action
                {...button}
                size={button.size || 'small'}
                onClick={() => ref.current?.click()}
            />
        </ImageInputStyles.Backdrop>
    );
};

export {
    ImageInput,
    ImageInputStyles,
    type ImageInputProps,
};
