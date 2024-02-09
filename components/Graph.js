import { Line, Pie } from 'react-chartjs-2';

import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, ArcElement } from 'chart.js';

import React, { useState } from 'react';
import { Manrope, Raleway } from 'next/font/google';

const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
});


ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);
ChartJS.register(ArcElement);

const formatter = (number) => (number > 999999 ? (number / 1000000).toFixed(1) + 'M' : number);

const buildData = ({ chartData }) => ({
    labels: chartData.labels,
    datasets: [
        {
            label: 'Nifty',
            data: chartData.data,
            backgroundColor: 'rgba(rgba(220, 38, 38, 1)',
            borderColor: 'rgba(220, 38, 38, 1)',
            pointBackgroundColor: 'rgba(220, 38, 38, 1)',
            fill: 'start',
            tension: 0.4,
        },
        {
            label: 'Green Curve',
            // data: chartData.data,
            data: [0,
                0,
                1000,
                2000,
                4000,
                4500,
                9000, 11000,
                20000, 110000],
            backgroundColor: 'rgba(22, 163, 74, 1)',
            borderColor: 'rgba(22, 163, 74, 1)',
            pointBackgroundColor: 'rgba(22, 163, 74, 1)',
            fill: 'start',
            tension: 0.4,
        },
    ],
});

const options = {
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        yAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                display: false,
                drawBorder: false,
            },
        },

        xAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                circular: true,
                borderColor: 'rgba(255, 255, 255, .2)',
                color: 'rgba(255, 255, 255, .2)',
                borderDash: [5, 5]
            },
        },
    },
    layout: {
        padding: {
            right: 10,
        },
    },
};

const dataPie = {
    labels: [
        'FD',
        'Invested with Green Curve Securities',
        'Weapons Detected'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const pieOptions = {
    plugins: {
        tooltip: {
            callbacks: {
                label: (context) => {
                    const label = dataPie.labels[context.dataIndex] || '';
                    const value = context.formattedValue || '';
                    return `${label}: ${value}`;
                },
            },
        },
    },
};


const Graph = ({ info }) => {

    const [indexOption, setIndexOption] = useState(false)
    const [PMS, setPMS] = useState(false)
    const [pivotPoint, setPivotPoint] = useState(false)
    const data = buildData(info);

    return (
        <>
            <div className="rounded w-full my-20  ">
                {/* <h1 className='text-4xl font-bold my-5'>Incidents Detected</h1> */}
                <div className='flex'>
                    <div className='flex flex-col  '>
                        {/* <div className="flex  xl:w-[900px] w-screen h-auto xl:h-[600px] px-5 pb-4 pt-8 bg-transparent text-white items-center "> */}
                        <div className='flex justify-center items-center space-x-10 w-screen'>
                            <div className="flex w-full h-[600px] bg-transparent text-white items-center ">
                                <Line type="line" data={data} className='w-full h-[500px]' />
                            </div>

                            <div className={`${manrope.className} w-1/3 space-y-10`}>
                                <h1 className='text-3xl w-72 text-center font-bold'>Select Option</h1>
                                <div className={`${indexOption ? 'bg-blue-500 ' : 'border border-gray-100 bg-gray-200'}  cursor-pointer text-2xl px-5 py-4 w-72 text-center rounded-xl  shadow-sm `} onClick={() => {
                                    setIndexOption(true)
                                    setPMS(false)
                                    setPivotPoint(false)
                                }}>
                                    <h1>Index Option</h1>
                                </div>
                                <div className={`${PMS ? 'bg-blue-500 ' : 'border border-gray-100 bg-gray-200'}  cursor-pointer text-2xl px-5 py-4 w-72 text-center rounded-xl  shadow-sm `} onClick={() => {
                                    setIndexOption(false)
                                    setPMS(true)
                                    setPivotPoint(false)
                                }}>                                    <h1>PMS</h1>
                                </div>
                                <div className={`${pivotPoint ? 'bg-blue-500 ' : 'border border-gray-100 bg-gray-200'}  cursor-pointer text-2xl px-5 py-4 w-72 text-center rounded-xl  shadow-sm `} onClick={() => {
                                    setIndexOption(false)
                                    setPMS(false)
                                    setPivotPoint(true)
                                }}>                                    <h1>Pivot Point</h1>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center items-center space-x-5 mx-10 my-10 w-1/2'>
                            <div className='flex justify-start items-center space-x-5'>
                                <div className='bg-green-500 w-5 h-5' />
                                <h1 className='xl:text-xl  text-md w-auto'>Green Curve</h1>
                            </div>
                            <div className='flex justify-start items-center space-x-5'>
                                <div className='bg-red-500 w-5 h-5' />
                                <h1 className='xl:text-xl  text-md w-auto'>Nifty</h1>
                            </div>
                        </div>
                    </div>

                    {/* <div className='flex flex-col mx-20 justify-center items-center'>
                        <div className="flex flex-col w-auto h-auto px-5 pb-4 pt-8  text-white items-center ">
                            <Pie type="pie" data={dataPie} options={pieOptions} />
                        </div>
                        <div className='flex flex-col justify-start px-5'>
                            <div className='flex justify-start items-center space-x-5'>
                                <div className='bg-[#FF4069] w-5 h-5' />
                                <h1 className='text-xl w-auto'>Theft</h1>
                            </div>
                            <div className='flex justify-start items-center space-x-5'>
                                <div className='bg-[#059BFF] w-5 h-5' />
                                <h1 className='text-xl w-auto'>Suspicious Activity</h1>
                            </div>
                            <div className='flex justify-start items-center space-x-5'>
                                <div className='bg-[#FFC234] w-5 h-5' />
                                <h1 className='text-xl w-auto'>Weapons Detected</h1>
                            </div>
                        </div>

                    </div> */}

                </div>


            </div>

        </>
    );
};

export default Graph;