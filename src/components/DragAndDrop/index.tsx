import { useState, type DragEvent, type ChangeEvent } from 'react';

import { Close } from '../../icons';
import DragAndDropStyles from './styles';
import type { DragAndDropProps } from './types';

const DragAndDrop: React.FC<DragAndDropProps> = ({
    icon: Icon,
    files,
    label,
    title = 'Drag and drop image here',
    isError,
    onFiles,
    disabled,
    className,
    ...rest
}) => {
    const [drag, setDrag] = useState(false);

    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if (e.type === 'dragenter' || e.type === 'dragover') setDrag(true);
        else if (e.type === 'dragleave') setDrag(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.stopPropagation();

        setDrag(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onFiles(Array.from(e.dataTransfer.files));
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (e.target.files && e.target.files[0]) {
            onFiles(Array.from(e.target.files));
        }
    };

    const handleRemove = (index: number) => {
        onFiles(prev => prev.filter((_, position) => index !== position));
    };

    return (
        <DragAndDropStyles.Wrapper
            isError={isError}
            disabled={disabled}
            className={className}
        >
            {label && <DragAndDropStyles.Label>{label}</DragAndDropStyles.Label>}

            <DragAndDropStyles.Box
                onDrop={handleDrop}
                dragging={drag}
                onDragOver={handleDrag}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
            >
                <DragAndDropStyles.Input
                    {...rest}
                    type="file"
                    multiple
                    disabled={disabled}
                    onChange={handleChange}
                />

                <DragAndDropStyles.Content id="label-file-upload">
                    <DragAndDropStyles.Icon
                        as={Icon}
                        width={32}
                        height={32}
                    />

                    <DragAndDropStyles.Title>
                        {title}
                    </DragAndDropStyles.Title>

                    <DragAndDropStyles.Description>
                        or
                        {' '}
                        <b>choose file from computer</b>
                    </DragAndDropStyles.Description>
                </DragAndDropStyles.Content>
            </DragAndDropStyles.Box>

            {files && (
                <DragAndDropStyles.ListFiles>
                    {files.map((file, index) => (
                        <DragAndDropStyles.File key={file.name}>
                            {file.name}

                            <Close
                                width={16}
                                height={16}
                                onClick={() => handleRemove(index)}
                            />
                        </DragAndDropStyles.File>
                    ))}
                </DragAndDropStyles.ListFiles>
            )}
        </DragAndDropStyles.Wrapper>
    );
};

export {
    DragAndDrop,
    DragAndDropStyles,
    type DragAndDropProps,
};
