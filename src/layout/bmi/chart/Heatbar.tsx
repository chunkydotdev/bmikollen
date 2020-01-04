import React from 'react';
import styled from 'styled-components';

const HeatbarContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Bar = styled.div`
    height: 40px;
    width: 300px;
    background: linear-gradient(90deg, red 0%, yellow 20%, lightgreen 20%, green 40%, lightgreen 58%, yellow 58%, red 100%);
    position: relative;
`;

const Line18point5 = styled.div`
    position: absolute;
    height: 50px;
    width: 2px;
    left: 20%;
    top: -5px;
    background-color: black;
`;

const Line25 = styled.div`
    position: absolute;
    height: 50px;
    width: 2px;
    left: 58%;
    top: -5px;
    background-color: black;
`;

const Line30 = styled.div`
    position: absolute;
    height: 50px;
    width: 2px;
    left: 88%;
    top: -5px;
    background-color: black;
`;

const LineLabel = styled.div`
    position: absolute;
    bottom: -20px;
    left: 0;
    font-weight: bold;
    transform: translateX(-50%);
`;

const Pointer = styled.div`
    position: absolute;
    left: ${(props: {position: number}) => props.position}%;
    top: -10px;
    border: 10px solid transparent;
    border-top-color: black;
    transform: translateX(-50%);
`;

class Heatbar extends React.Component<{bmi: number}> {

    constructor(props: {bmi: number}) {
        super(props);

        this.getPointerPosition = this.getPointerPosition.bind(this);
    }

    public getPointerPosition(): number {
        let bmi = [...[this.props.bmi]][0];
        if (bmi < 15) {
            return 0;
        } else if (bmi > 32) {
            return 100;
        }

        bmi -= 15;

        return (bmi/17)*100;
    }

    render() {
        return (
            <HeatbarContainer>
                <Bar>
                    <Pointer position={this.getPointerPosition()}></Pointer>
                    <Line18point5>
                        <LineLabel>18.5</LineLabel>
                    </Line18point5>
                    <Line25>
                        <LineLabel>25</LineLabel>
                    </Line25>
                    <Line30>
                        <LineLabel>30</LineLabel>
                    </Line30>
                </Bar>
            </HeatbarContainer>
        );
    }
}

export default Heatbar;
