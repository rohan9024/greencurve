import React from 'react';
import ReactDOM from 'react-dom';

class Graph2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
            options: {
                chart: {
                    height: 1350,
                    width: 1350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },
            isClient: false, // Flag to indicate whether the code is running on the client-side
        };
    }

    componentDidMount() {
        // Set isClient to true when component mounts on the client-side
        this.setState({ isClient: true });
    }

    renderChart() {
        // Only render the chart if the component is mounted on the client-side
        if (this.state.isClient) {
            const ReactApexChart = require('react-apexcharts').default; // Dynamic import
            return (
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={780} width={1450} />
            );
        } else {
            return null; // Render nothing on the server-side
        }
    }

    render() {
        return (
            <div>
                {this.renderChart()}
            </div>
        );
    }
}

export default Graph2;
