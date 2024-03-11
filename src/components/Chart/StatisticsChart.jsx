import React from 'react';
import css from './StatisticsChart.module.css';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const StatisticsChart = () => {

    const option = {
        xAxis:[
            {
                type:'category',
                boundaryGap: false,
                data:["Mon","Tue" , "Fri", "Sat", "Wed", "Thu", "Sun"]
            }
        ],
        yAxis: [
            {
                type:"value",
                splitline: {
                    show:false
                }
            }
        ],
        series:[
            {
                type:"line",
                smooth: true,
                data: [28000, 19000, 32000, 18000, 41000, 30000, 26000]
            }
        ]
    }

  return (
    <ReactECharts option={option} />
  )
}

export default StatisticsChart