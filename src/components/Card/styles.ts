import styled from 'styled-components';

const Wrapper = styled.div`
    width: fit-content;
    cursor: pointer;
    border: ${({ theme }) => `1px solid ${theme.colors.dark['200']}`};
    transition: ${({ theme }) => theme.transitions.ease};
    border-radius: ${({ theme }) => theme.radius['2xl']};
    
    &:hover {
        border-color: ${({ theme }) => theme.colors.dark['300']};
    } 
`;

const Image = styled.img`
    width: 100%;
    min-height: 12rem;
    object-fit: cover;
    border-radius: ${({ theme }) => `${theme.radius['2xl']} ${theme.radius['2xl']} 0 0`};
`;

const Content = styled.div`
    padding: 1rem 1.5rem 1.5rem 1.5rem;
`;

export default {
    Image,
    Content,
    Wrapper,
};
