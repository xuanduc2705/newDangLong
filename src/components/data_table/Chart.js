import { formatNumber } from '@/utils'
import { Chart } from 'primereact/chart'
import { useEffect, useState } from 'react'

// Tổng hợp doanh thu
export const GirdChart = (prop) => {
    const {
        label,
        dataChart,
        color,
        title,
        chartType,
        yAxisText,
        labelChart,
        pCard,
        keyData,
        maxYAxis,
        stepSize,
        aspectRatio,
    } = prop

    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement)
        const data = {
            labels: dataChart.map((d) => d[labelChart]),
            datasets: label.map((l, i) => ({
                label: l,
                backgroundColor: color[i],
                borderColor: documentStyle.getPropertyValue(`--${color[i]}-500`),
                data: dataChart.map((d) => d[keyData[i]]),
            })),
        }
        const options = {
            maintainAspectRatio: false, // Ensure the chart takes up the entire container
            aspectRatio: aspectRatio,
            scales: {
                y: {
                    min: 0, // Set minimum value for y-axis
                    max: maxYAxis, // Set maximum value for y-axis
                    ticks: {
                        stepSize: stepSize, // Specify the step size
                    },
                    title: {
                        display: true,
                        text: yAxisText,
                    },
                },
            },
            plugins: {
                legend: {
                    position: 'top', // Position legend on the right side
                    align: 'end', // Align legend text to the start (left)
                    labels: {
                        // Add margin-bottom to legend labels
                        boxWidth: 50, // Adjust box width as needed
                        boxHeight: 10, // Adjust box height as needed
                    },
                },
            },
        }
        setChartData(data)
        setChartOptions(options)
    }, [JSON.stringify(dataChart)])

    return (
        <div className={`${pCard} px-4 pt-4 pb-5 h-full`}>
            <div className="font-semibold text-2xl text-black">{title}</div>
            <div className="chart-container" style={{ width: '100%', height: '100%' }}>
                <Chart type={chartType} data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}

// Phải thu cuối kỳ

export const FinalReceive = (props) => {
    const { labels, data, color, title, className, aspectRatio, descriptions } = props
    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})
    const dataLine = data

    const labelLine = dataLine.map((d) => d.date)
    const lineData = dataLine.map((d) => d.sumery - d.paid)

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement)
        const data = {
            labels: labelLine,
            datasets: [
                {
                    data: lineData,
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0,
                    backgroundColor: createGradient('#5fa200'),
                },
            ],
        }
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 1.55,

            plugins: {
                legend: {
                    display: false,
                },
            },
        }
        setChartOptions(options)
        setChartData(data)
    }, [data])

    // Function to create gradient
    const createGradient = (color) => {
        const gradient = document.createElement('canvas').getContext('2d')
        gradient.canvas.width = 100
        gradient.canvas.height = 100
        const gradientFill = gradient.createLinearGradient(0, 0, 0, 170)
        gradientFill.addColorStop(0, '#205AA7')
        // gradientFill.addColorStop(0.5, '#205AA7');
        gradientFill.addColorStop(1, '#ffffff')
        return gradientFill
    }

    return (
        <div
            className="p-card p-3 flex justify-content-between flex-wrap p-border-rounded"
            style={{ height: '100%', marginBottom: '13px' }}
        >
            <div className="flex-column flex-wrap pl-2 pt-2 col-4">
                <div className="mb-4">
                    <h5>{title}</h5>
                </div>
            </div>
            <div className="chart-container col-8" style={{ height: '100%' }}>
                <Chart type="line" data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}

