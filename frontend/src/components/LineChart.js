import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const LineChartComponent = ({ chartData }) => {
    const data = {
        labels: chartData.labels,
        datasets: [
            {
                label: 'Values',
                data: chartData.data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light teal
                borderColor: 'rgba(75, 192, 192, 1)', // Teal border
                borderWidth: 2,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                ticks: {
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                    color: 'rgba(0, 0, 0, 0.8)',
                },
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                    color: 'rgba(0, 0, 0, 0.8)',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.dataset.label + ': ' + tooltipItem.formattedValue;
                    }
                }
            }
        },
    };

    return (
        <div style={{ height: '250px', width: '600px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChartComponent;
