import React, { HTMLAttributes, useRef } from "react";
import styled from "styled-components";
import { Delete } from "../../icons";
import { Button, ButtonColor, ButtonSize } from "../Button/Button";
import dummyAvatar from "../../assets/avatar.png";

interface ImageInputProps extends HTMLAttributes<HTMLDivElement> {
    header: string;
    button: {
        label: string;
        size: ButtonSize;
        color: ButtonColor;
    };
    width: number;
    height: number;
    onFile: (file: File | null) => void;
    changeLabelWhenFileSelected?: boolean;
    showDummyAvatar?: boolean;
}

const StyledBackdrop = styled.div<{ width?: number; height?: number }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 32px 24px 24px;
    gap: 32px;
    width: ${(props) => props.width + "px" || "auto"};
    height: ${(props) => props.height + "px" || "auto"};
    background: #fafafc;
    border-radius: 16px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

const StyledAvatar = styled.div<{ avatar: string | null }>`
    width: 96px;
    height: 96px;
    background: #f0f0f5;
    border-radius: 50%;
    flex: none;
    order: 0;
    flex-grow: 0;
    background-image: url(${(props) => props.avatar || ""});
    background-position: center;
    background-size: cover;
`;

const StyledHeadText = styled.div`
    font-family: Aeroport;
    font-style: normal;
    font-size: 20px;
`;

const StyledImageInput = styled.input`
    display: none;
`;

const StyledDelete = styled(Delete)`
    cursor: pointer;
`;

const ImageInput = ({
    header,
    button,
    width,
    height,
    onFile,
    changeLabelWhenFileSelected,
    showDummyAvatar,
}: ImageInputProps) => {
    const ref: React.RefObject<HTMLInputElement> = useRef(null);
    const [file, setFile] = React.useState<File | null>(null);
    const [avatar, setAvatar] = React.useState<string | null>(
        showDummyAvatar ? dummyAvatar : null
    );

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setFile(file);
            onFile(file);
            setAvatar(URL.createObjectURL(file));
        } else {
            setFile(null);
            onFile(null);
            setAvatar(showDummyAvatar ? dummyAvatar : null);
        }
    };

    return (
        <StyledBackdrop width={width} height={height}>
            <StyledAvatar avatar={avatar ? avatar : null} />

            <StyledHeadText>
                {changeLabelWhenFileSelected && file?.name
                    ? file?.name
                    : header}
            </StyledHeadText>

            {file && file?.name && (
                <StyledDelete
                    stroke="#666"
                    onClick={() => {
                        ref.current?.value && (ref.current.value = "");
                        setFile(null);
                        onFile(null);
                        setAvatar(showDummyAvatar ? dummyAvatar : null);
                    }}
                />
            )}

            <StyledImageInput
                ref={ref}
                type="file"
                accept={"image/*"}
                name="file"
                onChange={handleFile}
            />

            <Button {...button} onClick={() => ref.current?.click()} />
        </StyledBackdrop>
    );
};

export { ImageInput };
