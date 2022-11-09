import { useRef, useState } from 'react';

import ImageInputStyles from './styles';
import type { ImageInputProps } from './types';

const dummyAvatar = 'data:image/png;base64,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';

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
