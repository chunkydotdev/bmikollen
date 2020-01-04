import React from 'react';
import { VictoryLine, VictoryChart, VictoryBar } from 'victory';
import { IBmi } from '../../../shared/models/Bmi.model';
import moment from 'moment';
import styled from 'styled-components';

const ChartRoot = styled.div``;

export interface IChartProps {
    bmiData: IBmi[];
}

class Chart extends React.Component<IChartProps> {
    private baseProps = {
        width: Math.min(window.innerWidth / 1.5, 800),
        height: 300,
        padding: 50
    };

    public getLineData(): Array<{ x: string, y: number }> {
        return this.props.bmiData.map((bmi: IBmi, index: number) => {
            return { x: moment(bmi.date).format('MMM DD'), y: bmi.bmi };
        });
    }

    public getChart() {
        if (this.props.bmiData.length > 1) {
            return (
                <VictoryLine
                    interpolation="natural"
                    data={this.getLineData()}>
                </VictoryLine>
            );
        }
        return (
            <VictoryBar
                data={this.getLineData()}>
            </VictoryBar>
        );
    }

    render() {
        return (
            <ChartRoot>
                <VictoryChart
                    domainPadding={5}
                    width={this.baseProps.width}
                    height={this.baseProps.height}
                    minDomain={{ y: 10 }}>
                    {this.getChart()}
                </VictoryChart>
            </ChartRoot>
        )
    }
}

export default Chart;