// Dòng tiền
export const RoundChartFlexRow = (prop) => {
    const { labels, data, color, title, type, keyChart, pCard, aspectRatio, descriptions } = prop
    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})
    const dataChart = Object.values(data)

    useEffect(() => {
        const data = {
            labels: labels,
            datasets: [
                {
                    data: dataChart.map((d) => d[keyChart]),
                    backgroundColor: color,
                },
            ],
        }
        const options = {
            maintainAspectRatio: false,
            aspectRatio: aspectRatio,
            plugins: {
                legend: {
                    display: false, // Hide legend to make space for the chart
                },
            },
        }

        setChartData(data)
        setChartOptions(options)
    }, [data])

    return (
        <div className={`${pCard} flex justify-content-between flex-wrap p-border-rounded p-3`}>
            <div className="flex-column flex-wrap pl-2 pt-2">
                <div className="mb-4">
                    <h5 className="">{title}</h5>
                </div>
                <div className="flex-column ">
                    {labels.map((label, index) => (
                        <div key={index} className="text-sm align-items-center mb-2">
                            <span
                                className="pi pi-circle-fill"
                                style={{ fontSize: '0.5rem', color: color[index], paddingRight: '7px' }}
                            ></span>
                            <span className="">{label}</span>
                            <p className="font-italic">{descriptions[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="align-items-center justify-content-center" style={{ width: '40%' }}>
                <Chart type={type} data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}

// Ý kiến kiến nghị
export const RoundChartFlexCol = (prop) => {
    const { labels, data, color, title, keyChart, pCard, aspectRatio, type } = prop

    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})

    const dataChart = Object.values(data)

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement)
        const data = {
            labels: labels,
            datasets: [
                {
                    data: dataChart.map((d) => d[keyChart]),
                    backgroundColor: color,
                },
            ],
        }

        const options = {
            maintainAspectRatio: false,
            aspectRatio: aspectRatio,
            plugins: {
                legend: {
                    display: false, // Hide legend to make space for the chart
                    labels: {
                        usePointStyle: true,
                    },
                },
            },
        }

        setChartData(data)
        setChartOptions(options)
    }, [data])

    return (
        <div className={`${pCard} justify-content-center align-items-center h-full p-3 w-full`}>
            <h5 className="pt-2 m-0 pl-2 mb-3">{title}</h5>
            <div className=" align-items-center justify-content-center mb-3" style={{ marginBottom: '6px' }}>
                <Chart type={type} data={chartData} className="className" options={chartOptions} />
            </div>
            <div className="flex justify-content-center gap-5">
                {labels.map((label, index) => (
                    <div key={index} className="text-sm flex-column align-content-center">
                        <span
                            className="pi pi-circle-fill"
                            style={{ fontSize: '0.5rem', color: color[index] || 'black' }}
                        ></span>
                        <span className=""> {label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

//
//
//
//
//

export const PieChart = (prop) => {
    const { labels, data, color, title, className, keyChart, aspectRatio } = prop

    const [chartData, setChartData] = useState({})

    const dataChart = Object.values(data)

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement)
        const data = {
            labels: labels,
            datasets: [
                {
                    data: dataChart.map((d) => d[keyChart]),
                    backgroundColor: color.map((c) => documentStyle.getPropertyValue(`--${c}-500`)),
                    hoverBackgroundColor: color.map((c) => documentStyle.getPropertyValue(`--${c}-400`)),
                },
            ],
        }
        setChartData(data)
    }, [data])

    return (
        <div className="flex flex-column align-items-center">
            <h5 className="text-left w-full">{title}</h5>
            <Chart type="pie" className={className} data={chartData} />
        </div>
    )
}

export const DoughnutChart = (prop) => {
    const { labels, data, color, title, className, keyChart } = prop

    const [chartData, setChartData] = useState({})
    const dataChart = Object.values(data)
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement)
        const data = {
            labels: labels,
            datasets: [
                {
                    data: dataChart.map((d) => d[keyChart]),
                    backgroundColor: color.map((c) => documentStyle.getPropertyValue(`--${c}-500`)),
                    hoverBackgroundColor: color.map((c) => documentStyle.getPropertyValue(`--${c}-400`)),
                },
            ],
        }
        setChartData(data)
    }, [data])

    return (
        <div className="flex flex-column align-items-center">
            <h5 className="text-left w-full">{title}</h5>
            <Chart type="doughnut" data={chartData} className={className} />
        </div>
    )
}

