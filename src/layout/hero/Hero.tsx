import React from 'react';
import styled from 'styled-components';
import RoadRunner1 from '../../assets/standing-8.svg';
import RoadRunner2 from '../../assets/standing-9.svg';

const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 450px;
    height: 20vh;
    overflow-x: hidden;
`;

const RoadElement = styled.div`
    width: 100%;
    height: 200px;
    background: linear-gradient(to bottom, #ccc, #fff);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

const RoadStripesElement = styled.div`
    height: 40px;
    width: 110%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

const RoadRunner1Element = styled.div`
    position: absolute;
    bottom: 70px;
    left: 50%;
    height: 400px;
    width: 200px;
    background-image: url('${RoadRunner1}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    transform: translateX(-100%);
`;

const RoadRunner2Element = styled.div`
    position: absolute;
    bottom: 80px;
    left: 50%;
    height: 400px;
    width: 200px;
    background-image: url('${RoadRunner2}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    transform: translateX(100%);
`

class Hero extends React.Component {

    public render() {
        return (
            <HeroContainer>
                <RoadElement>
                    <RoadStripesElement></RoadStripesElement>
                </RoadElement>
                <RoadRunner1Element></RoadRunner1Element>
                <RoadRunner2Element></RoadRunner2Element>
            </HeroContainer>
        );
    }
}

export default Hero;
