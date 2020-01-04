import React, { ChangeEvent } from 'react';
import { PrimaryButton } from '../../../shared/styled-components/Buttons';
import { NumberInput, NumberLabel } from '../../../shared/styled-components/Inputs';
import styled from 'styled-components';
import { spacer3, spacer2 } from '../../../shared/Spacers';

const CalculatorRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const InputRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 768px) {
        flex-flow: column;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-between;
    margin-right: ${spacer3};
    margin-bottom: ${spacer2};
    @media (max-width: 768px) {
        width: 100%;
    }
`;


export interface ICalculatorProps {
    setBmi(weight: number, height: number, bmi: number): void;
}

class Calculator extends React.Component<ICalculatorProps> {
    state: { weight: string, height: string } = { weight: '', height: '' }

    constructor(props: ICalculatorProps) {
        super(props);
        this.setBmi = this.setBmi.bind(this);
        this.onWeightChange = this.onWeightChange.bind(this);
        this.onHeightChange = this.onHeightChange.bind(this);
    }

    public setBmi() {
        if (this.state.weight && this.state.height) {
            this.props.setBmi(+this.state.weight, +this.state.height, +(+this.state.weight / Math.pow(+this.state.height / 100, 2)).toFixed(2));
        }
    }

    public onWeightChange(event: ChangeEvent) {
        const weight = (event.target as HTMLInputElement).value;
        if (weight) {
            this.setState({ weight: weight });
        } else {
            this.setState({ weight: '' });
        }
    }

    public onHeightChange(event: ChangeEvent) {
        const height = (event.target as HTMLInputElement).value;
        if (height) {
            this.setState({ height: height });
        } else {
            this.setState({ height: '' });
        }
    }

    public validInputs(): boolean {
        return !!this.state.weight && !!this.state.height;
    }

    render() {
        return (
            <CalculatorRoot>
                <InputRoot>
                    <InputContainer>
                        <NumberLabel htmlFor="weight">Vikt</NumberLabel>
                        <NumberInput id="weight" type="text" onChange={this.onWeightChange} value={this.state.weight} placeholder="kg..."/>
                    </InputContainer>
                    <InputContainer>
                        <NumberLabel htmlFor="height">Längd (cm)</NumberLabel>
                        <NumberInput id="height" type="text" onChange={this.onHeightChange} value={this.state.height} placeholder="cm..."/>
                    </InputContainer>
                    <PrimaryButton disabled={!this.validInputs()} onClick={this.setBmi}>Räkna ut</PrimaryButton>
                </InputRoot>
            </CalculatorRoot>
        );
    }
}

export default Calculator;
