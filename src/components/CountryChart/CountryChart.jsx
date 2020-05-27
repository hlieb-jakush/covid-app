import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js'
import './CountryChart.scss'

const CountryChart = ({ countryList, dateConverter }) => {

    useEffect(() => {
        new Chart(chartRef.current, {
            type: 'line',
            data: {
                labels: countryList.map(item => dateConverter(item.Date)),
                datasets: [{
                    label: 'Confirmed',
                    data: countryList.map(item => item.Confirmed),
                    borderColor: '#4D1ED3',
                    borderWidth: 3,
                    fill: false
                }, {
                    label: 'Recovered',
                    data: countryList.map(item => item.Recovered),
                    borderColor: '#72EBBA',
                    borderWidth: 3,
                    fill: false
                }, {
                    label: 'Deaths',
                    data: countryList.map(item => item.Deaths),
                    borderColor: '#FC1946',
                    borderWidth: 3,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                elements: {
                    point: {
                        pointStyle: 'circle',
                        radius: 0
                    }
                },
                legend: {
                    position: "bottom",
                    labels: {
                        padding: 40,
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }, [countryList])

    const chartRef = useRef(null)

    return (
        <section className='covid-app__section covid-app__chart'>
            <canvas ref={chartRef}></canvas>
        </section>
    )
}

export default CountryChart