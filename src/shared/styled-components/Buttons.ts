import styled from 'styled-components';

export const PrimaryButton = styled.button`
    background-color: white;
    color: #555;
    border: #555 solid 1px;
    border-radius: .25rem;
    font-weight: bold;
    font-size: 1.065rem;
    padding: .5rem 1rem;
    cursor: pointer;
    transition: all .2s;
    white-space: nowrap;
    max-height: 2.5rem;

    &:disabled {
        color: #bbb;
        border-color: #bbb;
    }

    &:hover:not(:disabled) {
        background-color: #555;
        color: white;
    }
`;

export const DangerButton = styled.button`
    background-color: white;
    color: red;
    border: red solid 1px;
    border-radius: .25rem;
    font-weight: bold;
    font-size: 1.065rem;
    padding: .5rem 1rem;
    cursor: pointer;
    transition: all .2s;
    white-space: nowrap;
    max-height: 2.5rem;

    &:disabled {
        color: #bbb;
        border-color: #bbb;
    }

    &:hover:not(:disabled) {
        background-color: red;
        color: white;
    }
`;
