import React from 'react';
import Calculator from './calculator/Calculator';
import styled from 'styled-components';
import Chart from './chart/Chart';
import { IBmi } from '../../shared/models/Bmi.model';
import moment from 'moment';
import { spacer4 } from '../../shared/Spacers';
import Options from './options/Options';
import Heatbar from './chart/Heatbar';

export const BmiResult = styled.h3`
    font-family: 'Alatsi', sans-serif;
    text-align: center;
    margin-top: ${spacer4};
`;

class Bmi extends React.Component {
    state: {weight: number, height: number, bmi: number };

    constructor(props: {}) {
        super(props);

        this.state = { weight: 0, height: 0, bmi: 0 };
        this.setBmi = this.setBmi.bind(this);
        this.saveBmi = this.saveBmi.bind(this);
        this.getPreviousBmi = this.getPreviousBmi.bind(this);
        this.clearBmiHistory = this.clearBmiHistory.bind(this);
    }

    public setBmi(weight: number, height: number, bmi: number): void {
        this.setState({ weight: weight, height: height, bmi: bmi }, () => {
            this.saveBmi();
        });
    }

    public bmiResult(): JSX.Element {
        if (this.state.bmi > 0) {
            return (
                <div>
                    <div className="mb-5">
                        <BmiResult>Din BMI: {this.state.bmi}</BmiResult>
                    </div>
                    <Heatbar bmi={this.state.bmi}></Heatbar>
                </div>
            );
        }
        return <div></div>;
    }

    public saveBmi(): void {
        const previousBmi = this.getPreviousBmi();
        const currentBmi = { weight: this.state.weight, height: this.state.height, bmi: this.state.bmi, date: moment().format('YYYY-MM-DD') };
        if (previousBmi.length === 0) {
            previousBmi.push(currentBmi);
        } else {
            const index = previousBmi.findIndex((bmi: IBmi) => bmi.date === currentBmi.date);
            if (index >= 0) {
                previousBmi.splice(index, 1, currentBmi);
            } else {
                previousBmi.push(currentBmi);
            }
        }
        localStorage.setItem('bmi', JSON.stringify(previousBmi));
        this.forceUpdate();
    }

    public clearBmiHistory() {
        localStorage.setItem('bmi', '');
    }

    public getPreviousBmi(): IBmi[] {
        const rawBmi = localStorage.getItem('bmi');
        if (rawBmi) {
            const previousBmi: IBmi[] = JSON.parse(rawBmi);
            if (previousBmi) {
                return previousBmi;
            }
        }
        return [];
    }

    render() {
        return (
            <div>
                <Calculator setBmi={this.setBmi}></Calculator>
                {this.bmiResult()}
                <Chart bmiData={this.getPreviousBmi()}></Chart>
                <Options clearBmiHistory={this.clearBmiHistory}></Options>
            </div>
        );
    }
}

export default Bmi;