export const BarChart2 = (prop) => {
    const { data, color, labels, chartOptions, title } = prop

    const [chartData, setChartData] = useState({})
    const datasetData = data.datasets.map((dataset) => dataset.data)
    const datasetLabel = data.datasets.map((dataset) => dataset.data)
    const dataChart = Object.values(data)

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement)

        const data = {
            labels: labels,
            datasets: [
                {
                    label: datasetLabel.map((cd) => ({ cd })),
                    backgroundColor: color.map((c) => documentStyle.getPropertyValue(`--${c}-500`)),
                    borderColor: color.map((c) => documentStyle.getPropertyValue(`--${c}-400`)),
                    data: datasetData.map((cd) => ({ cd })),
                },
            ],
        }
        setChartData(data)
    }, [data])

    // Render your chart using the updated chartData

    return (
        <div className="flex flex-column align-items-center">
            <h5 className="text-left w-full">{title}</h5>
            <Chart type="bar" className="card" data={chartData} options={chartOptions} />
        </div>
    )
}
export const Revenue = ({ labels, data = [], revenue = {}, color, title, className, aspectRatio, descriptions }) => {
    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})
    const dataLine = data

    const labelLine = dataLine.map((d) => d.date)
    const lineData = dataLine.map((d) => d.revenue)
    const sum = lineData.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement)
        const data = {
            labels: labelLine,
            datasets: [
                {
                    data: lineData,
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0,
                    backgroundColor: createGradient('#5fa200'),
                },
            ],
        }
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,

            plugins: {
                legend: {
                    display: false,
                },
            },
        }
        setChartOptions(options)
        setChartData(data)
    }, [JSON.stringify(data)])

    const createGradient = (color) => {
        const gradient = document.createElement('canvas').getContext('2d')
        gradient.canvas.width = 100
        gradient.canvas.height = 100
        const gradientFill = gradient.createLinearGradient(0, 0, 0, 370)
        gradientFill.addColorStop(0, '#205AA7')
        gradientFill.addColorStop(1, '#ffffff')
        return gradientFill
    }

    return (
        <div
            className="p-card p-3 flex justify-content-between flex-wrap p-border-rounded"
            style={{ height: '100%', marginBottom: '13px' }}
        >
            <div className="w-full flex justify-content-around">
                <div className={'uppercase font-bold'}>
                    Tổng: {formatNumber(revenue.Motor + revenue.Car + revenue.ElectricMotor + revenue.Bicycle)} VNĐ
                </div>
                <div className={'uppercase font-bold'}>Xe máy: {formatNumber(revenue.Motor)} VNĐ</div>
                <div className={'uppercase font-bold'}>Ô tô: {formatNumber(revenue.Car)} VNĐ</div>
                <div className={'uppercase font-bold'}>Xe máy điện: {formatNumber(revenue.ElectricMotor)} VNĐ</div>
                <div className={'uppercase font-bold'}>Xe đạp: {formatNumber(revenue.Bicycle)} VNĐ</div>
            </div>
            <div className="chart-container col-12" style={{ height: '100%' }}>
                <Chart type="line" data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}
export const RevenueGirdChart = (prop) => {
    const {
        label,
        dataChart = [],
        color,
        title,
        chartType,
        yAxisText,
        labelChart,
        pCard,
        keyData,
        maxYAxis,
        stepSize,
        aspectRatio,
    } = prop

    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})
    const sum =
        dataChart &&
        dataChart.map((d) => d.revenue).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement)
        const data = {
            labels: dataChart.map((d) => d[labelChart]),
            datasets: label.map((l, i) => ({
                label: l,
                backgroundColor: color[i],
                borderColor: documentStyle.getPropertyValue(`--${color[i]}-500`),
                data: dataChart.map((d) => d[keyData[i]]),
            })),
        }
        const options = {
            maintainAspectRatio: false, // Ensure the chart takes up the entire container
            aspectRatio: aspectRatio,
            scales: {
                y: {
                    min: 0, // Set minimum value for y-axis
                    max: maxYAxis, // Set maximum value for y-axis
                    ticks: {
                        stepSize: stepSize, // Specify the step size
                    },
                    title: {
                        display: true,
                        text: yAxisText,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        }
        setChartData(data)
        setChartOptions(options)
    }, [JSON.stringify(dataChart)])
    return (
        <div className={`${pCard} px-4 pt-4 pb-5`} style={{ width: '100%', aspectRatio: '1.3' }}>
            <div className="chart-container" style={{ width: '100%', height: '100%' }}>
                <div className="flex flex-column" style={{ fontWeight: 'bold', fontSize: '2.5vh', display: 'flex' }}>
                    <p className="font-bold text-2xl text-black mb-4" style={{ margin: '0 auto' }}>
                        {title}
                    </p>
                    <div className="flex flex-row pb-3">
                        <span
                            className="px-3 justify-content-center align-item-center"
                            style={{ fontSize: '2vh', fontWeight: '600', color: 'grey' }}
                        >
                            TỔNG :
                        </span>
                        <span style={{ fontSize: '2vh', fontWeight: 'bold' }}> {sum.toLocaleString()} VNĐ</span>
                    </div>
                    <Chart type={chartType} data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    )
}
