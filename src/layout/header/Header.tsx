import React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 3rem;
    font-family: 'Alatsi', sans-serif;
    text-align: center;
`;

export interface IHeadingProps {
    title: string;
}

class Heading extends React.Component<IHeadingProps> {
    render() {
        return(
            <Title>{this.props.title}</Title>
        );
    }
}

export default Heading;
