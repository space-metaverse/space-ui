import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Info, Alert as AlertSvg, Check, Error } from '../../icons';

type AlertType = 'success' | 'error' | 'warning' | 'info';

const AlertWrapper = styled.div<{ type: AlertType, withIcon: boolean }>`
    font-family: Aeroport;
    border-radius: 20px;
    width: fit-content;
    display: flex;
    align-items: center;
    ${props => {
        switch (props.type) {
            case 'success':
                return css`
                    background-color: #0ddb5f2f;
                    color: #00CC5F;
                `;
            case 'error':
                return css`
                    background-color: #f500191f;
                    color: #F50018;
                `;
            case 'warning':
                return css`
                    background-color: #ff77002c;
                    color: #FF7800;
                `;
            case 'info':
                return css`
                    background-color: #2356ff2a;
                    color: #3332FE;
                `;
        }
    }}
`;

const TextWrapper = styled.div<{ type: AlertType, withIcon: boolean }>`
    padding: 0.75rem 1.5rem;
    border-radius: 20px 0 0 20px;
`;

const IconWrapper = styled.div<{ type: AlertType }>`
    padding: 0.75rem 1rem;
    border-radius: 20px 0 0 20px;
    ${props => {
        switch (props.type) {
            case 'success':
                return css`
                    background-color: #0ddb5f2f;
                `;
            case 'error':
                return css`
                    background-color: #f500191f;
                `;
            case 'warning':
                return css`
                    background-color: #ff77002c;
                `;
            case 'info':
                return css`
                    background-color: #2356ff2a;
                `;
        }
    }}
`;

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
    type: AlertType;
    withIcon?: boolean;
}

const Alert = ({
    text,
    type = 'info',
    withIcon = false,
    ...props
}: AlertProps) => (
    <AlertWrapper type={type} withIcon={withIcon} {...props}>
        {withIcon && <IconWrapper type={type}>
            {type === 'success' && <Check stroke='#00CC5F' />}
            {type === 'error' && <AlertSvg stroke='#F50018' />}
            {type === 'warning' && <Error stroke='#FF7800' />}
            {type === 'info' && <Info stroke='#3332FE' />}
        </IconWrapper>}
        <TextWrapper type={type} withIcon={withIcon}>
            {text}
        </TextWrapper>
    </AlertWrapper>
);

export { Alert };